import { useState, useRef, useEffect } from 'react'
import { FaSave, FaEraser, FaUndo, FaPlay } from 'react-icons/fa'
import '../styles/StrokeRecorder.css'

function StrokeRecorder({ character, onSave }) {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentStroke, setCurrentStroke] = useState([])
  const [allStrokes, setAllStrokes] = useState([])
  const [previewMode, setPreviewMode] = useState(false)
  const [previewStrokeIndex, setPreviewStrokeIndex] = useState(0)
  const [simplifyTolerance, setSimplifyTolerance] = useState(3)
  
  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = 200
    canvas.height = 200
    
    clearCanvas()
  }, [])
  
  // Reset when character changes
  useEffect(() => {
    clearCanvas()
    setAllStrokes([])
  }, [character])
  
  // Preview animation
  useEffect(() => {
    if (!previewMode) return
    
    if (previewStrokeIndex < allStrokes.length) {
      const timer = setTimeout(() => {
        drawStroke(allStrokes[previewStrokeIndex])
        setPreviewStrokeIndex(prev => prev + 1)
      }, 500)
      
      return () => clearTimeout(timer)
    } else {
      setPreviewMode(false)
      setPreviewStrokeIndex(0)
    }
  }, [previewMode, previewStrokeIndex, allStrokes])
  
  // Clear canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawGrid(ctx, canvas.width, canvas.height)
  }
  
  // Draw grid lines
  const drawGrid = (ctx, width, height) => {
    ctx.strokeStyle = '#e5e7eb'
    ctx.lineWidth = 1
    
    // Draw border
    ctx.strokeRect(0, 0, width, height)
    
    // Draw center lines
    ctx.beginPath()
    ctx.moveTo(width / 2, 0)
    ctx.lineTo(width / 2, height)
    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.stroke()
    
    // Draw diagonal lines
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(width, height)
    ctx.moveTo(width, 0)
    ctx.lineTo(0, height)
    ctx.stroke()
    ctx.setLineDash([])
  }
  
  // Start drawing
  const startDrawing = (e) => {
    if (previewMode) return
    
    setIsDrawing(true)
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setCurrentStroke([{ x, y }])
  }
  
  // Draw
  const draw = (e) => {
    if (!isDrawing || previewMode) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    ctx.beginPath()
    ctx.moveTo(currentStroke[currentStroke.length - 1].x, currentStroke[currentStroke.length - 1].y)
    ctx.lineTo(x, y)
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 4
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
    
    setCurrentStroke(prev => [...prev, { x, y }])
  }
  
  // Stop drawing
  const stopDrawing = () => {
    if (!isDrawing || previewMode) return
    
    setIsDrawing(false)
    if (currentStroke.length > 1) {
      setAllStrokes(prev => [...prev, currentStroke])
      setCurrentStroke([])
    }
  }
  
  // Draw a single stroke
  const drawStroke = (stroke) => {
    if (stroke.length < 2) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    ctx.beginPath()
    ctx.moveTo(stroke[0].x, stroke[0].y)
    
    for (let i = 1; i < stroke.length; i++) {
      ctx.lineTo(stroke[i].x, stroke[i].y)
    }
    
    ctx.strokeStyle = '#dc2626'
    ctx.lineWidth = 4
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
  }
  
  // Redraw all strokes
  const redrawAllStrokes = () => {
    clearCanvas()
    allStrokes.forEach(stroke => drawStroke(stroke))
  }
  
  // Undo last stroke
  const undoLastStroke = () => {
    if (allStrokes.length === 0) return
    
    setAllStrokes(prev => prev.slice(0, -1))
    redrawAllStrokes()
  }
  
  // Preview animation
  const previewAnimation = () => {
    if (allStrokes.length === 0) return
    
    clearCanvas()
    
    // Draw simplified strokes in a different color to show the difference
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // First draw the original strokes in a light color
    allStrokes.forEach(stroke => {
      if (stroke.length < 2) return
      
      ctx.beginPath()
      ctx.moveTo(stroke[0].x, stroke[0].y)
      
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y)
      }
      
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.3)' // Light red
      ctx.lineWidth = 4
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.stroke()
    })
    
    // Then draw the simplified strokes on top
    allStrokes.forEach(stroke => {
      const simplifiedStroke = simplifyStroke(stroke, simplifyTolerance)
      if (simplifiedStroke.length < 2) return
      
      ctx.beginPath()
      ctx.moveTo(simplifiedStroke[0].x, simplifiedStroke[0].y)
      
      for (let i = 1; i < simplifiedStroke.length; i++) {
        ctx.lineTo(simplifiedStroke[i].x, simplifiedStroke[i].y)
      }
      
      ctx.strokeStyle = '#dc2626' // Solid red
      ctx.lineWidth = 2
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.stroke()
      
      // Draw points at each vertex of the simplified stroke
      simplifiedStroke.forEach(point => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = '#000'
        ctx.fill()
      })
    })
    
    // Start the animation after a short delay
    setTimeout(() => {
      clearCanvas()
      setPreviewMode(true)
      setPreviewStrokeIndex(0)
    }, 1500)
  }
  
  // Convert strokes to SVG paths
  const convertToSvgPaths = () => {
    return allStrokes.map(stroke => {
      if (stroke.length < 2) return null
      
      // Simplify the stroke to reduce the number of points
      const simplifiedStroke = simplifyStroke(stroke, simplifyTolerance);
      
      // Create SVG path starting with the first point
      let path = `M${simplifiedStroke[0].x},${simplifiedStroke[0].y}`
      
      // Add all intermediate points as line segments
      for (let i = 1; i < simplifiedStroke.length; i++) {
        path += ` L${simplifiedStroke[i].x},${simplifiedStroke[i].y}`
      }
      
      // Calculate duration based on stroke length (longer strokes take more time)
      const strokeLength = calculateStrokeLength(simplifiedStroke);
      const duration = Math.max(0.3, Math.min(0.8, strokeLength / 200));
      
      return {
        path,
        duration: parseFloat(duration.toFixed(2)) // Round to 2 decimal places
      }
    }).filter(Boolean)
  }
  
  // Calculate the length of a stroke
  const calculateStrokeLength = (stroke) => {
    let length = 0;
    for (let i = 1; i < stroke.length; i++) {
      const dx = stroke[i].x - stroke[i-1].x;
      const dy = stroke[i].y - stroke[i-1].y;
      length += Math.sqrt(dx*dx + dy*dy);
    }
    return length;
  }
  
  // Simplify a stroke by removing redundant points
  const simplifyStroke = (stroke, tolerance = 2) => {
    if (stroke.length <= 2) return stroke;
    
    const result = [stroke[0]];
    let lastPoint = stroke[0];
    
    for (let i = 1; i < stroke.length - 1; i++) {
      const point = stroke[i];
      const nextPoint = stroke[i + 1];
      
      // Calculate distances
      const d1 = Math.sqrt(
        Math.pow(point.x - lastPoint.x, 2) + 
        Math.pow(point.y - lastPoint.y, 2)
      );
      
      const d2 = Math.sqrt(
        Math.pow(nextPoint.x - point.x, 2) + 
        Math.pow(nextPoint.y - point.y, 2)
      );
      
      // If the point is far enough from the last point we kept
      // and the next point is also far enough, keep this point
      if (d1 > tolerance && d2 > tolerance) {
        result.push(point);
        lastPoint = point;
      }
    }
    
    // Always add the last point
    result.push(stroke[stroke.length - 1]);
    
    return result;
  }
  
  // Save strokes
  const saveStrokes = () => {
    if (allStrokes.length === 0 || !character) return
    
    const svgPaths = convertToSvgPaths()
    
    if (svgPaths.length > 0) {
      // Show a preview of the SVG paths
      console.log("Generated SVG paths:", svgPaths);
      
      // Pass the strokes to the parent component
      onSave(character.simplified, svgPaths)
    }
  }
  
  // Touch events for mobile
  const handleTouchStart = (e) => {
    e.preventDefault()
    const touch = e.touches[0]
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY
    })
    startDrawing(mouseEvent)
  }
  
  const handleTouchMove = (e) => {
    e.preventDefault()
    const touch = e.touches[0]
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    })
    draw(mouseEvent)
  }
  
  const handleTouchEnd = () => {
    stopDrawing()
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Grabador de Trazos: {character?.simplified || ''}
      </h3>
      
      <div className="mb-4 flex justify-center">
        <canvas
          ref={canvasRef}
          className="border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-crosshair bg-white"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          onClick={clearCanvas}
          disabled={previewMode}
          className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
        >
          <FaEraser />
          Limpiar
        </button>
        
        <button
          onClick={undoLastStroke}
          disabled={allStrokes.length === 0 || previewMode}
          className="flex items-center justify-center gap-2 py-2 px-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50"
        >
          <FaUndo />
          Deshacer
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={previewAnimation}
          disabled={allStrokes.length === 0 || previewMode}
          className="flex items-center justify-center gap-2 py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          <FaPlay />
          Previsualizar
        </button>
        
        <button
          onClick={saveStrokes}
          disabled={allStrokes.length === 0 || previewMode}
          className="flex items-center justify-center gap-2 py-2 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          <FaSave />
          Guardar
        </button>
      </div>
      
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Trazos: {allStrokes.length}</p>
        {previewMode && (
          <p>Previsualizando trazo {previewStrokeIndex + 1} de {allStrokes.length}</p>
        )}
        
        <div className="mt-2">
          <label className="block mb-1">Simplificación de trazos:</label>
          <div className="flex items-center">
            <input
              type="range"
              min="1"
              max="10"
              value={simplifyTolerance}
              onChange={(e) => setSimplifyTolerance(parseInt(e.target.value))}
              className="w-full mr-2"
            />
            <span>{simplifyTolerance}</span>
          </div>
          <p className="text-xs mt-1">
            {simplifyTolerance < 3 ? 'Más detalle, más puntos' : 
             simplifyTolerance > 7 ? 'Menos detalle, menos puntos' : 
             'Balance entre detalle y simplicidad'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StrokeRecorder
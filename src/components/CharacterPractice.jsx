import { useState, useRef, useEffect } from 'react'

function CharacterPractice({ character, characters, onCharacterChange }) {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(() => {
    const index = characters.findIndex(c => c.id === character?.id)
    return index >= 0 ? index : 0
  })

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

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = 300
    canvas.height = 300
    
    clearCanvas()
  }, [])

  // Update character when index changes
  useEffect(() => {
    if (characters[currentIndex]) {
      onCharacterChange(characters[currentIndex])
      clearCanvas()
    }
  }, [currentIndex])

  // Handle drawing
  const startDrawing = (e) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    ctx.beginPath()
    ctx.moveTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    )
    ctx.lineWidth = 3
    ctx.strokeStyle = '#000'
    ctx.lineCap = 'round'
  }

  const draw = (e) => {
    if (!isDrawing) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    ctx.lineTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    )
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  // Navigate characters
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : characters.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < characters.length - 1 ? prev + 1 : 0))
  }

  if (!character) return null

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Character Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-semibold">
              HSK {character.level}
            </span>
          </div>
          
          <div className="mb-6">
            <div className="text-8xl chinese-character text-center mb-4 text-gray-900 dark:text-gray-100">
              {showHint ? character.simplified : '?'}
            </div>
            <button
              onClick={() => setShowHint(!showHint)}
              className="w-full py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              {showHint ? 'Hide Character' : 'Show Character'}
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Simplified:</span>
              <span className="ml-2 text-xl chinese-character text-gray-900 dark:text-gray-100">{character.simplified}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Traditional:</span>
              <span className="ml-2 text-xl chinese-character text-gray-900 dark:text-gray-100">{character.traditional}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Pinyin:</span>
              <span className="ml-2 text-lg text-gray-900 dark:text-gray-100">{character.pinyin}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">English:</span>
              <p className="mt-1 text-gray-800 dark:text-gray-200">{character.english}</p>
            </div>
          </div>
        </div>

        {/* Practice Canvas */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Practice Writing</h3>
          
          <div className="mb-4">
            <canvas
              ref={canvasRef}
              className="border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-crosshair mx-auto bg-white"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={(e) => {
                e.preventDefault()
                const touch = e.touches[0]
                const mouseEvent = new MouseEvent('mousedown', {
                  clientX: touch.clientX,
                  clientY: touch.clientY
                })
                canvasRef.current.dispatchEvent(mouseEvent)
              }}
              onTouchMove={(e) => {
                e.preventDefault()
                const touch = e.touches[0]
                const mouseEvent = new MouseEvent('mousemove', {
                  clientX: touch.clientX,
                  clientY: touch.clientY
                })
                canvasRef.current.dispatchEvent(mouseEvent)
              }}
              onTouchEnd={stopDrawing}
            />
          </div>

          <button
            onClick={clearCanvas}
            className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Clear Canvas
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={goToPrevious}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          ← Previous
        </button>
        
        <div className="text-center">
          <span className="text-gray-600 dark:text-gray-400">
            Character {currentIndex + 1} of {characters.length}
          </span>
        </div>
        
        <button
          onClick={goToNext}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default CharacterPractice

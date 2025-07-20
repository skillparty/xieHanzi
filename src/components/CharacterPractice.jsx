import { useState, useRef, useEffect } from 'react'
import { FaPlay, FaStop, FaVolumeUp, FaInfo, FaEraser, FaLightbulb, FaEye, FaEyeSlash } from 'react-icons/fa'
import StrokeAnimation from './StrokeAnimation'
import CharacterDetails from './CharacterDetails'
import useSpeech from '../hooks/useSpeech'

function CharacterPractice({ character, characters, onCharacterChange, markCharacterPracticed, getCharacterProgress }) {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
  const [strokePath, setStrokePath] = useState([])
  const [allStrokes, setAllStrokes] = useState([])
  const { speakChinese, isSpeaking } = useSpeech()
  
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
    setAllStrokes([])
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
      setShowHint(false)
      setShowDetails(false)
    }
  }, [currentIndex])

  // Handle drawing
  const startDrawing = (e) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineWidth = 4
    ctx.strokeStyle = '#dc2626'
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    
    setStrokePath([{ x, y }])
  }

  const draw = (e) => {
    if (!isDrawing) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    ctx.lineTo(x, y)
    ctx.stroke()
    
    setStrokePath(prev => [...prev, { x, y }])
  }

  const stopDrawing = () => {
    if (isDrawing && strokePath.length > 0) {
      setAllStrokes(prev => [...prev, strokePath])
      setStrokePath([])
    }
    setIsDrawing(false)
  }

  // Touch events for mobile
  const handleTouchStart = (e) => {
    e.preventDefault()
    const touch = e.touches[0]
    const rect = canvasRef.current.getBoundingClientRect()
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

  // Mark character as practiced
  const handlePracticeComplete = () => {
    if (character) {
      markCharacterPracticed(character.id)
      // Auto-play pronunciation as feedback
      const charToSpeak = character.simplified || character.traditional
      speakChinese(character.pinyin, charToSpeak)
    }
  }

  // Navigate characters
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : characters.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < characters.length - 1 ? prev + 1 : 0))
  }

  // Animation controls
  const startAnimation = () => {
    setIsAnimationPlaying(true)
  }

  const stopAnimation = () => {
    setIsAnimationPlaying(false)
  }

  const handleAnimationComplete = () => {
    setIsAnimationPlaying(false)
  }

  // Pronunciation
  const playPronunciation = () => {
    if (character) {
      const charToSpeak = character.simplified || character.traditional
      speakChinese(character.pinyin, charToSpeak)
    }
  }

  if (!character) return null

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Practice Area */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Character Info & Controls */}
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
            
            {/* Control Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center justify-center gap-2 py-2 px-3 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                {showHint ? <FaEyeSlash /> : <FaEye />}
                {showHint ? 'Ocultar' : 'Mostrar'}
              </button>
              
              <button
                onClick={playPronunciation}
                disabled={isSpeaking}
                className="flex items-center justify-center gap-2 py-2 px-3 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors disabled:opacity-50"
              >
                <FaVolumeUp />
                Pronunciar
              </button>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Simplificado:</span>
              <span className="ml-2 text-xl chinese-character text-gray-900 dark:text-gray-100">{character.simplified}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Tradicional:</span>
              <span className="ml-2 text-xl chinese-character text-gray-900 dark:text-gray-100">{character.traditional}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Pinyin:</span>
              <span className="ml-2 text-lg text-blue-600 dark:text-blue-400 font-semibold">{character.pinyin}</span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Significado:</span>
              <p className="mt-1 text-gray-800 dark:text-gray-200">{character.english}</p>
            </div>
          </div>

          {/* Progress Info */}
          {(() => {
            const progress = getCharacterProgress(character.id)
            return (
              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <div>Veces practicado: <span className="font-semibold">{progress.timesPracticed}</span></div>
                  <div>Dominio: <span className="font-semibold">{progress.mastery}%</span></div>
                  {progress.lastPracticed && (
                    <div>Última práctica: <span className="font-semibold">
                      {new Date(progress.lastPracticed).toLocaleDateString()}
                    </span></div>
                  )}
                </div>
              </div>
            )
          })()}
        </div>

        {/* Stroke Animation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Orden de Trazos
          </h3>
          
          <div className="flex justify-center mb-4">
            <StrokeAnimation 
              character={character}
              isPlaying={isAnimationPlaying}
              onComplete={handleAnimationComplete}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={startAnimation}
              disabled={isAnimationPlaying}
              className="flex items-center justify-center gap-2 py-2 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              <FaPlay />
              Reproducir
            </button>
            
            <button
              onClick={stopAnimation}
              disabled={!isAnimationPlaying}
              className="flex items-center justify-center gap-2 py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              <FaStop />
              Detener
            </button>
          </div>
        </div>

        {/* Practice Canvas */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Práctica de Escritura
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
              onTouchEnd={stopDrawing}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={clearCanvas}
              className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <FaEraser />
              Limpiar
            </button>
            
            <button
              onClick={handlePracticeComplete}
              className="flex items-center justify-center gap-2 py-2 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              ✓ Practicado
            </button>
          </div>
        </div>
      </div>

      {/* Character Details Toggle */}
      <div className="mb-6">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <FaInfo />
          {showDetails ? 'Ocultar Detalles' : 'Mostrar Detalles del Carácter'}
        </button>
      </div>

      {/* Character Details */}
      {showDetails && (
        <div className="mb-8">
          <CharacterDetails 
            character={character}
            onPlayPronunciation={speakChinese}
          />
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <button
          onClick={goToPrevious}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          ← Anterior
        </button>
        
        <div className="text-center">
          <span className="text-gray-600 dark:text-gray-400">
            Carácter {currentIndex + 1} de {characters.length}
          </span>
          <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
            {character.simplified} - {character.pinyin}
          </div>
        </div>
        
        <button
          onClick={goToNext}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Siguiente →
        </button>
      </div>
    </div>
  )
}

export default CharacterPractice
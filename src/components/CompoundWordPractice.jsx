import React, { useState, useRef, useEffect } from 'react'
import { FaVolumeUp, FaEye, FaEyeSlash, FaEraser, FaLightbulb, FaArrowRight } from 'react-icons/fa'
import useSpeech from '../hooks/useSpeech'

function CompoundWordPractice({ word, words, onWordChange, markWordPracticed, getWordProgress }) {
  const canvasRefs = useRef([])
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0)
  const [showHints, setShowHints] = useState([])
  const [completedCharacters, setCompletedCharacters] = useState([])
  const { speakChinese, isSpeaking } = useSpeech()
  
  const [currentWordIndex, setCurrentWordIndex] = useState(() => {
    const index = words.findIndex(w => w.id === word?.id)
    return index >= 0 ? index : 0
  })

  // Initialize canvas refs
  useEffect(() => {
    if (word) {
      canvasRefs.current = canvasRefs.current.slice(0, word.characters.length)
      for (let i = 0; i < word.characters.length; i++) {
        if (!canvasRefs.current[i]) {
          canvasRefs.current[i] = React.createRef()
        }
      }
      setShowHints(new Array(word.characters.length).fill(false))
      setCompletedCharacters(new Array(word.characters.length).fill(false))
      setCurrentCharacterIndex(0)
    }
  }, [word])

  // Clear specific canvas
  const clearCanvas = (index) => {
    const canvas = canvasRefs.current[index]?.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawGrid(ctx, canvas.width, canvas.height)
    
    // Update completed status
    const newCompleted = [...completedCharacters]
    newCompleted[index] = false
    setCompletedCharacters(newCompleted)
  }

  // Clear all canvases
  const clearAllCanvases = () => {
    for (let i = 0; i < word.characters.length; i++) {
      clearCanvas(i)
    }
    setCurrentCharacterIndex(0)
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

  // Initialize canvases
  useEffect(() => {
    if (word) {
      word.characters.forEach((_, index) => {
        const canvas = canvasRefs.current[index]?.current
        if (canvas) {
          const ctx = canvas.getContext('2d')
          canvas.width = 200
          canvas.height = 200
          clearCanvas(index)
        }
      })
    }
  }, [word])

  // Update word when index changes
  useEffect(() => {
    if (words[currentWordIndex]) {
      onWordChange(words[currentWordIndex])
    }
  }, [currentWordIndex])

  // Handle drawing
  const startDrawing = (e, canvasIndex) => {
    if (canvasIndex !== currentCharacterIndex) {
      setCurrentCharacterIndex(canvasIndex)
    }
    
    setIsDrawing(true)
    const canvas = canvasRefs.current[canvasIndex]?.current
    if (!canvas) return
    
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
  }

  const draw = (e, canvasIndex) => {
    if (!isDrawing || canvasIndex !== currentCharacterIndex) return
    
    const canvas = canvasRefs.current[canvasIndex]?.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  // Mark character as completed
  const markCharacterCompleted = (index) => {
    const newCompleted = [...completedCharacters]
    newCompleted[index] = true
    setCompletedCharacters(newCompleted)
    
    // Move to next character if not the last one
    if (index < word.characters.length - 1) {
      setCurrentCharacterIndex(index + 1)
    }
    
    // Check if all characters are completed
    if (newCompleted.every(completed => completed)) {
      markWordPracticed(word.id)
      // Play pronunciation of the complete word
      speakChinese(word.pinyin, word.word)
    }
  }

  // Toggle hint for specific character
  const toggleHint = (index) => {
    const newHints = [...showHints]
    newHints[index] = !newHints[index]
    setShowHints(newHints)
  }

  // Play pronunciation
  const playWordPronunciation = () => {
    if (word) {
      speakChinese(word.pinyin, word.word)
    }
  }

  const playCharacterPronunciation = (character) => {
    speakChinese(character.pinyin, character.character)
  }

  // Navigation
  const goToPrevious = () => {
    setCurrentWordIndex((prev) => (prev > 0 ? prev - 1 : words.length - 1))
  }

  const goToNext = () => {
    setCurrentWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : 0))
  }

  if (!word) return null

  const allCompleted = completedCharacters.every(completed => completed)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Word Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="text-center mb-6">
          <div className="text-6xl chinese-character mb-4 text-gray-900 dark:text-gray-100">
            {word.word}
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-2xl text-blue-600 font-semibold">
              {word.pinyin}
            </div>
            <button
              onClick={playWordPronunciation}
              disabled={isSpeaking}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
              title="Reproducir pronunciación completa"
            >
              <FaVolumeUp />
            </button>
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {word.english}
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              HSK {word.level}
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              {word.category}
            </span>
          </div>
        </div>

        {/* Character Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {word.characters.map((char, index) => (
            <div 
              key={index}
              className={`bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-2 transition-colors ${
                currentCharacterIndex === index 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : completedCharacters[index]
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-600'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl chinese-character mb-2">
                  {char.character}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-lg text-blue-600 font-semibold">
                    {char.pinyin}
                  </div>
                  <button
                    onClick={() => playCharacterPronunciation(char)}
                    className="p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors"
                    title="Reproducir pronunciación del carácter"
                  >
                    <FaVolumeUp className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {char.meaning}
                </div>
                {completedCharacters[index] && (
                  <div className="mt-2 text-green-600 font-semibold">
                    ✓ Completado
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Area */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Práctica de Escritura - Escribe cada carácter
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {word.characters.map((char, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <span className={`text-lg font-semibold ${
                  currentCharacterIndex === index 
                    ? 'text-blue-600' 
                    : completedCharacters[index]
                    ? 'text-green-600'
                    : 'text-gray-600'
                }`}>
                  {index + 1}. {char.character} ({char.pinyin})
                </span>
              </div>
              
              <div className="mb-4">
                <div className="text-2xl chinese-character mb-2">
                  {showHints[index] ? char.character : '?'}
                </div>
                <button
                  onClick={() => toggleHint(index)}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {showHints[index] ? <FaEyeSlash /> : <FaEye />}
                  {showHints[index] ? ' Ocultar' : ' Mostrar'}
                </button>
              </div>

              <canvas
                ref={el => canvasRefs.current[index] = { current: el }}
                className={`border-2 rounded-lg cursor-crosshair bg-white mx-auto ${
                  currentCharacterIndex === index 
                    ? 'border-blue-500' 
                    : completedCharacters[index]
                    ? 'border-green-500'
                    : 'border-gray-300'
                }`}
                onMouseDown={(e) => startDrawing(e, index)}
                onMouseMove={(e) => draw(e, index)}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={(e) => {
                  e.preventDefault()
                  const touch = e.touches[0]
                  const rect = e.target.getBoundingClientRect()
                  const mouseEvent = new MouseEvent('mousedown', {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                  })
                  startDrawing(mouseEvent, index)
                }}
                onTouchMove={(e) => {
                  e.preventDefault()
                  const touch = e.touches[0]
                  const mouseEvent = new MouseEvent('mousemove', {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                  })
                  draw(mouseEvent, index)
                }}
                onTouchEnd={stopDrawing}
              />

              <div className="mt-3 space-y-2">
                <button
                  onClick={() => clearCanvas(index)}
                  className="w-full py-1 px-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaEraser className="inline mr-1" /> Limpiar
                </button>
                <button
                  onClick={() => markCharacterCompleted(index)}
                  disabled={completedCharacters[index]}
                  className={`w-full py-1 px-3 rounded text-sm transition-colors ${
                    completedCharacters[index]
                      ? 'bg-green-200 text-green-800 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {completedCharacters[index] ? '✓ Completado' : '✓ Marcar'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-6 text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Progreso: {completedCharacters.filter(c => c).length} / {word.characters.length} caracteres
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(completedCharacters.filter(c => c).length / word.characters.length) * 100}%` 
              }}
            ></div>
          </div>
          {allCompleted && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <div className="text-green-800 dark:text-green-400 font-semibold">
                🎉 ¡Palabra completada! Has escrito correctamente "{word.word}"
              </div>
            </div>
          )}
        </div>

        {/* Control buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={clearAllCanvases}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Limpiar Todo
          </button>
          <button
            onClick={playWordPronunciation}
            disabled={isSpeaking}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <FaVolumeUp className="inline mr-2" />
            Reproducir Palabra
          </button>
        </div>
      </div>

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
            Palabra {currentWordIndex + 1} de {words.length}
          </span>
          <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
            {word.word} - {word.pinyin}
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

export default CompoundWordPractice
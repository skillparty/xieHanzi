import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { strokeData } from '../data/strokeData'

function StrokeAnimation({ character, isPlaying, onComplete }) {
  const [currentStroke, setCurrentStroke] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentCharacter = character?.simplified || character?.traditional || ''
  const strokes = strokeData[currentCharacter] || []

  useEffect(() => {
    if (isPlaying && strokes.length > 0) {
      setIsAnimating(true)
      setCurrentStroke(0)
      animateStrokes()
    }
  }, [isPlaying, currentCharacter])

  const animateStrokes = async () => {
    try {
      for (let i = 0; i < strokes.length; i++) {
        setCurrentStroke(i)
        await new Promise(resolve => 
          setTimeout(resolve, (strokes[i].duration * 1000) + 500)
        )
      }
      setIsAnimating(false)
      onComplete?.()
    } catch (error) {
      console.error('Error in stroke animation:', error)
      setIsAnimating(false)
      onComplete?.()
    }
  }

  if (!strokes.length) {
    return (
      <div className="w-48 h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl font-bold text-gray-400 mb-2 chinese-character">
            {currentCharacter}
          </div>
          <p className="text-sm text-gray-500">
            Animación no disponible
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-48 h-48 border-2 border-gray-300 rounded-lg bg-white relative overflow-hidden">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="absolute inset-0"
      >
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#grid)" />
        
        {/* Center lines */}
        <line x1="100" y1="0" x2="100" y2="200" stroke="#d1d5db" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="#d1d5db" strokeWidth="1" strokeDasharray="5,5" />

        {/* Strokes */}
        {strokes.map((stroke, index) => (
          <motion.path
            key={index}
            d={stroke.path}
            stroke="#dc2626"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={
              isAnimating && index <= currentStroke
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0.3 }
            }
            transition={{
              duration: stroke.duration,
              ease: "easeInOut",
              delay: index === currentStroke ? 0 : 0
            }}
          />
        ))}
      </svg>

      {/* Stroke counter */}
      {isAnimating && (
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
          {currentStroke + 1}/{strokes.length}
        </div>
      )}
    </div>
  )
}

export default StrokeAnimation
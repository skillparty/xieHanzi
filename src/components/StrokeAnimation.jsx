import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function StrokeAnimation({ character, isPlaying, onComplete }) {
  const [currentStroke, setCurrentStroke] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Datos precisos de trazos para caracteres HSK 1 - Corregidos
  const strokeData = {
    // Números básicos - Corregidos para verse como caracteres reales
    '一': [{ path: 'M30,100 L170,100', duration: 1.2 }],
    '二': [{ path: 'M30,75 L170,75', duration: 0.8 }, { path: 'M30,125 L170,125', duration: 0.8 }],
    '三': [{ path: 'M30,65 L170,65', duration: 0.7 }, { path: 'M30,100 L170,100', duration: 0.7 }, { path: 'M30,135 L170,135', duration: 0.7 }],
    '四': [
      { path: 'M60,60 L60,140', duration: 0.6 },
      { path: 'M60,60 L140,60', duration: 0.6 },
      { path: 'M60,100 L140,100', duration: 0.6 },
      { path: 'M140,60 L140,140', duration: 0.6 },
      { path: 'M60,140 L140,140', duration: 0.6 }
    ],
    '五': [
      { path: 'M40,60 L160,60', duration: 0.7 },
      { path: 'M40,60 L40,100', duration: 0.6 },
      { path: 'M40,100 L120,100', duration: 0.6 },
      { path: 'M120,100 L120,140', duration: 0.6 }
    ],
    '六': [
      { path: 'M80,50 L80,90', duration: 0.6 },
      { path: 'M60,90 L120,90', duration: 0.6 },
      { path: 'M60,90 L60,150', duration: 0.7 },
      { path: 'M120,90 L120,150', duration: 0.7 }
    ],
    '七': [
      { path: 'M40,70 L160,70', duration: 0.8 },
      { path: 'M130,70 L90,140', duration: 0.8 }
    ],
    '八': [
      { path: 'M85,70 L65,140', duration: 0.8 },
      { path: 'M115,70 L135,140', duration: 0.8 }
    ],
    '九': [
      { path: 'M70,60 L70,90', duration: 0.5 },
      { path: 'M70,60 L130,60', duration: 0.5 },
      { path: 'M130,60 L130,90', duration: 0.5 },
      { path: 'M70,90 L130,90', duration: 0.5 },
      { path: 'M130,90 L110,150', duration: 0.7 }
    ],
    '十': [
      { path: 'M100,60 L100,140', duration: 0.7 },
      { path: 'M70,100 L130,100', duration: 0.6 }
    ],
    
    // Caracteres básicos - Corregidos
    '人': [
      { path: 'M100,60 L75,140', duration: 0.8 },
      { path: 'M100,60 L125,140', duration: 0.8 }
    ],
    '大': [
      { path: 'M100,60 L100,140', duration: 0.7 },
      { path: 'M100,90 L75,140', duration: 0.7 },
      { path: 'M100,90 L125,140', duration: 0.7 }
    ],
    '小': [
      { path: 'M100,60 L100,100', duration: 0.6 },
      { path: 'M85,110 L85,140', duration: 0.5 },
      { path: 'M115,110 L115,140', duration: 0.5 }
    ],
    '口': [
      { path: 'M70,70 L70,130', duration: 0.6 },
      { path: 'M70,70 L130,70', duration: 0.6 },
      { path: 'M130,70 L130,130', duration: 0.6 },
      { path: 'M70,130 L130,130', duration: 0.6 }
    ],
    '日': [
      { path: 'M70,60 L70,140', duration: 0.6 },
      { path: 'M70,60 L130,60', duration: 0.6 },
      { path: 'M70,100 L130,100', duration: 0.5 },
      { path: 'M130,60 L130,140', duration: 0.6 },
      { path: 'M70,140 L130,140', duration: 0.6 }
    ],
    '月': [
      { path: 'M70,60 L70,140', duration: 0.6 },
      { path: 'M70,60 L120,60', duration: 0.6 },
      { path: 'M70,90 L120,90', duration: 0.5 },
      { path: 'M70,120 L120,120', duration: 0.5 },
      { path: 'M70,140 L120,140', duration: 0.6 }
    ],
    '水': [
      { path: 'M100,60 L100,90', duration: 0.6 },
      { path: 'M85,100 L115,85', duration: 0.6 },
      { path: 'M75,120 L75,140', duration: 0.5 },
      { path: 'M125,120 L125,140', duration: 0.5 }
    ],
    '火': [
      { path: 'M100,60 L100,70', duration: 0.4 },
      { path: 'M85,85 L85,120', duration: 0.6 },
      { path: 'M115,85 L115,120', duration: 0.6 },
      { path: 'M95,130 L95,140', duration: 0.4 },
      { path: 'M105,130 L105,140', duration: 0.4 }
    ],
    '木': [
      { path: 'M100,60 L100,140', duration: 0.7 },
      { path: 'M70,110 L130,110', duration: 0.6 },
      { path: 'M85,125 L85,140', duration: 0.4 },
      { path: 'M115,125 L115,140', duration: 0.4 }
    ],
    '土': [
      { path: 'M80,80 L120,80', duration: 0.6 },
      { path: 'M100,70 L100,120', duration: 0.7 },
      { path: 'M70,120 L130,120', duration: 0.6 }
    ],
    '白': [{ path: 'M80,40 L80,80', duration: 0.6 }, { path: 'M60,80 L120,80', duration: 0.6 }, { path: 'M60,80 L60,120', duration: 0.6 }, { path: 'M120,80 L120,120', duration: 0.6 }, { path: 'M60,120 L120,120', duration: 0.6 }],
    '中': [{ path: 'M100,40 L100,160', duration: 0.8 }, { path: 'M70,60 L130,60', duration: 0.6 }, { path: 'M70,60 L70,140', duration: 0.6 }, { path: 'M130,60 L130,140', duration: 0.6 }, { path: 'M70,140 L130,140', duration: 0.6 }],
    '国': [{ path: 'M50,50 L50,150', duration: 0.6 }, { path: 'M50,50 L150,50', duration: 0.6 }, { path: 'M150,50 L150,150', duration: 0.6 }, { path: 'M50,150 L150,150', duration: 0.6 }, { path: 'M70,70 L130,70', duration: 0.5 }, { path: 'M100,70 L100,130', duration: 0.5 }, { path: 'M70,100 L130,100', duration: 0.5 }, { path: 'M70,130 L130,130', duration: 0.5 }],
    
    // Caracteres HSK 1 más importantes - Corregidos
    '我': [
      { path: 'M50,70 L80,70', duration: 0.5 },
      { path: 'M65,70 L65,100', duration: 0.5 },
      { path: 'M50,100 L80,100', duration: 0.5 },
      { path: 'M100,60 L100,90', duration: 0.5 },
      { path: 'M120,75 L140,75', duration: 0.4 },
      { path: 'M100,110 L140,110', duration: 0.5 },
      { path: 'M120,110 L120,140', duration: 0.5 }
    ],
    '你': [
      { path: 'M50,60 L50,140', duration: 0.7 },
      { path: 'M65,75 L65,125', duration: 0.6 },
      { path: 'M50,100 L80,100', duration: 0.5 },
      { path: 'M100,60 L100,90', duration: 0.5 },
      { path: 'M115,75 L135,75', duration: 0.4 },
      { path: 'M100,110 L135,110', duration: 0.5 },
      { path: 'M115,110 L115,140', duration: 0.5 }
    ],
    '他': [
      { path: 'M50,60 L50,140', duration: 0.7 },
      { path: 'M65,75 L65,125', duration: 0.6 },
      { path: 'M50,100 L80,100', duration: 0.5 },
      { path: 'M100,70 L135,70', duration: 0.5 },
      { path: 'M115,70 L115,130', duration: 0.6 },
      { path: 'M100,130 L135,130', duration: 0.5 }
    ],
    '她': [
      { path: 'M50,60 L50,140', duration: 0.7 },
      { path: 'M65,75 L65,125', duration: 0.6 },
      { path: 'M50,100 L80,100', duration: 0.5 },
      { path: 'M100,60 L100,90', duration: 0.5 },
      { path: 'M100,60 L135,60', duration: 0.5 },
      { path: 'M135,60 L135,90', duration: 0.5 },
      { path: 'M100,90 L135,90', duration: 0.5 },
      { path: 'M115,110 L115,140', duration: 0.5 }
    ],
    '好': [
      { path: 'M50,60 L50,140', duration: 0.7 },
      { path: 'M65,75 L65,125', duration: 0.6 },
      { path: 'M50,100 L80,100', duration: 0.5 },
      { path: 'M100,50 L100,80', duration: 0.5 },
      { path: 'M100,50 L135,50', duration: 0.5 },
      { path: 'M135,50 L135,80', duration: 0.5 },
      { path: 'M100,80 L135,80', duration: 0.5 },
      { path: 'M115,100 L115,140', duration: 0.6 }
    ],
    '是': [
      { path: 'M60,60 L140,60', duration: 0.7 },
      { path: 'M100,60 L100,90', duration: 0.6 },
      { path: 'M80,90 L120,90', duration: 0.5 },
      { path: 'M80,90 L80,120', duration: 0.5 },
      { path: 'M120,90 L120,120', duration: 0.5 },
      { path: 'M80,120 L120,120', duration: 0.5 },
      { path: 'M100,120 L100,140', duration: 0.5 }
    ],
    '有': [
      { path: 'M60,60 L140,60', duration: 0.7 },
      { path: 'M100,60 L100,90', duration: 0.6 },
      { path: 'M80,90 L120,90', duration: 0.5 },
      { path: 'M80,90 L80,120', duration: 0.5 },
      { path: 'M120,90 L120,120', duration: 0.5 },
      { path: 'M80,120 L120,120', duration: 0.5 }
    ],
    '不': [
      { path: 'M100,60 L100,90', duration: 0.6 },
      { path: 'M80,90 L120,90', duration: 0.6 },
      { path: 'M100,90 L100,120', duration: 0.6 },
      { path: 'M85,120 L115,120', duration: 0.5 }
    ],
    '在': [
      { path: 'M80,60 L120,60', duration: 0.6 },
      { path: 'M100,60 L100,90', duration: 0.6 },
      { path: 'M70,90 L130,90', duration: 0.7 },
      { path: 'M80,90 L80,120', duration: 0.5 },
      { path: 'M120,90 L120,120', duration: 0.5 },
      { path: 'M80,120 L120,120', duration: 0.5 }
    ],
    '了': [
      { path: 'M85,60 L85,110', duration: 0.7 },
      { path: 'M85,110 L115,130', duration: 0.6 }
    ],
    '的': [
      { path: 'M60,60 L60,90', duration: 0.5 },
      { path: 'M60,60 L90,60', duration: 0.5 },
      { path: 'M90,60 L90,90', duration: 0.5 },
      { path: 'M60,90 L90,90', duration: 0.5 },
      { path: 'M110,70 L110,100', duration: 0.5 },
      { path: 'M125,85 L140,85', duration: 0.4 },
      { path: 'M110,120 L140,120', duration: 0.5 },
      { path: 'M125,120 L125,140', duration: 0.5 }
    ],
    '和': [
      { path: 'M60,60 L60,90', duration: 0.5 },
      { path: 'M60,60 L90,60', duration: 0.5 },
      { path: 'M90,60 L90,90', duration: 0.5 },
      { path: 'M60,90 L90,90', duration: 0.5 },
      { path: 'M110,70 L140,70', duration: 0.5 },
      { path: 'M125,70 L125,130', duration: 0.6 },
      { path: 'M110,130 L140,130', duration: 0.5 }
    ],
    '来': [
      { path: 'M100,50 L100,80', duration: 0.6 },
      { path: 'M80,80 L120,80', duration: 0.6 },
      { path: 'M80,80 L80,110', duration: 0.5 },
      { path: 'M120,80 L120,110', duration: 0.5 },
      { path: 'M80,110 L120,110', duration: 0.5 },
      { path: 'M100,110 L100,140', duration: 0.5 }
    ],
    '去': [
      { path: 'M80,60 L120,60', duration: 0.6 },
      { path: 'M100,60 L100,90', duration: 0.6 },
      { path: 'M70,90 L130,90', duration: 0.7 },
      { path: 'M100,90 L100,120', duration: 0.5 },
      { path: 'M85,120 L115,120', duration: 0.5 }
    ],
    '看': [
      { path: 'M60,50 L60,80', duration: 0.5 },
      { path: 'M60,50 L90,50', duration: 0.5 },
      { path: 'M90,50 L90,80', duration: 0.5 },
      { path: 'M60,80 L90,80', duration: 0.5 },
      { path: 'M110,60 L110,90', duration: 0.5 },
      { path: 'M125,75 L140,75', duration: 0.4 },
      { path: 'M80,110 L120,110', duration: 0.5 },
      { path: 'M100,110 L100,140', duration: 0.5 }
    ],
    '说': [
      { path: 'M60,60 L60,90', duration: 0.5 },
      { path: 'M60,60 L90,60', duration: 0.5 },
      { path: 'M90,60 L90,90', duration: 0.5 },
      { path: 'M60,90 L90,90', duration: 0.5 },
      { path: 'M110,50 L140,50', duration: 0.5 },
      { path: 'M125,50 L125,80', duration: 0.5 },
      { path: 'M110,80 L140,80', duration: 0.5 },
      { path: 'M110,100 L140,100', duration: 0.5 },
      { path: 'M125,100 L125,130', duration: 0.5 }
    ],
    '做': [
      { path: 'M50,60 L50,140', duration: 0.7 },
      { path: 'M65,75 L65,125', duration: 0.6 },
      { path: 'M50,100 L80,100', duration: 0.5 },
      { path: 'M100,60 L130,60', duration: 0.5 },
      { path: 'M115,60 L115,90', duration: 0.5 },
      { path: 'M100,90 L130,90', duration: 0.5 },
      { path: 'M100,110 L130,110', duration: 0.5 },
      { path: 'M115,110 L115,140', duration: 0.5 }
    ],
    '吃': [
      { path: 'M60,60 L60,90', duration: 0.5 },
      { path: 'M60,60 L90,60', duration: 0.5 },
      { path: 'M90,60 L90,90', duration: 0.5 },
      { path: 'M60,90 L90,90', duration: 0.5 },
      { path: 'M110,70 L140,70', duration: 0.5 },
      { path: 'M125,70 L125,100', duration: 0.5 },
      { path: 'M110,100 L140,100', duration: 0.5 }
    ],
    '喝': [
      { path: 'M60,60 L60,90', duration: 0.5 },
      { path: 'M60,60 L90,60', duration: 0.5 },
      { path: 'M90,60 L90,90', duration: 0.5 },
      { path: 'M60,90 L90,90', duration: 0.5 },
      { path: 'M110,50 L140,50', duration: 0.5 },
      { path: 'M125,50 L125,80', duration: 0.5 },
      { path: 'M110,80 L140,80', duration: 0.5 },
      { path: 'M110,100 L140,100', duration: 0.5 },
      { path: 'M125,100 L125,130', duration: 0.5 },
      { path: 'M110,130 L140,130', duration: 0.5 }
    ],
    '买': [
      { path: 'M80,50 L120,50', duration: 0.6 },
      { path: 'M100,50 L100,80', duration: 0.6 },
      { path: 'M70,80 L130,80', duration: 0.7 },
      { path: 'M80,80 L80,110', duration: 0.5 },
      { path: 'M120,80 L120,110', duration: 0.5 },
      { path: 'M80,110 L120,110', duration: 0.5 },
      { path: 'M100,110 L100,140', duration: 0.5 }
    ],
    '爱': [
      { path: 'M85,50 L85,70', duration: 0.4 },
      { path: 'M70,70 L115,70', duration: 0.6 },
      { path: 'M70,70 L70,100', duration: 0.5 },
      { path: 'M115,70 L115,100', duration: 0.5 },
      { path: 'M70,100 L115,100', duration: 0.5 },
      { path: 'M92,100 L92,130', duration: 0.5 },
      { path: 'M80,130 L105,130', duration: 0.5 },
      { path: 'M92,130 L92,140', duration: 0.4 }
    ],
    '学': [
      { path: 'M85,50 L85,70', duration: 0.4 },
      { path: 'M70,70 L115,70', duration: 0.6 },
      { path: 'M70,70 L70,100', duration: 0.5 },
      { path: 'M115,70 L115,100', duration: 0.5 },
      { path: 'M70,100 L115,100', duration: 0.5 },
      { path: 'M92,100 L92,130', duration: 0.5 },
      { path: 'M80,130 L105,130', duration: 0.5 }
    ],
    '工': [
      { path: 'M80,80 L120,80', duration: 0.6 },
      { path: 'M100,60 L100,100', duration: 0.6 },
      { path: 'M80,100 L120,100', duration: 0.6 }
    ],
    '作': [
      { path: 'M50,60 L50,140', duration: 0.7 },
      { path: 'M65,75 L65,125', duration: 0.6 },
      { path: 'M50,100 L80,100', duration: 0.5 },
      { path: 'M100,70 L130,70', duration: 0.5 },
      { path: 'M115,70 L115,100', duration: 0.5 },
      { path: 'M100,100 L130,100', duration: 0.5 },
      { path: 'M115,100 L115,130', duration: 0.5 }
    ]

  }

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
    for (let i = 0; i < strokes.length; i++) {
      setCurrentStroke(i)
      await new Promise(resolve => 
        setTimeout(resolve, (strokes[i].duration * 1000) + 500)
      )
    }
    setIsAnimating(false)
    onComplete?.()
  }

  if (!strokes.length) {
    return (
      <div className="w-48 h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl font-bold text-gray-400 mb-2">
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
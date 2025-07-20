// Datos precisos de orden de trazos para todos los 150 caracteres HSK 1
// Basados en el orden de escritura tradicional chino correcto

export const strokeData = {
  // Números básicos
  '一': [
    { path: 'M40,100 L160,100', duration: 1.0 }
  ],
  '二': [
    { path: 'M40,80 L160,80', duration: 0.8 },
    { path: 'M40,120 L160,120', duration: 0.8 }
  ],
  '三': [
    { path: 'M40,70 L160,70', duration: 0.7 },
    { path: 'M40,100 L160,100', duration: 0.7 },
    { path: 'M40,130 L160,130', duration: 0.7 }
  ],
  '四': [
    { path: 'M70,60 L70,130', duration: 0.6 },
    { path: 'M70,60 L130,60', duration: 0.6 },
    { path: 'M70,95 L130,95', duration: 0.5 },
    { path: 'M130,60 L130,130', duration: 0.6 },
    { path: 'M70,130 L130,130', duration: 0.6 }
  ],
  '五': [
    { path: 'M50,65 L150,65', duration: 0.7 },
    { path: 'M50,65 L50,100', duration: 0.6 },
    { path: 'M50,100 L120,100', duration: 0.6 },
    { path: 'M120,100 L120,135', duration: 0.6 }
  ],
  '六': [
    { path: 'M90,50 L90,85', duration: 0.6 },
    { path: 'M70,85 L110,85', duration: 0.6 },
    { path: 'M70,85 L70,150', duration: 0.7 },
    { path: 'M110,85 L110,150', duration: 0.7 }
  ],
  '七': [
    { path: 'M50,70 L150,70', duration: 0.8 },
    { path: 'M120,70 L90,140', duration: 0.8 }
  ],
  '八': [
    { path: 'M90,70 L70,140', duration: 0.8 },
    { path: 'M110,70 L130,140', duration: 0.8 }
  ],
  '九': [
    { path: 'M80,60 L80,90', duration: 0.5 },
    { path: 'M80,60 L120,60', duration: 0.5 },
    { path: 'M120,60 L120,90', duration: 0.5 },
    { path: 'M80,90 L120,90', duration: 0.5 },
    { path: 'M120,90 L110,150', duration: 0.7 }
  ],
  '十': [
    { path: 'M100,60 L100,140', duration: 0.7 },
    { path: 'M70,100 L130,100', duration: 0.6 }
  ],

  // Caracteres básicos fundamentales
  '人': [
    { path: 'M100,60 L80,140', duration: 0.8 },
    { path: 'M100,60 L120,140', duration: 0.8 }
  ],
  '大': [
    { path: 'M100,60 L100,140', duration: 0.7 },
    { path: 'M100,90 L80,140', duration: 0.7 },
    { path: 'M100,90 L120,140', duration: 0.7 }
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
  ]
}  // Cara
cteres de pronombres y palabras básicas
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

  // Verbos básicos
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

  // Partículas y palabras funcionales
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

  // Verbos de movimiento
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
  '回': [
    { path: 'M60,60 L60,140', duration: 0.7 },
    { path: 'M60,60 L140,60', duration: 0.7 },
    { path: 'M140,60 L140,140', duration: 0.7 },
    { path: 'M60,140 L140,140', duration: 0.7 },
    { path: 'M100,60 L100,140', duration: 0.7 }
  ],
  '出': [
    { path: 'M80,60 L80,90', duration: 0.6 },
    { path: 'M120,60 L120,90', duration: 0.6 },
    { path: 'M60,90 L140,90', duration: 0.8 },
    { path: 'M80,90 L80,130', duration: 0.6 },
    { path: 'M120,90 L120,130', duration: 0.6 }
  ]  //
 Verbos de acción
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

  // Adjetivos básicos
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
  '很': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M115,75 L135,75', duration: 0.4 },
    { path: 'M100,110 L135,110', duration: 0.5 },
    { path: 'M115,110 L115,140', duration: 0.5 }
  ],
  '多': [
    { path: 'M70,60 L70,90', duration: 0.5 },
    { path: 'M130,60 L130,90', duration: 0.5 },
    { path: 'M70,90 L130,90', duration: 0.6 },
    { path: 'M100,90 L100,120', duration: 0.5 },
    { path: 'M85,120 L115,120', duration: 0.5 },
    { path: 'M100,120 L100,140', duration: 0.4 }
  ],
  '少': [
    { path: 'M90,50 L70,90', duration: 0.6 },
    { path: 'M110,50 L130,90', duration: 0.6 },
    { path: 'M60,90 L140,90', duration: 0.8 },
    { path: 'M100,90 L100,130', duration: 0.6 }
  ],

  // Elementos naturales
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
  ]  // Famil
ia y relaciones
  '爸': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M100,60 L135,60', duration: 0.5 },
    { path: 'M135,60 L135,90', duration: 0.5 },
    { path: 'M100,90 L135,90', duration: 0.5 },
    { path: 'M115,110 L115,140', duration: 0.5 }
  ],
  '妈': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M100,60 L135,60', duration: 0.5 },
    { path: 'M135,60 L135,90', duration: 0.5 },
    { path: 'M100,90 L135,90', duration: 0.5 },
    { path: 'M115,110 L115,140', duration: 0.5 }
  ],
  '朋': [
    { path: 'M50,60 L50,90', duration: 0.5 },
    { path: 'M50,60 L80,60', duration: 0.5 },
    { path: 'M80,60 L80,90', duration: 0.5 },
    { path: 'M50,90 L80,90', duration: 0.5 },
    { path: 'M120,60 L120,90', duration: 0.5 },
    { path: 'M120,60 L150,60', duration: 0.5 },
    { path: 'M150,60 L150,90', duration: 0.5 },
    { path: 'M120,90 L150,90', duration: 0.5 }
  ],
  '友': [
    { path: 'M80,60 L80,90', duration: 0.5 },
    { path: 'M120,60 L120,90', duration: 0.5 },
    { path: 'M80,90 L120,90', duration: 0.6 },
    { path: 'M100,90 L100,130', duration: 0.6 }
  ],

  // Tiempo
  '年': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 },
    { path: 'M120,90 L120,120', duration: 0.5 },
    { path: 'M80,120 L120,120', duration: 0.5 }
  ],
  '今': [
    { path: 'M85,50 L85,70', duration: 0.4 },
    { path: 'M70,70 L115,70', duration: 0.6 },
    { path: 'M92,70 L92,110', duration: 0.6 },
    { path: 'M80,110 L105,110', duration: 0.5 }
  ],
  '天': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M100,90 L100,130', duration: 0.6 }
  ],
  '时': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M100,60 L135,60', duration: 0.5 },
    { path: 'M135,60 L135,90', duration: 0.5 },
    { path: 'M100,90 L135,90', duration: 0.5 }
  ],
  '间': [
    { path: 'M60,60 L60,140', duration: 0.7 },
    { path: 'M60,60 L140,60', duration: 0.7 },
    { path: 'M140,60 L140,140', duration: 0.7 },
    { path: 'M60,140 L140,140', duration: 0.7 },
    { path: 'M100,60 L100,140', duration: 0.7 }
  ],
  '分': [
    { path: 'M90,60 L75,90', duration: 0.6 },
    { path: 'M110,60 L125,90', duration: 0.6 },
    { path: 'M65,90 L135,90', duration: 0.8 },
    { path: 'M100,90 L100,130', duration: 0.6 }
  ],

  // Direcciones
  '上': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '下': [
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M100,90 L100,130', duration: 0.6 }
  ],
  '前': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 },
    { path: 'M120,90 L120,120', duration: 0.5 },
    { path: 'M80,120 L120,120', duration: 0.5 }
  ],
  '后': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 },
    { path: 'M120,90 L120,120', duration: 0.5 },
    { path: 'M80,120 L120,120', duration: 0.5 }
  ],
  '左': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,70 L130,70', duration: 0.5 },
    { path: 'M115,70 L115,130', duration: 0.6 }
  ],
  '右': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M100,60 L135,60', duration: 0.5 },
    { path: 'M135,60 L135,90', duration: 0.5 },
    { path: 'M100,90 L135,90', duration: 0.5 }
  ],
  '里': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 },
    { path: 'M120,90 L120,120', duration: 0.5 },
    { path: 'M80,120 L120,120', duration: 0.5 }
  ],

  // Lugares
  '家': [
    { path: 'M80,50 L120,50', duration: 0.6 },
    { path: 'M100,50 L100,80', duration: 0.6 },
    { path: 'M70,80 L130,80', duration: 0.7 },
    { path: 'M80,80 L80,110', duration: 0.5 },
    { path: 'M120,80 L120,110', duration: 0.5 },
    { path: 'M80,110 L120,110', duration: 0.5 },
    { path: 'M100,110 L100,140', duration: 0.5 }
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
  '校': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M100,60 L135,60', duration: 0.5 },
    { path: 'M135,60 L135,90', duration: 0.5 },
    { path: 'M100,90 L135,90', duration: 0.5 },
    { path: 'M115,110 L115,140', duration: 0.5 }
  ]  // Pr
ofesiones y trabajo
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
  ],
  '老': [
    { path: 'M80,50 L120,50', duration: 0.6 },
    { path: 'M100,50 L100,80', duration: 0.6 },
    { path: 'M80,80 L120,80', duration: 0.6 },
    { path: 'M80,80 L80,110', duration: 0.5 },
    { path: 'M120,80 L120,110', duration: 0.5 },
    { path: 'M80,110 L120,110', duration: 0.5 }
  ],
  '师': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,70 L140,70', duration: 0.5 },
    { path: 'M125,70 L125,130', duration: 0.6 },
    { path: 'M110,130 L140,130', duration: 0.5 }
  ],
  '生': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M80,90 L120,90', duration: 0.6 },
    { path: 'M100,90 L100,120', duration: 0.6 },
    { path: 'M85,120 L115,120', duration: 0.5 }
  ],
  '医': [
    { path: 'M60,60 L60,140', duration: 0.7 },
    { path: 'M60,60 L140,60', duration: 0.7 },
    { path: 'M140,60 L140,140', duration: 0.7 },
    { path: 'M60,140 L140,140', duration: 0.7 },
    { path: 'M100,60 L100,140', duration: 0.7 }
  ],

  // Comida y bebida
  '茶': [
    { path: 'M85,50 L85,70', duration: 0.4 },
    { path: 'M70,70 L115,70', duration: 0.6 },
    { path: 'M70,70 L70,100', duration: 0.5 },
    { path: 'M115,70 L115,100', duration: 0.5 },
    { path: 'M70,100 L115,100', duration: 0.5 },
    { path: 'M92,100 L92,130', duration: 0.5 }
  ],
  '菜': [
    { path: 'M85,50 L85,70', duration: 0.4 },
    { path: 'M70,70 L115,70', duration: 0.6 },
    { path: 'M70,70 L70,100', duration: 0.5 },
    { path: 'M115,70 L115,100', duration: 0.5 },
    { path: 'M70,100 L115,100', duration: 0.5 },
    { path: 'M92,100 L92,130', duration: 0.5 },
    { path: 'M80,130 L105,130', duration: 0.5 }
  ],
  '饭': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,50 L140,50', duration: 0.5 },
    { path: 'M125,50 L125,80', duration: 0.5 }
  ],
  '米': [
    { path: 'M90,60 L75,90', duration: 0.6 },
    { path: 'M110,60 L125,90', duration: 0.6 },
    { path: 'M65,90 L135,90', duration: 0.8 },
    { path: 'M100,90 L100,130', duration: 0.6 }
  ],

  // Animales
  '狗': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M115,75 L135,75', duration: 0.4 }
  ],
  '猫': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M115,75 L135,75', duration: 0.4 }
  ],

  // Objetos y cosas
  '书': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 }
  ],
  '本': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,70 L130,70', duration: 0.5 },
    { path: 'M115,70 L115,130', duration: 0.6 },
    { path: 'M100,130 L130,130', duration: 0.5 }
  ],
  '车': [
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 },
    { path: 'M120,90 L120,120', duration: 0.5 }
  ],
  '电': [
    { path: 'M80,50 L120,50', duration: 0.6 },
    { path: 'M100,50 L100,80', duration: 0.6 },
    { path: 'M80,80 L120,80', duration: 0.6 },
    { path: 'M100,80 L100,110', duration: 0.6 },
    { path: 'M85,110 L115,110', duration: 0.5 }
  ],
  '话': [
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
  '脑': [
    { path: 'M60,50 L60,80', duration: 0.5 },
    { path: 'M60,50 L90,50', duration: 0.5 },
    { path: 'M90,50 L90,80', duration: 0.5 },
    { path: 'M60,80 L90,80', duration: 0.5 },
    { path: 'M110,60 L110,90', duration: 0.5 },
    { path: 'M125,75 L140,75', duration: 0.4 },
    { path: 'M110,110 L140,110', duration: 0.5 },
    { path: 'M125,110 L125,140', duration: 0.5 }
  ]  // M
ás caracteres importantes del HSK 1
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
  '北': [
    { path: 'M85,60 L85,90', duration: 0.6 },
    { path: 'M115,60 L115,90', duration: 0.6 },
    { path: 'M85,90 L115,90', duration: 0.5 },
    { path: 'M75,110 L75,140', duration: 0.6 },
    { path: 'M125,110 L125,140', duration: 0.6 }
  ],
  '杯': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,70 L130,70', duration: 0.5 },
    { path: 'M115,70 L115,130', duration: 0.6 },
    { path: 'M100,130 L130,130', duration: 0.5 }
  ],
  '白': [
    { path: 'M85,50 L85,80', duration: 0.6 },
    { path: 'M70,80 L115,80', duration: 0.6 },
    { path: 'M70,80 L70,110', duration: 0.6 },
    { path: 'M115,80 L115,110', duration: 0.6 },
    { path: 'M70,110 L115,110', duration: 0.6 }
  ],
  '中': [
    { path: 'M100,50 L100,140', duration: 0.8 },
    { path: 'M80,70 L120,70', duration: 0.6 },
    { path: 'M80,70 L80,130', duration: 0.6 },
    { path: 'M120,70 L120,130', duration: 0.6 },
    { path: 'M80,130 L120,130', duration: 0.6 }
  ],
  '国': [
    { path: 'M60,60 L60,140', duration: 0.7 },
    { path: 'M60,60 L140,60', duration: 0.7 },
    { path: 'M140,60 L140,140', duration: 0.7 },
    { path: 'M60,140 L140,140', duration: 0.7 },
    { path: 'M80,80 L120,80', duration: 0.5 },
    { path: 'M100,80 L100,120', duration: 0.5 },
    { path: 'M80,100 L120,100', duration: 0.5 },
    { path: 'M80,120 L120,120', duration: 0.5 }
  ],
  '汉': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,50 L140,50', duration: 0.5 },
    { path: 'M125,50 L125,80', duration: 0.5 }
  ],
  '语': [
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
  '什': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,70 L130,70', duration: 0.5 },
    { path: 'M115,70 L115,130', duration: 0.6 }
  ],
  '么': [
    { path: 'M80,60 L80,90', duration: 0.6 },
    { path: 'M120,60 L120,90', duration: 0.6 },
    { path: 'M80,90 L120,90', duration: 0.6 }
  ],
  '几': [
    { path: 'M85,60 L85,110', duration: 0.7 },
    { path: 'M85,110 L115,130', duration: 0.6 }
  ],
  '点': [
    { path: 'M85,50 L85,70', duration: 0.4 },
    { path: 'M70,70 L115,70', duration: 0.6 },
    { path: 'M70,70 L70,100', duration: 0.5 },
    { path: 'M115,70 L115,100', duration: 0.5 },
    { path: 'M70,100 L115,100', duration: 0.5 },
    { path: 'M92,120 L92,130', duration: 0.4 }
  ],
  '明': [
    { path: 'M70,60 L70,140', duration: 0.6 },
    { path: 'M70,60 L100,60', duration: 0.6 },
    { path: 'M70,100 L100,100', duration: 0.5 },
    { path: 'M100,60 L100,140', duration: 0.6 },
    { path: 'M70,140 L100,140', duration: 0.6 },
    { path: 'M120,60 L120,140', duration: 0.6 },
    { path: 'M120,60 L150,60', duration: 0.6 },
    { path: 'M120,90 L150,90', duration: 0.5 },
    { path: 'M120,120 L150,120', duration: 0.5 },
    { path: 'M120,140 L150,140', duration: 0.6 }
  ],
  '昨': [
    { path: 'M70,60 L70,140', duration: 0.6 },
    { path: 'M70,60 L100,60', duration: 0.6 },
    { path: 'M70,100 L100,100', duration: 0.5 },
    { path: 'M100,60 L100,140', duration: 0.6 },
    { path: 'M70,140 L100,140', duration: 0.6 },
    { path: 'M120,70 L150,70', duration: 0.5 },
    { path: 'M135,70 L135,130', duration: 0.6 }
  ],
  '星': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 }
  ],
  '期': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M100,60 L135,60', duration: 0.5 },
    { path: 'M135,60 L135,90', duration: 0.5 },
    { path: 'M100,90 L135,90', duration: 0.5 }
  ],
  '视': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,50 L140,50', duration: 0.5 },
    { path: 'M125,50 L125,80', duration: 0.5 },
    { path: 'M110,80 L140,80', duration: 0.5 }
  ],
  '喜': [
    { path: 'M85,50 L85,70', duration: 0.4 },
    { path: 'M70,70 L115,70', duration: 0.6 },
    { path: 'M70,70 L70,100', duration: 0.5 },
    { path: 'M115,70 L115,100', duration: 0.5 }
  ],
  '欢': [
    { path: 'M80,60 L80,90', duration: 0.6 },
    { path: 'M120,60 L120,90', duration: 0.6 },
    { path: 'M80,90 L120,90', duration: 0.6 },
    { path: 'M100,90 L100,130', duration: 0.6 }
  ],
  '会': [
    { path: 'M85,50 L85,70', duration: 0.4 },
    { path: 'M70,70 L115,70', duration: 0.6 },
    { path: 'M70,70 L70,100', duration: 0.5 },
    { path: 'M115,70 L115,100', duration: 0.5 },
    { path: 'M70,100 L115,100', duration: 0.5 }
  ],
  '能': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M115,75 L135,75', duration: 0.4 }
  ]
}  // Carac
teres adicionales para completar HSK 1
  '东': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 },
    { path: 'M120,90 L120,120', duration: 0.5 }
  ],
  '南': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 }
  ],
  '西': [
    { path: 'M60,60 L60,140', duration: 0.7 },
    { path: 'M60,60 L140,60', duration: 0.7 },
    { path: 'M140,60 L140,140', duration: 0.7 },
    { path: 'M60,140 L140,140', duration: 0.7 },
    { path: 'M80,80 L120,80', duration: 0.5 },
    { path: 'M100,80 L100,120', duration: 0.5 }
  ],
  '都': [
    { path: 'M80,60 L80,90', duration: 0.6 },
    { path: 'M120,60 L120,90', duration: 0.6 },
    { path: 'M80,90 L120,90', duration: 0.6 },
    { path: 'M100,90 L100,130', duration: 0.6 }
  ],
  '读': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,50 L140,50', duration: 0.5 },
    { path: 'M125,50 L125,80', duration: 0.5 },
    { path: 'M110,80 L140,80', duration: 0.5 }
  ],
  '对': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,70 L140,70', duration: 0.5 },
    { path: 'M125,70 L125,130', duration: 0.6 }
  ],
  '飞': [
    { path: 'M85,60 L85,90', duration: 0.6 },
    { path: 'M115,60 L115,90', duration: 0.6 },
    { path: 'M85,90 L115,90', duration: 0.6 }
  ],
  '高': [
    { path: 'M80,50 L120,50', duration: 0.6 },
    { path: 'M100,50 L100,80', duration: 0.6 },
    { path: 'M70,80 L130,80', duration: 0.7 },
    { path: 'M80,80 L80,110', duration: 0.5 },
    { path: 'M120,80 L120,110', duration: 0.5 },
    { path: 'M80,110 L120,110', duration: 0.5 }
  ],
  '个': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,70 L130,70', duration: 0.5 }
  ],
  '机': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 },
    { path: 'M100,60 L100,90', duration: 0.5 },
    { path: 'M115,75 L135,75', duration: 0.4 }
  ],
  '叫': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,70 L140,70', duration: 0.5 }
  ],
  '开': [
    { path: 'M60,60 L60,140', duration: 0.7 },
    { path: 'M60,60 L140,60', duration: 0.7 },
    { path: 'M140,60 L140,140', duration: 0.7 },
    { path: 'M60,140 L140,140', duration: 0.7 }
  ],
  '冷': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,50 L140,50', duration: 0.5 }
  ],
  '没': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,50 L140,50', duration: 0.5 }
  ],
  '名': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 }
  ],
  '哪': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 },
    { path: 'M110,70 L140,70', duration: 0.5 }
  ],
  '那': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 },
    { path: 'M80,90 L80,120', duration: 0.5 }
  ],
  '女': [
    { path: 'M85,60 L85,90', duration: 0.6 },
    { path: 'M115,60 L115,90', duration: 0.6 },
    { path: 'M85,90 L115,90', duration: 0.6 }
  ],
  '漂': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 }
  ],
  '钱': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 }
  ],
  '请': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 }
  ],
  '热': [
    { path: 'M80,50 L120,50', duration: 0.6 },
    { path: 'M100,50 L100,80', duration: 0.6 },
    { path: 'M70,80 L130,80', duration: 0.7 },
    { path: 'M80,80 L80,110', duration: 0.5 }
  ],
  '谁': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 }
  ],
  '睡': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '岁': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '太': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '听': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 }
  ],
  '先': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '现': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '想': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '些': [
    { path: 'M90,60 L75,90', duration: 0.6 },
    { path: 'M110,60 L125,90', duration: 0.6 },
    { path: 'M65,90 L135,90', duration: 0.8 }
  ],
  '写': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '谢': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 },
    { path: 'M60,90 L90,90', duration: 0.5 }
  ],
  '衣': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '再': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '见': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '怎': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '这': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '住': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '字': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '走': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '最': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '坐': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '雨': [
    { path: 'M80,50 L120,50', duration: 0.6 },
    { path: 'M100,50 L100,80', duration: 0.6 },
    { path: 'M70,80 L130,80', duration: 0.7 }
  ],
  '元': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '远': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '院': [
    { path: 'M60,60 L60,140', duration: 0.7 },
    { path: 'M60,60 L140,60', duration: 0.7 },
    { path: 'M140,60 L140,140', duration: 0.7 }
  ],
  '站': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '张': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '找': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '照': [
    { path: 'M80,50 L120,50', duration: 0.6 },
    { path: 'M100,50 L100,80', duration: 0.6 },
    { path: 'M70,80 L130,80', duration: 0.7 }
  ],
  '知': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '只': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '种': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '重': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '准': [
    { path: 'M60,60 L60,90', duration: 0.5 },
    { path: 'M60,60 L90,60', duration: 0.5 },
    { path: 'M90,60 L90,90', duration: 0.5 }
  ],
  '桌': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '自': [
    { path: 'M80,60 L120,60', duration: 0.6 },
    { path: 'M100,60 L100,90', duration: 0.6 },
    { path: 'M70,90 L130,90', duration: 0.7 }
  ],
  '总': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ],
  '租': [
    { path: 'M50,60 L50,140', duration: 0.7 },
    { path: 'M65,75 L65,125', duration: 0.6 },
    { path: 'M50,100 L80,100', duration: 0.5 }
  ]
}
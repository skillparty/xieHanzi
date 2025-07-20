function LevelSelector({ selectedLevel, onLevelChange, characterCounts, wordCounts = null }) {
  const isWordMode = wordCounts !== null
  const counts = isWordMode ? wordCounts : characterCounts
  const itemType = isWordMode ? 'palabras' : 'caracteres'
  
  const levels = [
    { value: 'all', label: 'Todos los Niveles', count: Object.values(counts).reduce((a, b) => a + b, 0) },
    { value: '1', label: 'HSK 1', count: counts[1] },
    { value: '2', label: 'HSK 2', count: counts[2] },
    { value: '3', label: 'HSK 3', count: counts[3] },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Seleccionar Nivel HSK {isWordMode ? '(Palabras Compuestas)' : '(Caracteres)'}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {levels.map((level) => (
          <button
            key={level.value}
            onClick={() => onLevelChange(level.value)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedLevel === level.value
                ? 'border-red-600 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div className="font-semibold">{level.label}</div>
            <div className="text-sm mt-1">{level.count} {itemType}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LevelSelector

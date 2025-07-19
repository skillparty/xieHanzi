function LevelSelector({ selectedLevel, onLevelChange, characterCounts }) {
  const levels = [
    { value: 'all', label: 'All Levels', count: Object.values(characterCounts).reduce((a, b) => a + b, 0) },
    { value: '1', label: 'HSK 1', count: characterCounts[1] },
    { value: '2', label: 'HSK 2', count: characterCounts[2] },
    { value: '3', label: 'HSK 3', count: characterCounts[3] },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Select HSK Level</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {levels.map((level) => (
          <button
            key={level.value}
            onClick={() => onLevelChange(level.value)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedLevel === level.value
                ? 'border-red-600 bg-red-50 text-red-700'
                : 'border-gray-300 bg-white hover:border-gray-400 text-gray-700'
            }`}
          >
            <div className="font-semibold">{level.label}</div>
            <div className="text-sm mt-1">{level.count} characters</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LevelSelector

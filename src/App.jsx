import { useState } from 'react'
import CharacterList from './components/CharacterList'
import CharacterPractice from './components/CharacterPractice'
import LevelSelector from './components/LevelSelector'
import hskCharacters from './data/hskCharacters.json'
import useDarkMode from './hooks/useDarkMode'
import useProgress from './hooks/useProgress'
import ProgressStats from './components/ProgressStats'

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const { progress, markCharacterPracticed, getCharacterProgress, getStats, resetProgress } = useProgress()
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [viewMode, setViewMode] = useState('list') // 'list' or 'practice'

  // Filter characters by level
  const filteredCharacters = selectedLevel === 'all' 
    ? hskCharacters 
    : hskCharacters.filter(char => char.level === parseInt(selectedLevel))

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                <span className="chinese-character">写汉字</span> xieHanzi
              </h1>
            </div>
            <nav className="flex space-x-4">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Character List
              </button>
              <button
                onClick={() => setViewMode('practice')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'practice' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Practice Mode
              </button>
              <button
                onClick={toggleDarkMode}
                className="px-4 py-2 rounded-lg transition-colors bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Stats */}
        <ProgressStats stats={getStats()} onReset={resetProgress} />
        
        {/* Level Selector */}
        <LevelSelector 
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          characterCounts={{
            1: hskCharacters.filter(c => c.level === 1).length,
            2: hskCharacters.filter(c => c.level === 2).length,
            3: hskCharacters.filter(c => c.level === 3).length
          }}
        />

        {/* Content based on view mode */}
        {viewMode === 'list' ? (
          <CharacterList 
            characters={filteredCharacters}
            onCharacterSelect={(char) => {
              setSelectedCharacter(char)
              setViewMode('practice')
            }}
            getCharacterProgress={getCharacterProgress}
          />
        ) : (
          <CharacterPractice 
            character={selectedCharacter || filteredCharacters[0]}
            characters={filteredCharacters}
            onCharacterChange={setSelectedCharacter}
            markCharacterPracticed={markCharacterPracticed}
            getCharacterProgress={getCharacterProgress}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>Thanks to the Confucius Institute in Cochabamba, Bolivia</p>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import CharacterList from './components/CharacterList'
import CharacterPractice from './components/CharacterPractice'
import LevelSelector from './components/LevelSelector'
import hskCharacters from './data/hskCharacters.json'

function App() {
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [viewMode, setViewMode] = useState('list') // 'list' or 'practice'

  // Filter characters by level
  const filteredCharacters = selectedLevel === 'all' 
    ? hskCharacters 
    : hskCharacters.filter(char => char.level === parseInt(selectedLevel))

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="chinese-character">写汉字</span> xieHanzi
              </h1>
            </div>
            <nav className="flex space-x-4">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Character List
              </button>
              <button
                onClick={() => setViewMode('practice')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'practice' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Practice Mode
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          />
        ) : (
          <CharacterPractice 
            character={selectedCharacter || filteredCharacters[0]}
            characters={filteredCharacters}
            onCharacterChange={setSelectedCharacter}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500 text-sm">
        <p>Thanks to the Confucius Institute in Cochabamba, Bolivia</p>
      </footer>
    </div>
  )
}

export default App

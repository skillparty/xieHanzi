import { useState } from 'react'
import CharacterList from './components/CharacterList'
import CharacterPractice from './components/CharacterPractice'
import CompoundWordPractice from './components/CompoundWordPractice'
import LevelSelector from './components/LevelSelector'
import StrokeManagerPage from './pages/StrokeManagerPage'
import hskCharacters from './data/hskCharacters.json'
import hsk1Characters from './data/hsk1Characters.json'
import compoundWords from './data/compoundWords.json'
import hsk1CompoundWords from './data/hsk1CompoundWords.json'
import useDarkMode from './hooks/useDarkMode'
import useProgress from './hooks/useProgress'
import useWordProgress from './hooks/useWordProgress'
import useSpeech from './hooks/useSpeech'
import ProgressStats from './components/ProgressStats'
import WordProgressStats from './components/WordProgressStats'

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const { progress, markCharacterPracticed, getCharacterProgress, getStats, resetProgress } = useProgress()
  const { wordProgress, markWordPracticed, getWordProgress, getWordStats, resetWordProgress } = useWordProgress()
  const { isSupported: speechSupported } = useSpeech()
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [selectedWord, setSelectedWord] = useState(null)
  const [viewMode, setViewMode] = useState('list') // 'list', 'practice', 'words', or 'admin'

  // Use HSK 1 specific data when level 1 is selected, otherwise use general data
  const useHSK1Data = selectedLevel === '1'
  
  // Filter characters by level
  const filteredCharacters = selectedLevel === 'all' 
    ? hskCharacters 
    : useHSK1Data 
    ? hsk1Characters
    : hskCharacters.filter(char => char.level === parseInt(selectedLevel))

  // Filter words by level
  const filteredWords = selectedLevel === 'all'
    ? compoundWords
    : useHSK1Data
    ? hsk1CompoundWords
    : compoundWords.filter(word => word.level === parseInt(selectedLevel))

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
            <nav className="flex space-x-2">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                  viewMode === 'list' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Caracteres
              </button>
              <button
                onClick={() => setViewMode('practice')}
                className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                  viewMode === 'practice' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Práctica
              </button>
              <button
                onClick={() => setViewMode('words')}
                className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                  viewMode === 'words' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Palabras
              </button>
              <button
                onClick={() => setViewMode('admin')}
                className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                  viewMode === 'admin' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Admin
              </button>
              <button
                onClick={toggleDarkMode}
                className="px-3 py-2 rounded-lg transition-colors bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
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
        {/* Progress Stats (not shown in admin mode) */}
        {viewMode !== 'admin' && (
          viewMode === 'words' ? (
            <WordProgressStats stats={getWordStats()} onReset={resetWordProgress} />
          ) : (
            <ProgressStats stats={getStats()} onReset={resetProgress} />
          )
        )}
        
        {/* Level Selector (not shown in admin mode) */}
        {viewMode !== 'admin' && (
          <LevelSelector 
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
            characterCounts={{
              1: hsk1Characters.length, // Exactly 150
              2: 150, // Will be implemented later
              3: 300  // Will be implemented later
            }}
            wordCounts={viewMode === 'words' ? {
              1: hsk1CompoundWords.length,
              2: compoundWords.filter(w => w.level === 2).length,
              3: compoundWords.filter(w => w.level === 3).length
            } : null}
          />
        )}

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
        ) : viewMode === 'practice' ? (
          <CharacterPractice 
            character={selectedCharacter || filteredCharacters[0]}
            characters={filteredCharacters}
            onCharacterChange={setSelectedCharacter}
            markCharacterPracticed={markCharacterPracticed}
            getCharacterProgress={getCharacterProgress}
          />
        ) : viewMode === 'words' ? (
          <CompoundWordPractice
            word={selectedWord || filteredWords[0]}
            words={filteredWords}
            onWordChange={setSelectedWord}
            markWordPracticed={markWordPracticed}
            getWordProgress={getWordProgress}
          />
        ) : (
          <StrokeManagerPage />
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

import { useState } from 'react'

function CharacterList({ characters, onCharacterSelect }) {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Filter characters based on search
  const filteredCharacters = characters.filter(char => 
    char.simplified.includes(searchTerm) ||
    char.traditional.includes(searchTerm) ||
    char.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    char.english.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search characters by Chinese, Pinyin, or English..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredCharacters.map((character) => (
          <button
            key={character.id}
            onClick={() => onCharacterSelect(character)}
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600"
          >
            {/* HSK Level Badge */}
            <div className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              HSK {character.level}
            </div>
            
            {/* Character Display */}
            <div className="text-4xl chinese-character mb-2 text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {character.simplified}
            </div>
            
            {/* Pinyin */}
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {character.pinyin}
            </div>
            
            {/* English meaning (truncated) */}
            <div className="text-xs text-gray-500 dark:text-gray-500 line-clamp-2">
              {character.english}
            </div>
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
        Showing {filteredCharacters.length} of {characters.length} characters
      </div>
    </div>
  )
}

export default CharacterList

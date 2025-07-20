import { useState, useEffect } from 'react'
import { FaSearch, FaCheck, FaTimes } from 'react-icons/fa'
import StrokeRecorder from './StrokeRecorder'
import StrokeAnimation from './StrokeAnimation'
import { strokeData } from '../data/strokeData'

function StrokeManager({ characters }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [savedStrokes, setSavedStrokes] = useState({})
  const [strokeCode, setStrokeCode] = useState('')
  const [message, setMessage] = useState({ text: '', type: '' })
  
  // Initialize saved strokes from existing data
  useEffect(() => {
    const initialSavedState = {}
    
    if (characters) {
      characters.forEach(char => {
        const simplified = char.simplified
        if (strokeData[simplified]) {
          initialSavedState[simplified] = true
        } else {
          initialSavedState[simplified] = false
        }
      })
    }
    
    setSavedStrokes(initialSavedState)
  }, [characters])
  
  // Filter characters based on search term
  useEffect(() => {
    if (!characters) return
    
    if (searchTerm.trim() === '') {
      setFilteredCharacters(characters)
    } else {
      const filtered = characters.filter(char => 
        char.simplified.includes(searchTerm) || 
        char.traditional.includes(searchTerm) || 
        char.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        char.english.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredCharacters(filtered)
    }
  }, [searchTerm, characters])
  
  // Handle character selection
  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character)
    
    // Generate code for the selected character
    if (strokeData[character.simplified]) {
      const strokes = strokeData[character.simplified]
      const codeLines = [
        `  // ${character.simplified} (${character.pinyin}) - ${character.english}`,
        `  '${character.simplified}': [`,
        ...strokes.map(stroke => `    { path: '${stroke.path}', duration: ${stroke.duration} },`),
        `  ]`
      ]
      setStrokeCode(codeLines.join('\\n'))
    } else {
      setStrokeCode('')
    }
    
    // Clear any previous messages
    setMessage({ text: '', type: '' })
  }
  
  // Handle saving strokes
  const handleSaveStrokes = (character, strokes) => {
    // Generate code for the new strokes
    const codeLines = [
      `  // ${selectedCharacter.simplified} (${selectedCharacter.pinyin}) - ${selectedCharacter.english}`,
      `  '${character}': [`,
      ...strokes.map(stroke => `    { path: '${stroke.path}', duration: ${stroke.duration} },`),
      `  ]`
    ]
    
    setStrokeCode(codeLines.join('\\n'))
    
    // Update saved state
    setSavedStrokes(prev => ({
      ...prev,
      [character]: true
    }))
    
    // Temporarily override the stroke data for preview
    const originalStrokeData = strokeData[character];
    strokeData[character] = strokes;
    
    // Show success message
    setMessage({
      text: `Trazos guardados para el carácter ${character}. Puedes ver la previsualización a la derecha.`,
      type: 'success'
    })
    
    // Restore original stroke data after 5 seconds if it existed
    if (originalStrokeData) {
      setTimeout(() => {
        strokeData[character] = originalStrokeData;
      }, 5000);
    }
  }
  
  // Copy code to clipboard
  const copyCodeToClipboard = () => {
    if (!strokeCode) return
    
    navigator.clipboard.writeText(strokeCode)
      .then(() => {
        setMessage({
          text: 'Código copiado al portapapeles',
          type: 'success'
        })
        
        // Clear message after 3 seconds
        setTimeout(() => {
          setMessage({ text: '', type: '' })
        }, 3000)
      })
      .catch(err => {
        setMessage({
          text: 'Error al copiar el código',
          type: 'error'
        })
      })
  }
  
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Administrador de Trazos
      </h2>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Character List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Caracteres HSK1
          </h3>
          
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar carácter..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
          
          <div className="h-96 overflow-y-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Carácter</th>
                  <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Pinyin</th>
                  <th className="px-4 py-2 text-center text-gray-700 dark:text-gray-300">Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredCharacters.map((char) => (
                  <tr 
                    key={char.id}
                    onClick={() => handleSelectCharacter(char)}
                    className={`cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      selectedCharacter?.id === char.id ? 'bg-blue-100 dark:bg-blue-900/30' : ''
                    }`}
                  >
                    <td className="px-4 py-2 text-xl chinese-character">{char.simplified}</td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{char.pinyin}</td>
                    <td className="px-4 py-2 text-center">
                      {savedStrokes[char.simplified] ? (
                        <FaCheck className="inline text-green-500" />
                      ) : (
                        <FaTimes className="inline text-red-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Stroke Recorder */}
        <div>
          {selectedCharacter ? (
            <StrokeRecorder 
              character={selectedCharacter}
              onSave={handleSaveStrokes}
            />
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">
                Selecciona un carácter para grabar sus trazos
              </p>
            </div>
          )}
        </div>
        
        {/* Preview & Code */}
        <div>
          {selectedCharacter ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Previsualización y Código
              </h3>
              
              <div className="mb-4 flex justify-center">
                <StrokeAnimation 
                  character={selectedCharacter}
                  isPlaying={true}
                  onComplete={() => {
                    // Auto-replay after a short pause
                    setTimeout(() => {
                      const animationElement = document.querySelector('.stroke-animation');
                      if (animationElement) {
                        animationElement.setAttribute('key', Date.now());
                      }
                    }, 1000);
                  }}
                />
              </div>
              
              {message.text && (
                <div className={`mb-4 p-3 rounded-lg ${
                  message.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {message.text}
                </div>
              )}
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Código generado:</h4>
                  <button
                    onClick={copyCodeToClipboard}
                    disabled={!strokeCode}
                    className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                  >
                    Copiar
                  </button>
                </div>
                
                <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto text-sm text-gray-800 dark:text-gray-300 h-48">
                  {strokeCode || 'No hay código disponible para este carácter'}
                </pre>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>Para guardar permanentemente estos trazos, copia el código y agrégalo al archivo strokeData.js</p>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">
                Selecciona un carácter para ver su previsualización y código
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StrokeManager
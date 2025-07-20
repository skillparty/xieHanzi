import { useState } from 'react'
import { FaVolumeUp, FaInfo, FaPuzzlePiece, FaHistory } from 'react-icons/fa'
import etymologyData from '../data/characterEtymology.json'

function CharacterDetails({ character, onPlayPronunciation }) {
  const [activeTab, setActiveTab] = useState('info')

  if (!character) return null

  const currentChar = character.simplified || character.traditional
  const details = etymologyData[currentChar] || {
    etymology: 'Información etimológica no disponible para este carácter.',
    components: ['Análisis de componentes no disponible'],
    history: 'Historia no disponible para este carácter.',
    mnemonics: 'Técnica mnemotécnica no disponible.'
  }

  const tabs = [
    { id: 'info', label: 'Información', icon: FaInfo },
    { id: 'components', label: 'Componentes', icon: FaPuzzlePiece },
    { id: 'etymology', label: 'Etimología', icon: FaHistory }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      {/* Character Display */}
      <div className="text-center mb-6">
        <div className="text-8xl font-bold text-gray-800 dark:text-white mb-2 chinese-character">
          {currentChar}
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-2xl text-blue-600 font-semibold">
            {character.pinyin}
          </div>
          <button
            onClick={() => onPlayPronunciation(character.pinyin, currentChar)}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            title="Reproducir pronunciación"
          >
            <FaVolumeUp />
          </button>
        </div>
        <div className="text-lg text-gray-600 dark:text-gray-300">
          {character.english}
        </div>
        <div className="mt-2">
          <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
            HSK {character.level}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-600 mb-4">
        <nav className="flex space-x-8">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">
        {activeTab === 'info' && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Formas del Carácter
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tradicional</div>
                  <div className="text-2xl font-bold chinese-character">{character.traditional}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Simplificado</div>
                  <div className="text-2xl font-bold chinese-character">{character.simplified}</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Pronunciación
              </h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                <div className="text-xl font-semibold text-blue-600">
                  {character.pinyin}
                </div>
              </div>
            </div>
            {details.mnemonics && (
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Técnica Mnemotécnica
                </h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                  <div className="text-gray-700 dark:text-gray-300">
                    {details.mnemonics}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'components' && (
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
              Análisis de Componentes
            </h3>
            <div className="space-y-2">
              {details.components.map((component, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="text-gray-700 dark:text-gray-300">
                    {component}
                  </div>
                </div>
              ))}
            </div>
            {details.strokeOrder && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Orden de Trazos
                </h4>
                <div className="space-y-1">
                  {details.strokeOrder.map((stroke, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{stroke}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'etymology' && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Etimología
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {details.etymology}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Historia
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {details.history}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CharacterDetails
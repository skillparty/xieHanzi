import { FaTrash, FaChartBar, FaTrophy, FaClock } from 'react-icons/fa'

function WordProgressStats({ stats, onReset }) {
  const { totalWords, totalPracticed, masteredWords, averageMastery } = stats

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Progreso de Palabras Compuestas
        </h2>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
          title="Reiniciar progreso"
        >
          <FaTrash className="w-3 h-3" />
          Reiniciar
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FaChartBar className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              Palabras Practicadas
            </span>
          </div>
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            {totalWords}
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-800 dark:text-green-300">
              Total Prácticas
            </span>
          </div>
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">
            {totalPracticed}
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FaTrophy className="text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
              Palabras Dominadas
            </span>
          </div>
          <div className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">
            {masteredWords}
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FaChartBar className="text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
              Dominio Promedio
            </span>
          </div>
          <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
            {averageMastery}%
          </div>
        </div>
      </div>

      {totalWords > 0 && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span>Progreso General</span>
            <span>{Math.round((masteredWords / totalWords) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(masteredWords / totalWords) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WordProgressStats
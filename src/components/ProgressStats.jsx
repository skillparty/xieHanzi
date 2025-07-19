function ProgressStats({ stats, onReset }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Your Progress</h2>
        <button
          onClick={onReset}
          className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
        >
          Reset Progress
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Total Practiced */}
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {stats.totalPracticed}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Practiced
          </div>
        </div>

        {/* Unique Characters */}
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {stats.uniqueCharacters}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Unique Characters
          </div>
        </div>

        {/* Mastered */}
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
            {stats.masteredCharacters}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Mastered
          </div>
        </div>

        {/* In Progress */}
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
            {stats.inProgressCharacters}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            In Progress
          </div>
        </div>

        {/* Streak */}
        <div className="text-center">
          <div className="text-3xl font-bold text-red-600 dark:text-red-400">
            {stats.streakDays}🔥
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Day Streak
          </div>
        </div>

        {/* Achievements */}
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {stats.achievements}🏆
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Achievements
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressStats

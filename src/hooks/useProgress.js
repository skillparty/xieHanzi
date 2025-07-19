import { useState, useEffect } from 'react'

function useProgress() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('userProgress')
    return saved ? JSON.parse(saved) : {
      totalPracticed: 0,
      characterProgress: {},
      streakDays: 0,
      lastPracticeDate: null,
      achievements: []
    }
  })

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(progress))
  }, [progress])

  // Update character practice count
  const markCharacterPracticed = (characterId) => {
    setProgress(prev => {
      const newProgress = { ...prev }
      
      // Update character specific progress
      if (!newProgress.characterProgress[characterId]) {
        newProgress.characterProgress[characterId] = {
          timesPracticed: 0,
          lastPracticed: null,
          mastery: 0
        }
      }
      
      newProgress.characterProgress[characterId].timesPracticed += 1
      newProgress.characterProgress[characterId].lastPracticed = new Date().toISOString()
      
      // Calculate mastery (0-100) based on practice count
      const practiceCount = newProgress.characterProgress[characterId].timesPracticed
      newProgress.characterProgress[characterId].mastery = Math.min(100, practiceCount * 20)
      
      // Update total practiced
      newProgress.totalPracticed += 1
      
      // Update streak
      const today = new Date().toDateString()
      const lastPractice = prev.lastPracticeDate ? new Date(prev.lastPracticeDate).toDateString() : null
      
      if (lastPractice !== today) {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        
        if (lastPractice === yesterday.toDateString()) {
          newProgress.streakDays += 1
        } else if (lastPractice !== today) {
          newProgress.streakDays = 1
        }
      }
      
      newProgress.lastPracticeDate = new Date().toISOString()
      
      // Check for achievements
      checkAchievements(newProgress)
      
      return newProgress
    })
  }

  // Check and award achievements
  const checkAchievements = (progressData) => {
    const achievements = []
    
    // First character achievement
    if (progressData.totalPracticed === 1) {
      achievements.push({
        id: 'first_character',
        name: 'First Steps',
        description: 'Practice your first character',
        unlockedAt: new Date().toISOString()
      })
    }
    
    // Streak achievements
    if (progressData.streakDays === 7) {
      achievements.push({
        id: 'week_streak',
        name: 'Week Warrior',
        description: 'Practice for 7 days in a row',
        unlockedAt: new Date().toISOString()
      })
    }
    
    // Practice milestones
    const milestones = [10, 50, 100, 500, 1000]
    milestones.forEach(milestone => {
      if (progressData.totalPracticed === milestone) {
        achievements.push({
          id: `practiced_${milestone}`,
          name: `${milestone} Characters!`,
          description: `Practice ${milestone} characters`,
          unlockedAt: new Date().toISOString()
        })
      }
    })
    
    // Add new achievements
    achievements.forEach(achievement => {
      if (!progressData.achievements.find(a => a.id === achievement.id)) {
        progressData.achievements.push(achievement)
      }
    })
  }

  // Get progress for a specific character
  const getCharacterProgress = (characterId) => {
    return progress.characterProgress[characterId] || {
      timesPracticed: 0,
      lastPracticed: null,
      mastery: 0
    }
  }

  // Get overall statistics
  const getStats = () => {
    const characterStats = Object.values(progress.characterProgress)
    const masteredCount = characterStats.filter(c => c.mastery >= 80).length
    const inProgressCount = characterStats.filter(c => c.mastery > 0 && c.mastery < 80).length
    
    return {
      totalPracticed: progress.totalPracticed,
      uniqueCharacters: Object.keys(progress.characterProgress).length,
      masteredCharacters: masteredCount,
      inProgressCharacters: inProgressCount,
      streakDays: progress.streakDays,
      achievements: progress.achievements.length
    }
  }

  // Reset progress
  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      setProgress({
        totalPracticed: 0,
        characterProgress: {},
        streakDays: 0,
        lastPracticeDate: null,
        achievements: []
      })
    }
  }

  return {
    progress,
    markCharacterPracticed,
    getCharacterProgress,
    getStats,
    resetProgress
  }
}

export default useProgress

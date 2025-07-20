import { useState, useEffect } from 'react'

function useWordProgress() {
  const [wordProgress, setWordProgress] = useState({})

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('xiehanzi-word-progress')
    if (savedProgress) {
      try {
        setWordProgress(JSON.parse(savedProgress))
      } catch (error) {
        console.error('Error loading word progress:', error)
      }
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('xiehanzi-word-progress', JSON.stringify(wordProgress))
  }, [wordProgress])

  const markWordPracticed = (wordId) => {
    setWordProgress(prev => {
      const current = prev[wordId] || { timesPracticed: 0, lastPracticed: null, mastery: 0 }
      const newTimesPracticed = current.timesPracticed + 1
      const newMastery = Math.min(100, current.mastery + 10) // Increase mastery by 10% each time
      
      return {
        ...prev,
        [wordId]: {
          timesPracticed: newTimesPracticed,
          lastPracticed: new Date().toISOString(),
          mastery: newMastery
        }
      }
    })
  }

  const getWordProgress = (wordId) => {
    return wordProgress[wordId] || { 
      timesPracticed: 0, 
      lastPracticed: null, 
      mastery: 0 
    }
  }

  const getWordStats = () => {
    const totalWords = Object.keys(wordProgress).length
    const totalPracticed = Object.values(wordProgress).reduce(
      (sum, progress) => sum + progress.timesPracticed, 0
    )
    const masteredWords = Object.values(wordProgress).filter(
      progress => progress.mastery >= 80
    ).length
    const averageMastery = totalWords > 0 
      ? Object.values(wordProgress).reduce(
          (sum, progress) => sum + progress.mastery, 0
        ) / totalWords
      : 0

    return {
      totalWords,
      totalPracticed,
      masteredWords,
      averageMastery: Math.round(averageMastery)
    }
  }

  const resetWordProgress = () => {
    setWordProgress({})
    localStorage.removeItem('xiehanzi-word-progress')
  }

  return {
    wordProgress,
    markWordPracticed,
    getWordProgress,
    getWordStats,
    resetWordProgress
  }
}

export default useWordProgress
import { useState, useCallback } from 'react'

function useSpeech() {
  const [isSupported, setIsSupported] = useState(
    typeof window !== 'undefined' && 'speechSynthesis' in window
  )
  const [isSpeaking, setIsSpeaking] = useState(false)

  const speak = useCallback((text, options = {}) => {
    if (!isSupported) {
      console.warn('Speech synthesis not supported')
      return
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    
    // Configure voice settings
    utterance.rate = options.rate || 0.8
    utterance.pitch = options.pitch || 1
    utterance.volume = options.volume || 1
    
    // Try to find a Chinese voice
    const voices = window.speechSynthesis.getVoices()
    const chineseVoice = voices.find(voice => 
      voice.lang.includes('zh') || 
      voice.lang.includes('cmn') ||
      voice.name.toLowerCase().includes('chinese')
    )
    
    if (chineseVoice) {
      utterance.voice = chineseVoice
    }

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }, [isSupported])

  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }, [isSupported])

  // Function specifically for Chinese pronunciation
  const speakChinese = useCallback((pinyin, character = '') => {
    if (!isSupported) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    // Wait for voices to load if they haven't already
    const speakWithVoice = () => {
      const utterance = new SpeechSynthesisUtterance()
      
      // Try to use the Chinese character first, then fallback to pinyin
      if (character) {
        utterance.text = character
      } else {
        utterance.text = pinyin
      }
      
      // Configure voice settings for Chinese
      utterance.rate = 0.6
      utterance.pitch = 1.0
      utterance.volume = 1.0
      utterance.lang = 'zh-CN'
      
      // Try to find the best Chinese voice
      const voices = window.speechSynthesis.getVoices()
      const chineseVoices = voices.filter(voice => 
        voice.lang.includes('zh') || 
        voice.lang.includes('cmn') ||
        voice.name.toLowerCase().includes('chinese') ||
        voice.name.toLowerCase().includes('mandarin')
      )
      
      // Prefer voices in this order
      const preferredVoices = [
        'zh-CN',
        'zh-Hans-CN', 
        'zh-TW',
        'cmn-Hans-CN',
        'cmn-Hant-TW'
      ]
      
      let selectedVoice = null
      for (const preferred of preferredVoices) {
        selectedVoice = chineseVoices.find(voice => voice.lang === preferred)
        if (selectedVoice) break
      }
      
      // If no preferred voice found, use the first Chinese voice available
      if (!selectedVoice && chineseVoices.length > 0) {
        selectedVoice = chineseVoices[0]
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice
      }

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      window.speechSynthesis.speak(utterance)
    }

    // Check if voices are loaded
    const voices = window.speechSynthesis.getVoices()
    if (voices.length === 0) {
      // Wait for voices to load
      window.speechSynthesis.onvoiceschanged = () => {
        speakWithVoice()
        window.speechSynthesis.onvoiceschanged = null
      }
    } else {
      speakWithVoice()
    }
  }, [isSupported])

  return {
    isSupported,
    isSpeaking,
    speak,
    speakChinese,
    stop
  }
}

export default useSpeech
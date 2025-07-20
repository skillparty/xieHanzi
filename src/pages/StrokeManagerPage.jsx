import { useState, useEffect } from 'react'
import StrokeManager from '../components/StrokeManager'

function StrokeManagerPage() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    // Load HSK1 characters
    const loadCharacters = async () => {
      try {
        const response = await import('../data/hsk1Characters.json')
        setCharacters(response.default)
        setIsLoading(false)
      } catch (err) {
        console.error('Error loading characters:', err)
        setError('Error al cargar los caracteres')
        setIsLoading(false)
      }
    }
    
    loadCharacters()
  }, [])
  
  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando caracteres...</p>
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg">
          <p>{error}</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Administrador de Trazos de Caracteres
      </h1>
      
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Esta herramienta te permite grabar el orden de trazos para los caracteres HSK1. 
        Selecciona un carácter, dibuja sus trazos en el orden correcto, y guarda el resultado.
      </p>
      
      <StrokeManager characters={characters} />
    </div>
  )
}

export default StrokeManagerPage
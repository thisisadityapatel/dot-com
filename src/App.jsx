import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container">
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'dark' : 'light'}
      </button>
      <h1>Aditya Patel</h1>
    </div>
  )
}

export default App

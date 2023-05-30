import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1 className='header'>
        Polynomial Calculator
      </h1>
      <Main />
    </div>
  )
}

export default App

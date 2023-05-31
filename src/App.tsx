import { useState } from 'react'
import './App.css'
import PlayerForm from './components/PlayerForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlayerForm/>
    </>
  )
}

export default App

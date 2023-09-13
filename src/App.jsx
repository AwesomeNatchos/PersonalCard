import { useState } from 'react'
import './App.css'
import PersonalCard from './component/PersonalCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonalCard />
    </>
  )
}

export default App

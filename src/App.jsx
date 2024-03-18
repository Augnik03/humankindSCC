import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards2 from './components/Cards2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Cards2/>
      {/* <Cards /> */}
    </>
  )
}

export default App

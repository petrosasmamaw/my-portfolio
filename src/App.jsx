import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Navbar from './sections/navbar'
import Personal from './sections/personal'
import Features from './sections/features'
import Skills from './sections/skills'
import Dice from './sections/dice'

function App() {
  return (
    <div>
      <Navbar />
      <Personal />
      <Features />
      <Skills />
      <Dice />
    </div>
  )
}

export default App

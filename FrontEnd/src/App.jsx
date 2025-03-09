import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'
import Highlight from './components/highlight'

function App() {  
  return (
    <div className='master-page'>
      <h1>Anime Reviews</h1>
      <Highlight />
      <div className='display-div'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App

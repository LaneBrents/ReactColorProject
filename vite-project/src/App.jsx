import react, { useState } from 'react'
// import './App.css'

import generatePalette from './components/colorHelpers';
import seedColors from './components/seedColors';
import Palette from './components/Palette';

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
  )
}

export default App

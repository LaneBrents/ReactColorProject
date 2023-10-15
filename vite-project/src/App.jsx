import react, { useState } from 'react'
// import './App.css'

import seedColors from './components/seedColors'
import Palette from './components/Palette'

function App() {

  return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
  )
}

export default App

import react, { useState } from 'react'
import { Route } from 'react-router-dom';

import generatePalette from './components/colorHelpers';
import seedColors from './components/seedColors';
import Palette from './components/Palette';

function App() {
  return (
    // <>
    //   <Route exact path="/#" render={() => <h1>Palette goes here</h1>}/>
    //   <Route exact path="/palette/:id" />
    // </>
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
  )
}

export default App

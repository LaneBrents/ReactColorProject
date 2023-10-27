import { Route, Routes } from "react-router-dom";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import seedColors from "./components/seedColors";
import SingleColorPalette from "./components/SingleColorPalette";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors}/>} />
      <Route path="/palette/:paletteId" element={<Palette />} />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette />}/>
    </Routes>
  );
}

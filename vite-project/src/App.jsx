import { Route, Routes } from "react-router-dom";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import seedColors from "./components/seedColors";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";

import Palette from "./components/Palette";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>} />
      <Route path="/palette/:paletteId" element={<Palette />} />
    </Routes>
  );
}

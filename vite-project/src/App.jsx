import { Route, Routes, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import generatePalette from "./components/colorHelpers";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import seedColors from "./components/seedColors";
import SingleColorPalette from "./components/SingleColorPalette";

export default function App() {

  const findPalette = (id) => seedColors.find((palette) => palette.id === id);

  const SingleColorWrapper = () => {
    const { id, colorId } = useParams();
    return (
      <SingleColorPalette
        palette={generatePalette(findPalette(id))}
        colorId={colorId}
      />
    );
  };

  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
      <Route
        path="/palette/:id/:colorId"
        element={<SingleColorWrapper />}
      />
    </Routes>
  );
}

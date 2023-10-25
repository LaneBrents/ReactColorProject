import React from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import "../styles/PaletteList.css";

export default function PaletteList({ palettes }) {
  return (
    <div className="root">
      <div className="container">
        <nav className="nav">
          <h1>Palette List</h1>
        </nav>
        <div className="mini-palettes">
          {palettes.map((palette) => (
            <MiniPalette {...palette} />
          ))}
        </div>
      </div>
    </div>
  );
}

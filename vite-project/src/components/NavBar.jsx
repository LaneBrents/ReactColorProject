import React from "react";
import { Slider } from "@mui/material";
import "../styles/NavBar.css";

export default function NavBar({ level, changeLevel }) {
  return (
    <header className="Navbar">
    <div className="logo">
      <a href="#">ReactPaletteGenerator</a>
    </div>
    <div className="slider">
      <div className="slider-container">
        <Slider
          level={level}
          onChange={changeLevel}
          style={{ color: "black" }}
          value={level}
          step={100}
          marks
          min={100}
          max={900}
        />
      </div>
    </div>
  </header>
  );
}



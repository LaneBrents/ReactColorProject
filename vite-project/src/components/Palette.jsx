import React, { Component, useState } from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";
import { Slider } from "@mui/material";

export default function Palette({ colors, palette }) {
  const [level, setLevel] = useState(500);

  const changeLevel = (event, level) => {
    setLevel(level);
  };

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));

  return (
    <div className="Palette">
      <Slider
        level={level}
        onChange={changeLevel}
        className="slider"
        aria-label="Temperature"
        value={level}
        valueLabelDisplay="auto"
        step={100}
        marks
        min={100}
        max={900}
      />
      {/* navbar goes here */}
      <div className="Palette-Colors">{colorBoxes}</div>
      {/* footer goes here */}
    </div>
  );
}

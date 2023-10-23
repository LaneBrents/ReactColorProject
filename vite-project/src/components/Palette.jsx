import React, { useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "../styles/Palette.css";

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
      <NavBar level={level} changeLevel={changeLevel}/>
      <div className="Palette-Colors">{colorBoxes}</div>
      {/* footer goes here */}
    </div>
  );
}

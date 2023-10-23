import React, { useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "../styles/Palette.css";

export default function Palette(props) {
  const [state, setState] = useState({
    level: 500,
    format: "hex",
  });

  const { level, format } = state;

  const changeLevel = (level) => {
    setState({ ...state, level: level });
  };

  const changeFormat = (val) => {
    setState({ ...state, format: val });
  };

  const colorBoxes = props.palette.colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.id}/>
  ));

  return (
    <div className="Palette">
      <NavBar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Palette-Colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {props.palette.paletteName}
        <span className="emoji">{props.palette.emoji}</span>
      </footer>
    </div>
  );
}

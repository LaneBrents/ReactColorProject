import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "../styles/Palette.css";
import generatePalette from "./colorHelpers";
import seedColors from "./seedColors";

export default function Palette(props) {

  //====Used to find palette ID's for App.jsx======
  const { paletteId } = useParams();

  const findPallete = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };

  const palette = generatePalette(findPallete(paletteId));
  //==========

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

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={paletteId} showLink={true}/>
  ));

  return (
    <div className="Palette">
      <NavBar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showLevel
      />
      <div className="Palette-Colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}

import React from "react";
import "../styles/MiniPalette.css";

export default function MiniPalette(props) {
  const miniColorBoxes = props.colors.map((color) => (
    <div className="mini-color" style={{ backgroundColor: color.color }} key={color.name} />
  ));

  return (
    <div className="mini-root">
      <div className="mini-colors">{miniColorBoxes}</div>
      <h5 className="mini-title">
        {props.paletteName} <span className="mini-emoji">{props.emoji}</span>
      </h5>
    </div>
  );
}

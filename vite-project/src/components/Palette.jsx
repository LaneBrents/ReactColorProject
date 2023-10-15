import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";

export default function Palette(props) {
  const colorBoxes = props.colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ));

  return (
    <div className="Palette">
      {/* navbar goes here */}
      <div className="Palette-Colors">{colorBoxes}</div>
      {/* footer goes here */}
    </div>
  );
}

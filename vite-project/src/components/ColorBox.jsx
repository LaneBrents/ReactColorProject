import React, { Component } from "react";
import "../styles/ColorBox.css";

export default function ColorBox(props) {
  return (
    <div style={{ background: props.background }} className="ColorBox">
      <span>{props.name}</span>
      <span> More</span>
    </div>
  );
}

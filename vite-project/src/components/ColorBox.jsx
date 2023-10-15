import React, { Component } from "react";
import "../styles/ColorBox.css";

export default function ColorBox({name, background}) {
  return (
    <div style={{ background: background }} className="ColorBox">
      <div className="container">
        <div className="container-content">
            <span>{name}</span>
        </div>
        <button className="copy-btn">Copy</button>
      </div>
      <button className="more-btn">More</button>
    </div>
  );
}

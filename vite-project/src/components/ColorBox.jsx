import React, { Component } from "react";
import {CopyToClipboard} from "react-copy-to-clipboard"
import "../styles/ColorBox.css";

export default function ColorBox({name, background}) {
  return (
    <CopyToClipboard text={background}>
    <div style={{ background: background }} className="ColorBox">
      <div className="container">
        <div className="container-content">
            <span>{name}</span>
        </div>
        <button className="copy-btn">Copy</button>
      </div>
      <button className="more-btn">More</button>
    </div>
    </CopyToClipboard>
  );
}

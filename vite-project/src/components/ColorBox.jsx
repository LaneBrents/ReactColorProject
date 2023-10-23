import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

export default function ColorBox(props) {
  const [state, setState] = useState({
    copied: false
  });

  const handleCopy = () => {
    setState({ copied: true });
    setTimeout(() => setState({ copied: false}), 1000);
  }

  const { copied } = state;

  return (
    <CopyToClipboard text={props.background} onCopy={handleCopy}>
      <div style={{ backgroundColor: props.background }} className="ColorBox">
        <div
          style={{ backgroundColor: props.background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{props.background}</p>
        </div>
        <div className="container">
          <div className="container-content">
            <span>{props.name}</span>
          </div>
          <button className="copy-btn">Copy</button>
        </div>
        <button className="more-btn">More</button>
      </div>
    </CopyToClipboard>
  );
}

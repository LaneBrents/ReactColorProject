import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import "../styles/NavBar.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function NavBar(props) {
  const [state, setState] = useState({
    format: "hex",
  });

  const handleChange = (e) => {
    setState({ format: e.target.value });
    props.handleChange(e.target.value);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">ReactPaletteGenerator</a>
      </div>
      <div className="slider-container">
        <span>Level: {props.level}</span>
        <div className="slider">
          <Slider
            level={props.level}
            onChange={props.changeLevel}
            defaultValue={props.level}
            step={100}
            min={100}
            max={900}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={state.format} onChange={handleChange}>
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="rgba">RGBA</MenuItem>
        </Select>
      </div>
    </header>
  );
}

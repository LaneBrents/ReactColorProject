import React, { useState } from "react";
import { Icon, MenuItem, Select } from "@mui/material";
import "rc-slider/assets/index.css";
import "../styles/NavBar.css";
import Slider from "rc-slider";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function NavBar(props) {
  const [state, setState] = useState({
    format: "hex",
    open: false
  });

  const handleChange = (e) => {
    setState({ format: e.target.value, open: true });
    props.handleChange(e.target.value);
  };

  const closeSnackbar = () => {
    setState({...state, open: false });
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
        <Select size="small" value={state.format} onChange={handleChange}>
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="rgba">RGBA</MenuItem>
        </Select>
      </div>
      <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
      open={state.open}
      autoHideDuration={1500}
      message={<span id="msg-id">Format Changed!</span>}
      ContentProps={{
        "aria-describedby": "msg-id"
      }}
      onClose={closeSnackbar}
      action={[
        <IconButton onClick={closeSnackbar} color="inherit" key="close" aria-label="close" >
            <CloseIcon />
        </IconButton>
      ]}
      />
    </header>
  );
}

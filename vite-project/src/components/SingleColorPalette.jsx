import { React, useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function SingleColorPalette(props) {
  const { palette, colorId } = props;

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

  const getShades = (palette, colorId) => {
    let allShades = [];
    let paletteColors = palette.colors;

    for (let key in paletteColors) {
      allShades = allShades.concat(
        paletteColors[key].filter((c) => c.id === colorId)
      );
    }
    return allShades.slice(1);
  };

  const [shades] = useState(getShades(palette, colorId));

  const colorBoxes = shades.map((c) => (
    <ColorBox
      key={c.name}
      background={c[format]}
      name={c.name}
      showLink={false}
    />
  ));
  return (
    <div className="SingleColorPalette Palette">
      <NavBar handleChange={changeFormat} format={format} showLevel={false} />
      <div className="Palette-Colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${palette.id}`} className="back-button">
            Go Back
          </Link>
        </div>
      </div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
}

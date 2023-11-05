import { React, useState } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";


export default function SingleColorPalette(props) {
  const { palette, colorId } = props;
  const {paletteName, emoji} = props.palette;

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
  const changeFormat = (e) => {
    setFormat(e.target.value);
    setChanged(
      true,
      setTimeout(() => setChanged(false), 3000)
    );
  };
  const closeSnackerBar = () => {
    setChanged(false);
  };

  const [format, setFormat] = useState("hex");
  const [changed, setChanged] = useState(false);
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
    <div className="Palette">
      <NavBar
        handleChange={changeFormat}
        format={format}
        changed={changed}
        closeSnackerBar={closeSnackerBar}
        showLevel={false}
      />
      <div className="Palette-Colors">
        {colorBoxes}
        <Link to={`/palette/${palette.id}`}>
          <button>Go Back</button>
        </Link>
        <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
      </div>
    </div>
  );
}

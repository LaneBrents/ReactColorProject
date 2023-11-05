import { React, useState } from "react";
import ColorBox from "./ColorBox";

export default function SingleColorPalette(props) {
  const { palette, colorId } = props;

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
      <h1>Single Color Palette</h1>
      <div className="Palette-Colors">{colorBoxes}</div>
    </div>
  );
}

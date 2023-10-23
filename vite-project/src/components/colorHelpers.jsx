import chroma, { hex } from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export default function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  }; // This builds us a new color object that contains each level [100, 200, 300...] set to an empty array where we can then fill them out
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse(); // Spits out the colors from light-to-dark
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgba", "rgba").replace(")", ",1.0)")
      });
    }
  }
  return newPalette;
}
// This generates an array with three color values, one being our color, a darkened version, and ending in white to get the color range
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}
// This function creates a scale that spits out our different colors
function getScale(hexColor, numOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors);
}

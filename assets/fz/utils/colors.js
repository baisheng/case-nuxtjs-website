const extractRGB = arr => {
  const r = arr >> 16 & 255
  const grey = arr >> 8 & 255
  const b = 255 & arr
  return {
    r,
    g: grey,
    b
  }
}
const toStringRGB = ({r, g, b}) => `rgb( ${r}, ${g}, ${b})`
const toStringRGBA = ({r, g, b}, array) => `rgba( ${r}, ${g}, ${b}, ${array})`
const RGBToHex = b => b.r << 16 | b.g << 8 | b.b


export {extractRGB, toStringRGB, toStringRGBA, RGBToHex}

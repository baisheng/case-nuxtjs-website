const fit = function (wImg, hImg, wHolder, hHolder) {

  const sw = wImg / wHolder
  const sh = hImg / hHolder
  let ratio = 0
  ratio = sw > sh ? sh : sw
  ratio = 1 / ratio
  const w = wImg * ratio
  const h = hImg * ratio
  const x = wHolder - w >> 1
  const y = hHolder - h >> 1
  return {x: x, y: y, w: w, h: h}
}

export default {fit}


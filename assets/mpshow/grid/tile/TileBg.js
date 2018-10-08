/* eslint-disable no-undef */
import gridLayers from '../GridLayers'

export default class TileBg extends PIXI.Sprite {
  constructor (size) {
    super(PIXI.Texture.fromFrame("bg_" + size + ".png"))
    // super(PIXI.Texture.fromFrame("small.png"))
  }

  setPosition (x, y) {
    this.x = x
    this.y = y
  }

  add (debug) {
    gridLayers.get("bg").addChild(this)
  }

  remove () {
    gridLayers.get("bg").removeChild(this)
  }
}


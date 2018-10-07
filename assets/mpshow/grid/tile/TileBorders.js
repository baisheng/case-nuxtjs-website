/* eslint-disable no-floating-decimal,no-undef */
import gridLayers from '../GridLayers'

class TileBorders extends PIXI.Sprite {
  constructor (size) {
    super(PIXI.Texture.fromFrame(`borders_${size}.png`))
    this.anchor.x = .5
    this.anchor.y = .5
    this.scale.set(.5, .5)
  }

  setPosition (x, y) {
    this.x = x + .5 * this.width >> 0
    this.y = y + .5 * this.height >> 0
  }

  add () {
    gridLayers.get("borders").addChild(this)
  }

  remove () {
    gridLayers.get("borders").removeChild(this)
  }
}
export default TileBorders

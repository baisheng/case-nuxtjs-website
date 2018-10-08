/* eslint-disable no-undef,no-floating-decimal */
import GridConfig from '../GridConfig'
import gridLayers from '../GridLayers'
import { TweenLite } from 'gsap/TweenLite'
import { Power2 } from 'gsap/TweenMax'

/*
Power1 = Quad
Power2 = Cubic
Power3 = Quart
Power4 = Quint | Strong
 */
export default class TileCircle extends PIXI.Sprite {
  constructor (size) {
    super(PIXI.Texture.fromFrame("circle.png"))
    this.anchor.x = .5
    this.anchor.y = .5
    this._originSpriteSize = this.width
    this._sSize = size
    this._size = GridConfig.dimensions.tileBig
    this._scale = .98

    if (size === 'small') {
      this._size = GridConfig.dimensions.tile
      this._scale = .90
      // this._scale = 130 / this._originSpriteSize
    }
    this.scale.x = this._scale
    this.scale.y = this._scale
  }

  update (data, animate) {
    const view = this;
    if (animate) {
      TweenLite.to(this.scale, .6, {
        x: 0,
        y: 0,
        ease: Power2.easeIn,
        onComplete () {
          view.tint = data.colors.dark
          TweenLite.to(view.scale, .6, {
            x: view._scale,
            y: view._scale,
            ease: Power2.easeOut
          })
        }
      })
    } else {
      this.tint = data.colors.dark
    }
  }

  setPosition (text, y) {
    this._xPos = text + .5 * this._size >> 0
    this._yPos = y + .5 * this._size >> 0
    this.x = this._xPos
    this.y = this._yPos
  }

  add () {
    gridLayers.get("circle").addChild(this)
  }

  remove () {
    gridLayers.get("circle").removeChild(this)
  }

  over () {
    // let imgOffsetY = 2
    // let radius = .62
    let radius = 1.2
    // if (this._sSize === "small") {
    //   imgOffsetY = 1
    //   radius = .72
    // }
    TweenLite.to(this.scale, .4, {
      x: radius * this._scale,
      y: radius * this._scale,
      ease: Power2.easeOut
    })
    // TweenLite.to(this, .4, {
    //   y: this._yPos - .5 * this._size + .5 * this._originSpriteSize * this._scale + imgOffsetY,
    //   ease: Power2.easeOut
    // })
  }

  out () {
    TweenLite.to(this.scale, .4, {
      x: this._scale,
      y: this._scale,
      ease: Power2.easeOut
    })
    TweenLite.to(this, .4, {
      y: this._yPos,
      ease: Power2.easeOut
    })
  }
}

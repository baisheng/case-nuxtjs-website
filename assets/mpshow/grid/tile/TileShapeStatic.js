/* eslint-disable no-undef,no-floating-decimal,new-cap */
// import {TweenLite, Sine, Back, Power2} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

import * as uColors from '../../../fz/utils/colors'
import GridConfig from '../GridConfig'
import gridLayers from '../GridLayers'

export default class TileShapeStatic extends PIXI.Container {
  constructor (size) {
    super()
    this._color = 15329769
    this._size = GridConfig.dimensions.tileBig
    this.bg = null
    this._size = GridConfig.dimensions.tileBig;
    this._bg = null;
    if (size === 'big' || size === 'medium') {
      this._bg = new PIXI.Sprite(PIXI.Texture.fromFrame('bg_big.png'))
      this._bg.x = 2
      this._bg.y = 3
      this.addChild(this._bg)
    } else {
      this._bg = new PIXI.Sprite(PIXI.Texture.fromFrame('bg_small.png'))
      this._bg.x = 2
      this._bg.y = 2
      this.addChild(this._bg)
    }
    this._bg.anchor.set(.5, .5)
    this._bg.alpha = 0
    const name = `blob${1 + (5 * Math.random() >> 0)}.png`
    this._shape = new PIXI.Sprite(PIXI.Texture.fromFrame(name))
    this._shape.tint = this._color
    this._shape.anchor.set(.5, .5)
    this._scaleTo = .6
    if (size === 'medium') {
      this._size = GridConfig.dimensions.tileBig
      this._scaleTo *= .9
    }
    if (size === 'small') {
      this._size = GridConfig.dimensions.tile
      this._scaleTo = .25
    }
    this._shape.scale.set(this._scaleTo, this._scaleTo)
    this.addChild(this._shape)
    this._isOver = false
  }


  over () {
    if (!this._isOver) {
      this._isOver = true;
      TweenLite.to(this._bg, .5, {
        alpha: 1,
        ease: Sine.easeOut
      })
    }
  }

  out () {
    if (this._isOver) {
      this._isOver = false;
      TweenLite.to(this._bg, .5, {
        alpha: 0,
        ease: Sine.easeOut
      })
    }
  }

  _render () {
    this._drawCircle()
  }

  update ({colors}, animate) {
    const self = this;
    this._bg.tint = colors ? colors.default : 4473924
    if (animate) {
      TweenLite.to(this._shape, .6, {
        rotation: 2,
        ease: Power2.easeIn
      })
      TweenLite.to(this._shape.scale, .6, {
        x: 0,
        y: 0,
        ease: Back.easeIn,
        onComplete () {
          self._shape.tint = colors ? colors.default : 4473924
          TweenLite.to(self._shape, .6, {
            rotation: 0,
            ease: Power2.easeOut
          });
          TweenLite.to(self._shape.scale, .6, {
            x: 1,
            y: 1,
            ease: Back.easeOut
          })
        }
      })
    } else {
      this._shape.tint = colors ? colors.default : 4473924
    }
  }

  setColor (color) {
    const self = this
    const colour = uColors.extractRGB(this._color)
    const original = uColors.extractRGB(color)
    const ftbCover = {
      r: colour.r,
      g: colour.g,
      b: colour.b
    }
    TweenLite.to(ftbCover, .6, {
      r: original.r,
      g: original.g,
      b: original.b,
      ease: Power2.easeOut,
      onUpdate () {
        self._color = self._shape.tint = uColors.RGBToHex(ftbCover)
      }
    })
  }


  setPosition (text, y) {
    this.x = text + .5 * this._size >> 0
    this.y = y + .5 * this._size >> 0
    this._shape.px = this.x
    this._shape.py = this.y
  }

  setup () {
  }

  excite () {
  }

  exciteConstant () {
  }

  add () {
    gridLayers.get('shape').addChild(this)
  }

  remove () {
    gridLayers.get('shape').removeChild(this)
  }

  activate () {
  }

  deactivate () {
  }
}


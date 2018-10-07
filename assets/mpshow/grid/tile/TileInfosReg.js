/* eslint-disable no-undef,space-unary-ops,no-void,no-return-assign,no-floating-decimal */
// import {TweenLite, Power2, Sine} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

import GridConfig from '../GridConfig'
import gridLayers from '../GridLayers'

export default class TileInfosReg extends PIXI.Container {
  constructor (size, type) {
    super()
    this._sSize = size
    this._size = this._sSize === 'big' ? GridConfig.dimensions.tileBig : GridConfig.dimensions.tile;
    const fontSize = this._sSize === 'big' ? 16 : 13;
    this._tf = new PIXI.extras.BitmapText("BBBB", {
        font: `${fontSize}px Odin Rounded Regular Small`
      }
    )
    this._tf.tint = 10724516
    this.addChild(this._tf)
    this._tfOver = new PIXI.extras.BitmapText("BBBB", {
        font: `${fontSize}px Odin Rounded Regular Small`
      }
    )
    this._tfOver.alpha = 0
    this.addChild(this._tfOver)

  }

  update (data, animate) {
    const self = this;
    if (animate) {
      TweenLite.to(this, .6, {
        alpha: 0,
        ease: Power2.easeIn,
        onComplete () {
          self._updateContent(data)
          self._updatePos();
          TweenLite.to(self, .6, {
            alpha: 1,
            ease: Power2.easeOut
          })
        }
      })
    } else {
      this._updateContent(data)
      this._updatePos()
    }
  }

  _updateContent (data) {
    this._tf.text = data.texts.name;
    this._tfOver.text = data.texts.name;
  }

  _updatePos () {
    if (this._sSize === 'big') {
      this.x = this._x + 18 >> 0
      this.y = this._y + this._size - 30 >> 0
    } else {
      this.x = this._x + 17 >> 0;
      this.y = this._y + this._size - 27 >> 0
    }
  }

  setPosition (x, y) {
    this._x = x
    this._y = y
  }

  add () {
    gridLayers.get('infos_reg').addChild(this)

  }

  remove () {
    gridLayers.get('infos_reg').removeChild(this)
  }

  over () {
    TweenLite.killTweensOf(this._tf)
    TweenLite.killTweensOf(this._tfOver)
    TweenLite.to(this._tf, .25, {
      delay: this._size === 'big' ? .2 : .125,
      alpha: 0,
      ease: Power2.easeOut
    })
    TweenLite.to(this._tfOver, .25, {
      delay: this._size === 'big' ? .2 : .125,
      alpha: 1,
      ease: Power2.easeOut
    })
  }

  out () {
    TweenLite.killTweensOf(this._tf)
    TweenLite.killTweensOf(this._tfOver)
    TweenLite.to(this._tf, .25, {
      alpha: 1,
      ease: Power2.easeOut
    })
    TweenLite.to(this._tfOver, .25, {
      alpha: 0,
      ease: Power2.easeOut
    })
  }
}

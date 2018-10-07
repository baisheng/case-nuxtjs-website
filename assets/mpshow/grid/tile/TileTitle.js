/* eslint-disable no-undef,space-unary-ops,no-void,no-return-assign,no-floating-decimal */
// import {TweenLite, Power2, Power1} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

import GridConfig from '../GridConfig'
import gridLayers from '../GridLayers'

export default class TileTitle extends PIXI.Container {
  constructor (size) {
    super()
    this._sSize = size
    this._size = GridConfig.dimensions.tileBig
    let sizeBig = 68
    if (this._sSize === 'small') {
      sizeBig = 32
      this._size = GridConfig.dimensions.tile
    }
    // this._tf = new PIXI.extras.BitmapText('XXXX', {
    //   font: `${sizeBig}px Odin Rounded Bold Big`,
    //   align: 'center'
    // })
    const style = new PIXI.TextStyle({
      fill: [
        "#FFFFFF"
      ],
      fillGradientType: 1,
      fontFamily: "Courier New",
      fontSize: 32
    });
    this._tf = new PIXI.Text('Hello World', style);
    this.addChild(this._tf)

    this.alpha = 0
  }

  update (data) {
    this._tf.text = data.texts.hover.toLowerCase()
    this._from = 60
    let decal = 20
    if (this._sSize === 'small') {
      this._from = 30
      decal = 10
    }
    this.x = this._x + .5 * (this._size - this._tf.width) >> 0

    this._yPos = this._y + .5 * (this._size - this._tf.height) + decal >> 0
    this.y = this._yPos + this._from;
    // this.x = 100
    // this.y = 10
  }

  setPosition (x, y) {
    this._x = x
    this._y = y
  }

  add () {
    gridLayers.get('title').addChild(this)

  }

  remove () {
    gridLayers.get('title').removeChild(this)
  }

  over () {
    TweenLite.killTweensOf(this);
    TweenLite.to(this, .3, {
      delay: .15,
      alpha: 1,
      y: this._yPos,
      ease: Power1.easeOut
    })
  }

  out () {
    TweenLite.killTweensOf(this);
    TweenLite.to(this, .25, {
      alpha: 0,
      y: this._yPos + this._from,
      ease: Power2.easeOut
    })
  }
}

/* eslint-disable no-undef,no-floating-decimal */
// import {TweenLite, Power2} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2 } from 'gsap/TweenMax'

import GridConfig from '../GridConfig'
import gridLayers from '../GridLayers'

class TileAvatar extends PIXI.Container {
  constructor (value) {
    super()
    this._cnt = new PIXI.Container
    this.addChild(this._cnt)
    this._img = new PIXI.Sprite
    this._img.anchor.x = .5
    this._img.anchor.y = .5
    this._sSize = value
    this._size = GridConfig.dimensions.tileBig
    this._scale = 1
    if (value === 'small') {
      this._size = GridConfig.dimensions.tile
    }
    this._cnt.x = this._size >> 1
    this._cnt.y = this._size >> 1
    this._cnt.scale.set(0, 0)
    this._binds = {}
    this._binds.onTextureLoaded = this._onTextureLoaded.bind(this)
  }

  update (data, forse) {
    const committeeDetailsController = this;
    if (forse) {
      TweenLite.to(this._cnt.scale, .6, {
        x: 0,
        y: 0,
        ease: Power2.easeIn,
        onComplete () {
          committeeDetailsController._updateData(data)
        }
      })
    } else {
      this._updateData(data)
    }
  }

  _updateData (data) {
    if (this._img.parent) {
      this._cnt.removeChild(this._img)
      this._img.texture = null
    }
    this._textureToLoad = data.getTextureAvatar()
    if (this._textureToLoad.isLoaded) {
      this._onTextureLoaded()
    } else {
      this._textureToLoad.on("loaded", this._binds.onTextureLoaded)
      this._textureToLoad.load()
    }
  }

  _onTextureLoaded () {
    this._textureToLoad.off("loaded", this._binds.onTextureLoaded)
    this._img.texture = this._textureToLoad.get()
    if (this._sSize === 'big') {
      this._img.width = 130
      this._img.height = 130
    } else {
      this._img.width = 120
      this._img.height = 120
    }
    this._scale = this._img.scale.x
    this._cnt.addChild(this._img)
    TweenLite.to(this._cnt.scale, .6, {
      x: 1,
      y: 1,
      ease: Power2.easeOut
    })
  }

  setPosition (text, y) {
    this._xPos = text >> 0
    this._yPos = y >> 0
    this.x = this._xPos
    this.y = this._yPos
  }

  add () {
    gridLayers.get("circle").addChild(this)
  }

  remove () {
    if (this._textureToLoad) {
      this._textureToLoad.off("loaded")
      this._textureToLoad = null
    }
    gridLayers.get("circle").removeChild(this)
    this._cnt.removeChild(this._img)
    this._img.texture = null
  }

  over () {
    let languageOffsetY = 70
    let crossCenter = 1.2
    // if (this._sSize === "small") {
    //   languageOffsetY = 35
    //   crossCenter = .7
    // }
    TweenLite.to(this._cnt.scale, .4, {
      x: crossCenter,
      y: crossCenter,
      ease: Power2.easeOut
    })
    // TweenLite.to(this._cnt, .4, {
    //   y: languageOffsetY,
    //   ease: Power2.easeOut
    // })
  }

  out () {
    TweenLite.to(this._cnt.scale, .4, {
      x: 1,
      y: 1,
      ease: Power2.easeOut
    })
    TweenLite.to(this._cnt, .4, {
      y: this._size >> 1,
      ease: Power2.easeOut
    })
  }
}

export default TileAvatar

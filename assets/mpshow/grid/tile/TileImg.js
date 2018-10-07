/* eslint-disable no-undef,space-unary-ops,no-void,no-return-assign,no-floating-decimal,no-unused-expressions */
// import {TweenLite, Power2, Sine} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

import GridConfig from '../GridConfig'
import gridLayers from '../GridLayers'

export default class TileImg extends PIXI.Container {
  constructor (size) {
    super()
    this._cnt = new PIXI.Container
    this.addChild(this._cnt)
    this._sSize = size
    this._img = new PIXI.Sprite(null)
    this._img.alpha = 0
    this._img.scale.x = this._img.scale.y = this._scale
    this._scale = 1

    this._cnt.x = this._size >> 1
    this._cnt.y = this._size >> 1
    this._cnt.scale.set(0, 0)

    this._isOver = false
    this._isLoaded = false
    this._binds = {}
    this._binds.onTextureLoaded = this._onTextureLoaded.bind(this)
  }

  update (data) {
    if (this._img.parent) {
      this.removeChild(this._img)
    }
    if (this._textureToLoad) {
      this._textureToLoad.off("loaded")
      this._textureToLoad = null
    }
    TweenLite.killTweensOf(this._img)
    this._img.texture = null;
    this._textureToLoad = data.getTextureImg();
    if (this._textureToLoad.isLoaded) {
      this._onTextureLoaded()
    } else {
      this._textureToLoad.once("loaded", this._binds.onTextureLoaded)
      this._textureToLoad.load()
    }
/*
    const colorMatrix = [
      // R  G  B  A
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];
    const filter = new PIXI.filters.ColorMatrixFilter();
    filter.matrix = colorMatrix;

    filter.brightness(0.5, false);
    self.filters = [filter]
    */
  }

  _onTextureLoaded () {
    this._img.texture = this._textureToLoad.get();
    const text_canvas_dimensions = this._sSize === "big" ? GridConfig.dimensions.tileBig + 2 : GridConfig.dimensions.tile + 1;
    this._img.width = text_canvas_dimensions
    this._img.height = text_canvas_dimensions
    this._img.alpha = 0
    this._isLoaded = true
    if (this._isOver) {
      this.over()
    }
    //
    // let thing = new PIXI.Graphics();
    // this.addChild(thing);
    // thing.position.x = 10 / 2;
    // thing.position.y = 0 / 2;
    // thing.lineStyle(0);
    //
    // this.mask = thing
    //
    // this._scale = this._img.scale.x
    // this._cnt.addChild(this._img)
    // if (this._isLoaded) {
    //   this.addChild(this._img)
    //
    //   TweenLite.to(this._img, .6, {
    //     delay: .2,
    //     alpha: 0.25,
    //     ease: Sine.easeInOut
    //   })
    // }

  }

  setPosition (x, y) {
    this.x = x
    this.y = y
  }

  add () {
    gridLayers.get("img").addChild(this)
  }

  remove () {
    if (this._textureToLoad) {
      this._textureToLoad.off("loaded")
      this._textureToLoad = null
    }
    this._isLoaded = false
    gridLayers.get("img").removeChild(this)
    this.removeChild(this._img)
    this._img.texture = null
  }

  over () {
    if (this._isLoaded) {
      this.addChild(this._img)
    }
    this._isOver = true;
    if (this._img.texture) {
    TweenLite.killTweensOf(this._img)
    TweenLite.to(this._img, .6, {
      delay: .2,
      alpha: 1,
      ease: Sine.easeInOut
    })
    }
  }

  out () {
    const self = this;
    if (this._img.texture) {
      TweenLite.killTweensOf(this._img)
      TweenLite.to(this._img, .25, {
        alpha: 0.25,
        ease: Power2.easeOut
        // onComplete () {
        //   self.removeChild(self._img);
        // }
      })
      this._isOver = false
    }
  }
}

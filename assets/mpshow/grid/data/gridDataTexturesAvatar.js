/* eslint-disable no-undef */
import loop from '../../../fz/core/loop'
import Emitter from '../../../fz/events/Emitter'
import uImages from '../../../fz/utils/images'

class GridDataTexture extends Emitter {
  constructor (url) {
    super()
    this._url = url
    this.isLoading = false
    this.isLoaded = false
    this._binds = {}
    this._binds.onUpdate = this._onUpdate.bind(this)
  }

  _onUpdate () {
    if (this._texture._frame.width > 1 && this._texture._frame.height > 1) {
      loop.remove(this._binds.onUpdate)
      this.isLoading = false
      this.isLoaded = true
      this.emit('loaded')
    }
  }

  load () {

    // const _this2 = this;
    // if (!this.isLoading) {
    //   if (this.isLoaded) return void this.emit("loaded");
    //   this.isLoading = !0;
    //   const img = new Image;
    //   img.addEventListener("load", () => {
    //     const size = img.width << 1, canvas = document.createElement("canvas");
    //     canvas.width = size, canvas.height = size;
    //     const ctx = canvas.getContext("2d");
    //     ctx.save(), ctx.beginPath(), ctx.fillStyle = "green", ctx.arc(size >> 1, size >> 1, size >> 1, 0, 2 * Math.PI, !1), ctx.clip();
    //     const data = uImages.fit(img.width, img.height, size, size);
    //     ctx.drawImage(img, data.x, data.y, data.w, data.h), _this2._texture = PIXI.Texture.fromCanvas(canvas), _this2.isLoading = !1, _this2.isLoaded = !0, _this2.emit("loaded")
    //   }), img.crossOrigin = "anonymous", img.src = this._url
    // }
    const that = this;
    if (!this.isLoading) {
      if (this.isLoaded) {
        this.emit('loaded')
      }
      this.isLoading = true
      const img = new Image
      img.addEventListener('load', () => {
        const w = img.width << 1
        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = w
        const ctx = canvas.getContext("2d")
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = 'green'
        ctx.arc(w >> 1, w >> 1, w >> 1, 0, 2 * Math.PI, false)
        ctx.clip()
        const canvasSelection = uImages.fit(img.width, img.height, w, w)
        ctx.drawImage(img, canvasSelection.x, canvasSelection.y, canvasSelection.w, canvasSelection.h)
        that._texture = PIXI.Texture.fromCanvas(canvas)
        that.isLoading = false
        that.isLoaded = true
        that.emit('loaded')
      });
      img.crossOrigin = 'anonymous'
      img.src = this._url
    }
  }

  get () {
    return this._texture
  }
}

class GridDataTextures {
  constructor () {
    this._texturesByUrl = {}
  }

  get (url) {
    let texture = this._texturesByUrl[url];
    if (!texture) {
      texture = new GridDataTexture(url)
      this._texturesByUrl[url] = texture
    }
    return texture
  }
}

export default new GridDataTextures


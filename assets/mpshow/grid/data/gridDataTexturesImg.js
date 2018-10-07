/* eslint-disable no-undef */
import loop from '../../../fz/core/loop'
import Emitter from '../../../fz/events/Emitter'
import uImages from "../../../fz/utils/images";

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
    const self = this;
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
        // ctx.arc(w >> 1, w >> 1, w >> 1, 0, 2 * Math.PI, false)
        // ctx.clip()
        const canvasSelection = uImages.fit(img.width, img.height, w, w)
        ctx.drawImage(img, canvasSelection.x, canvasSelection.y, canvasSelection.w, canvasSelection.h)

        self._texture = PIXI.Texture.fromCanvas(canvas);
        self.isLoading = false;
        self.isLoaded = true;
        self.emit("loaded");
      })
      img.crossOrigin = "anonymous"
      img.src = this._url
    }
  }

  get () {
    return this._texture
  }
}

class GridDataTexturesImg extends Emitter {
  constructor () {
    super()
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

export default new GridDataTexturesImg

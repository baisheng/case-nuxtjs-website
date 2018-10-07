/* eslint-disable no-void,prefer-rest-params */
import Emitter from '../events/Emitter'
import timeout from '../utils/timeout'

class Stage extends Emitter {
  constructor () {
    super()
    this.width = 0
    this.height = 0
    this.resolution = window.devicePixelRatio
    this._binds = {}
    this._binds.onResize = this._onResize.bind(this)
    this._binds.update = this._update.bind(this)

  }

  _onResize () {
    timeout(this._binds.update, 10)
  }

  init () {
    const andDispatch = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
    window.addEventListener("resize", this._binds.onResize, false)
    window.addEventListener("orientationchange", this._binds.onResize, false)
    andDispatch && this._update()
  }

  _update () {
    this.width = window.innerWidth
    this.height = 500
    this.emit("resize")
  }

  forceResize () {
    const withDelay = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
    return withDelay ? void this._onResize() : void this._update()
  }
}

export default new Stage


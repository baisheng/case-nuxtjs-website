/* eslint-disable no-undef */
class GridLayers extends PIXI.Container {
  constructor (...arg) {
    super(...arg)
    this._layers = {}
    this._createLayer("bg")
    this._createLayer("shape")
    this._createLayer("img")
    this._createLayer("top")
    this._createLayer("circle")
    this._createLayer("borders")
    this._createLayer("avatar")
    this._createLayer("infos_bold")
    this._createLayer("infos_reg")
    this._createLayer("title")
    this._createLayer("share")
  }

  _createLayer (id) {
    const layer = new PIXI.Container;
    this[`_${id}`] = layer
    this._layers[id] = layer
    this.addChild(layer)
  }

  get (id) {
    return this._layers[id]
  }
}

export default new GridLayers

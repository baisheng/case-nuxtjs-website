/* eslint-disable no-undef,prefer-rest-params,no-void,no-floating-decimal */
// import '../../../../pixi-custom/GraphicsPharell'
// import '../../../../pixi-custom/PharellRenderer'
// import createShaderPlugin from '~/assets/pixi-custom/createShaderPlugin'
// import bubbleVefrt from '~/assets/bubble.vert'
// import bubbleFrag from '~/assets/bubble.frag'

class PoolGraphicsPharell {
  constructor () {
    this._itemsSmall = []
    this._itemsBig = []
  }

  init () {
    const count = arguments.length <= 0 || void 0 === arguments[0] ? 50 : arguments[0]
    for (let i = 0; i < count; i++) {
      this._itemsSmall.push(this._create(50, 50))
      this._itemsBig.push(this._create(100, 140))
    }
  }

  _create (countPoints, radius) {
    // const shape = new PIXI.GraphicsPharell
    const shape = new PIXI.Graphics
    shape.radBase = radius
    shape.beginFill(16777215)
    // shape.pluginName = 'bubble'
    let a = 0;
    let obj = null;
    const aAdd = 360 / countPoints * Math.PI / 180;
    for (let i = 0; i < countPoints; i++) {
      obj = {
        x: Math.cos(a) * radius,
        y: Math.sin(a) * radius,
        a: a
      };
      a += aAdd;
      if (i !== 0) {
        shape.lineTo(obj.x, obj.y);
      } else {
        shape.moveTo(obj.x, obj.y);
      }
    }
    return shape
  }

  getSmall () {
    return this._itemsSmall.length ? this._itemsSmall.shift() : null
  }

  getBig () {
    return this._itemsBig.length ? this._itemsBig.shift() : null
  }

  releaseSmall (item) {
    this._itemsSmall.push(item)
  }

  releaseBig (item) {
    this._itemsBig.push(item)
  }
}

export default new PoolGraphicsPharell

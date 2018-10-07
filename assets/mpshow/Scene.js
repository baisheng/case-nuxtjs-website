/* eslint-disable no-undef,space-unary-ops,no-void,no-return-assign,no-floating-decimal */
import {TweenLite, Cubic, Sine} from 'gsap'

// const isMobile = PIXI.utils.isMobile
// import engine from '../fw/core/engine'
import Grid from './grid/Grid.js'
const isMobile = false
export default class Scene extends PIXI.Container {
  constructor (...args) {
    super(...args)
    this._grid = new Grid
    this._grid.scale.x = this._grid.scale.y = isMobile ? .75 : 1
    this.addChild(this._grid)
    this.alpha = 0
  }

  bindEvents () {
    this._grid.bindEvents()
  }

  show (...args) {
    const delay = args.length <= 0 || void 0 === args[0] ? 0 : args[0]
    const duration = args.length <= 1 || void 0 === args[1] ? 1 : args[1]
    TweenLite.to(this, 2 / duration, {
      delay: delay,
      alpha: 1,
      ease: Quad.easeInOut
    });
  }

  blur () {}

  unblur () {}

  saveNewCard () {
    this._grid.saveNewCard()
  }
}

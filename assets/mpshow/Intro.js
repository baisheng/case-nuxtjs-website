/* eslint-disable no-floating-decimal,no-unused-expressions,prefer-rest-params */
import Emitter from '../fz/events/Emitter'
import {TweenLite, Sine, Back, Cubic, Quad} from 'gsap'
import * as interactions from '../../fz/core/interactions'

export default class Intro extends Emitter {
  constructor (emit) {
    super(emit)
    this.onClick = this._onClick()
  }

  _onClick (e) {
    e.preventDefault()
    e.stopPropagation()
    // $.post("/trackevent", {
    //     category: "SPLASH",
    //     action: "Click",
    //     label: "Splash pash button"
    //   })
    this.emit("start")
    this.unbindEvents()
  }

  bindElements () {
    this.dom = document.querySelector('.content--intro')
    this._domAvatar = this.dom.querySelector('.avatar')
    this._domSubtitle = this.dom.querySelector('h2')
    this._domTitle = this.dom.querySelector("h1")
    this._domBt = this.dom.querySelector(".bt")

  }

  bindEvents () {
  }

  unbindEvents () {
    interactions.off(this._domBt, "click", this.onClick)
  }

  show (...args) {
    const self = this
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0]
    const cb = arguments.length <= 1 || undefined === arguments[1] ? null : arguments[1];
    // $.post("/trackevent", {
    //   category: "SPLASH",
    //   action: "Landing",
    //   label: "Landing to the splash page"
    // })
    TweenLite.set(this.dom, {
      delay: delay, css: {alpha: 1}, onComplete: function () {
        self.dom.classList.add("visible")
      }
    })
    TweenLite.to(this._domAvatar, 1.2, {
      delay: delay,
      css: {alpha: 1, force3D: !0},
      ease: Quad.easeInOut
    })
    TweenLite.to(this._domSubtitle, 1.2, {
      delay: delay + .2,
      css: {alpha: 1, force3D: !0},
      ease: Quad.easeInOut
    })
    TweenLite.to(this._domTitle, 1.2, {
      delay: delay + .4,
      css: {alpha: 1, force3D: !0},
      ease: Quad.easeInOut
    })
    TweenLite.to(this, delay + 1, {onComplete: cb})
  }

  setReady () {
    const self = this;
    TweenLite.to(this._domBt, .8, {
      css: {alpha: 1, force3D: !0},
      ease: Cubic.easeInOut
    })
    setTimeout(function () {
      self._domBt.addEventListener("click", self._binds.onClick, !1)
    }, 10)
  }

  hide () {
    const self = this
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0];
    TweenLite.to(this.dom, .8, {
      delay: delay,
      css: {alpha: 0, force3D: !0},
      ease: Cubic.easeInOut,
      onComplete: function () {
        self.dom.parentNode.removeChild(self.dom)
      }
    })
  }
}

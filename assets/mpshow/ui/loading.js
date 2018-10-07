/* eslint-disable no-floating-decimal,prefer-rest-params,no-unused-expressions */
// import {Linear, Power2} from 'gsap'
// import { TweenMax } from "gsap";
// import TweenLite from "gsap/TweenLite"
// require("gsap/TweenLite")
// import {TweenLite, Power2, Linear} from "gsap"
import timeout from "../../fz/utils/timeout";
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

class Loading {
  constructor () {
    this._rot = 0
  }

  bindElements () {
    this._dom = document.getElementById("loading")
    TweenLite.set(this._dom, {
      css: {
        scale: .6,
        alpha: 0
      }
    })
  }

  start () {
    TweenLite.to(this._dom, .6, {
      delay: .2,
      css: {
        alpha: 1
      },
      ease: Power2.easeOut
    });

    this._loop()
  }

  _loop () {
    this._rot += 180;
    TweenLite.to(this._dom, 1, {
      css: {
        scaleX: .8 + .2 * Math.random(),
        scaleY: .8 + .2 * Math.random(),
        rotation: this._rot
      },
      ease: Linear.easeNone
    });
    this._ti = timeout(this._loop.bind(this), 800);
  }

  stop () {
    timeout.clear(this._ti);
    this._ti = null;
    TweenLite.to(this._dom, .4, {
      css: {
        scale: .4,
        alpha: 0,
        rotation: this._rot + 120
      },
      ease: Power2.easeOut,
      onComplete: this.dispose.bind(this)
    })
  }
  dispose () {
    if (this._ti) {
      timeout.clear(this._ti);
      this._ti = null;
    }
    this._dom.remove()
  }
}

export default new Loading

/* eslint-disable no-floating-decimal */
import Emitter from '../../fz/events/Emitter'
// import {TweenLite, Power2, Sine} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

class AddCard extends Emitter {
  bindElements () {
    this._domIframeCnt = document.getElementById("iframe-cnt")
    this._domIframe = null
  }

  setScene (scene) {
    this.scene = scene
  }

  show () {
    this._domIframe = this._domIframeCnt.querySelector("iframe")
    this.scene.blur()
    this._domIframeCnt.style.display = "block"
    TweenLite.set(this._domIframeCnt, {css: {alpha: 0}})
    TweenLite.to(this._domIframeCnt, .8, {
      css: {alpha: 1},
      ease: Power2.easeInOut
    })
  }

  hide () {
    const that = this;
    this.scene.unblur()
    TweenLite.to(this._domIframeCnt, .6, {
      css: {alpha: 0},
      ease: Power2.easeInOut,
      onComplete () {
        that.emit("hidden")
      }
    })
  }
}

export default new AddCard


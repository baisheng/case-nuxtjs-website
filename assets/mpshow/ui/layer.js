/* eslint-disable prefer-rest-params */
// import {TweenLite, Power2, Linear} from "gsap"
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

class Layer {
  constructor () {
    this._isShown = false
  }

  bindElements () {
    this.dom = document.getElementById('layer')
    this._domBg = this.dom.querySelector('.bg')
  }

  bindEvents () {
  }

  show () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0];
    this._isShown = true;
    this.dom.style.display = "block";
    TweenLite.to(this._domBg, 1, {
      delay: delay,
      css: {
        alpha: 1,
        force3D: true
      },
      ease: Power2.easeInOut
    });
  }

  hide () {
    const element = this;
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0];
    this._isShown = false;
    TweenLite.to(this._domBg, 1, {
      delay: delay,
      css: {
        alpha: 0,
        force3D: true
      },
      ease: Power2.easeInOut,
      onComplete () {
        if (!element._isShown) {
          element.dom.style.display = "none";
          element.setBlack();
        }
      }
    });
  }

  setWhite () {
    this._domBg.classList.add("white");
  }

  setBlack () {
    this._domBg.classList.remove("white");
  }
}

export default new Layer

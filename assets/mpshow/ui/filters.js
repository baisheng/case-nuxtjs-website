/* eslint-disable no-floating-decimal,prefer-rest-params */
// const GridConfig = (require("iao/ui/layer"), require("iao/grid/GridConfig"));
// const GridConfig
// import {TweenLite, Power2, Sine} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

import GridConfig from "../grid/GridConfig";
import gridObserver from "../grid/gridObserver";
import Emitter from "../../fz/events/Emitter";
import * as interactions from "../../fz/core/interactions";

class Filters extends Emitter {
  constructor () {
    super()
    this._prevInteractive = false
  }

  bindElements () {
    this.dom = document.getElementById("filters");
    this._domsFilter = this.dom.querySelectorAll(".filter");
    this._filters = [];
    let dom = null
    const n = this._domsFilter.length
    for (let i = 0; i < n; i++) {
      dom = this._domsFilter[i];
      this._filters.push(dom.getAttribute("data-id"));
    }
    this._countFilters = this._filters.length;
  }

  _onOver () {
    this._prevInteractive = gridObserver.isInteractive;
    gridObserver.setInteractive(false);
  }

  _onOut () {
    gridObserver.setInteractive(this._prevInteractive);
  }

  _onDown (e) {
    const eOrigin = e.origin;
    eOrigin.preventDefault();
    eOrigin.stopImmediatePropagation();
    const dom = eOrigin.currentTarget;
    const id = dom.getAttribute("data-id");
    if (dom.classList.contains("selected")) {
      if (this._filters.length <= 1) {
        return;
      }
      dom.classList.remove("selected");
      const index = this._filters.indexOf(id)
      if (index < 0) {
        return;
      }
      this._filters.splice(index, 1);
    } else {
      dom.classList.add("selected");
      this._filters.push(id)
    }
    // $.post("/trackevent", {
    //   category: "Home",
    //   action: "Click",
    //   label: "Click - Filter"
    // });
    this.emit("change");
  }

  _selectOnly (domToSelect) {
    let dom = null
    const n = this._domsFilter.length
    for (let i = 0; i < n; i++) {
      dom = this._domsFilter[i];
      if (domToSelect !== dom) {
        dom.classList.remove("selected");
      }
    }
  }

  bindEvents () {
    let dom = null
    const n = this._domsFilter.length
    for (let i = 0; i < n; i++) {
      dom = this._domsFilter[i];
      interactions.on(dom, "down", this._onDown.bind(this));
    }
    interactions.on(this.dom, "over", this._onOver.bind(this));
    interactions.on(this.dom, "out", this._onOut.bind(this));
  }

  has (type) {
    return this._filters.includes(type)
  }

  getRandom () {
    return this._filters ? this._filters[this._filters.length * Math.random() >> 0] : GridConfig.types[5 * Math.random() >> 0];
  }

  getFilters () {
    return this._filters
  }

  show () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0];
    TweenLite.to(this.dom, .6, {
      delay: delay,
      css: {
        y: -60
      },
      ease: Power2.easeInOut
    });
    let d = .2
    let dAdd = .09
    const dAddMin = .02
    const dFriction = .69
    let dom = null
    const n = this._domsFilter.length
    for (let i = 0; i < n; i++) {
      dom = this._domsFilter[i];
      TweenLite.set(dom, {
        css: {
          alpha: 0
        }
      });
      TweenLite.to(dom, .6, {
        delay: delay + d,
        css: {
          alpha: 1
        },
        ease: Power2.easeInOut
      });
      d += dAdd;
      dAdd *= dFriction;
      if (dAdd < dAddMin) {
        dAdd = dAddMin
      }
    }
  }

  hide () {
  }
}

export default new Filters

/* eslint-disable no-undef,no-floating-decimal */
// import {TweenLite, Power2, Sine} from 'gsap'
// const isMobile = PIXI.utils.isMobile

import stage from "../../fz/core/stage";
import * as interactions from "../../fz/core/interactions";
import GridConfig from "../grid/GridConfig";
import engine from "../cardflow/engineCardflow";
// import Steps from "../cardflow/steps/Steps";
import nav from "../cardflow/steps/navSteps"
import user from "../cardflow/cardUser";
import cardProject from "../cardflow/cardProject";
import Background from "../cardflow/Background";
import Card from "../cardflow/Card";
import { TweenLite } from 'gsap/TweenLite'
import {Power2} from 'gsap/TweenMax';

class CardFlow extends PIXI.Container {
  constructor () {
    super()
    this._width = 971
    this._height = 429
    this._domCnt = document.getElementById("cardflow")
    this._domCnt.appendChild(engine.dom)

    engine.stage.addChild(this)
    this._gMask = new PIXI.Graphics
    this._gMask.beginFill(16711935)
    this._gMask.drawRoundedRect(0, 0, this._width, this._height, 4)
    this.addChild(this._gMask)
    this.mask = this._gMask
    this._domBtClose = document.querySelector(".cardflow-close")
    TweenLite.set(this._domBtClose, {
      css: {
        alpha: 0,
        rotation: 90,
        scale: 0
      },
      ease: Power2.easeInOut
    })

    this._binds = {}
    this._binds.onResize = this._onResize.bind(this)
    this._binds.onNavChange = this._onNavChange.bind(this)
    this._binds.onProjectSave = this._onProjectSave.bind(this)
    this._binds.onBtClose = this._onBtClose.bind(this)
  }

  init () {
    this._background = new Background(this._width, this._height);
    this.addChild(this._background);
    // console.log(this._background)
    // this._steps = new Steps;
    // this.addChild(this._steps);
    this._card = new Card;
    this._card.x = 758;
    this._card.y = 225;
    this.addChild(this._card);
  }

  _onResize () {
    this.x = stage.width - this._width >> 1;
    this.y = stage.height - this._height >> 1;
  }

  _onNavChange () {
    if (nav.id === 'choice') {
      const childBox = GridConfig.colors[nav.type];
      this._background.setSelectedColor(childBox);
      this._background.showSelectedColor(.285);
      this._background.hideEndColor(.285);
      this._steps.showBtBack(.5);
      this._card.retract();
    } else {
      if (nav.id === 'selection') {
        this._background.hideSelectedColor();
        // this._steps.hideBtBack(0);
        this._card.expand();
      } else {
        if (nav.id === 'final') {
          this._background.showEndColor();
          this._card.expand();
        }
      }
    }
  }

  _onBtClose (origin) {
    // origin.preventDefault();
    window.closeCardFlow();
  }

  _onProjectSave () {
    interactions.off(this._domBtClose, "click", this._binds.onBtClose);
    this._hideBtClose();
  }

  bindEvents () {
    engine.resume();
    stage.on("resize", this._binds.onResize);
    nav.on("changeId", this._binds.onNavChange);
    cardProject.on("saving", this._binds.onProjectSave);
    this._onResize();
    interactions.on(this._domBtClose, "click", this._binds.onBtClose);
  }

  unbindEvents () {
    engine.pause();
    this._steps.unbindEvents();
    this._card.unbindEvents();
    stage.off("resize", this._binds.onResize);
    nav.off("changeId", this._binds.onNavChange);
    cardProject.off("saving", this._binds.onProjectSave);
    interactions.off(this._domBtClose, "click", this._binds.onBtClose);
  }

  show (delay) {
    this.init();
    this.bindEvents();
    this.alpha = 1;
    this._domCnt.style.display = "block";
    // if (user.isConnected) {
      this._show(delay, "selection");
    // } else {
    // this._show(delay, "login");
    // }
  }

  _show (delay, id) {
    this._background.setColor(15329769);
    this._background.setSecondaryColor(16777215);
    this._background.show(delay);
    TweenLite.to(this._domBtClose, .6, {
      delay: delay,
      css: {
        alpha: 1,
        rotation: 0,
        scale: 1
      },
      ease: Power2.easeInOut
    });
    nav.setId(id);
    this._card.show(delay);
    // this._steps.bindEvents();
    // this._steps.show(delay + .5);
    this._card.bindEvents();
  }

  _hideBtClose (...args) {
    const delay = args.length <= 0 || undefined === args[0] ? 0 : args[0];
    interactions.off(this._domBtClose, "click", this._binds.onBtClose);
    TweenLite.to(this._domBtClose, .6, {
      delay: delay,
      css: {
        alpha: 0,
        rotation: 90,
        scale: 0
      },
      ease: Power2.easeInOut
    });
  }

  hide (...args) {
    const self = this;
    // if (args.length <= 0 || void 0 === args[0]) {
    //   0;
    // } else {
    //   args[0];
    // }
    this._card.unbindEvents();
    this._background.hide(.2);
    this._card.hide();
    this._steps.hide();
    this._hideBtClose();
    TweenLite.set(this, {
      delay: 1,
      onComplete () {
        self.unbindEvents();
        self._domCnt.style.display = "none";
        self.removeChild(this._background);
        self.removeChild(this._steps);
        self.removeChild(this._card);
      }
    });
  }
}

export default CardFlow



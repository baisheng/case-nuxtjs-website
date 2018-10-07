/* eslint-disable no-undef,no-floating-decimal,prefer-rest-params */
// import {TweenLite, Power2, Linear} from "gsap"
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Linear } from 'gsap/TweenMax'
class Background extends PIXI.Container {
  constructor (w, h) {
    super()
    this._width = w
    this._height = h
    this._isSelectedColorsCreated = false
    this._isSelectedColorsVisible = false
    this._isEndColorsCreated = false
    this._isEndColorsVisible = false
    this._separator = new PIXI.Sprite(PIXI.Texture.fromFrame("cardflow_separator.png"))
    this._separator.scale.set(.5, .5)
    this._separator.x = this._width - 429
    this._separator.alpha = 0
    this._eltsColor = null
  }

  setColor (c) {
    // this._eltsColor;
    this._createNewEltsColor(c)
  }

  setSecondaryColor (c) {
    this._createSecondaryColors(c)
  }

  _createNewEltsColor (c) {
    const glyphPositions = [{
      x: Math.random() * this._width * .35,
      y: Math.random() * this._height * .4 + .6 * this.height
    }, {
      x: Math.random() * this._width * .4 + .35 * this._width,
      y: Math.random() * this._height * .4 + .2 * this._height
    }, {
      x: Math.random() * this._width * .4 + .6 * this._width,
      y: Math.random() * this._height * .4
    }];
    this._eltsColor = []
    let elt = null
    const n = 3
    for (let i = 0; i < n; i++) {
      elt = new PIXI.Sprite(PIXI.Texture.fromFrame('cardflow_circle.png'))
      elt.x = glyphPositions[i].x
      elt.y = glyphPositions[i].y
      elt.tint = c
      elt.anchor.set(.5, .5)
      elt.scale.x = elt.scale.y = 0
      this.addChild(elt)
      this._eltsColor.push(elt)
    }
  }

  _createSecondaryColors (c) {
    this._eltSecondary = new PIXI.Sprite(PIXI.Texture.fromFrame("cardflow_circle.png"))
    this._eltSecondary.tint = c
    this._eltSecondary.anchor.set(.5, .5)
    this._eltSecondary.scale.x = this._eltSecondary.scale.y = 0
    this._eltSecondary.x = this._width - 40
    this._eltSecondary.y = 40
    this.addChild(this._eltSecondary)
    const slideX = 429
    this._mskSecondary = new PIXI.Graphics
    this._mskSecondary.beginFill(65280)
    this._mskSecondary.drawRect(0, 0, slideX, this._height)
    this._mskSecondary.x = this._width - slideX
    this.addChild(this._mskSecondary)
    this._eltSecondary.mask = this._mskSecondary
  }

  _createEndColors (c) {
    this._eltEnd = new PIXI.Sprite(PIXI.Texture.fromFrame("cardflow_circle.png"))
    this._eltEnd.tint = 16777215
    this._eltEnd.anchor.set(.5, .5)
    this._eltEnd.scale.x = this._eltEnd.scale.y = 0
    this._eltEnd.x = this._width - 40
    this._eltEnd.y = 40
    this.addChild(this._eltEnd)
    const slideX = 429
    this._mskEnd = new PIXI.Graphics
    this._mskEnd.beginFill(65280)
    this._mskEnd.drawRect(0, 0, slideX, this._height)
    this._mskEnd.x = this._width - slideX
    this.addChild(this._mskEnd)
    this._eltEnd.mask = this._mskEnd
    this._isEndColorsCreated = true
  }

  setSelectedColor (color) {
    if (!this._isSelectedColorsCreated) {
      this._createSelectedColors()
    }
    this._eltSelectedLeft.tint = color.default
    this._eltSelectedRight.tint = color.default
    this._separator.tint = color.dark
  }

  _createSelectedColors () {
    this._eltSelectedLeft = new PIXI.Sprite(PIXI.Texture.fromFrame("cardflow_circle.png"))
    this._eltSelectedLeft.y = this._height
    this._eltSelectedLeft.anchor.set(.5, .5)
    this._eltSelectedLeft.scale.set(0, 0)
    this.addChild(this._eltSelectedLeft)
    this._eltSelectedRight = new PIXI.Sprite(PIXI.Texture.fromFrame("cardflow_circle.png"))
    this._eltSelectedRight.x = this._width
    this._eltSelectedRight.anchor.set(.5, .5)
    this._eltSelectedRight.scale.set(0, 0)
    this.addChild(this._eltSelectedRight)
    this._isSelectedColorsCreated = true
  }

  showSelectedColor () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0];
    if (!this._isSelectedColorsVisible) {
      TweenLite.to(this._eltSelectedLeft.scale, .6, {
        delay: delay,
        x: 1.25,
        y: 1.25,
        ease: Power2.easeInOut
      });
      TweenLite.to(this._eltSelectedRight.scale, .6, {
        delay: delay,
        x: 1.25,
        y: 1.25,
        ease: Power2.easeInOut
      });
      this.addChild(this._separator);
      TweenLite.to(this._separator, .6, {
        delay: delay + .15,
        alpha: 1,
        ease: Power2.easeInOut
      });
      this._isSelectedColorsVisible = true;
    }
  }

  hideSelectedColor () {
    const self = this;
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0]
    if (this._isSelectedColorsVisible) {
      TweenLite.to(this._eltSelectedLeft.scale, .6, {
        delay: delay,
        x: 0,
        y: 0,
        ease: Power2.easeInOut
      })
      TweenLite.to(this._eltSelectedRight.scale, .6, {
        delay: delay,
        x: 0,
        y: 0,
        ease: Power2.easeInOut
      })
      TweenLite.to(this._separator, .6, {
        delay: delay,
        alpha: 0,
        ease: Power2.easeInOut,
        onComplete () {
          self.removeChild(self._separator);
        }
      })
      this._isSelectedColorsVisible = false;
    }
  }

  show (delay) {
    let d = 0
    let elt = null
    const n = this._eltsColor.length
    for (let i = 0; i < n; i++) {
      elt = this._eltsColor[i];
      TweenLite.to(elt.scale, .8, {
        delay: delay + d,
        x: 1,
        y: 1,
        ease: Power2.easeInOut
      });
      d += .0235;
    }
    TweenLite.to(this._eltSecondary.scale, .6, {
      delay: delay + .15,
      x: 1.2,
      y: 1.2,
      ease: Power2.easeInOut
    })
  }

  showEndColor () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0]
    if (!this._isEndColorsCreated) {
      this._createEndColors();
    }
    this._eltEnd.x = this._width - 40
    this._eltEnd.y = 40
    this._eltEnd.alpha = 1
    TweenLite.to(this._eltEnd.scale, .6, {
      delay: delay,
      x: 1.2,
      y: 1.2,
      ease: Power2.easeInOut
    })
    this._isEndColorsVisible = true
  }

  hideEndColor () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0]
    if (this._isEndColorsVisible) {
      TweenLite.to(this._eltEnd, .4, {
        delay: delay,
        x: this._width + 40,
        y: -40,
        ease: Power2.easeInOut
      })
      TweenLite.to(this._eltEnd.scale, .4, {
        delay: delay,
        x: 0,
        y: 0,
        ease: Power2.easeInOut
      })
      this._isEndColorsVisible = false
    }
  }

  hide () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0]
    // if (arguments.length <= 1 || undefined === arguments[1]) {
    //   null;
    // } else {
    //   arguments[1];
    // }
    this.hideEndColor(delay)
    this.hideSelectedColor(delay)
    let d = 0
    let elt = null
    const n = this._eltsColor.length
    for (let i = 0; i < n; i++) {
      elt = this._eltsColor[i];
      TweenLite.to(elt.scale, .6, {
        delay: delay + d,
        x: 0,
        y: 0,
        ease: Power2.easeInOut
      });
      d += .0235;
    }
    TweenLite.to(this._eltSecondary.scale, .6, {
      delay: start + .15,
      x: 0,
      y: 0,
      ease: Power2.easeInOut
    })
  }
}
export default Background

/* eslint-disable no-undef,space-unary-ops,no-void,no-return-assign,no-floating-decimal */
// import {TweenLite, Power2, Sine} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

import GridConfig from '../GridConfig'
import gridLayers from '../GridLayers'
import gridObserver from '../gridObserver'

export default class TileTop extends PIXI.Container {
  constructor (size) {
    super()
    this._sSize = size
    this._scale = 1
    this._scaleIcon = 1
    this._dxIconShare = 25
    this._dyIconShare = 30
    this._size = GridConfig.dimensions.tileBig
    if (size === 'small') {
      this._scale = .67
      this._scaleIcon = .81
      this._size = GridConfig.dimensions.tile
      this._dxIconShare = 24
      this._dyIconShare = 28
    }

    this._shape = new PIXI.Sprite(PIXI.Texture.fromFrame("hover_top.png"))
    this._shape.anchor.x = .5
    this._shape.scale.x = this._shape.scale.y = this._scale
    this._shape.alpha = 0
    this._shape.x = this._size >> 1
    this.addChild(this._shape)
    this._iconShare = new PIXI.Sprite(PIXI.Texture.fromFrame("share.png"))
    this._iconShare.tint = 13421772
    this._iconShare.x = this._size - this._dxIconShare
    this._iconShare.y = this._dyIconShare
    this._iconShare.anchor.x = this._iconShare.anchor.y = .5
    this._iconShare.scale.x = this._iconShare.scale.y = this._scaleIcon
    this.addChild(this._iconShare)
    this._iconShareOver = new PIXI.Sprite(PIXI.Texture.fromFrame("share.png"))
    this._iconShareOver.tint = 13421772
    this._iconShareOver.x = this._size - this._dxIconShare
    this._iconShareOver.y = this._dyIconShare
    this._iconShareOver.anchor.x = this._iconShareOver.anchor.y = .5
    this._iconShareOver.scale.x = this._iconShareOver.scale.y = this._scaleIcon
    this._iconShareOver.alpha = 0
    this.addChild(this._iconShareOver)
    this._zoneShare = new PIXI.Sprite(PIXI.Texture.fromFrame("share.png"))
    this._zoneShare.width = 60
    this._zoneShare.height = 60
    this._zoneShare.x = this._size - this._zoneShare.width
    this._zoneShare.alpha = 0
    this.addChild(this._zoneShare)
    this._iconShareHover = new PIXI.Sprite(PIXI.Texture.fromFrame("share.png"))
    this._iconShareHover.x = this._size - this._dxIconShare
    this._iconShareHover.y = this._dyIconShare
    this._iconShareHover.anchor.x = this._iconShareHover.anchor.y = .5
    this._iconShareHover.scale.x = this._iconShareHover.scale.y = this._scaleIcon
    this._iconShareHover.alpha = 0
    this.addChild(this._iconShareHover)
    this._binds = {}
    this._binds.onShareOver = this._onShareOver.bind(this)
    this._binds.onShareOut = this._onShareOut.bind(this)
    this._binds.onShareClick = this._onShareClick.bind(this)
  }

  _onShareOver () {
    if (gridObserver.canOver && gridObserver.isInteractive) {
      TweenLite.to(this._iconShareOver, .25, {
        alpha: 1,
        ease: Power2.easeOut
      });
      TweenLite.to(this._iconShare, .15, {
        alpha: 0,
        ease: Power2.easeOut
      });
    }
  }

  _onShareOut () {
    TweenLite.to(this._iconShareOver, .15, {
      alpha: 0,
      ease: Power2.easeOut
    })
    TweenLite.to(this._iconShare, .15, {
      alpha: 1,
      ease: Power2.easeOut
    })
  }

  _onShareClick () {
    if (gridObserver.canOver && gridObserver.isClick && gridObserver.isInteractive) {
      this._share.add(true)
      this._share.activate(true)
      this._share.show()
      this.__parent.add()
    }
  }

  update (data) {
    this._iconShareOver.tint = data.colors.default
    this._shape.tint = data.colors.dark
    this._iconShareHover.tint = data.colors.dark
  }

  setPosition (x, y) {
    this.x = x
    this.y = y
  }

  add () {
    gridLayers.get('top').addChild(this)
  }

  remove () {
    gridLayers.get('top').removeChild(this)
  }

  over () {
    TweenLite.killTweensOf(this._shape)
    TweenLite.killTweensOf(this._iconShare)
    TweenLite.killTweensOf(this._iconShareHover)
    // TweenLite.to(this._shape, .8, {
    //   delay: .2,
    //   alpha: 1,
    //   ease: Sine.easeOut
    // });
    TweenLite.to(this._iconShare, .25, {
      delay: this._size === 'big' ? .5 : .15,
      alpha: 0,
      ease: Power2.easeOut
    });
    TweenLite.to(this._iconShareHover, .25, {
      delay: this._size === 'big' ? .5 : .15,
      alpha: 1,
      ease: Power2.easeOut
    });
  }

  out () {
    TweenLite.killTweensOf(this._shape)
    TweenLite.killTweensOf(this._iconShare)
    TweenLite.killTweensOf(this._iconShareHover)
    TweenLite.to(this._shape, .1, {
      alpha: 0,
      ease: Power2.easeOut
    })
    TweenLite.to(this._iconShare, .25, {
      delay: .1,
      alpha: 1,
      ease: Power2.easeOut
    })
    TweenLite.to(this._iconShareHover, .25, {
      delay: .1,
      alpha: 0,
      ease: Power2.easeOut
    })
  }

  activate () {
    this._zoneShare.interactive = this._zoneShare.buttonMode = true
    this._zoneShare.on('mouseover', this._binds.onShareOver)
    this._zoneShare.on('mouseout', this._binds.onShareOut)
    this._zoneShare.on('mouseup', this._binds.onShareClick)
  }

  deactivate () {
    this._zoneShare.interactive = this._zoneShare.buttonMode = false
    this._zoneShare.off('mouseover', this._binds.onShareOver)
    this._zoneShare.off('mouseout', this._binds.onShareOut)
    this._zoneShare.off('mouseup', this._binds.onShareClick)
    this._share.deactivate(true)
  }

  setShare (value, parent) {
    this._share = value
    this.__parent = parent
  }
}

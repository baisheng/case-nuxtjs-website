/* eslint-disable no-floating-decimal */
import { TweenLite } from 'gsap/TweenLite'
import { Power2 } from 'gsap/TweenMax'

import config from '../core/config'
import * as interactions from '../../fz/core/interactions'
import cardUser from '../cardflow/cardUser'
import menu from '../ui/menu'
import layer from '../ui/layer'
import addcard from '../ui/addcard'
import gridObserver from '../grid/gridObserver'

class Topbar {
  constructor () {
    this._hidden = true
    this._isLocked = false
    this._binds = {}
    this._binds.onAddcardHidden = this._onAddcardHidden.bind(this)
    this._binds.onBtTourClickClose = this._onBtTourClickClose.bind(this)
  }

  _onBtMenuClick (e) {
    e.origin.preventDefault()
    menu.show()
    // $.post("/trackevent", {
    //   category: "Home",
    //   action: "Click",
    //   label: "Click - Menu hamburger"
    // })
  }

  _onBtCardClick (e) {
    e.origin.preventDefault()
    window.showCardFlow()
    if (cardUser.isConnected) {
      // $.post("/trackevent", {
      //   category: "Home",
      //   action: "Click",
      //   label: "Click - Update A Card"
      // })
    } else {
      // $.post("/trackevent",
      //   {category: "Home",
      //     action: "Click", label: "Click - Create A Card"}
    }
  }

  _onBtTourClick (e) {
    const that = this
    e.origin.preventDefault()
    // $.post("/trackevent", {
    //   category : "Home",
    //   action : "Click",
    //   label : "Click - Tour dates"
    // });
    layer.setWhite()
    layer.show()
    gridObserver.setInteractive(false)
    document.body.classList.add('modal-active')
    TweenLite.to(document.getElementById('bt-music'), .4, {
      css: {
        alpha: 0
      },
      ease: Power2.easeOut
    })
    this._domTour.style.display = 'block'
    TweenLite.to(this._domTour, .6, {
      delay: .4,
      css: {
        alpha: 1
      },
      ease: Power2.easeOut,
      onStart () {
        that._domTour.classList.add('loaded')
      }
    })
    this._domTourClose.addEventListener('click', this._binds.onBtTourClickClose, false)
  }

  _onBtTourClickClose (e) {
    const that = this
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    layer.hide()
    TweenLite.to(document.getElementById('bt-music'), .4, {
      delay: .4,
      css: {
        alpha: 1
      },
      ease: Power2.easeIn
    })
    TweenLite.to(this._domTour, .6, {
      css: {
        alpha: 0
      },
      ease: Power2.easeOut,
      onComplete () {
        document.body.classList.remove('modal-active')
        that._domTour.classList.remove('loaded')
        that._domTour.style.display = 'none'
        gridObserver.setInteractive(true)
      }
    })
    this._domTourClose.removeEventListener('click', this._binds.onBtTourClickClose, false)
  }

  _onAddcardHidden () {
    this._clearIframe()
  }

  bindElements () {
    this.dom = document.getElementById('topbar')
    this._domIframeCnt = document.getElementById('iframe-cnt')
    this._domBtMenu = this.dom.querySelector('.topbar-bt-menu')
    this._domBtCards = this.dom.querySelectorAll('.topbar-bt-card')
    this._domBtTour = this.dom.querySelector('.topbar-ontour')
    this._domTour = document.getElementById('modal-tour')
    this._domTourClose = this._domTour.querySelector('.close')
  }

  bindEvents () {
    interactions.on(this._domBtMenu, 'click', this._onBtMenuClick.bind(this))
    interactions.on(this._domBtTour, 'click', this._onBtTourClick.bind(this))
    const n = this._domBtCards.length
    for (let i = 0; i < n; i++) {
      interactions.on(this._domBtCards[i], 'click', this._onBtCardClick.bind(this))
    }
    addcard.on('hidden', this._binds.onAddcardHidden)
  }

  unbindEvents () {
    const n = this._domBtCards.length
    for (let i = 0; i < n; i++) {
      interactions.off(this._domBtCards[i], 'click', this._onBtCardClick.bind(this))
    }
    addcard.off('hidden', this._binds.onAddcardHidden)
  }

  show () {
    if (!this._isLocked) {
      if (this._hidden) {
        this._hidden = false
        TweenLite.to(this.dom, .6, {
          css: {
            y: 0,
            force3D: true
          },
          ease: Power2.easeInOut
        })
      }
    }
  }

  hide () {
    if (!(this._isLocked || this._hidden)) {
      this._hidden = true
      TweenLite.to(this.dom, .6, {
        css: {
          y: -config.dimensions.topbar.h,
          force3D: true
        },
        ease: Power2.easeInOut
      })
    }
  }

  lock (value) {
    this._isLocked = value
  }

  openIframe () {
    this._createIframe()
  }
}

export default new Topbar


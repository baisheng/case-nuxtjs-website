/* eslint-disable no-undef,no-floating-decimal */
// import {TweenLite, Power2, Sine} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Sine } from 'gsap/TweenMax'
// const isMobile = PIXI.utils.isMobile
const isMobile = false
import * as interactions from '../../fz/core/interactions'
import stage from '../../fz/core/stage'
import loop from '../../fz/core/loop'
import timeout from '../../fz/utils/timeout'
import configGlobal from '../core/config'
import GridCamera from '../grid/GridCamera'
import GridTiles from '../grid/GridTiles'
import * as GridUtils from '../grid/GridUtils'
import gridFilters from '../grid/gridFilters'
import gridLayers from '../grid/GridLayers'
import gridObserver from '../grid/gridObserver'
// import topbar from '../ui/topbar'

export default class Grid extends PIXI.Container {
  constructor () {
    super()
    this._camera = new GridCamera
    this._tiles = new GridTiles
    this._xLast = 0
    this._yLast = 0
    this._xTo = -this._tiles.width >> 1
    this._yTo = -this._tiles.height >> 1
    this._xTo -= 657
    this._yTo -= 877
    this._xStart = this._xTo
    this._yStart = this._yTo
    this._xMin = -1e3
    this._yMin = -1e3
    this._xMax = -this._tiles.width + 1e3
    this._yMax = -this._tiles.height + 1e3
    this.idxs = {
      x: -1,
      y: -1,
      w: -1,
      h: -1
    }
    this._createElements()
    this._binds = {}
    this._binds.onResize = this._onResize.bind(this)
    this._binds.onMouseDown = this._onMouseDown.bind(this)
    this._binds.onDownDelayPassed = this._onDownDelayPassed.bind(this)
    this._binds.onMouseMove = this._onMouseMove.bind(this)
    this._binds.onMouseUp = this._onMouseUp.bind(this)
    this._binds.onMouseExplore = this._onMouseExplore.bind(this)
    this._binds.onMouseScroll = this._onMouseScroll.bind(this)
    this._binds.onUpdate = this._onUpdate.bind(this)
    this._binds.onLogoClick = this._onLogoClick.bind(this)
  }

  _createElements () {
    this._cntExploration = new PIXI.Container
    this.addChild(this._cntExploration)
    this._cnt = new PIXI.Container
    this._cnt.x = this._xTo
    this._cnt.y = this._yTo
    this._cntExploration.addChild(this._cnt)
    this._cnt.addChild(gridLayers)

    // this._domLogo = document.querySelector(".topbar-title");
    this._domMain = document.getElementById('mpshow')
  }

  _onResize () {
    this._swh = stage.width >> 1
    this._shh = stage.height >> 1
    this._swh *= 1 + (1 - this.scale.x)
    this._shh *= 1 + (1 - this.scale.y)
    this._cntExploration.x = this._swh
    this._cntExploration.y = this._shh
    this._xExplorationTo = this._swh
    this._yExplorationTo = this._shh
    this._camera.update(-this._swh, -this._shh, stage.width, stage.height)
  }

  _onMouseDown (e) {
    // if (!(!gridObserver.isInteractive || e.y < configGlobal.dimensions.topbar.h || gridObserver.isMenuOpen && e.x < 380)) {
    if (!(!gridObserver.isInteractive)) {
      this._xLast = e.x
      this._yLast = e.y
      gridObserver.isClick = true
      this._tiDownDelay = timeout(this._binds.onDownDelayPassed, 150)
      interactions.on(window, 'move', this._binds.onMouseMove)
      interactions.on(window, 'up', this._binds.onMouseUp)
    }
  }

  _onDownDelayPassed () {
    gridObserver.setDragging(true)
    gridObserver.isClick = false
    TweenLite.to(this._cntExploration.scale, .25, {
      x: .9,
      y: .9,
      ease: Sine.easeOut
    })
    // topbar.hide()
  }

  _translateInGridCoords (x, y) {
    return {
      x: x - this._cnt.x - this._swh,
      y: y - this._cnt.y - this._shh
    }
  }

  _onMouseMove (e) {
    const x = e.x
    const y = e.y
    const gutterXUnit = x - this._xLast
    const edgeXUnit = y - this._yLast
    const ratio = isMobile ? 2 : 1
    this._xTo += gutterXUnit * ratio
    this._yTo += edgeXUnit * ratio
    this._xLast = x
    this._yLast = y
  }

  _onMouseUp (data) {
    gridObserver.setDragging(false)
    timeout.clear(this._tiDownDelay)
    TweenLite.to(this._cntExploration.scale, .3, {
      delay: .1,
      x: 1,
      y: 1,
      ease: Sine.easeOut
    })
    interactions.off(window, 'move', this._binds.onMouseMove)
    interactions.off(window, 'up', this._binds.onMouseUp)
    // topbar.show()
  }

  _onMouseExplore (e) {
    if (gridObserver.isInteractive) {
      const dx = (stage.width >> 1) - e.x
      const dy = (stage.height >> 1) - e.y
      const xAdd = dx / this._swh * 85
      const yAdd = dy / this._shh * 85
      this._xExplorationTo = this._swh + xAdd
      this._yExplorationTo = this._shh + yAdd
    }
  }

  _onMouseScroll (event) {
    if (gridObserver.isInteractive) {
      event.preventDefault()
      this._isDragDrop = false
      this._xTo += .4 * -event.deltaX
      this._yTo += .4 * -event.deltaY
      // topbar.hide()
      if (this._ti) {
        timeout.clear(this._ti)
      }
      this._ti = timeout(this._onScrollTimingDone.bind(this), 250)
    }
  }

  _onScrollTimingDone () {
    this._ti = null
    // topbar.show()
  }

  _onUpdate () {
    if (this._xTo > this._xMin) {
      this._xTo = this._xMin
    }
    if (this._xTo < this._xMax) {
      this._xTo = this._xMax
    }
    if (this._yTo > this._yMin) {
      this._yTo = this._yMin
    }
    if (this._yTo < this._yMax) {
      this._yTo = this._yMax
    }
    const dx = this._xTo - this._cnt.x
    const dy = this._yTo - this._cnt.y
    Math.sqrt(dx * dx + dy * dy)
    this._cnt.x += .123 * dx
    this._cnt.y += .123 * dy
    this._cntExploration.x += .09 * (this._xExplorationTo - this._cntExploration.x)
    this._cntExploration.y += .09 * (this._yExplorationTo - this._cntExploration.y)
    const x = this._camera.idxs.x - GridUtils.getIdx(this._cnt.x >> 0)
    const y = this._camera.idxs.y - GridUtils.getIdx(this._cnt.y >> 0)
    const elmW = x + this._camera.idxs.w
    const k = y + this._camera.idxs.h
    if (!(x === this.idxs.x && y === this.idxs.y && elmW === this.idxs.w && k === this.idxs.h)) {
      this.idxs.x = x
      this.idxs.y = y
      this.idxs.w = elmW
      this.idxs.h = k
      this._tiles.refresh(this.idxs)
    }
  }

  _onLogoClick () {
    this._xTo = this._xStart
    this._yTo = this._yStart
    // $.post("/trackevent", {
    //   category : "Home",
    //   action : "Click",
    //   label : "Click - Find your card"
    // });
  }

  bindEvents () {
    stage.on('resize', this._binds.onResize)
    this._onResize()
    gridFilters.bindEvents()
    interactions.on(this._domMain, 'down', this._binds.onMouseDown)
    interactions.on(this._domMain, 'move', this._binds.onMouseExplore)
    // interactions.on(this._domLogo, "click", this._binds.onLogoClick);
    this._domMain.addEventListener('wheel', this._binds.onMouseScroll, false)
    loop.add(this._binds.onUpdate)
  }

  saveNewCard () {
    this._xTo = this._xStart
    this._yTo = this._yStart
    this._tiles.saveNewCard()
  }
}

/* eslint-disable no-void,prefer-rest-params,no-unused-expressions,space-unary-ops,no-return-assign,no-undef */
// const isMobile = PIXI.utils.isMobile

import Stage from '~/assets/fz/core/stage'
import engine from '../../../../fw/core/engine'
import timeout from '../../../../fz/utils/timeout'
import gridObserver from '../../../grid/gridObserver'
import TileAvatar from '../../../grid/tile/TileAvatar'
import TileBg from '../../../grid/tile/TileBg'
import TileBorders from '../../../grid/tile/TileBorders'
import TileCircle from '../../../grid/tile/TileCircle'
import TileImg from '../../../grid/tile/TileImg'
import TileInfosBold from '../../../grid/tile/TileInfosBold'
import TileInfosReg from '../../../grid/tile/TileInfosReg'

// let TileShape
// const TileShape = require(isMobile ? '../../../grid/tile/TileShapeStatic' : '../../../grid/tile/TileShape')
import TileShapeStatic from '../../../grid/tile/TileShapeStatic'
import TileShape from '../../../grid/tile/TileShape'
import TileTitle from '../../../grid/tile/TileTitle'
import TileTop from '../../../grid/tile/TileTop'
import TileShare from '../../../grid/tile/TileShare'

const isMobile = false

class TileElements {
  constructor (size) {
    this._size = size
    this._data = null
    this._isOver = false
    this._isOverDuringDragging = false
    this._lockOver = false
    this.debug = false
    this._createElements()
    this._binds = {}
    this._binds.onMouseOver = this._onMouseOver.bind(this)
    this._binds.onMouseOut = this._onMouseOut.bind(this)
    this._binds.onMouseUp = this._onMouseUp.bind(this)
    this._binds.onChangeDragging = this._onChangeDragging.bind(this)
    this._binds.onChangeInteractive = this._onChangeInteractive.bind(this)
  }

  _createElements () {
    this._elts = []
    this._bg = new TileBg(this._size)
    this._elts.push(this._bg)
    // if (isMobile) {
    //   this._shape = new TileShapeStatic(this._size)
    // } else {
    //   this._shape = new TileShape(this._size)
    // }
    // this._shape = new TileShape(this._size)
    // this._elts.push(this._shape)
    // if (!isMobile) {
    //   this._img = new TileImg(this._size)
    //   this._elts.push(this._img)
    // }
    this._top = new TileTop(this._size)
    this._elts.push(this._top)
    this._circle = new TileCircle(this._size)
    this._elts.push(this._circle)
    this._avatar = new TileAvatar(this._size)
    this._elts.push(this._avatar)
    // this._borders = new TileBorders(this._size)
    // this._elts.push(this._borders)
    this._infosreg = new TileInfosReg(this._size)
    this._elts.push(this._infosreg)
    this._infosBold = new TileInfosBold(this._size)
    this._elts.push(this._infosBold)
    this._title = new TileTitle(this._size)
    this._elts.push(this._title)
    this._share = new TileShare(this._size)
    this._elts.push(this._share)
    this._top.setShare(this._share, this)
    this._countElts = this._elts.length
  }

  _onMouseOver (event) {
    if (!(isMobile || !gridObserver.canOver || !gridObserver.isInteractive || event && event.data.originalEvent && event.data.originalEvent.target !== engine.dom)) {
      if (gridObserver.isDragging) {
        return void(this._isOverDuringDragging = true)
      }
      this.over()
      this._isOver = true
    }
  }

  _onMouseOut (e) {
    const force = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
    if (!isMobile && (gridObserver.isInteractive && gridObserver.canOver || force)) {
      this.out();
      this._isOver = false;
      this._isOverDuringDragging = false;
    }
  }

  _onMouseUp (e) {
    if (!gridObserver.isFBOpen && gridObserver.canOver && gridObserver.isClick && gridObserver.isInteractive) {
      window.location.href = this._data.getURL();
    }
  }

  _onChangeDragging () {
    if (gridObserver.isDragging) {
      if (this._isOver) {
        this._onMouseOut()
        this._isOverDuringDragging = true
      }
    } else {
      if (this._isOverDuringDragging) {
        this._onMouseOver()
      }
    }
  }

  _onChangeInteractive () {
    if (this._isOver) {
      this._onMouseOut(null, true);
    }
  }

  setPosition (x, y) {
    for (let i = 0; i < this._countElts; i++) {
      this._elts[i].setPosition(x, y);
    }
  }

  over () {
    if (!this._lockOver) {
      let option = null;
      for (let i = 0; i < this._countElts; i++) {
        option = this._elts[i]
        if (option.over) {
          option.over();
        }
      }
    }
  }

  out () {
    if (!this._lockOver) {
      let tx = null;
      for (let i = 0; i < this._countElts; i++) {
        tx = this._elts[i]
        if (tx.out) {
          tx.out();
        }
      }
    }
  }

  update (data) {
    const _this = this
    const animate = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1]
    this._data = data;
    let elt = null
    for (let i = 0; i < this._countElts; i++) {
      elt = this._elts[i]
      if (elt.update) {
        elt.update(this._data, animate)
      }
    }
    if (animate) {
      this._lockOver = true;
      if (this._ti) {
        timeout.clear(this._ti);
        this._ti = null;
      }
      this._ti = timeout(function () {
        _this._lockOver = false;
      }, 1200);
    }
  }

  add () {
    for (let i = 0; i < this._countElts; i++) {
      this._elts[i].add(this.debug)
    }
  }

  remove () {
    for (let i = 0; i < this._countElts; i++) {
      this._elts[i].remove()
    }
  }

  activate () {
    const eltInteractive = this.getInteractivePart()
    eltInteractive.interactive = true
    eltInteractive.buttonMode = true
    eltInteractive.on("mouseover", this._binds.onMouseOver)
    eltInteractive.on("mouseout", this._binds.onMouseOut)
    eltInteractive.on("mouseup", this._binds.onMouseUp)
    gridObserver.on("changeDragging", this._binds.onChangeDragging)
    gridObserver.on("changeInteractive", this._binds.onChangeInteractive)
    for (let elt = null, i = 0; i < this._countElts; i++) {
      elt = this._elts[i]
      elt.activate && elt.activate()
    }

  }

  deactivate () {
    const eltInteractive = this.getInteractivePart()
    eltInteractive.interactive = false
    eltInteractive.buttonMode = false
    eltInteractive.off("mouseover", this._binds.onMouseOver)
    eltInteractive.off("mouseout", this._binds.onMouseOut)
    eltInteractive.off("mouseup", this._binds.onMouseUp)
    gridObserver.off("changeDragging", this._binds.onChangeDragging)
    gridObserver.off("changeInteractive", this._binds.onChangeInteractive)
    this._isOver = false
    this._isOverDuringDragging = false
    let elt = null
    for (let i = 0; i < this._countElts; i++) {
      elt = this._elts[i]
      elt.deactivate && elt.deactivate()
    }
  }

  getInteractivePart () {
    return this._bg
  }
}

class PoolTileElements {
  constructor () {
    this._itemsSmall = []
    this._itemsBig = []
  }

  init () {
    const count = arguments.length <= 0 || void 0 === arguments[0] ? 120 : arguments[0]
    for (let i = 0; i < count; i++) {
      this._itemsSmall.push(new TileElements('small'))
      this._itemsBig.push(new TileElements('big'))
    }
  }

  getSmall () {
    return this._itemsSmall.length ? this._itemsSmall.shift() : null
  }

  getBig () {
    return this._itemsBig.length ? this._itemsBig.shift() : null
  }

  releaseSmall (item) {
    this._itemsSmall.push(item)
  }

  releaseBig (item) {
    this._itemsBig.push(item)
  }
}

export default new PoolTileElements


function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

const _createClass = (() => {
  function defineProperties (target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return (Constructor, protoProps, staticProps) => (protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor);
})();

const engine = require("core/engine");
const TileBg = require("iao/grid/tile/TileBg");
let TileShape = void 0;
TileShape = require(isMobile ? "iao/grid/tile/TileShapeStatic" : "iao/grid/tile/TileShape");
const TileImg = require("iao/grid/tile/TileImg");
const TileTop = require("iao/grid/tile/TileTop");
const TileCircle = require("iao/grid/tile/TileCircle");
const TileAvatar = require("iao/grid/tile/TileAvatar");
const TileBorders = require("iao/grid/tile/TileBorders");
const TileInfosReg = require("iao/grid/tile/TileInfosReg");
const TileInfosBold = require("iao/grid/tile/TileInfosBold");
const TileTitle = require("iao/grid/tile/TileTitle");
const TileShare = require("iao/grid/tile/TileShare");
const gridObserver = require("iao/grid/gridObserver");
const timeout = require("fz/utils/timeout");

const TileElements = (() => {
  function TileElements (size) {
    _classCallCheck(this, TileElements),
      this._size = size,
      this._data = null,
      this._isOver = !1,
      this._isOverDuringDragging = !1,
      this._lockOver = !1,
      this.debug = !1,
      this._createElements(),
      this._binds = {},
      this._binds.onMouseOver = this._onMouseOver.bind(this),
      this._binds.onMouseOut = this._onMouseOut.bind(this),
      this._binds.onMouseUp = this._onMouseUp.bind(this),
      this._binds.onChangeDragging = this._onChangeDragging.bind(this),
      this._binds.onChangeInteractive = this._onChangeInteractive.bind(this)
  }

  return _createClass(TileElements, [{
    key: "_createElements", value () {
      this._elts = [],
        this._bg = new TileBg(this._size),
        this._elts.push(this._bg),
        this._shape = new TileShape(this._size),
        this._elts.push(this._shape),
      isMobile || (this._img = new TileImg(this._size),
        this._elts.push(this._img)),
        this._top = new TileTop(this._size),
        this._elts.push(this._top),
        this._circle = new TileCircle(this._size),
        this._elts.push(this._circle),
        this._avatar = new TileAvatar(this._size),
        this._elts.push(this._avatar),
        this._borders = new TileBorders(this._size),
        this._elts.push(this._borders),
        this._infosreg = new TileInfosReg(this._size),
        this._elts.push(this._infosreg),
        this._infosBold = new TileInfosBold(this._size),
        this._elts.push(this._infosBold),
        this._title = new TileTitle(this._size),
        this._elts.push(this._title),
        this._share = new TileShare(this._size),
        this._elts.push(this._share),
        this._top.setShare(this._share, this),
        this._countElts = this._elts.length
    }
  }, {
    key: "_onMouseOver", value (e) {
      if (!(isMobile || !gridObserver.canOver || !gridObserver.isInteractive || e && e.data.originalEvent && e.data.originalEvent.target != engine.dom)) {
        if (gridObserver.isDragging) return void(this._isOverDuringDragging = !0);
        this.over(), this._isOver = !0
      }
    }
  }, {
    key: "_onMouseOut", value (e) {
      const force = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
      !isMobile && (gridObserver.isInteractive && gridObserver.canOver || force) && (this.out(), this._isOver = !1, this._isOverDuringDragging = !1)
    }
  }, {
    key: "_onMouseUp", value (e) {
      !gridObserver.isFBOpen && gridObserver.canOver && gridObserver.isClick && gridObserver.isInteractive && (window.location.href = this._data.getURL())
    }
  }, {
    key: "_onChangeDragging", value () {
      gridObserver.isDragging ? this._isOver && (this._onMouseOut(), this._isOverDuringDragging = !0) : this._isOverDuringDragging && this._onMouseOver()
    }
  }, {
    key: "_onChangeInteractive", value () {
      this._isOver && this._onMouseOut(null, !0)
    }
  }, {
    key: "setPosition", value (x, y) {
      for (let i = 0; i < this._countElts; i++) this._elts[i].setPosition(x, y)
    }
  }, {
    key: "over", value () {
      if (!this._lockOver) for (let elt = null, i = 0; i < this._countElts; i++) elt = this._elts[i], elt.over && elt.over()
    }
  }, {
    key: "out", value () {
      if (!this._lockOver) for (let elt = null, i = 0; i < this._countElts; i++) elt = this._elts[i], elt.out && elt.out()
    }
  }, {
    key: "update", value (data) {
      const _this = this, animate = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
      this._data = data;
      for (let elt = null, i = 0; i < this._countElts; i++) elt = this._elts[i], elt.update && elt.update(this._data, animate);
      animate && (this._lockOver = !0, this._ti && (timeout.clear(this._ti), this._ti = null), this._ti = timeout(() => {
        _this._lockOver = !1
      }, 1200))
    }
  }, {
    key: "add", value () {
      for (let i = 0; i < this._countElts; i++) this._elts[i].add(this.debug)
    }
  }, {
    key: "remove", value () {
      for (let i = 0; i < this._countElts; i++) this._elts[i].remove()
    }
  }, {
    key: "activate", value () {
      const eltInteractive = this.getInteractivePart();
      eltInteractive.interactive = !0, eltInteractive.buttonMode = !0, eltInteractive.on("mouseover", this._binds.onMouseOver), eltInteractive.on("mouseout", this._binds.onMouseOut), eltInteractive.on("mouseup", this._binds.onMouseUp), gridObserver.on("changeDragging", this._binds.onChangeDragging), gridObserver.on("changeInteractive", this._binds.onChangeInteractive);
      for (let elt = null, i = 0; i < this._countElts; i++) elt = this._elts[i], elt.activate && elt.activate()
    }
  }, {
    key: "deactivate", value () {
      const eltInteractive = this.getInteractivePart();
      eltInteractive.interactive = !1, eltInteractive.buttonMode = !1, eltInteractive.off("mouseover", this._binds.onMouseOver), eltInteractive.off("mouseout", this._binds.onMouseOut), eltInteractive.off("mouseup", this._binds.onMouseUp), gridObserver.off("changeDragging", this._binds.onChangeDragging), gridObserver.off("changeInteractive", this._binds.onChangeInteractive), this._isOver = !1, this._isOverDuringDragging = !1;
      for (let elt = null, i = 0; i < this._countElts; i++) elt = this._elts[i], elt.deactivate && elt.deactivate()
    }
  }, {
    key: "getInteractivePart", value () {
      return this._bg
    }
  }]), TileElements;
})();

const PoolTileElements = (() => {
  function PoolTileElements () {
    _classCallCheck(this, PoolTileElements),
      this._itemsSmall = [],
      this._itemsBig = []
  }

  return _createClass(PoolTileElements, [{
    key: "init", value (...args) {
      for (let count = args.length <= 0 || void 0 === args[0] ? 120 : args[0], i = 0; i < count; i++) this._itemsSmall.push(new TileElements("small")),
        this._itemsBig.push(new TileElements("big"))
    }
  }, {
    key: "getSmall", value () {
      return this._itemsSmall.length ? this._itemsSmall.shift() : null
    }
  }, {
    key: "getBig", value () {
      return this._itemsBig.length ? this._itemsBig.shift() : null
    }
  }, {
    key: "releaseSmall", value (item) {
      this._itemsSmall.push(item)
    }
  }, {
    key: "releaseBig", value (item) {
      this._itemsBig.push(item)
    }
  }]), PoolTileElements;
})();

module.exports = new PoolTileElements
// }, {
//   "core/engine": 1,
//   "fz/utils/timeout": 11,
//   "iao/grid/gridObserver": 57,
//   "iao/grid/tile/TileAvatar": 58,
//   "iao/grid/tile/TileBg": 59,
//   "iao/grid/tile/TileBorders": 60,
//   "iao/grid/tile/TileCircle": 61,
//   "iao/grid/tile/TileImg": 62,
//   "iao/grid/tile/TileInfosBold": 63,
//   "iao/grid/tile/TileInfosReg": 64,
//   "iao/grid/tile/TileShape": 65,
//   "iao/grid/tile/TileShapeStatic": 66,
//   "iao/grid/tile/TileShare": 67,
//   "iao/grid/tile/TileTitle": 68,
//   "iao/grid/tile/TileTop": 69
// }],

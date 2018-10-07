74: [function (require, module, exports) {
  "use strict";

  function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
  }

  var _createClass = function () {
      function defineProperties (target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
      }

      return function (Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
      }
    }(), interactions = require("fz/core/interactions"), stage = require("fz/core/stage"),
    engine = require("core/engine"), menu = require("iao/ui/menu"), layer = require("iao/ui/layer"),
    gridObserver = require("iao/grid/gridObserver"), topbar = require("iao/ui/topbar"), IamOther = function () {
      function IamOther () {
        _classCallCheck(this, IamOther), this._layer = new PIXI.Graphics, this._layer.interactive = !0, this._w = 0, this._isExpanded = !1, this._binds = {}, this._binds.onOver = this._onOver.bind(this), this._binds.onOut = this._onOut.bind(this), this._binds.onClick = this._onClick.bind(this), this._binds.onClickMobile = this._onClickMobile.bind(this), this._binds.onClickClose = this._onClickClose.bind(this), this._binds.onClickCloseMobile = this._onClickCloseMobile.bind(this), this._binds.onToggleClick = this._onToggleClick.bind(this)
      }

      return _createClass(IamOther, [{
        key: "_onOver", value: function () {
          isMobile || gridObserver.setInteractive(!1), TweenLite.to(this._domBtBg, .3, {
            delay: .1,
            css: {scale: 1.1, rotation: 10},
            ease: Cubic.easeIn
          }), TweenLite.to(this._domBtBg, .15, {
            delay: .4,
            css: {scale: 1.05, rotation: 0},
            ease: Cubic.easeOut
          }), TweenLite.to(this._domBtContent, .3, {
            css: {scale: 1.1, rotation: 10},
            ease: Cubic.easeIn
          }), TweenLite.to(this._domBtContent, .15, {delay: .3, css: {scale: 1, rotation: 0}, ease: Cubic.easeOut})
        }
      }, {
        key: "_onOut", value: function () {
          isMobile || gridObserver.setInteractive(!0), TweenLite.to(this._domBtBg, .2, {
            css: {scale: 1},
            ease: Cubic.easeOut
          })
        }
      }, {
        key: "_onClick", value: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
          null != e && (e.origin.preventDefault(), e.origin.stopPropagation(), e.origin.stopImmediatePropagation()), document.body.classList.add("modal-active"), document.body.classList.add("dark"), $.post("/trackevent", {
            category: "Home",
            action: "Click",
            label: "Click - IAmOtherBlob"
          }), menu.hide(), this._unbindEventsButton(), TweenLite.to(this._domBtBg, .3 * (isMobile ? 2 : 1), {
            delay: .1,
            css: {scale: 0, rotation: 10},
            ease: Cubic.easeInOut
          }), TweenLite.to(this._domBtContent, .2 * (isMobile ? 2 : 1), {
            css: {alpha: 0},
            ease: Cubic.easeOut
          }), engine.stage.addChild(this._layer), isMobile || (topbar.hide(), topbar.lock(!0), gridObserver.setInteractive(!1)), this._w = 0, TweenLite.to(this, .6, {
            _w: 1.25 * stage.width,
            onUpdate: this._drawGraphics.bind(this),
            ease: Cubic.easeInOut
          }), TweenLite.to(this._domModal, .8, {delay: .2, css: {alpha: 1}, ease: Quart.easeInOut})
        }
      }, {
        key: "_onClickMobile", value: function (e) {
          e.origin.preventDefault(), document.body.classList.add("modal-active"),
            document.body.classList.add("dark"), this._unbindEventsButton(), layer.setBlack(), layer.show(), TweenLite.to(this._domModal, .8, {
            delay: .2,
            css: {alpha: 1},
            ease: Quart.easeInOut
          })
        }
      }, {
        key: "_drawGraphics", value: function () {
          this._layer.clear(), this._layer.beginFill(0, 1), this._layer.drawCircle(stage.width - 60, stage.height - 30, this._w)
        }
      }, {
        key: "_onClickClose", value: function (e) {
          var _this = this;
          e.origin.preventDefault(), TweenLite.to(this._domModal, .4, {
            css: {alpha: 0},
            ease: Cubic.easeInOut,
            onComplete: function () {
              document.body.classList.remove("modal-active"), document.body.classList.remove("dark")
            }
          }), isMobile || (topbar.lock(!1), topbar.show(), gridObserver.setInteractive(!0)), TweenLite.to(this, .6, {
            _w: 1e-4,
            onUpdate: this._drawGraphics.bind(this),
            onComplete: function () {
              engine.stage.removeChild(_this._layer)
            },
            ease: Cubic.easeInOut
          }), TweenLite.to(this._domBtBg, .6, {
            css: {scale: 1, rotation: 0},
            ease: Cubic.easeInOut
          }), TweenLite.to(this._domBtContent, .6, {
            delay: .4,
            css: {alpha: 1},
            ease: Cubic.easeOut,
            onComplete: this._bindEventsButton.bind(this)
          })
        }
      }, {
        key: "_onClickCloseMobile", value: function (e) {
          e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), TweenLite.to(this._domModal, .4, {
            css: {alpha: 0},
            ease: Cubic.easeInOut,
            onComplete: function () {
              document.body.classList.remove("modal-active"), document.body.classList.remove("dark")
            }
          }), layer.hide()
        }
      }, {
        key: "bindElements", value: function () {
          this._domBt = document.querySelector(".bt-iamother"), isMobile && (this._domBtMobile = document.getElementById("bt-menu-iamother")), this._domBtBg = this._domBt.querySelector(".bg"), this._domBtContent = this._domBt.querySelector(".content"), this._domModal = document.querySelector(".modal.iamother"), this._domClose = document.querySelector(".modal.iamother .close"), this._domInner = this._domModal.querySelector(".inner"), isMobile && (this._domToggle = this._domModal.querySelector(".text-toggle")), TweenLite.set(this._domModal, {css: {alpha: 0}}), TweenLite.set(this._domBtBg, {
            css: {
              scale: 0,
              rotation: 75
            }
          }), TweenLite.set(this._domBtContent, {css: {alpha: 0}})
        }
      }, {
        key: "_onToggleClick", value: function (e) {
          var _this2 = this;
          setTimeout(function () {
            _this2._isExpanded = !_this2._isExpanded;
            var h = (document.body.offsetWidth, _this2._domInner.offsetHeight);
            _this2._isExpanded ? _this2._domInner.style.height = h + "px" : _this2._domInner.style.height = "auto", _this2._domModal.style.top = window.scrollY + "px"
          }, 100)
        }
      }, {
        key: "bindEvents", value: function () {
          this._bindEventsButton(), isMobile ? (this._domClose.addEventListener("click", this._binds.onClickCloseMobile, !1), this._domToggle.addEventListener("click", this._binds.onToggleClick, !1)) : interactions.on(this._domClose, "click", this._binds.onClickClose)
        }
      }, {
        key: "_bindEventsButton", value: function () {
          isMobile ? interactions.on(this._domBtMobile, "click", this._binds.onClickMobile) : (interactions.on(this._domBt, "over", this._binds.onOver), interactions.on(this._domBt, "out", this._binds.onOut), interactions.on(this._domBt, "click", this._binds.onClick))
        }
      }, {
        key: "_unbindEventsButton", value: function () {
          isMobile ? interactions.on(this._domBtMobile, "click", this._binds.onClickMobile) : (interactions.off(this._domBt, "over", this._binds.onOver), interactions.off(this._domBt, "out", this._binds.onOut), interactions.off(this._domBt, "click", this._binds.onClick))
        }
      }, {
        key: "show", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          this._domBt.style.display = "block", TweenLite.to(this._domBtBg, .6, {
            delay: delay,
            css: {scale: 1, rotation: 0},
            ease: Cubic.easeInOut
          }), TweenLite.to(this._domBtContent, .6, {
            delay: delay + .4,
            css: {alpha: 1},
            ease: Cubic.easeOut
          }), isMobile && (this._domModal.style.top = window.scrollY + "px")
        }
      }]), IamOther
    }();
  module.exports = new IamOther
}, {
  "core/engine": 1,
  "fz/core/interactions": 2,
  "fz/core/stage": 4,
  "iao/grid/gridObserver": 57,
  "iao/ui/layer": 75,
  "iao/ui/menu": 77,
  "iao/ui/topbar": 79
}],

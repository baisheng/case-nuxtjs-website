78: [function (require, module, exports) {
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
  }(), interactions = require("fz/core/interactions"), Onboarding = (require("fz/utils/timeout"), function () {
    function Onboarding () {
      _classCallCheck(this, Onboarding), this._idxStep = 0, this._binds = {}, this._binds.onBtNext = this._onBtNext.bind(this), this._binds.onBtClose = this._onBtClose.bind(this)
    }

    return _createClass(Onboarding, [{
      key: "_onBtNext", value: function () {
        if (2 == this._idxStep) return void this.hide();
        $.post("/trackevent", {
          category: "OnBoarding",
          action: "Click",
          label: "Click next button number" + (this._idxStep + 1) + " - " + isMobile ? "mobile" : "desktop"
        });
        var dom = this._domSteps[this._idxStep];
        TweenLite.to(dom, .6, {
          css: {alpha: 0, x: -100}, ease: Quad.easeOut, onComplete: function () {
            dom.style.display = "none"
          }
        }), isMobile ? this._idxStep = 2 : this._idxStep++, this._domSteps[this._idxStep].style.display = "block", TweenLite.to(this._domSteps[this._idxStep], .6, {
          delay: .25,
          css: {alpha: 1, x: -50},
          ease: Quad.easeOut
        }), 2 == this._idxStep && TweenLite.to(this._domBts[1], .6, {css: {y: -70, alpha: 1}, ease: Cubic.easeOut})
      }
    }, {
      key: "_onBtClose", value: function (e) {
        e.origin.preventDefault(), e.origin.stopPropagation(), e.origin.stopImmediatePropagation(), this.hide(), $.post("/trackevent", {
          category: "OnBoarding",
          action: "Click",
          label: "Click button close"
        })
      }
    }, {
      key: "bindElements", value: function () {
        this.dom = document.getElementById("onboarding"), this._domBg = this.dom.querySelector(".onboarding-bg"), this._domSteps = this.dom.querySelectorAll(".onboarding-step"), this._domBtsCnt = this.dom.querySelector(".onboarding-bts"), this._domBts = this.dom.querySelectorAll(".onboarding-bt"), this._domBtClose = this.dom.querySelector(".onboarding-close")
      }
    }, {
      key: "bindEvents", value: function () {
        interactions.on(this._domBtsCnt, "click", this._binds.onBtNext), interactions.on(this._domBtClose, "click", this._binds.onBtClose)
      }
    }, {
      key: "unbindEvents", value: function () {
        interactions.off(this._domBtsCnt, "click", this._binds.onBtNext), interactions.off(this._domBtClose, "click", this._binds.onBtClose)
      }
    }, {
      key: "show", value: function () {
        var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
          cb = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
        this._cb = cb, this.dom.style.display = "block", this._domSteps[0].style.display = "block", this._domBts[0].style.display = "block", TweenLite.to(this._domBg, 1, {
          delay: delay,
          css: {scale: 6},
          ease: Cubic.easeOut
        }), TweenLite.to(this._domBg, .4, {
          delay: delay,
          css: {alpha: 1},
          ease: Cubic.easeOut
        }), TweenLite.to(this._domSteps[0], .6, {
          delay: delay + .4,
          css: {x: -50, alpha: 1, force3D: !0},
          ease: Sine.easeOut
        }), TweenLite.to(this._domBts[0], .6, {
          delay: delay + .6,
          css: {y: -70, alpha: 1},
          ease: Cubic.easeOut
        }), TweenLite.to(this._domBtClose, .6, {
          delay: delay + .8,
          css: {alpha: 1, rotation: 0, scale: 1},
          ease: Cubic.easeInOut
        })
      }
    }, {
      key: "hide", value: function () {
        var _this = this, delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
        this.unbindEvents(), this._hideBtClose(delay), TweenLite.to(this._domBg, .6, {
          delay: .2,
          css: {scale: 0},
          ease: Cubic.easeOut,
          onComplete: function () {
            _this.dom.style.display = "none", _this._cb()
          }
        }), TweenLite.to(this._domSteps[this._idxStep], .4, {
          css: {alpha: 0},
          ease: Cubic.easeOut
        }), TweenLite.to(this._domBts, .4, {css: {y: 0}, ease: Cubic.easeOut})
      }
    }, {
      key: "_hideBtClose", value: function () {
        var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
        TweenLite.to(this._domBtClose, .6, {
          delay: delay,
          css: {alpha: 0, rotation: 90, scale: 0},
          ease: Cubic.easeInOut
        })
      }
    }]), Onboarding
  }());
  module.exports = new Onboarding
}, {"fz/core/interactions": 2, "fz/utils/timeout": 11}],

34: [function (require, module, exports) {
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
    }(), Steps = require("iao/cardflow_mobile/steps/Steps"), nav = require("iao/cardflow/steps/navSteps"),
    user = require("iao/cardflow/cardUser"), interactions = require("fz/core/interactions"),
    timeout = require("fz/utils/timeout"), CardflowMobile = function () {
      function CardflowMobile () {
        _classCallCheck(this, CardflowMobile), this._dom = document.getElementById("cardflow-mobile"), this._domBtBack = this._dom.querySelector(".cardflow-bt-back"), this._domBtClose = this._dom.querySelector(".cardflow-close"), this._isBtBackVisible = !1, this.isOpen = !1, this._binds = {}, this._binds.onNavChange = this._onNavChange.bind(this), this._binds.onBtBack = this._onBtBack.bind(this), this._binds.onBtClose = this._onBtClose.bind(this)
      }

      return _createClass(CardflowMobile, [{
        key: "_onNavChange", value: function () {
          "choice" == nav.id ? this._showBtBack() : "selection" == nav.id && this._hideBtBack()
        }
      }, {
        key: "_onBtBack", value: function (e) {
          e.origin.preventDefault(), "choice" == nav.id ? nav.setId("selection") : "final" == nav.id && nav.setId("choice")
        }
      }, {
        key: "_onBtClose", value: function (e) {
          e.origin.preventDefault(), window.closeCardFlow()
        }
      }, {
        key: "_onBtClose", value: function (e) {
          e.origin.preventDefault(), window.closeCardFlow()
        }
      }, {
        key: "init", value: function () {
          this._steps = new Steps(this._dom)
        }
      }, {
        key: "bindEvents", value: function () {
          this._steps.bindEvents(), nav.on("changeId", this._binds.onNavChange), interactions.on(this._domBtClose, "click", this._binds.onBtClose)
        }
      }, {
        key: "unbindEvents", value: function () {
          this._steps.unbindEvents(), nav.off("changeId", this._binds.onNavChange), interactions.off(this._domBtBack, "click", this._binds.onBtBack), interactions.off(this._domBtClose, "click", this._binds.onBtClose)
        }
      }, {
        key: "show", value: function () {
          var _this = this, delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          this.init(), this.bindEvents(), this.isOpen = !0, timeout(function () {
            _this._dom.style.display = "block", TweenLite.to(_this._dom, .6, {
              css: {alpha: 1},
              ease: Cubic.easeOut
            }), user.isConnected ? nav.setId("selection") : nav.setId("login"), _this._steps.show(delay)
          }, 1e3 * delay)
        }
      }, {
        key: "_showBtBack", value: function () {
          this._isBtBackVisible || (this._isBtBackVisible = !0, this._domBtBack.interactive = !0, interactions.on(this._domBtBack, "click", this._binds.onBtBack), TweenLite.to(this._domBtBack, .4, {
            alpha: 1,
            ease: Cubic.easeInOut
          }))
        }
      }, {
        key: "_hideBtBack", value: function () {
          this._isBtBackVisible && (this._isBtBackVisible = !1, interactions.off(this._domBtBack, "click", this._binds.onBtBack), TweenLite.to(this._domBtBack, .4, {
            alpha: 0,
            ease: Cubic.easeInOut
          }))
        }
      }, {
        key: "hide", value: function () {
          var _this2 = this;
          this.unbindEvents(), this.isOpen = !1, this._steps.hide(), document.body.style.overflow = "auto", TweenLite.to(this._dom, .6, {
            css: {alpha: 0},
            ease: Cubic.easeOut,
            onComplete: function () {
              _this2._dom.style.display = "none"
            }
          })
        }
      }]), CardflowMobile
    }();
  module.exports = new CardflowMobile
}, {
  "fz/core/interactions": 2,
  "fz/utils/timeout": 11,
  "iao/cardflow/cardUser": 23,
  "iao/cardflow/steps/navSteps": 32,
  "iao/cardflow_mobile/steps/Steps": 40
}],

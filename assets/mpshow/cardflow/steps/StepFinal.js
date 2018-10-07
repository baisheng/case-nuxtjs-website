28: [function (require, module, exports) {
  "use strict";

  function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
  }

  function _possibleConstructorReturn (self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !call || "object" != typeof call && "function" != typeof call ? self : call
  }

  function _inherits (subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
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
    }(), BtEnd = require("iao/cardflow/BtEnd"),
    cardProject = (require("iao/cardflow/cardUser"), require("iao/cardflow/cardProject")),
    StepFinal = (require("iao/card/cardCreatorData"), function (_PIXI$Container) {
      function StepFinal () {
        _classCallCheck(this, StepFinal);
        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StepFinal).call(this));
        return _this._binds = {}, _this._binds.onClick = _this._onClick.bind(_this), _this._tf = new PIXI.extras.BitmapText("ALL DONE! YOU'RE\nGOOD TO GO, NOW\nADD YOUR CARD TO\nTHE GALLERY.", {font: "40px Odin Rounded Bold Big"}), _this._tf.x = 50, _this._tf.y = 60, _this.addChild(_this._tf), _this._btEnd = new BtEnd("ADD TO GALLERY"), _this._btEnd.y = 429, _this._btEnd.cbClick = _this._binds.onClick, _this.addChild(_this._btEnd), _this.alpha = 0, _this
      }

      return _inherits(StepFinal, _PIXI$Container), _createClass(StepFinal, [{
        key: "_onClick", value: function () {
          this._btEnd.unbindEvents(), this._hideBtEnd(), cardProject.save(), this._post(), $.post("/trackevent", {
            category: "Home",
            action: "Click",
            label: "Click - Add to gallery"
          })
        }
      }, {
        key: "_hideBtEnd", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          TweenLite.to(this._btEnd, .4, {delay: delay, y: 429, ease: Cubic.easeIn})
        }
      }, {
        key: "_post", value: function () {
          var _this2 = this, url = "/user/update/me",
            posting = $.post(url, {project_id: cardProject.data.id, fancard_image: cardProject.canvas.toDataURL()});
          posting.done(function (data) {
            var response = JSON.parse(data).response;
            return response.statusbool ? void window.saveCard(response.user.id) : void _this2._post()
          })
        }
      }, {
        key: "bindEvents", value: function () {
          this._btEnd.bindEvents()
        }
      }, {
        key: "unbindEvents", value: function () {
          this._btEnd.unbindEvents()
        }
      }, {
        key: "show", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          this._tf.x = 100, TweenLite.to(this._tf, .6, {
            delay: delay,
            x: 50,
            ease: Cubic.easeOut
          }), TweenLite.to(this, .6, {
            delay: delay,
            alpha: 1,
            ease: Cubic.easeOut
          }), TweenLite.to(this._btEnd, .6, {delay: delay + .4, y: 429 - this._btEnd.height, ease: Cubic.easeOut})
        }
      }, {
        key: "hide", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          TweenLite.to(this, .4, {
            delay: delay + .2,
            alpha: 0,
            ease: Cubic.easeIn
          }), TweenLite.to(this._tf, .4, {delay: delay + .2, x: -50, ease: Cubic.easeIn}), this._hideBtEnd(delay)
        }
      }]), StepFinal
    }(PIXI.Container));
  module.exports = StepFinal
}, {
  "iao/card/cardCreatorData": 16,
  "iao/cardflow/BtEnd": 19,
  "iao/cardflow/cardProject": 22,
  "iao/cardflow/cardUser": 23
}],

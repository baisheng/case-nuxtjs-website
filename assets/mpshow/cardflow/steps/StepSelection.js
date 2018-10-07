30: [function (require, module, exports) {
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
    }(), user = require("iao/cardflow/cardUser"), GridConfig = require("iao/grid/GridConfig"),
    BtCard = require("iao/cardflow/BtCard"), nav = require("iao/cardflow/steps/navSteps"),
    timeout = require("fz/utils/timeout"), StepSelection = function (_PIXI$Container) {
      function StepSelection () {
        _classCallCheck(this, StepSelection);
        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StepSelection).call(this));
        return _this._isSlideshowStarted = !1, _this._canBeRestarted = !0, _this._dataSlideshow = {
          fashion: {
            texts: ["BBC", "Bape", "Chanel"],
            idx: -1
          },
          tv: {texts: ["The Voice", "Dope", "Awkward Black Girl"], idx: -1},
          art: {texts: ["Murakami Simple Things", "Velo Bike", "Happy Book"], idx: -1},
          music: {texts: ["Happy", "Drop It Like It's Hot", "Hollaback Girl"], idx: -1},
          social: {texts: ["International Day of Happiness", "From One Hand to Another", "Collaborative Fund"], idx: -1}
        }, _this._tfDesc = new PIXI.extras.BitmapText("What's up, " + user.name + "?", {font: "16px Odin Rounded Regular Small"}), _this._tfDesc.tint = 0, _this._tfDesc.x = 52, _this._tfDesc.y = 65, _this.addChild(_this._tfDesc), _this._tfTitle = new PIXI.extras.BitmapText("TELL US WHAT\nINSPIRES YOU...", {font: "40px Odin Rounded Bold Big"}), _this._tfTitle.tint = 0, _this._tfTitle.x = 52, _this._tfTitle.y = 90, _this.addChild(_this._tfTitle), _this._cntBts = new PIXI.Container, _this._cntBts.x = 135, _this._cntBts.y = 250, _this.addChild(_this._cntBts), _this._bts = [], _this.alpha = 0, _this.x = 100, _this._initSlideshowTexts(), _this._createBts(), _this._binds = {}, _this._binds.onChangeType = _this._onChangeType.bind(_this), _this
      }

      return _inherits(StepSelection, _PIXI$Container), _createClass(StepSelection, [{
        key: "_initSlideshowTexts",
        value: function () {
          this._tfs = [];
          var tf = new PIXI.extras.BitmapText("", {font: "16px Odin Rounded Regular Small"});
          tf.x = 52, tf.y = 190, tf.alpha = 0, this.addChild(tf), this._tfs.push(tf), tf = new PIXI.extras.BitmapText("", {font: "16px Odin Rounded Regular Small"}), tf.x = 52, tf.y = 190, tf.alpha = 0, this.addChild(tf), this._tfs.push(tf), this._tfCurrent = null, this._idxTf = -1
        }
      }, {
        key: "_onChangeType", value: function () {
          nav.type ? this._canBeRestarted ? this._startSlideshow() : (this._tiRestart && timeout.clear(this._tiRestart), this._tiRestart = timeout(this._restartSlideshow.bind(this), 250)) : this._stopSlideshow()
        }
      }, {
        key: "_restartSlideshow", value: function () {
          this._startSlideshow()
        }
      }, {
        key: "_startSlideshow", value: function () {
          this._isSlideshowStarted || (this._isSlideshowStarted = !0, this._canBeRestarted = !1, this._timeout = timeout(this._nextSlide.bind(this), 1200), this._showSlide())
        }
      }, {
        key: "_showSlide", value: function () {
          if (nav.type) {
            var text = this._getNextSlideText(), tf = this._getNextTf();
            tf.text = text, tf.tint = GridConfig.colors[nav.type].default, tf.alpha = 0, this._tfCurrent = tf, TweenLite.to(this._tfCurrent, .6, {
              alpha: 1,
              ease: Cubic.easeOut
            })
          }
        }
      }, {
        key: "_nextSlide", value: function () {
          this._hideSlide()
        }
      }, {
        key: "_getNextSlideText", value: function () {
          var data = this._dataSlideshow[nav.type];
          return data.idx++, data.idx > 2 && (data.idx = 0), data.texts[data.idx]
        }
      }, {
        key: "_getNextTf", value: function () {
          return this._idxTf++, this._idxTf > 1 && (this._idxTf = 0), this._tfs[this._idxTf]
        }
      }, {
        key: "_stopSlideshow", value: function () {
          this._isSlideshowStarted && (this._isSlideshowStarted = !1, this._hideSlide(!1), timeout.clear(this._timeout), this._timeout = null)
        }
      }, {
        key: "_hideSlide", value: function () {
          var _this2 = this, andCheck = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
          TweenLite.to(this._tfCurrent, .25, {
            alpha: 0,
            ease: Cubic.easeIn
          }), andCheck ? timeout(this._checkForNextSlide.bind(this), 250) : timeout(function () {
            _this2._canBeRestarted = !0
          }, 250)
        }
      }, {
        key: "_checkForNextSlide", value: function () {
          return this._isSlideshowStarted ? (this._timeout = timeout(this._nextSlide.bind(this), 1200), void this._showSlide()) : void(this._canBeRestarted = !0)
        }
      }, {
        key: "_createBts", value: function () {
          for (var types = ["fashion", "tv", "art", "music", "social"], px = 0, xAdd = 191, py = 0, yAdd = 55, inc = 0, bt = null, type = null, text = null, color = null, n = types.length, i = 0; i < n; i++) type = types[i], text = GridConfig.texts[type].title, color = GridConfig.colors[type].default, bt = new BtCard(text, color, type), bt.x = px, bt.y = py, this._cntBts.addChild(bt), this._bts.push(bt), inc++, 1 == inc ? px += xAdd : 2 == inc && (px = 0, py += yAdd, inc = 0)
        }
      }, {
        key: "bindEvents", value: function () {
          for (var bt = null, n = this._bts.length, i = 0; i < n; i++) bt = this._bts[i], bt.bindEvents();
          nav.on("changeType", this._binds.onChangeType)
        }
      }, {
        key: "unbindEvents", value: function () {
          for (var bt = null, n = this._bts.length, i = 0; i < n; i++) bt = this._bts[i], bt.unbindEvents();
          nav.off("changeType", this._binds.onChangeType), this._timeout && (timeout.clear(this._timeout), this._timeout = null)
        }
      }, {
        key: "show", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          TweenLite.to(this, .6, {delay: delay, x: 0, alpha: 1, ease: Cubic.easeOut})
        }
      }, {
        key: "hide", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          TweenLite.to(this, .4, {delay: delay, x: -100, alpha: 0, ease: Cubic.easeIn})
        }
      }]), StepSelection
    }(PIXI.Container);
  module.exports = StepSelection
}, {
  "fz/utils/timeout": 11,
  "iao/cardflow/BtCard": 18,
  "iao/cardflow/cardUser": 23,
  "iao/cardflow/steps/navSteps": 32,
  "iao/grid/GridConfig": 44
}],

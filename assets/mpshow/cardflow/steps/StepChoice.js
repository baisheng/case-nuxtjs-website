27: [function (require, module, exports) {
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
    }(), nav = require("iao/cardflow/steps/navSteps"), stepsElements = require("iao/cardflow/steps/stepsElements"),
    cardUser = require("iao/cardflow/cardUser"), cardProject = require("iao/cardflow/cardProject"),
    cardflowData = require("iao/cardflow/cardflowData"), BtNext = require("iao/cardflow/BtNext"),
    GridConfig = require("iao/grid/GridConfig"), timeout = require("fz/utils/timeout"),
    CardAssetCreator = require("iao/card/CardAssetCreator"), StepChoice = function (_PIXI$Container) {
      function StepChoice () {
        _classCallCheck(this, StepChoice);
        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StepChoice).call(this));
        return _this._binds = {}, _this._binds.onClick = _this._onClick.bind(_this), _this._binds.onChange = _this._onChange.bind(_this), _this._binds.onInputChange = _this._onInputChange.bind(_this), _this._isKeyEnter = !1, _this._tf = new PIXI.extras.BitmapText("", {font: "40px Odin Rounded Bold Big"}), _this._tf.x = 50, _this._tf.y = 60, _this.addChild(_this._tf), _this._tfError = new PIXI.extras.BitmapText("OOPS! WE DON'T KNOW THAT ONE TRY ANOTHER", {
          font: "18px Odin Rounded Bold Big"
        }), _this._tfError.x = 50, _this._tfError.y = 296, _this._tfError.alpha = 0, _this._tfError.tint = GridConfig.colors.music.dark, _this.addChild(_this._tfError), _this._btNext = new BtNext("NEXT"), _this._btNext.y = 429, _this._btNext.cbClick = _this._binds.onClick, _this.addChild(_this._btNext), _this._isBtNextVisible = !1, _this._domCardflow = document.getElementById("cardflow"), _this.alpha = 0, _this
      }

      return _inherits(StepChoice, _PIXI$Container), _createClass(StepChoice, [{
        key: "_onClick", value: function () {
          var creator = new CardAssetCreator;
          creator.once("done", function () {
            cardProject.canvas = creator.canvas, nav.setId("final")
          }), this._createCard(creator)
        }
      }, {
        key: "_createCard", value: function (creator) {
          var urlAvatar = cardUser.url, category = nav.type, name = cardUser.name, title = cardProject.name,
            fbId = cardUser.id, projectUrl = cardProject.data.project_url, categoryId = GridConfig.catIds[category],
            projectId = cardProject.data.id, projectAssetSquare = cardProject.data.project_asset_square;
          creator.create(urlAvatar, category, name, title, fbId, projectUrl, categoryId, projectId, projectAssetSquare)
        }
      }, {
        key: "_onChange", value: function (e) {
          if ("music" != nav.type) {
            this._domElements.classList.add("selected");
            var value = this._domElements.value, data = this._findData(value);
            cardProject.set(data), this._showBtNext()
          } else this._isKeyEnter = 13 == e.keyCode || 9 == e.keyCode, timeout(this._binds.onInputChange, 10)
        }
      }, {
        key: "_onInputChange", value: function () {
          var data = this._getMusic(this._domElements.value.toUpperCase());
          TweenLite.to(this._tfError, .4, {
            alpha: 0,
            ease: Cubic.easeOut
          }), (this._isKeyEnter || data != this._currentData) && (this._currentData = data, cardProject.set(data), data ? (this._showBtNext(), TweenLite.to(this._tfError, .4, {
            alpha: 0,
            ease: Cubic.easeOut
          })) : (this._hideBtNext(), this._isKeyEnter && TweenLite.to(this._tfError, .4, {
            alpha: 1,
            ease: Cubic.easeOut
          })))
        }
      }, {
        key: "_getMusic", value: function (title) {
          var id = this._domElements.__idsByTitle[title];
          return id ? this._findData(id) : null
        }
      }, {
        key: "_findData", value: function (id) {
          for (var data = null, n = this._currentDatas.length, i = 0; i < n; i++) if (data = this._currentDatas[i], data.id == id) return data;
          return null
        }
      }, {
        key: "bindEvents", value: function () {
        }
      }, {
        key: "show", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0], text = "";
          "fashion" == nav.type ? (text += "WHAT'S YOUR\n", text += "FAVORITE PHARRELL\n", text += "FASHION BRAND OR\n", text += "COLLABORATION?\n") : "music" == nav.type ? (text += "WHAT'S YOUR FAVORITE\n", text += "SONG PRODUCED OR\n", text += "PERFORMED BY\n", text += "PHARRELL?\n") : "social" == nav.type ? (text += "WHAT SOCIAL GOOD\n", text += "PROJECT\n", text += "INSPIRES YOU MOST?\n") : "art" == nav.type ? (text += "WHAT'S YOUR\n", text += "FAVORITE ART OR\n", text += "DESIGN PROJECT\n", text += "CREATED BY PHARRELL?\n") : "tv" == nav.type && (text += "WHAT'S YOUR\n", text += "FAVORITE PHARRELL\n", text += "TV SHOW OR MOVIE?\n"), this._currentDatas = cardflowData[nav.type], this._domElements = stepsElements.elements[nav.type], "music" != nav.type ? (this._domElements.classList.remove("selected"), this._domElements.value = "SELECT ONE", this._domElements.addEventListener("change", this._binds.onChange, !1), this._domCardflow.appendChild(this._domElements.__domCnt)) : (this._domElements.addEventListener("keyup", this._binds.onChange, !1), this._domCardflow.appendChild(this._domElements.__domCnt), this._domElements.__applySuggest()), this._tf.text = text, this._tf.x = 100, TweenLite.to(this._tf, .6, {
            delay: delay,
            x: 50,
            ease: Cubic.easeOut
          }), TweenLite.to(this, .6, {delay: delay, alpha: 1, ease: Cubic.easeOut});
          var dom = this._domElements.__domCnt;
          TweenLite.set(dom, {css: {x: 50}}), TweenLite.to(dom, .6, {
            delay: delay,
            css: {alpha: 1, x: 0},
            ease: Cubic.easeOut
          })
        }
      }, {
        key: "_showProject", value: function () {
          this._showBtNext()
        }
      }, {
        key: "_showBtNext", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          this._isBtNextVisible || (this._btNext.bindEvents(), TweenLite.to(this._btNext, .6, {
            delay: delay,
            y: 429 - this._btNext.height,
            ease: Cubic.easeOut
          }), this._isBtNextVisible = !0)
        }
      }, {
        key: "_hideBtNext", value: function () {
          var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          this._isBtNextVisible && (this._btNext.unbindEvents(), TweenLite.to(this._btNext, .6, {
            delay: delay,
            y: 429,
            ease: Cubic.easeOut
          }), this._isBtNextVisible = !1)
        }
      }, {
        key: "unbindEvents", value: function () {
          this._domElements.removeEventListener("change", this._binds.onChange, !1), this._domElements.removeEventListener("keyup", this._binds.onChange, !1), this._btNext.unbindEvents()
        }
      }, {
        key: "hide", value: function () {
          var _this2 = this, delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
          this._domElements.removeEventListener("change", this._binds.onChange, !1), this._domElements.removeEventListener("keyup", this._binds.onChange, !1), TweenLite.to(this, .4, {
            delay: delay + .2,
            alpha: 0,
            ease: Cubic.easeIn
          }), TweenLite.to(this._tf, .4, {delay: delay + .2, x: -50, ease: Cubic.easeIn});
          var dom = this._domElements.__domCnt;
          TweenLite.to(dom, .4, {
            delay: delay + .2,
            css: {x: -100, alpha: 0},
            ease: Cubic.easeIn,
            onComplete: function () {
              _this2._domCardflow.removeChild(dom), _this2._domElements = null
            }
          }), TweenLite.to(this._btNext, .4, {delay: delay, y: 429, ease: Cubic.easeIn})
        }
      }]), StepChoice
    }(PIXI.Container);
  module.exports = StepChoice
}, {
  "fz/utils/timeout": 11,
  "iao/card/CardAssetCreator": 15,
  "iao/cardflow/BtNext": 20,
  "iao/cardflow/cardProject": 22,
  "iao/cardflow/cardUser": 23,
  "iao/cardflow/cardflowData": 25,
  "iao/cardflow/steps/navSteps": 32,
  "iao/cardflow/steps/stepsElements": 33,
  "iao/grid/GridConfig": 44
}],

29: [function (require, module, exports) {
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
  }(), nav = require("./navSteps"), user = require("iao/cardflow/cardUser"), StepLogin = function (_PIXI$Container) {
    function StepLogin () {
      _classCallCheck(this, StepLogin);
      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StepLogin).call(this));
      return _this._binds = {}, _this._binds.onMouseOver = _this._onMouseOver.bind(_this), _this._binds.onMouseOut = _this._onMouseOut.bind(_this), _this._binds.onMouseUp = _this._onMouseUp.bind(_this), _this._tfTitle = new PIXI.extras.BitmapText("WANT TO CREATE\nA FAN CARD?", {font: "38px Odin Rounded Bold Big"}), _this._tfTitle.alpha = 0, _this._tfTitle.tint = 0, _this._tfTitle.x = 50, _this._tfTitle.y = 68, _this.addChild(_this._tfTitle), _this._tfSubtitle = new PIXI.extras.BitmapText("Login with Facebook to get started", {font: "15px Odin Rounded Regular Small"}), _this._tfSubtitle.alpha = 0, _this._tfSubtitle.tint = 0, _this._tfSubtitle.x = 50, _this._tfSubtitle.y = 160, _this.addChild(_this._tfSubtitle), _this._createBt(), _this
    }

    return _inherits(StepLogin, _PIXI$Container), _createClass(StepLogin, [{
      key: "_onMouseOver", value: function () {
        TweenLite.to(this._bgOut, .285, {
          alpha: 0,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._btCntOut, .285, {
          alpha: 0,
          x: -72,
          ease: Cubic.easeInOut
        }), TweenLite.set(this._btCntOver, {x: -88}), TweenLite.to(this._btCntOver, .285, {
          alpha: 1,
          x: -80,
          ease: Cubic.easeInOut
        })
      }
    }, {
      key: "_onMouseOut", value: function () {
        TweenLite.to(this._bgOut, .285, {
          alpha: 1,
          ease: Cubic.easeInOut
        }), TweenLite.set(this._btCntOut, {x: -88}), TweenLite.to(this._btCntOut, .285, {
          alpha: 1,
          x: -80,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._btCntOver, .285, {alpha: 0, x: -72, ease: Cubic.easeInOut})
      }
    }, {
      key: "_onMouseUp", value: function () {
        FB.login(function (response) {
          "connected" == response.status && (superagent.get("/fblogin_fz").end(function (err, res) {
          }), user.fetchInfos(function () {
            nav.setId("selection")
          }))
        })
      }
    }, {
      key: "_createBt", value: function () {
        this._cntBt = new PIXI.Container, this._cntBt.x = 156, this._cntBt.y = 235, this._cntBt.alpha = 0, this.addChild(this._cntBt), this._bgOut = new PIXI.Sprite(PIXI.Texture.fromImage("cardflow_bt_full.png")), this._bgOut.tint = 0, this._bgOut.anchor.set(.5, .5), this._bgOut.scale.set(.5, .5), this._cntBt.addChild(this._bgOut), this._bgOver = new PIXI.Sprite(PIXI.Texture.fromImage("cardflow_bt_lines.png")), this._bgOver.tint = 0, this._bgOver.anchor.set(.5, .5), this._bgOver.scale.set(.5, .5), this._cntBt.addChild(this._bgOver), this._btCntOut = new PIXI.Container, this._btCntOut.x = -88, this._btCntOut.y = -6, this._btCntOut.alpha = 0, this._cntBt.addChild(this._btCntOut), this._tfOut = new PIXI.extras.BitmapText("LOGIN WITH FACEBOOK", {font: "12px Odin Rounded Bold Small"}), this._tfOut.tint = 16777215, this._tfOut.x = 19, this._btCntOut.addChild(this._tfOut), this._iconOut = new PIXI.Sprite(PIXI.Texture.fromImage("cardflow_icon_fb.png")), this._iconOut.tint = 16777215, this._iconOut.scale.set(.5, .5), this._iconOut.y = -1, this._btCntOut.addChild(this._iconOut), this._btCntOver = new PIXI.Container, this._btCntOver.x = -80, this._btCntOver.y = -6, this._btCntOver.alpha = 0, this._cntBt.addChild(this._btCntOver), this._iconOver = new PIXI.Sprite(PIXI.Texture.fromImage("cardflow_icon_fb.png")), this._iconOver.tint = 0, this._iconOver.scale.set(.5, .5), this._iconOver.y = -1, this._btCntOver.addChild(this._iconOver), this._tfOver = new PIXI.extras.BitmapText("LOGIN WITH FACEBOOK", {font: "12px Odin Rounded Bold Small"}), this._tfOver.tint = 0, this._tfOver.x = 19, this._btCntOver.addChild(this._tfOver), this._zoneBt = new PIXI.Sprite(PIXI.Texture.fromImage("cardflow_bt_full.png")), this._zoneBt.alpha = 0, this._zoneBt.anchor.set(.5, .5), this._zoneBt.scale.set(.5, .5), this._zoneBt.interactive = !0, this._zoneBt.buttonMode = !0, this._zoneBt.tint = 16711935, this._cntBt.addChild(this._zoneBt)
      }
    }, {
      key: "bindEvents", value: function () {
        this._zoneBt.on("mouseover", this._binds.onMouseOver), this._zoneBt.on("mouseout", this._binds.onMouseOut), this._zoneBt.on("mouseup", this._binds.onMouseUp)
      }
    }, {
      key: "unbindEvents", value: function () {
        this._zoneBt.off("mouseover", this._binds.onMouseOver), this._zoneBt.off("mouseout", this._binds.onMouseOut), this._zoneBt.off("mouseup", this._binds.onMouseUp)
      }
    }, {
      key: "show", value: function () {
        var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
        TweenLite.to(this._tfTitle, .6, {
          delay: delay,
          alpha: 1,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._tfSubtitle, .6, {
          delay: delay + .1,
          alpha: 1,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._cntBt, .6, {
          delay: delay + .2,
          alpha: 1,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._btCntOut, .3, {delay: delay + .4, alpha: 1, x: -80, ease: Cubic.easeInOut})
      }
    }, {
      key: "hide", value: function () {
        var delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
        TweenLite.to(this, .6, {
          delay: delay + .3,
          x: -100,
          alpha: 0,
          ease: Cubic.easeIn
        }), TweenLite.to(this._tfTitle, .6, {
          delay: delay,
          alpha: 0,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._tfSubtitle, .6, {
          delay: delay + .1,
          alpha: 0,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._cntBt, .6, {
          delay: delay + .35,
          alpha: 0,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._btCntOut, .2, {
          delay: delay + .2,
          alpha: 0,
          x: -72,
          ease: Cubic.easeInOut
        }), TweenLite.to(this._btCntOver, .2, {delay: delay + .2, alpha: 0, x: -72, ease: Cubic.easeInOut})
      }
    }]), StepLogin
  }(PIXI.Container);
  module.exports = StepLogin
}, {"./navSteps": 32, "iao/cardflow/cardUser": 23}],

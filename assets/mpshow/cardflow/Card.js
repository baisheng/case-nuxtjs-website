/* eslint-disable no-undef,no-floating-decimal,new-cap,prefer-rest-params */
// import {TweenLite, Power2, Sine} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Sine } from 'gsap/TweenMax'
import * as uColors from '../../fz/utils/colors'
import nav from '../cardflow/steps/navSteps'
import user from '../cardflow/cardUser'
import GridConfig from '../grid/GridConfig'
import TileShape from '../grid/tile/TileShape'
// const cardProject = (require("iao/grid/tile/TileImg")  require("iao/cardflow/cardProject"))
import cardProject from '../cardflow/cardProject'
import gridDataTexturesAvatar from "../grid/data/gridDataTexturesAvatar"
import gridDataTexturesImg from "../grid/data/gridDataTexturesImg"

class Card extends PIXI.Container {
  constructor () {
    super()

    this._isRetracted = false
    this._isAvatarLoaded = false
    this._isShown = false
    this._createShape()
    this._createProject()
    this._createTop()
    this._createCircle()
    this._createAvatarBg()
    this._createTexts()
    this._binds = {}
    this._binds.onChangeId = this._onChangeId.bind(this)
    this._binds.onChangeType = this._onChangeType.bind(this)
    this._binds.onAvatarLoaded = this._onAvatarLoaded.bind(this)
    this._binds.onChangeProject = this._onChangeProject.bind(this)
    this._binds.onUserConnect = this._onUserConnect.bind(this)
    this._binds.onTextureProjectLoaded = this._onTextureProjectLoaded.bind(this)
    this._binds.onProjectSave = this._onProjectSave.bind(this)
  }

  _createShape () {
    this._shape = new TileShape('medium')
    this._shape.setup()
    this._shape.scale.set(0, 0)
    this.addChild(this._shape)
  }

  _createProject () {
    this._imgProjectCnt = new PIXI.Container;
    this.addChild(this._imgProjectCnt);
    this._mskImgProjectCnt = new PIXI.Graphics;
    // 16711935
    this._mskImgProjectCnt.beginFill(16711935);
    this._mskImgProjectCnt.drawRect(-214, -225, 430, 430);
    this.addChild(this._mskImgProjectCnt);
    this._imgProjectCnt.mask = this._mskImgProjectCnt;
  }

  _createTop () {
    this._top = new PIXI.Sprite(PIXI.Texture.fromFrame("hover_top.png"));
    this._top.x = -this._top.width >> 1;
    this._top.y = -226;
    this._top.alpha = 0;
    this.addChild(this._top);
  }

  _createCircle () {
    this._circle = new PIXI.Sprite(PIXI.Texture.fromFrame("circle.png"));
    this._circle.width = 133;
    this._circle.height = 133;
    this._circle.toScale = this._circle.scale.x;
    this._circle.anchor.set(.5, .5);
    this._circle.scale.set(0, 0);
    this._circle.colorBase = 12434877;
    this._circle.tint = this._circle.colorBase;
    this.addChild(this._circle);
    this._colorCircle = 12434877;
  }

  _createAvatarBg () {
    this._avatarBg = new PIXI.Sprite(PIXI.Texture.fromFrame("circle.png"));
    this._avatarBg.width = 127;
    this._avatarBg.height = 127;
    this._avatarBg.toScale = this._avatarBg.scale.x;
    this._avatarBg.anchor.set(.5, .5);
    this._avatarBg.scale.set(0, 0);
    this._avatarBg.tint = 0;
    this.addChild(this._avatarBg);
    this._tf = new PIXI.extras.BitmapText("You!", {
      font: "16px Odin Rounded Bold Small"
    });
    this._tf.x = -this._tf.width >> 1;
    this._tf.y = -8;
    this._tf.alpha = 0;
    this.addChild(this._tf);
  }

  _createTexts () {
    this._tfName = new PIXI.extras.BitmapText("Maria", {
      font: "16px Odin Rounded Regular Small"
    });
    this._tfName.tint = 0xa3a4a4;
    this._tfName.x = -195;
    this._tfName.y = 173;
    this._tfName.alpha = 0;
    this.addChild(this._tfName);
    this._tfType = new PIXI.extras.BitmapText("", {
      font: "16px Odin Rounded Regular Small"
    });
    // this._tfType.tint = 0xffffff;
    this._tfType.tint = 0xffffff;

    this._reposTfType();
    this._tfType.y = 173;
    this._tfType.alpha = 0;
    this.addChild(this._tfType);
    this._isTfTypeVisible = false;
  }

  _reposTfType () {
    this._tfType.x = 212 - this._tfType.width - 20 >> 0;
    this._tfType.xBase = this._tfType.x;
  }

  _onChangeId () {
    const current = this;
    if (this._imgProjectToLoad) {
      this._imgProjectToLoad.off("loaded", this._binds.onTextureProjectLoaded);
    }
    const colors = GridConfig.colors[nav.type];
    if (nav.id === 'choice') {
      const text = GridConfig.texts[nav.type].title;
      if (text !== this._tfType.text) {
        this._tfType.text = text;
        this._reposTfType();
        this._tfType.tint = 16777215;
        this._tfType.x = this._tfType.xBase - 10;
      }
      TweenLite.to(this._tfType, .6, {
        delay: .5,
        x: this._tfType.xBase,
        alpha: 1,
        ease: Power2.easeOut,
        onStart () {
          current._tintTo(10724516, 16777215, (rgb) => {
            current._tfName.tint = uColors.RGBToHex(rgb);
          });
        }
      });
      if (this._tfType.tint === colors.default) {
        this._tintTo(colors.default, 16777215, (rgb) => {
          current._tfType.tint = uColors.RGBToHex(rgb);
        });
      }
      this._isTfTypeVisible = true;
    } else {
      if (this._imgProjectToLoad) {
        this._imgProjectToLoad.once("loaded", this._binds.onTextureProjectLoaded);
      }
      if (nav.id === 'final') {
        this._tintTo(16777215, 10724516, (rgb) => {
          current._tfName.tint = uColors.RGBToHex(rgb);
        }, .4);
        this._tintTo(colors.dark, colors.default, (rgb) => {
          current._tfType.tint = uColors.RGBToHex(rgb);
        }, .4);
      } else {
        if (this._isTfTypeVisible) {
          TweenLite.to(this._tfType, .25, {
            x: this._tfType.x + 10,
            alpha: 0,
            ease: Power2.easeIn
          });
          this._isTfTypeVisible = false;
          this._tintTo(16777215, 10724516, (rgb) => {
            current._tfName.tint = uColors.RGBToHex(rgb);
          });
        }
      }
    }
  }

  _onChangeType () {
    const self = this;
    let theme = 16711935;
    if (nav.type) {
      const opts = GridConfig.colors[nav.type];
      this._shape.setColor(opts.default);
      theme = opts.dark;
    } else {
      this._shape.setColor(15329769);
      theme = 12434877;
    }
    this._shape.excite();
    if (this._tweenTint) {
      this._tweenTint.kill();
    }
    this._tweenTint = this._tintTo(this._colorCircle, theme, (rgb) => {
      self._colorCircle = self._circle.tint = uColors.RGBToHex(rgb);
    });
  }

  _tintTo (color, force, fn) {
    const delay = arguments.length <= 3 || undefined === arguments[3] ? 0 : arguments[3];
    const colour = uColors.extractRGB(color);
    const original = uColors.extractRGB(force);
    const ftbCover = {
      r: colour.r,
      g: colour.g,
      b: colour.b
    };
    const params = [ftbCover];
    return TweenLite.to(ftbCover, .6, {
      delay: delay,
      r: original.r,
      g: original.g,
      b: original.b,
      ease: Power2.easeOut,
      onUpdate: fn,
      onUpdateParams: params
    });
  }

  _onUserConnect () {
    this.setAvatar(user.url);
    this._tfName.text = user.name;
    const audioOffsetX = this._tfName.x;
    this._tfName.x -= 10;
    TweenLite.to(this._tfName, .6, {
      delay: .4,
      alpha: 1,
      x: audioOffsetX,
      ease: Power2.easeOut
    });
  }

  _onAvatarLoaded () {
    const qta = this;
    this._isAvatarLoaded = true;
    this._avatar = new PIXI.Sprite(this._avatarToLoad.get());
    this._avatar.width = 127;
    this._avatar.height = 127;
    this._avatar.anchor.set(.5, .5);
    this._avatar.toScale = this._avatar.scale.x;
    this._avatar.scale.set(0, 0);
    this.addChild(this._avatar);
    TweenLite.to(this._tf, .25, {
      alpha: 0,
      ease: Power2.easeOut,
      onComplete () {
        qta.removeChild(qta._tf);
      }
    });
    TweenLite.set(this._avatar.scale, {
      delay: .175,
      x: .4 * this._avatar.toScale.x,
      y: .4 * this._avatar.toScale.y
    });
    TweenLite.to(this._avatar.scale, .425, {
      delay: .175,
      x: this._avatar.toScale,
      y: this._avatar.toScale,
      ease: Power2.easeInOut,
      onComplete () {
        qta.removeChild(qta._avatarBg);
      }
    });
  }

  _onChangeProject () {
    const self = this;
    let img = null;
    if (!cardProject.data) {
      if (this._imgProjectCurr) {
        img = this._imgProjectCurr
        TweenLite.to(this._imgProjectCurr, .2, {
          alpha: 0,
          ease: Power2.easeOut,
          onComplete () {
            self._imgProjectCnt.removeChild(img);
          }
        })
      }
    }
    this._imgProjectToLoad = gridDataTexturesImg.get(cardProject.urlImg);
    if (this._imgProjectCurr) {
      img = this._imgProjectCurr;
      this._imgProjectCnt.removeChild(img);
      this._imgProjectCurr = null;
    }
    if (this._imgProjectToLoad.isLoaded) {
      this._onTextureProjectLoaded();
    } else {
      this._imgProjectToLoad.once("loaded", this._binds.onTextureProjectLoaded);
      this._imgProjectToLoad.load();
    }
  }

  _onTextureProjectLoaded () {
    if (nav.id === 'choice') {
      this._imgProjectCurr = new PIXI.Sprite(this._imgProjectToLoad.get());
      this._imgProjectCurr.width = 431;
      this._imgProjectCurr.height = 431;
      this._imgProjectCurr.x = -this._imgProjectCurr.width >> 1;
      this._imgProjectCurr.x += 1;
      this._imgProjectCurr.y = -this._imgProjectCurr.height >> 1;
      this._imgProjectCurr.y -= 10;
      this._imgProjectCurr.alpha = 0;
      this._imgProjectCnt.addChild(this._imgProjectCurr);
      TweenLite.to(this._imgProjectCurr, .6, {
        alpha: 1,
        ease: Power2.easeOut
      });
    }
  }

  _onProjectSave (leafId) {
    this._avatarToLoad = gridDataTexturesAvatar.get(leafId);
    this._avatarToLoad.once("loaded", this._binds.onAvatarLoaded);
    this._avatarToLoad.load();
  }

  setAvatar (leafId) {
    this._avatarToLoad = gridDataTexturesAvatar.get(leafId);
    this._avatarToLoad.once("loaded", this._binds.onAvatarLoaded);
    this._avatarToLoad.load();
  }

  bindEvents () {
    nav.off("changeId", this._binds.onChangeId);
    nav.off("changeType", this._binds.onChangeType);
    user.off("connect", this._binds.onUserConnect);
    cardProject.off("change", this._binds.onChangeProject);
    cardProject.off("saving", this._binds.onProjectSave);
    if (this._imgProjectToLoad) {
      this._imgProjectToLoad.off("loaded", this._binds.onTextureProjectLoaded);
    }
  }

  show () {
    const obj = this;
    const _delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0]
    this._shape.activate();
    TweenLite.to(this._shape.scale, .6, {
      delay: _delay + .3,
      x: 1,
      y: 1,
      ease: Power2.easeInOut
    });
    TweenLite.to(this._circle.scale, .6, {
      delay: _delay + .25,
      x: this._circle.toScale,
      y: this._circle.toScale,
      ease: Power2.easeInOut,
      onStart () {
        TweenLite.to(obj._avatarBg.scale, .6, {
          x: obj._avatarBg.toScale,
          y: obj._avatarBg.toScale,
          ease: Power2.easeInOut
        });
        if (user.isConnected) {
          obj._onUserConnect();
        } else {
          TweenLite.to(obj._tf, .6, {
            delay: .1,
            alpha: 1,
            ease: Power2.easeInOut
          });
        }
      }
    });
  }

  hide () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0]
    TweenLite.to(this._top, .6, {
      delay: delay + .2,
      alpha: 0,
      ease: Power2.easeInOut
    });
    TweenLite.to(this._circle.scale, .6, {
      delay: delay + .25,
      x: 0,
      y: 0,
      ease: Power2.easeInOut
    });
    TweenLite.to(this._shape.scale, .6, {
      delay: delay + .2,
      x: 0,
      y: 0,
      ease: Power2.easeInOut
    });
    if (user.isConnected) {
      TweenLite.to(this._avatar.scale, .6, {
        delay: delay,
        x: 0,
        y: 0,
        ease: Power2.easeInOut
      });
    } else {
      TweenLite.to(this._tf, .6, {
        delay: delay,
        alpha: 0,
        ease: Power2.easeInOut
      });
    }
    TweenLite.to(this._avatarBg.scale, .6, {
      delay: delay,
      x: 0,
      y: 0,
      ease: Power2.easeInOut
    });
    TweenLite.to(this._tfName, .6, {
      delay: delay,
      alpha: 0,
      ease: Power2.easeInOut
    });
    TweenLite.to(this._imgProjectCnt, .4, {
      delay: delay,
      alpha: 0,
      ease: Power2.easeInOut
    });

  }

  updateUser () {
    this._onUserConnect();
  }

  retract () {
    const self = this;
    if (!this._isRetracted) {
      TweenLite.to(this._circle, .6, {
        delay: .55,
        y: -160,
        ease: Power2.easeOut
      });
      TweenLite.to(this._circle.scale, .6, {
        delay: .55,
        x: .6 * this._circle.toScale,
        y: .6 * this._circle.toScale,
        ease: Power2.easeOut
      });
      TweenLite.to(this._avatar, .6, {
        delay: .55,
        y: -160,
        ease: Power2.easeOut
      });
      TweenLite.to(this._avatar.scale, .6, {
        delay: .55,
        x: .6 * this._avatar.toScale,
        y: .6 * this._avatar.toScale,
        ease: Power2.easeOut,
        onComplete () {
          self._shape.alpha = 0;
        }
      });
      TweenLite.to(this._top, .6, {
        delay: .65,
        alpha: 1,
        ease: Power2.easeOut,
        onStart () {
          const opt = GridConfig.colors[nav.type];
          self._tintTo(opt.default, opt.dark, (rgb) => {
            self._top.tint = uColors.RGBToHex(rgb);
          });
        }
      });
      this._isRetracted = true;
    }
  }

  expand () {
    const docStyleLink = this;
    if (this._isRetracted) {
      if (this._imgProjectCurr) {
        TweenLite.to(this._imgProjectCurr, .6, {
          alpha: 0,
          ease: Power2.easeOut,
          onComplete () {
            docStyleLink._imgProjectCnt.removeChild(docStyleLink._imgProjectCurr);
            docStyleLink._imgProjectCurr = null;
          }
        });
      }
      this._shape.alpha = 1;
      this._shape.scale.x = .001;
      this._shape.scale.y = .001;
      TweenLite.to(this._shape.scale, .6, {
        delay: .45,
        x: 1,
        y: 1,
        ease: Power2.easeOut
      })
      TweenLite.to(this._circle, .6, {
        delay: .2,
        y: 0,
        ease: Power2.easeOut
      })
      TweenLite.to(this._circle.scale, .6, {
        delay: .2,
        x: this._circle.toScale,
        y: this._circle.toScale,
        ease: Power2.easeOut
      })
      TweenLite.to(this._avatar, .6, {
        delay: .2,
        y: 0,
        ease: Power2.easeOut
      })
      TweenLite.to(this._avatar.scale, .6, {
        delay: .2,
        x: this._avatar.toScale,
        y: this._avatar.toScale,
        ease: Power2.easeOut
      })
      TweenLite.to(this._top, .25, {
        delay: .175,
        alpha: 0,
        ease: Power2.easeOut
      })
      this._isRetracted = false;
    }
  }
}
export default Card

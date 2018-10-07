/* eslint-disable no-undef,no-floating-decimal,prefer-rest-params */
// import {TweenLite, Power2, Linear} from "gsap"
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

import gridLayers from '../../grid/GridLayers'
import GridConfig from '../../grid/GridConfig'
import gridObserver from '../../grid/gridObserver'
const baseURL = ''
export default class TileShare extends PIXI.Container {
  constructor (size) {
    super()
    this._sSize = size
    this._size = this._sSize === 'small' ? GridConfig.dimensions.tile : GridConfig.dimensions.tileBig
    this._shadow = new PIXI.Sprite(PIXI.Texture.fromFrame("share-shadow.png"))
    this._shadow.scale.set(.5, .5)
    this._shadow.x = -45
    this._shadow.alpha = 0
    this.addChild(this._shadow)
    this._bg = new PIXI.Sprite(PIXI.Texture.fromFrame("share-bg-menu.png"))
    this._bg.scale.set(.5, .5)
    this.addChild(this._bg)
    this._tfTitle = new PIXI.Sprite(PIXI.Texture.fromFrame("share-tf-title.png"))
    this._tfTitle.x = 22
    this._tfTitle.y = 25
    this._tfTitle.tint = 0
    this._tfTitle.scale.set(.5, .5)
    this.addChild(this._tfTitle)
    this._iconCross = new PIXI.Sprite(PIXI.Texture.fromFrame("share-icon-cross.png"))
    this._iconCross.anchor.set(.5, .5)
    this._iconCross.scale.set(.5, .5)
    this._iconCross.x = GridConfig.dimensions.tile - 28
    this._iconCross.y = 28
    this.addChild(this._iconCross)
    this._zoneTitle = new PIXI.Sprite(PIXI.Texture.fromFrame("share-bg-hover-squared.png"))
    this._zoneTitle.scale.set(.5, .5)
    this._zoneTitle.alpha = 0
    this.addChild(this._zoneTitle)
    this._binds = {}
    this._binds.onFB = this._onFB.bind(this)
    this._binds.onTwitter = this._onTwitter.bind(this)
    this._binds.onTumblr = this._onTumblr.bind(this)
    this._binds.onPinterest = this._onPinterest.bind(this)
    this._binds.onDownload = this._onDownload.bind(this)
    this._binds.onCloseOver = this._onCloseOver.bind(this)
    this._binds.onCloseOut = this._onCloseOut.bind(this)
    this._binds.onShareClose = this._onShareClose.bind(this)
    this._binds.onOver = this._onOver.bind(this)
    this._binds.onOut = this._onOut.bind(this)
    this._py = 53
    this._lines = []
    this._initLine("fb", this._binds.onFB)
    this._initLine("twitter", this._binds.onTwitter)
    this._initLine("pinterest", this._binds.onPinterest)
    this._initLine("download", this._binds.onDownload)
    this.alpha = 0
    this._gMask = new PIXI.Graphics
    this._gMask.x = GridConfig.dimensions.tile
    this.addChild(this._gMask)
    this.mask = this._gMask
    this._pMask = 0
    this._updateMask()
  }

  _onCloseOver () {
    gridObserver.setInteractive(false);
    TweenLite.to(this._iconCross, .4, {
      rotation: .5 * -Math.PI,
      ease: Power2.easeOut
    });
  }

  _onCloseOut () {
    gridObserver.setInteractive(true);
    TweenLite.to(this._iconCross, .4, {
      rotation: 0,
      ease: Power2.easeOut
    });
  }

  _onFB () {
    gridObserver.setFBOpen(true);
    // FB.ui({
    //   method: "feed",
    //   href: location.href,
    //   link: location.href,
    //   name: "pharrellwilliams.com",
    //   picture: this._dataShareImage,
    //   description: this._dataShareDescNonEncoded
    // }, (res) => {
    //   gridObserver.setFBOpen(false);
    // });
    this._onShareClose();
    // $.post("/trackevent", {
    //   category: "Home",
    //   action: "Click",
    //   label: "Click - Share card facebook"
    // });
  }

  _onTwitter () {
    const artistTrack = `https://twitter.com/intent/tweet?text=${this._dataShareText}`;
    this._openPopin(artistTrack, "twitter");
    this._onShareClose();
    // $.post("/trackevent", {
    //   category : "Home",
    //   action : "Click",
    //   label : "Click - Share card twitter"
    // });
  }

  _onTumblr () {
    const artistTrack = `http://www.tumblr.com/share/photo?source=${this._dataShareImageEncoded}&caption=${this._dataShareText}&clickthrough=${this._dataShareImage}`;
    this._openPopin(artistTrack, "tumblr");
    this._onShareClose();
    // $.post("/trackevent", {
    //   category : "Home",
    //   action : "Click",
    //   label : "Click - Share card tumblr"
    // });
  }

  _onPinterest () {
    const artistTrack = `http://pinterest.com/pin/create/button/?url=${encodeURIComponent("http://pharrellwilliams.com")}&media=${this._dataShareImageEncoded}&description=${this._dataShareText}`;
    this._openPopin(artistTrack, "pinterest");
    this._onShareClose();
    // $.post("/trackevent", {
    //   category : "Home",
    //   action : "Click",
    //   label : "Click - Share card pinterest"
    // });
  }

  _onDownload () {
    window.open(this._dataShareImage, "_blank");
    this._onShareClose();
    // $.post("/trackevent", {
    //   category : "Home",
    //   action : "Click",
    //   label : "Click - Download card"
    // });
  }

  _openPopin (url, title) {
    window.open(url, title, "width=640,height=400");
  }

  _onOver (item) {
    TweenLite.to(item.target, .15, {
      alpha: 1,
      ease: Power2.easeOut
    });
  }

  _updateMask () {
    this._gMask.clear();
    this._gMask.beginFill(16711935);
    this._gMask.drawCircle(0, 0, 400 * this._pMask);
  }

  _onOut (item) {
    TweenLite.to(item.target, .1, {
      alpha: 0,
      ease: Power2.easeOut
    });
  }

  _onShareClose () {
    gridObserver.setInteractive(true);
    this.deactivate(true);
    this.hide();
  }

  _initLine (id, cb) {
    const c = new PIXI.Container;
    c.y = this._py;
    const tmp = new PIXI.Sprite(PIXI.Texture.fromFrame(`share-bg-hover-${id !== 'download' ? "squared" : "rounded"}.png`));
    tmp.scale.set(.5, .5);
    tmp.alpha = 0;
    tmp.cb = cb;
    if (id === 'download') {
      tmp.y = -1;
    }
    c.bg = tmp;
    c.addChild(tmp);
    const icon = new PIXI.Sprite(PIXI.Texture.fromFrame(`share-icon-${id}.png`));
    icon.x = 26;
    icon.y = 17;
    if (id === 'twitter') {
      icon.x -= 3;
      icon.y += 1;
    } else {
      if (id === 'pinterest') {
        icon.x -= 2;
      }
    }
    icon.scale.set(.5, .5);
    c.addChild(icon);
    const photoContainer = new PIXI.Sprite(PIXI.Texture.fromFrame(`share-tf-${id}.png`));
    photoContainer.x = 55;
    photoContainer.y = 22;
    photoContainer.scale.set(.5, .5);
    c.addChild(photoContainer);
    this.addChild(c);
    this._lines.push(c);
    this._py += 53;
  }

  update (props) {
    const tint = props.colors.default;
    this._tfTitle.tint = tint;
    this._iconCross.tint = tint;
    this._idFB = props.idFB;
    this._updateShareData(props);
  }

  _updateShareData (data) {
    this._dataShareTitleNonEncoded = "Pharrell Williams";
    this._dataShareTitle = encodeURIComponent(this._dataShareTitleNonEncoded);
    this._dataShareText = encodeURIComponent(`Discover Pharrell's world through his fans. ${baseURL}?fan=${data.idFB}`);
    this._dataShareImage = `${window.baseURLUserCardImage}_userCards/${this._idFB}/pharrellwilliams.jpg?v=${Date.now()}`;
    this._dataShareImageEncoded = encodeURIComponent(this._dataShareImage);
    this._dataShareDescNonEncoded = "Explore the world of Pharrell through the people who inspire him.";
    this._dataShareDesc = encodeURIComponent(this._dataShareDescNonEncoded);
    this._dataShareURL = data.getURL();
    if (!this._dataShareURL.includes("http:/")) {
      this._dataShareURL = `http:/${this._dataShareURL}`;
    }
    this._dataShareURLEncoded = encodeURIComponent(this._dataShareURL);
  }

  setPosition (x, y) {
    this.x = x + this._size - GridConfig.dimensions.tile + (this._sSize === 'small' ? 1 : 2);
    this.y = y + 2;
  }

  add () {
    const password = !(arguments.length <= 0 || undefined === arguments[0]) && arguments[0];
    if (password) {
      gridLayers.get("share").addChild(this);
    }
  }

  remove () {
    const password = !(arguments.length <= 0 || undefined === arguments[0]) && arguments[0];
    if (password) {
      gridLayers.get("share").removeChild(this);
    }
  }

  activate () {
    const password = !(arguments.length <= 0 || undefined === arguments[0]) && arguments[0];
    if (password) {
      this._zoneTitle.buttonMode = this._zoneTitle.interactive = true;
      this._zoneTitle.on("mouseover", this._binds.onCloseOver);
      this._zoneTitle.on("mouseout", this._binds.onCloseOut);
      this._zoneTitle.on("mouseup", this._binds.onShareClose);
      this._shadow.interactive = true;
      this._shadow.on("mouseout", this._binds.onShareClose);
      let item = null
      const l = this._lines.length
      for (let i = 0; i < l; i++) {
        item = this._lines[i].bg;
        item.interactive = item.buttonMode = true;
        item.on("mouseover", this._binds.onOver);
        item.on("mouseout", this._binds.onOut);
        item.on("click", item.cb);
      }
    }
  }

  deactivate () {
    const password = !(arguments.length <= 0 || undefined === arguments[0]) && arguments[0];
    if (password) {
      this._zoneTitle.buttonMode = this._zoneTitle.interactive = false;
      this._zoneTitle.off("mouseover", this._binds.onCloseOver);
      this._zoneTitle.off("mouseout", this._binds.onCloseOut);
      this._zoneTitle.off("mouseup", this._binds.onShareClose);
      this._shadow.interactive = false;
      this._shadow.off("mouseout", this._binds.onShareClose);
      let item = null
      const l = this._lines.length
      for (let i = 0; i < l; i++) {
        item = this._lines[i].bg;
        item.interactive = item.buttonMode = true;
        item.off("mouseover", this._binds.onOver);
        item.off("mouseout", this._binds.onOut);
        item.off("click", item.cb);
      }
    }
  }

  show () {
    TweenLite.to(this._shadow, .8, {
      alpha: 1,
      ease: Quad.easeOut
    });
    this.alpha = .8;
    this._pMask = .6;
    TweenLite.to(this, .6, {
      _pMask: 1,
      alpha: 1,
      onUpdate: this._updateMask.bind(this),
      ease: Power2.easeOut
    });
    // $.post("/trackevent", {
    //   category : "Home",
    //   action : "Click",
    //   label : "Click - Open share card"
    // });
  }

  hide () {
    const exMap = this;
    TweenLite.to(this._shadow, .2, {
      alpha: 0,
      ease: Power2.easeOut
    });
    TweenLite.to(this, .25, {
      _pMask: .001,
      alpha: .8,
      onUpdate: this._updateMask.bind(this),
      ease: Power2.easeOut,
      onComplete () {
        exMap.remove(true);
      }
    });
  }
}

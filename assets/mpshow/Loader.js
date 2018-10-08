/* eslint-disable no-undef */
import Emitter from "../fz/events/Emitter";
// import {TweenLite, Cubic, Sine} from 'gsap'
import gridDataManager from './grid/gridDataManager'
import cardflowData from './cardflow/cardflowData'

export default class Loader extends Emitter {
  constructor () {
    super()
    this._count = 0
    this._countToCheck = 0
  }

  _onSpritesheetsLoaded () {
    this.emit("completeAssets")
  }

  _onDataLoaded () {
    this._checkComplete()
  }

  _checkComplete () {
    // this._count++;
    // if (this._count === this._countToCheck) {
    //   this.emit("completeData");
    // }
    this.emit("completeData");

  }

  _loadAssets () {
    this._loader = new PIXI.loaders.Loader;
    // if (!isMobile) {
    this._loader.add("/perlin_512.jpg");
    this._loader.add("/cardflow.json");
    this._loader.add("/share.json");
    // }
    this._loader.add("/share_base2.jpg");
    this._loader.add("/share_circle.png");
    this._loader.add("/circles.json");
    this._loader.add("/tiles.json");
    this._loader.add("/odin_regular_32.fnt");
    this._loader.add("/odin_regular_75.fnt");
    this._loader.add("/odin_bold_32.fnt");
    this._loader.add("/odin_bold_75.fnt");
    this._loader.add("/small_tile.json");
    // this._loader.add("/pw_site/img/grid/share_base2.jpg");
    // this._loader.add("/pw_site/img/grid/share_circle.png");
    // this._loader.add("/pw_site/spritesheets/circles.json");
    // this._loader.add("/pw_site/spritesheets/tiles.json");
    // this._loader.add("/pw_site/spritesheets/odin_regular_32.fnt");
    // this._loader.add("/pw_site/spritesheets/odin_regular_75.fnt");
    // this._loader.add("/pw_site/spritesheets/odin_bold_32.fnt");
    // this._loader.add("/pw_site/spritesheets/odin_bold_75.fnt");
    this._loader.once("complete", this._onSpritesheetsLoaded.bind(this));
    this._loader.load();
  }

  _loadData (data) {
    // console.log(data)
    gridDataManager.set('music', data)
    // gridDataManager.set('music', data)
    this._checkComplete()
    // this.emit("completeData");

  }
  _limitTexts (data) {
    return data
  }

  _alphabeticalSort (a, b) {
    return a.project_title.toLowerCase() < b.project_title.toLowerCase() ? -1 : 1;
  }

  loadAssets () {
    this._loadAssets();
  }

  loadData (data) {
    this._loadData(data);
  }
}

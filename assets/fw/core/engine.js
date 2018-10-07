/* eslint-disable no-undef,new-cap,no-unused-expressions */
import loop from '../../fz/core/loop'
import stage from '../../fz/core/stage'
const isMobile = false
class Engine {
  constructor () {
    const options = {
      antialias: true,
      resolution: 2,
      transparent: true,
    };
    if (isMobile) {
      options.antialias = false;
    }
    if (isMobile) {
      this.renderer = new PIXI.CanvasRenderer(0, 0, options);
    } else {
      this.renderer = new PIXI.autoDetectRenderer(0, 0, options);
    }
    this.width = 0;
    this.height = 0;
    this.stage = new PIXI.Container;
    this.dom = this.renderer.view;
    this._isPaused = true;
    this._binds = {};
    this._binds.onUpdate = this._onUpdate.bind(this);
    this._binds.onResize = this._onResize.bind(this);
  }

  _onUpdate () {
    this.renderer.render(this.stage);
  }

  _onResize () {
    this.width = stage.width;
    this.height = stage.height;
    this.renderer.resize(this.width, this.height);
    this.renderer.view.style.width = `${this.width}px`;
    this.renderer.view.style.height = `${this.height}px`;
  }

  init () {
    this.resume();
    stage.on("resize", this._binds.onResize);
    this._onResize();
  }

  resume () {
    if (this._isPaused) {
      loop.add(this._binds.onUpdate);
      this._isPaused = false;
    }
  }

  pause () {
    if (!this._isPaused) {
      loop.remove(this._binds.onUpdate);
      this._isPaused = true;
    }
  }
}

export default new Engine

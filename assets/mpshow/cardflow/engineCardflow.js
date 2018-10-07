/* eslint-disable no-undef,new-cap */
import stage from '../../fz/core/stage'
import loop from '../../fz/core/loop'

class EngineCardflow {
  constructor () {
    const opts = {
      antialias: true,
      resolution: 2,
      transparent: true
    }
    this.renderer = new PIXI.autoDetectRenderer(0, 0, opts);
    this.width = 0;
    this.height = 0;
    this.stage = new PIXI.Container;
    this.dom = this.renderer.view;
    this._isPaused = true;
    this._isInit = false;
    this._binds = {};
    this._binds.onUpdate = this._onUpdate.bind(this);
  }

  _onUpdate () {
    this.renderer.render(this.stage)
  }

  _onResize () {
    this.width = stage.width;
    this.height = stage.height;
    this.renderer.resize(this.width, this.height);
    this.renderer.view.style.width = `${this.width}px`;
    this.renderer.view.style.height = `${this.height}px`;
    //
    // this.renderer.view.style.width = this.width + "px"
    // this.renderer.view.style.height = this.height + "px"
  }

  resume () {
    if (!this._isInit) {
      stage.on('resize', this._binds.onResize);
      this._onResize();
      this._isInit = true;
    }
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

export default new EngineCardflow

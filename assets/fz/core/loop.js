/* eslint-disable prefer-reflect */
class Loop {
  constructor () {
    this._idRAF = -1;
    /** @type {number} */
    this._count = 0;
    /** @type {!Array} */
    this._listeners = [];
    this._binds = {};
    this._binds.update = this._update.bind(this);
  }

  _update () {
    let listener = null;
    for (let i = this._count; --i >= 0;) {
      listener = this._listeners[i];
      if (listener) {
        listener.apply(this, null);
      }
    }
    this._idRAF = requestAnimationFrame(this._binds.update);
  }

  start () {
    this._update()
  }

  stop () {
    cancelAnimationFrame(this._idRAF);
  }

  add (listener) {
    const idx = this._listeners.indexOf(listener);
    if (!(idx >= 0)) {
      this._listeners.push(listener);
      this._count++;
    }
  }

  remove (listener) {
    const idx = this._listeners.indexOf(listener);
    if (!(idx < 0)) {
      this._listeners.splice(idx, 1);
      this._count--;
    }
  }
}

export default new Loop

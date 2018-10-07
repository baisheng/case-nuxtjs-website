import Emitter from "../../fz/events/Emitter";
import * as interactions from "../../fz/core/interactions";
import GridConfig from "../grid/GridConfig";


class GridFilters extends Emitter {
  constructor () {
    super()
    this._init()
    this._binds = {}
    this._binds.onDown = this._onDown.bind(this)
  }

  _onDown (e) {
    const eOrigin = e.origin;
    eOrigin.preventDefault();
    eOrigin.stopImmediatePropagation();
    const dom = eOrigin.currentTarget;
    if (this._filters.length === this._countFilters) {
      this._filters = [dom.getAttribute("data-id")]
      this._selectOnly(dom)
      this.emit("change");
    }
    const id = dom.getAttribute("data-id");
    if (dom.classList.contains("selected")) {
      if (this._filters.length <= 1) {
        return;
      }
      dom.classList.remove("selected");
      const index = this._filters.indexOf(id);
      if (index < 0) {
        return;
      }
      this._filters.splice(index, 1);
    } else {
      dom.classList.add("selected");
      this._filters.push(id);
    }
    this.emit("change");
  }

  _selectOnly (domToSelect) {
    let dom = null
    const n = this._doms.length
    for (let i = 0; i < n; i++) {
      dom = this._doms[i];
      if (domToSelect !== dom) {
        dom.classList.remove("selected");
      }
    }
  }

  _init () {
    this._doms = document.querySelectorAll(".filter");
    this._filters = [];
    let dom = null
    const n = this._doms.length
    for (let i = 0; i < n; i++) {
      dom = this._doms[i];
      this._filters.push(dom.getAttribute("data-id"));
    }
    this._countFilters = this._filters.length;
  }

  bindEvents () {
    let dom = null
    const n = this._doms.length
    for (let i = 0; i < n; i++) {
      dom = this._doms[i];
      interactions.on(dom, "down", this._binds.onDown);
    }
  }

  has (type) {
    return this._filters.includes(type)
  }

  getRandom () {
    return this._filters.length ? this._filters[this._filters.length * Math.random() >> 0] : GridConfig.types[5 * Math.random() >> 0];
  }

  getFilters () {
    return this._filters
  }
}

export default new GridFilters

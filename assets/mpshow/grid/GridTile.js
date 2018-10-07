/* eslint-disable prefer-rest-params */
import * as GridUtils from './GridUtils'
import GridConfig from './GridConfig'
import gridDataManager from '../grid/gridDataManager'
import poolTileElements from '../grid/tile/pools/poolTileElements'
import filters from '../ui/filters'
export default class GridTile {
  constructor (size) {
    const isMine = !(arguments.length <= 1 || undefined === arguments[1]) && arguments[1];
    this._size = size;
    this.x = 0;
    this.y = 0;
    this._isMine = isMine;
    const typeOrigin = GridConfig.types[Math.random() * GridConfig.types.length >> 0];
    // this._typeOrigin = this._isMine ? gridDataManager.getMineIfICan(typeOrigin).type : typeOrigin;
    // this._typeOrigin = this._isMine ? gridDataManager.getMineIfICan(typeOrigin).type : typeOrigin;
    this._typeOrigin = 'music'
    this.isAdded = false;
    this._isMyCard = false;
    this.idxs = [];
    this._isTranslated = false;
    this._binds = {};
    this._binds.onChangeFilter = this._onChangeFilter.bind(this);
  }

  registerIdx (x, y) {
    this.idxs.push({x, y})
  }

  translate (x, y) {
    if (!this._isTranslated) {
      this._isTranslated = true;
      let idx = null
      const n = this.idxs.length
      for (let i = 0; i < n; i++) {
        idx = this.idxs[i]
        idx.x += x
        idx.y += y
      }
      this._calculatePosition(this.idxs[0])
    }
  }

  _calculatePosition ({x, y}) {
    this.x = x * GridConfig.dimensions.tile + x * GridConfig.dimensions.padding
    this.y = y * GridConfig.dimensions.tile + y * GridConfig.dimensions.padding
  }

  _onChangeFilter () {
    this._updateData(false, true);
  }

  _updateData (...args) {
    const forceUpdate = !(args.length <= 0 || undefined === args[0]) && args[0];
    const mockBusinessNetwork = !(args.length <= 1 || undefined === args[1]) && args[1];
    let needsUpdate = false;
    if (this._data) {
      if (filters.has(this._data.type)) {
        if (this._data.type !== this._typeOrigin && filters.has(this._typeOrigin)) {
          if (this._isMine) {
            this._data = gridDataManager.getMineIfICan(this._typeOrigin);
          } else {
            this._data = gridDataManager.get(this._typeOrigin);
          }
          needsUpdate = true;
        }
      } else {
        this._data = gridDataManager.getRandom();
        needsUpdate = true;
      }
    } else {
      if (filters.has(this._typeOrigin)) {
        if (this._isMine) {
          this._data = gridDataManager.getMineIfICan(this._typeOrigin);
        } else {
          this._data = gridDataManager.get(this._typeOrigin);
        }
      } else {
        this._data = gridDataManager.getRandom();
      }
      needsUpdate = true;
    }
    if ((needsUpdate || forceUpdate) && this._elts) {
      this._elts.update(this._data, mockBusinessNetwork);
    }
  }

  add () {
    if (!this.isAdded) {
      this.isAdded = true;
      this._elts = this._size === 'big' ? poolTileElements.getBig() : poolTileElements.getSmall();
      this._elts.debug = this._isMine;
      this._elts.setPosition(this.x, this.y);
      if (this._data) {
        this._elts.update(this._data);
      }
      this._elts.add();
    }
  }

  remove () {
    if (this.isAdded) {
      this.isAdded = false;
      this._elts.remove();
      if (this._size === 'big') {
        poolTileElements.releaseBig(this._elts);
      } else {
        poolTileElements.releaseSmall(this._elts);
      }
      this._elts = null;
    }
  }

  activate () {
    this._elts.activate()
    this._updateData(true)
    filters.on("change", this._binds.onChangeFilter)
  }

  deactivate () {
    this._data = null
    this._elts.deactivate()
    filters.off("change", this._binds.onChangeFilter)
  }

  setMyCard (data) {
    const andUpdate = arguments.length <= 1 || undefined === arguments[1] || arguments[1];
    this._isMyCard = true
    this._isMine = true
    this._dataMyCard = data
    this._typeOrigin = data.type
    this._data = data
    if (andUpdate && this._elts) {
      this._elts.update(this._data, true);
    }
  }

  unsetMyCard () {
    this._isMyCard = false;
    this._isMine = false;
    this._dataMyCard = null;
    this._typeOrigin = self.types[Math.random() * self.types.length >> 0];
    this._updateData(true, true);
  }

  getSize () {
    return this._size
  }
}

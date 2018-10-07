/* eslint-disable no-undef */
import GridTile from '../grid/GridTile'

// const isMobile = PIXI.utils.isMobile

// let GridMatrix = (require("iao/grid/GridUtils"), require("iao/grid/GridConfig"), undefined);
// GridMatrix = require(isMobile ? "iao/grid/GridMatrixMobile" : "iao/grid/GridMatrix");
import {GridMatrix, GridMatrixArray} from '../grid/GridUtils'

import * as uArray from '../../fz/utils/arrays'

export default class GridSet extends PIXI.Container {
  constructor (isMid) {
    super()
    this._isMid = isMid
    this._myCard = null
    this._tiles = []
    this._createFromMatrix(GridMatrixArray)
  }

  _createFromMatrix (matrix) {
    matrix = uArray.clone(matrix);
    this._tiles = uArray.clone(matrix);

    let size = ''
    let x = 0
    let y = 0
    let tile = null
    let coords = null
    const n = matrix.length
    for (let i = 0; i < n; i++) {
      coords = this._getCoord(i);
      // console.log(coords)
      x = coords.x;
      y = coords.y;
      size = matrix[i];
      if (size !== null) {
        if (this._isMid && x === 2 && y === 3) {
          tile = new GridTile(size, true);
          this._myCard = tile
        } else {
          tile = new GridTile(size, false);
        }
        matrix[i] = null;
        this._tiles[i] = tile;
        tile.registerIdx(x, y);
        if (size === 'big') {
          matrix[this._getIdx(x + 1, y)] = null;
          matrix[this._getIdx(x + 1, y + 1)] = null;
          matrix[this._getIdx(x, y + 1)] = null;
          this._tiles[this._getIdx(x + 1, y)] = tile
          this._tiles[this._getIdx(x + 1, y + 1)] = tile
          this._tiles[this._getIdx(x, y + 1)] = tile
          tile.registerIdx(x + 1, y);
          tile.registerIdx(x + 1, y + 1);
          tile.registerIdx(x, y + 1);
        }
      }
    }
  }

  getMyCard () {
    return this._myCard
  }

  getTiles () {
    return this._tiles
  }

  _getCoord (idx) {
    return {
      x: idx % GridMatrix.cols,
      y: idx / GridMatrix.cols >> 0
    }
  }

  _getIdx (x, y) {
    return y * GridMatrix.cols + x
  }
}

import * as GridUtils from './GridUtils'
import GridConfig from './GridConfig'
import GridSet from './GridSet'

export default class GridTiles {
  constructor () {
    this._wSet = GridUtils.getWidthSet();
    this._hSet = GridUtils.getHeightSet();
    this._currentIdxs = null;
    this.width = this._wSet * GridConfig.countSets;
    this.height = this._hSet * GridConfig.countSets;
    this.widthSet = this._wSet;
    this.heightSet = this._hSet;
    this._tileMyCard = null;
    this._tiles = [];
    this._tilesVisibles = [];
    this._createTiles();
  }

  _createTiles () {
    let set = null
    let cols = null
    let tiles = null
    let x = 0
    let y = 0
    const mid = GridConfig.countSets >> 1
    // let j = 0
    for (let i = 0; i < GridConfig.countSets; i++) {
      cols = this._getNewColsSet();
      for (let j = 0; j < GridConfig.countSets; j++) {
        if (mid !== i || mid !== j) {
          set = new GridSet(false);
        } else {
          set = new GridSet(true);
          // this._tileMyCard = set.getMyCard();
        }
        tiles = set.getTiles();
        this._registerTiles(tiles, cols);
        this._translateTiles(tiles, x, y);
        y += GridUtils.GridMatrix.lines;
      }
      this._tiles = this._tiles.concat(cols);
      x += GridUtils.GridMatrix.cols;
      y = 0;
    }
  }

  _getNewColsSet () {
    const indexesOfNeedle = [];
    for (let c = 0; c < GridUtils.GridMatrix.cols; c++) {
      indexesOfNeedle.push([]);
    }
    return indexesOfNeedle;
  }

  _registerTiles (tiles, cols) {
    let idx = 0
    const countCols = GridUtils.GridMatrix.cols
    const n = tiles.length
    for (let i = 0; i < n; i++) {
      cols[idx].push(tiles[i])
      idx++;
      if (idx >= countCols) {
        idx = 0;
      }
    }
  }

  _translateTiles (tiles, x, y) {
    let tile = null
    const n = tiles.length
    for (let i = 0; i < n; i++) {
      tile = tiles[i]
      tile.translate(x, y)
    }
  }

  refresh (idxs) {
    this._currentIdxs = idxs;
    const borders = 2;
    const idxsWithBorders = {
      x: idxs.x - borders,
      y: idxs.y - borders,
      w: idxs.w + borders,
      h: idxs.h + borders
    }
    this._removeOutsideTiles(idxsWithBorders)
    this._addInsideTiles(idxsWithBorders)
  }

  _removeOutsideTiles (idxs) {
    let tile = null
    for (let i = this._tilesVisibles.length; --i > -1;) {
      tile = this._tilesVisibles[i];
      if (this._isTileOutside(tile, idxs)) {
        tile.deactivate();
        tile.remove();
        this._tilesVisibles.splice(i, 1);
      }
    }
  }

  _addInsideTiles (idxs) {
    let tile = null
    for (let i = idxs.x; i < idxs.w; i++) {
      for (let y = idxs.y; y < idxs.h; y++) {
        tile = this._tiles[i][y]
        if (!tile.isAdded) {
          tile.add()
          tile.activate()
          this._tilesVisibles.push(tile)
        }
      }
    }
  }

  _isTileOutside (tile, idxs) {
    let idx = null
    const n = tile.idxs.length
    for (let i = 0; i < n; i++) {
      idx = tile.idxs[i]
      if (idx.x >= idxs.x && tile.x <= idxs.w && tile.y >= idxs.y && tile.y <= idxs.h) {
        return false
      }
    }
    return true
  }

  saveNewCard () {
    // this._tileMyCard.setMyCard(cardCreatorData.get())
  }

  _findTilesBig () {
    let tile = null;
    const bigs = [];
    for (let x = this._currentIdxs.x; x < this._currentIdxs.w; x++) {
      for (let y = this._currentIdxs.y; y < this._currentIdxs.h; y++) {
        tile = this._tiles[x][y];
        if (tile.getSize() === 'big' && !bigs.includes(tile)) {
          bigs.push(tile);
        }
      }
    }
    return bigs
  }

  _selectTileBig (bigs) {
    const xmid = this._currentIdxs.x + (this._currentIdxs.w - this._currentIdxs.x >> 1);
    const ymid = this._currentIdxs.y + (this._currentIdxs.h - this._currentIdxs.y >> 1);
    let tile = null;
    let bigSelected = null;
    let selected = [];
    let dy = 0;
    let dx = 0;
    let dist = 9999;
    let distMin = 9999;
    const n = bigs.length;
    for (let i = 0; i < n; i++) {
      tile = bigs[i];
      dy = xmid - (tile.idxs[0].x + 0.5);
      dx = ymid - (tile.idxs[1].y + 0.5);
      dist = Math.sqrt(dy * dy + dx * dx);
      if (dist === distMin) {
        selected.push(bigSelected);
      } else {
        if (dist < distMin) {
          distMin = dist;
          bigSelected = tile;
          selected = [];
        }
      }
    }
    if (selected.length > 1) {
      const method = selected.length * Math.random() >> 0;
      bigSelected = selected[method];
    }
    return bigSelected;
  }
}

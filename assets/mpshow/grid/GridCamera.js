import * as GridUtils from '../grid/GridUtils'

export default class GridCamera {
  constructor () {
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
    this.idxs = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    }
  }

  update (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.idxs.x = GridUtils.getIdx(this.x >> 0)
    this.idxs.y = GridUtils.getIdx(this.y >> 0)
    this.idxs.w = GridUtils.getIdx(this.width >> 0)
    this.idxs.h = GridUtils.getIdx(this.height >> 0)
  }
}

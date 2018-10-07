/* eslint-disable no-undef */
// const isMobile = PIXI.utils.isMobile
const isMobile = false
import GridConfig from '../grid/GridConfig'
import * as _GridMatrixMobile from '../grid/GridMatrixMobile'
import * as _GridMatrix from '../grid/GridMatrix'
// export const GridMatrix = require(isMobile ? '../grid/GridMatrixMobile' : '../grid/GridMatrix')
export const GridMatrix = isMobile ? _GridMatrixMobile : _GridMatrix
export const GridMatrixArray = GridMatrix.default
const widthSet = GridMatrix.cols * GridConfig.dimensions.tile + GridMatrix.cols * GridConfig.dimensions.padding
const heightSet = GridMatrix.lines * GridConfig.dimensions.tile + GridMatrix.lines * GridConfig.dimensions.padding

export const getWidthSet = function () {
  return widthSet;
}

export const getHeightSet = function () {
  return heightSet;
}

export const getIdx = function (n) {
  return n / (GridConfig.dimensions.tile + GridConfig.dimensions.padding) >> 0;
}

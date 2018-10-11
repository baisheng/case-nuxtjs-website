/* eslint-disable prefer-rest-params */
import GridConfig from '../grid/GridConfig'
import GridData from '../grid/data/GridData'
import cardUser from '../cardflow/cardUser'
import filters from '../ui/filters'

import Emitter from '../../fz/events/Emitter'

class GridDataManager extends Emitter {
  constructor () {
    super()
    this._myData = false
    this._data = {}
    // this._createFakeData()
  }

  _createFakeData () {
    this._data = {}
    let type = ''
    const n = GridConfig.types.length
    for (let i = 0; i < n; i++) {
      type = GridConfig.types[i]
      this._data[type] = new GridData(type)
    }
  }

  set (type, value) {
    console.log(type)
    this._data[type] = this._parse(type, value)
  }

  _parse (type, value) {
    const list = []
    let data = null
    const n = value.length
    for (let i = 0; i < n; i++) {
      data = new GridData(type, value[i])
      // if (cardUser.id && data.idFB === cardUser.id) {
      //   this._myData = data;
      // } else {
      list.push(data)
      // }
    }
    console.log(list)
    return list
  }

  get (forType) {
    const list = this._data[forType]
    const data = list[Math.random() * list.length >> 0]
    return data
  }

  getRandom () {
    const type = filters.getRandom()
    console.log(type + 'xpxx-----')
    const list = this._data[type]
    console.log(list.length)
    const data = list[Math.random() * list.length >> 0]
    return data
  }

  getMineIfICan () {
    const typeOtherwise = arguments.length <= 0 || undefined === arguments[0] ? null : arguments[0]

    return this._myData ? this._myData : this.get(typeOtherwise || GridConfig.types[GridConfig.types.length * Math.random() >> 0])
  }

  load () {

  }

  setMyCard (data) {
    this._myData = data
  }
}

export default new GridDataManager

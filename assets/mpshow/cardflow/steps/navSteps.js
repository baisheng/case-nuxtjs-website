/* eslint-disable prefer-rest-params */
import Emitter from '../../../fz/events/Emitter'
import timeout from '../../../fz/utils/timeout'

class NavSteps extends Emitter {
  constructor () {
    super()
    this.id = ''
    this.type = null
  }
  setId (value) {
    if (this.id !== value) {
      this.id = value
      this.emit('changeId')
    }
  }
  setType (value) {
    const delay = arguments.length <= 1 || undefined === arguments[1] ? 0 : arguments[1]
    if (this.type !== value) {
      this.type = value
      delay ? timeout(this._emitType.bind(this), 1e3 * delay) : this._emitType()
    }
  }

  _emitType () {
    this.emit('changeType')
  }
}

export default new NavSteps

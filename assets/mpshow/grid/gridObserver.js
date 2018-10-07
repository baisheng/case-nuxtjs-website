import Emitter from '../../fz/events/Emitter'

class GridObserver extends Emitter {
  constructor () {
    super()
    this.canOver = true
    this.isMenuOpen = false
    this.isClick = false
    this.isDragging = false
    this.isInteractive = false
    this.isFBOpen = false
  }

  setFBOpen (value) {
    if (this.isFBOpen !== value) {
      this.isFBOpen = value
    }
  }

  setCanOver (value) {
    if (this.canOver !== value) {
      this.canOver = value
      this.emit('changeCanOver')
    }
  }

  setMenuOpen (value) {
    if (this.isMenuOpen !== value) {
      this.isMenuOpen = value
      this.emit('changeMenuOpen')
    }
  }

  setDragging (value) {
    if (this.isDragging !== value) {
      this.isDragging = value
      this.emit('changeDragging')
    }
  }

  setInteractive (value) {
    if (this.isInteractive !== value) {
      this.isInteractive = value
      this.emit('changeInteractive')
    }
  }
}

export default new GridObserver

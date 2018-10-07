import Emitter from '../../fz/events/Emitter'

class CardProject extends Emitter {
  constructor () {
    super()
    this.canvas = null
  }

  set (data) {
    this.data = data
    if (this.data) {
      this.name = this._formatName(data.project_title_short)
      this.urlImg = this._formatURL(data.project_asset_square)
      this.urlImgMobile = this._formatURLMobile(data.project_asset_square)
    } else {
      this.name = null
      this.urlImg = null
      this.urlImgMobile = null
    }
    this.emit('change')
  }

  _formatName (value) {
    value = value.split('_').join('')
    value = value.split(' ')
    let endValue = ''
    let ns = ''
    const n = value.length
    for (let i = 0; i < n; i++) {
      if (!value[i + 1]) {
        endValue += value[i];
        break;
      }
      ns = `${value[i]} ${value[i + 1]}\n`;
      if (ns.length <= 13) {
        endValue += ns
        i++
      } else {
        endValue += `${value[i]}\n`
      }
    }
    return endValue
  }

  _formatURL (project) {
    // return `${baseURLUserImage + project}-M_FanCard_Small.jpg`
  }

  _formatURLMobile (project) {
    // return `${baseURLUserImage + project}-M_AddCard.jpg`
  }

  save () {
    this.emit("saving")
  }
}

export default new CardProject

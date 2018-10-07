import GridConfig from '../../grid/GridConfig'
import cardflowData from '../../cardflow/cardflowData'

const isMobile = false

class StepsElements {
  process () {
    if (!this.elements) {
      this.elements = {};
      let type = ""
      let n = GridConfig.types.length
      for (let i = 0; i < n; i++) {
        if ("music" !== type || isMobile) {
          this.elements[type] = this._createSelects(this.elements[type], type);
        } else {
          this.elements[type] = this._createInput(this.elements[type], type);
        }
      }
    }
  }

  _createInput (dataSelects, type) {
    const placeholder = 'Type song name'
    const dom = document.createElement('input')
    dom.setAttribute('type', 'text')
    dom.classList.add('cardflow-input')
    const domCnt = document.createElement('div')
    domCnt.classList.add('cardflow-input-cnt')
    let haystack = []
    let idsByTitle = {}
    let dataSelect = null
    let n = dataSelects.length
    for (let i = 0; i < n; i++) {
      dataSelect = dataSelects[i]
      haystack.push(dataSelect.project_title)
      idsByTitle[this._toTitleCase(dataSelect.project_title).toUpperCase()] = dataSelect.id
      dom.__idsByTitle = idsByTitle
      const $dom = $(dom)
      dom.__applySuggest = () => {
        dom.value = ""
        dom.setAttribute("placeholder", placeholder)
        dom.__isSuggested || (dom.__isSuggested = !0
        $dom.suggest(haystack, {suggestionColor: "#e3a202"})
      }
      domCnt.appendChild(dom)
      dom.__domCnt = domCnt
    }
  }
  _createSelets (dataSelects, type) {
    const domCnt = document.createElement('div')
    domCnt.classList.add('cardflow-select-cnt')
    domCnt.classList.add(`cardflow-select-cnt--${type}`)
    const dom = document.createElement('select')
    dom.classList.add('cardflow-select')
    let domOption = document.createElement('option')
    domOption.setAttribute('disabled', '')
    domOption.setAttribute('selected', '')
    domOption.innerHTML = 'SELECT ONE'
    dom.appendChild(domOption)
    let dataSelect = null
    let n = dataSelects.length
    for (let i = 0; i < n; i++) {
      dataSelect = dataSelects[i]
      domOption = document.createElement('option')
      domOption.setAttribute('value', dataSelect.id)
      domOption.setAttribute('data-asset_square')
      // dataSelect.project_asset_square
      domOption.innerHTML = this._toTitleCase(dataSelect.project_title).toUpperCase()
      dom.appendChild(domOption)
    }
  }
}

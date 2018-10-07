/* eslint-disable no-floating-decimal,no-undef */
import stage from '../fz/core/stage'
import engine from '../fw/core/engine'
import Loader from '../../assets/love/Loader'
import loop from '../fz/core/loop'
// const loading = require("iao/ui/loading");
import loading from './ui/loading'
import topbar from "./ui/topbar";
// import addcard from "./ui/addcard";

import timeout from '../fz/utils/timeout'
import poolGraphicsPharell from '../../assets/love/grid/tile/pools/poolGraphicsPharell'
import poolTileElements from '../../assets/love/grid/tile/pools/poolTileElements'
import gridObserver from '../../assets/love/grid/gridObserver'
import CardFlow from '../../assets/love/cardflow/CardFlow'
import Scene from '../../assets/love/Scene'
// const layer = require("iao/ui/layer");
import layer from '../mpshow/ui/layer'
import filters from "../mpshow/ui/filters";
// import createShaderPlugin from "../pixi-custom/createShaderPlugin";
// import createShaderPlugin from '~/assets/pixi-custom/createShaderPlugin'
// import bubbleVefrt from '~/assets/bubble.vert'
// import bubbleFrag from '~/assets/bubble.frag'

// createShaderPlugin(
//   'bubble',                                           // name
//   bubbleVefrt,
//   bubbleFrag,
//   {
//     noiseScale: {
//       type: "1f",
//       value: 5
//     },
//     noiseTime: {type: "1f", value: 0},
//     noiseTimeScale: {type: "1f", value: .002},
//     noiseValue: {type: "1f", value: 1},
//     mapNoise: {type: "sampler2D", value: null},
//     px: {type: "1f", value: 1},
//     py: {type: "1f", value: 1},
//     dx: {type: "1f", value: 1},
//     dy: {type: "1f", value: 1},
//     rad: {type: "1f", value: 0},
//     rectMask: {type: "4f", value: [-1e3, -1e3, 1e3, 1e3]},
//     tint: {type: "3f", value: [0, 0, 0]},
//     alpha: {type: "1f", value: 0},
//     translationMatrix: {type: "mat3", value: new Float32Array(9)},
//     projectionMatrix: {type: "mat3", value: new Float32Array(9)}
//   }
// );
//
const hasIntro = false
export const loader = new Loader
let hasLoadedAsset = false
let hasLoadedData = false
let scene = null

const showEverything = function () {
  gridObserver.setInteractive(true)
  filters.show(.4)
  // iamother.show(.8)
  topbar.show(.8)
  // addcard.setScene(scene)

  // location.href.indexOf("#addcard") > 0 ? setTimeout(() => {
  //   window.showCardFlow()
  // }, 1e3) : location.href.indexOf("#iao") > 0 && setTimeout(() => {
  //   iamother._binds.onClick()
  // }, 1e3)

}
let cardFlow = null

export const init = () => {

  const onLoadComplete = function () {
    // 初始化图形
    poolGraphicsPharell.init()
    // 初始化元素
    poolTileElements.init()
    scene = new Scene(false)
    scene.bindEvents()
    engine.stage.addChild(scene)

    timeout(() => {
      loading.stop();
      scene.show(0, 4);
      showEverything()
    }, 1e3);
  }
  // 舞台大小
  stage.init()
  // 用什么方式渲染场景
  engine.init()
  layer.bindElements()
  layer.bindEvents()
  topbar.bindElements()
  topbar.bindEvents()
  filters.bindElements()
  filters.bindEvents()
  loading.bindElements()

  loader.on("completeAssets", () => {
    hasLoadedAsset = true
    if (hasLoadedData) {
      onLoadComplete()
    }
  })
  loader.on("completeData", () => {
    hasLoadedData = true
    if (hasLoadedAsset) {
      onLoadComplete()
    }
  })

  gridObserver.isInteractive = false

  // onLoadComplete()
  // loader.loadData()
  // loader.loadAssets()
  loading.start()
  loop.start()
  document.getElementById("mpshow").appendChild(engine.dom)

  window.showCardFlow = () => {
    gridObserver.isInteractive = false
    engine.pause()
    layer.show()
    cardFlow = new CardFlow()
    cardFlow.show(.8)
  }
  window.closeCardFlow = () => {
    gridObserver.isInteractive = true
    engine.resume()
    layer.hide(.3)
    if (cardFlow) {
      cardFlow.hide()
    }
  }
  // window.showCardFlow = () => {
  //   menu.hide(),
  //     gridObserver.isInteractive = !1,
  //     engine.pause(), layer.show(), cardflow.show(.8),
  //   isMobile || music.setWhite()
  //
  // }, window.hideCardFlow = window.closeCardFlow = () => {
  //   gridObserver.isInteractive = !0,
  //     engine.resume(), layer.hide(.3), cardflow.hide(), isMobile || music.setBlack()
  //
  // };
}


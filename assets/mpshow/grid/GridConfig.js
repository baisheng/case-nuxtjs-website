const config = {}
config.catIds = {music: 1, fashion: 2, art: 3, social: 4, tv: 5}
config.colors = {
  fashion: {
    default: 1369306,
    dark: 1028788
  },
  music: {default: 16567556, dark: 15708702},
  social: {default: 10898121, dark: 7485832},
  art: {default: 4470420, dark: 3286647},
  tv: {default: 16739881, dark: 13849108}
}
config.types = ["art", "fashion", "music", "social", "tv"]
config.dimensions = {
  padding: 20,
  tile: 215,
  tileBig: 434
}
config.countSets = 30
config.texts = {
  fashion: {name: "Jem", title: "fashion", hover: "CHANEL"},
  music: {name: "Tom", title: "music", hover: "FREEDOM"},
  social: {name: "Lauren", title: "social good", hover: "INTL.\nDAY OF\nHAPPINESS"},
  art: {name: "Maria", title: "art & design", hover: "PERSPECTIVE\nCHAIR"},
  tv: {name: "Andrew", title: "tv & film", hover: "THE\nVOICE"}
}

export default config

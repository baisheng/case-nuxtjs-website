const config = {}
config.catIds = {music: 1, fashion: 2, art: 3, social: 4, tv: 5}
config.colors = {
  default: {default: 1887232, dark: 1887232},
  social: {default: 10898121, dark: 7485832},
  opensource: {default: 4470420, dark: 3286647},
}
// config.types = ["art", "fashion", "default", "social", "tv"]
config.types = ["default", "opensource"]
config.dimensions = {
  padding: 20,
  tile: 215,
  tileBig: 434
}
config.countSets = 30
config.texts = {
  opensource: {name: "Jem", title: "fashion", hover: "CHANEL"},
  default: {name: "Tom", title: "music", hover: "FREEDOM"},
  social: {name: "Lauren", title: "social good", hover: "INTL.\nDAY OF\nHAPPINESS"},
  art: {name: "Maria", title: "art & design", hover: "PERSPECTIVE\nCHAIR"},
  tv: {name: "Andrew", title: "tv & film", hover: "THE\nVOICE"}
}

export default config

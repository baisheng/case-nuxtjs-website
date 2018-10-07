16: [function (require, module, exports) {
  "use strict";

  function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
  }

  var _createClass = function () {
    function defineProperties (target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
      }
    }

    return function (Constructor, protoProps, staticProps) {
      return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
    }
  }(), GridData = require("iao/grid/data/GridData"), CardCreatorData = function () {
    function CardCreatorData () {
      _classCallCheck(this, CardCreatorData)
    }

    return _createClass(CardCreatorData, [{
      key: "set",
      value: function (id, name, title, fbId, projectUrl, categoryId, projectId, projectAssetSquare) {
        this.type = id, this.value = {
          fb_name: name,
          title: title,
          fb_id: fbId,
          project_title: title,
          project_title_short: title,
          project_url: projectUrl,
          category_id: categoryId,
          id: projectId,
          project_asset_square: projectAssetSquare
        }
      }
    }, {
      key: "updateIdFan", value: function (id) {
        this.value.id = id
      }
    }, {
      key: "get", value: function () {
        return new GridData(this.type, this.value)
      }
    }]), CardCreatorData
  }();
  module.exports = new CardCreatorData
}, {"iao/grid/data/GridData": 51}],

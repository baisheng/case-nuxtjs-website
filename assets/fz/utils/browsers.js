/* eslint-disable wrap-iife,no-undef,no-undef,no-unused-expressions,curly,curly,func-style,prefer-reflect,no-void,one-var,sort-vars,prefer-const */
// 'use strict';
!function(name, definition) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = definition();
  } else {
    if (typeof define === "function" && define.amd) {
      define(definition);
    } else {
      this[name] = definition();
    }
  }
}("bowser", () => {
  const t = true
  function detect (ua) {
    function getFirstMatch (regex) {
      const match = ua.match(regex);
      return match && match.length > 1 && match[1] || ""
    }

    function getSecondMatch (regex) {
      const match = ua.match(regex);
      return match && match.length > 1 && match[2] || ""
    }
    // let result;
    // const j = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase();
    // const isMultiPathModule = /like android/i.test(ua);
    // const android = !isMultiPathModule && /android/i.test(ua);
    // const chromeBook = /CrOS/.test(ua);
    // const newValue = getFirstMatch(/edge\/(\d+(\.\d+)?)/i);
    // const versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i);
    // const ipad = /tablet/i.test(ua);
    // const dontClearFolder = !ipad && /[^-]mobi/i.test(ua);

    // let result = {}
    // const iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase();
    // const likeAndroid = /like android/i.test(ua);
    // const android = !likeAndroid && /android/i.test(ua);
    // const chromeBook = /CrOS/.test(ua);
    // const edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i);
    // const versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i);
    // const tablet = /tablet/i.test(ua);
    // const mobile = !tablet && /[^-]mobi/i.test(ua);
    let result;
    const iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase();
    const likeAndroid = /like android/i.test(ua);
    const android = !likeAndroid && /android/i.test(ua);
    const chromeBook = /CrOS/.test(ua);
    const edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i);
    const versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i);
    const tablet = /tablet/i.test(ua);
    const mobile = !tablet && /[^-]mobi/i.test(ua);

    if (/opera|opr/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera',
        opera: t,
        version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    }  else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser',
        yandexbrowser: t,
        version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }  else if (/windows phone/i.test(ua)) {
      result = {
        name: 'Windows Phone',
        osname: 'Windows Phone',
        windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      } else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    } else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer',
        msie: t,
        version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeBook) {
      result = {
        name: 'Chrome',
        osname: 'Chrome OS',
        chromeos: t,
        chromeBook: t,
        chrome: t,
        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge',
        msedge: t,
        version: edgeVersion
      }
    } else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi',
        vivaldi: t,
        version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    } else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey',
        seamonkey: t,
        version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    } else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox',
        firefox: t,
        version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    } else if (/silk/i.test(ua)) {
      result = {
        name: 'Amazon Silk',
        silk: t,
        version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    } else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS',
        phantom: t,
        version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }  else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry',
        osname: 'BlackBerry OS',
        blackberry: t,
        version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    } else if (/(web|hpw)os/i.test(ua)) {
      result = {
        name: 'WebOS',
        osname: 'WebOS',
        webos: t,
        version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    } else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada',
        osname: 'Bada',
        bada: t,
        version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    } else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium',
        chromium: t,
        version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    } else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome',
        chrome: t,
        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (android) {
      result = {
        name: 'Android',
        version: versionIdentifier
      }
    } else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari',
        safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (iosdevice) {
      result = {
        name: iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot',
        googlebot: t,
        version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    } else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
      };
    }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    // if (!result.windowsphone && (android || result.silk)) {
    //   result.android = t
    //   result.osname = 'Android'
    // } else if (!result.windowsphone && iosdevice) {
    //   result[iosdevice] = t
    //   result.ios = t
    //   result.osname = 'iOS'
    // } else if (mac) {
    //   result.mac = t
    //   result.osname = 'macOS'
    // } else if (xbox) {
    //   result.xbox = t
    //   result.osname = 'Xbox'
    // } else if (windows) {
    //   result.windows = t
    //   result.osname = 'Windows'
    // } else if (linux) {
    //   result.linux = t
    //   result.osname = 'Linux'
    // }
    //
    // function getWindowsVersion (s) {
    //   switch (s) {
    //     case 'NT':
    //       return 'NT'
    //     case 'XP':
    //       return 'XP'
    //     case 'NT 5.0':
    //       return '2000'
    //     case 'NT 5.1':
    //       return 'XP'
    //     case 'NT 5.2':
    //       return '2003'
    //     case 'NT 6.0':
    //       return 'Vista'
    //     case 'NT 6.1':
    //       return '7'
    //     case 'NT 6.2':
    //       return '8'
    //     case 'NT 6.3':
    //       return '8.1'
    //     case 'NT 10.0':
    //       return '10'
    //     default:
    //       return undefined
    //   }
    // }

    // OS version extraction
    let osVersion = '';
    if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }
    const DOWNLOAD_TO = osVersion.split(".")[0];

    // device type extraction
    // const osMajorVersion = !result.windows && osVersion.split('.')[0];
    // if (
    //   tablet ||
    //   nexusTablet ||
    //   iosdevice === 'ipad' ||
    //   android && (osMajorVersion == 3 || osMajorVersion >= 4 && !mobile) ||
    //   result.silk
    // ) {
    //   result.tablet = t
    // } else if (
    //   mobile ||
    //   iosdevice === 'iphone' ||
    //   iosdevice === 'ipod' ||
    //   android ||
    //   nexusMobile ||
    //   result.blackberry ||
    //   result.webos ||
    //   result.bada
    // ) {
    //   result.mobile = t
    // }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
      result.msie && result.version >= 10 ||
      result.yandexbrowser && result.version >= 15 ||
      result.vivaldi && result.version >= 1.0 ||
      result.chrome && result.version >= 20 ||
      result.samsungBrowser && result.version >= 4 ||
      result.firefox && result.version >= 20.0 ||
      result.safari && result.version >= 6 ||
      result.opera && result.version >= 10.0 ||
      result.ios && result.osversion && result.osversion.split(".")[0] >= 6 ||
      result.blackberry && result.version >= 10.1 ||
      result.chromium && result.version >= 20
    ) {
      result.a = t;
    } else if (result.msie && result.version < 10 ||
      result.chrome && result.version < 20 ||
      result.firefox && result.version < 20.0 ||
      result.safari && result.version < 6 ||
      result.opera && result.version < 10.0 ||
      result.ios && result.osversion && result.osversion.split(".")[0] < 6 ||
      result.chromium && result.version < 20
    ) {
      result.c = t
    } else result.x = t

    return result
  }

  const bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (let i = 0; i < browserList.length; ++i) {
      const browserItem = browserList[i];
      if (typeof browserItem === 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision (version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map (arr, iterator) {
    let result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions (versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    let precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    const chunks = map(versions, function (version) {
      const delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version += new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      } else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      } else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser (minVersions, strictMode, ua) {
    let _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void 0;
    }

    if (strictMode === void 0) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    const version = "" + _bowser.version;
    for (const browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check (minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});

/* eslint-disable func-style,default-case,no-unused-expressions,prefer-reflect */
function getEvent (action) {
  let evt = "";
  if (isTouchDevice) {
    if (window.navigator.msPointerEnabled) {
      switch (action) {
        case"down":
          evt = "MSPointerDown";
          break;
        case"move":
          evt = "MSPointerMove";
          break;
        case"up":
          evt = "MSPointerUp";
          break;
        case"click":
          evt = "MSPointerUp"
      }
    } else {
      switch (action) {
        case"down":
          evt = "touchstart";
          break;
        case"move":
          evt = "touchmove";
          break;
        case"up":
          evt = "touchend";
          break;
        case"click":
          evt = "touchstart"
      }
    }
  } else {
    switch (action) {
      case"down":
        evt = "mousedown";
        break;
      case"move":
        evt = "mousemove";
        break;
      case"up":
        evt = "mouseup";
        break;
      case"click":
        evt = "click";
        break;
      case"over":
        evt = bowser.safari ? "mouseover" : "mouseenter";
        break;
      case"out":
        evt = bowser.safari ? "mouseout" : "mouseleave"
    }
  }
  return evt
}

function getObj (action) {
  switch (action) {
    case"down":
      return downs;
    case"move":
      return moves;
    case"up":
      return ups;
    case"click":
      return clicks;
    case"over":
      return overs;
    case"out":
      return outs
  }
}

function find (cb, datas) {
  for (let data = null, i = 0, n = datas.length; i < n; i++) {
    if (data = datas[i], data.cb === cb) {
      return {
        data,
        idx: i
      };
    }
  }
  return null
}

// import * as browsers from "../../fz/utils/browsers";
import bowser from 'bowser';

const downs = {};
const moves = {};
const ups = {};
const clicks = {};
const overs = {};
const outs = {};
const interactions = [downs, moves, ups, clicks];
// const isTouchDevice = browsers.mobile || browsers.tablet;

const browser = bowser.getParser(window.navigator.userAgent);
const isTouchDevice = browser.is('mobile');

// const isValidBrowser = browser.satisfies({
//   mobile: {
//     'Safari': '>11',
//     'Chrome': '>62',
//     'Firefox': '>51',
//     'UC Browser': '>11',
//     'Samsung Internet for Android': '>4',
//     'Android Browser': '>62'
//   },
//   'Chromium': '>62',
//   'Chrome': '>62',
//   'Firefox': '>51',
//   'Opera': '>49',
//   'Internet Explorer': '>10',
//   'Microsoft Edge': '>17',
//   'Safari': '>11'
// });

const on = function (elt, action, cb) {
  // const browser = bowser.getParser(window.navigator.userAgent);
// browser.
//   const isTouchDevice = bowser.getPlatformType() === 'tablet' || bowser.getPlatformType() === 'mobile';

  function proxy (e) {
    if (e = {
      x: 0,
      y: 0,
      origin: e
    }, isTouchDevice) {
      if (window.navigator.msPointerEnabled) {
        e.x = e.origin.clientX, e.y = e.origin.clientY;
      } else {
        const touch = e.origin.touches[0];
        touch && (e.x = touch.clientX, e.y = touch.clientY)
      }
    } else {
      e.x = e.origin.clientX, e.y = e.origin.clientY;
    }
    cb.call(this, e)
  }

  const evt = getEvent(action);
  if (evt !== "") {
    const obj = getObj(action);
    obj[elt] || (obj[elt] = []);
    obj[elt].push({cb, proxy}), elt.addEventListener(evt, proxy, !1)
  }
}

const off = function (elt, action, cb) {
  const evt = getEvent(action);
  if (evt !== '') {
    const obj = getObj(action);
    if (obj[elt]) {
      const datas = obj[elt];
      if (cb) {
        const result = find(cb, datas);
        if (!result) {
          return;
        }
        elt.removeEventListener(evt, result.data.proxy, !1), obj[elt].splice(result.idx, 1)
      } else {
        for (let data = null, i = 0, n = datas.length; i < n; i++) {
          data = datas[i], elt.removeEventListener(evt, data.proxy, !1);
        }
        obj[elt] = null, delete obj[elt]
      }
    }
  }
}
const has = function (elt, action, cb) {
  const evt = getEvent(action);
  if (evt !== "") {
    const obj = getObj(action);
    if (obj[elt]) {
      obj[elt];
      return !!cb
    }
  }
}

const unbind = function (elt) {
  for (let i = 0, n = interactions.length; i < n; i++) {
    interactions[i][elt] = null
    delete interactions[i][elt]
  }
}

export {on, off, has, unbind}

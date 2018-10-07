/* eslint-disable prefer-rest-params,no-floating-decimal,spaced-comment */
const isMobile = false
// import {TweenLite, Power2, Sine} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Sine } from 'gsap/TweenMax'
import gridObserver from "../grid/gridObserver";
import * as interactions from "../../fz/core/interactions";

const baseURL = ''

class Menu {
  constructor () {
    this._isShown = false;
    this._binds = {};
    this._binds.onScroll = this._onScroll.bind(this);
  }

  _onScroll () {
  }

  bindElements () {
    this.dom = document.getElementById("menu");
    this._domBtClose = this.dom.querySelector(".menu-bt-close");
    this._domBtsLinks = this.dom.querySelectorAll(".link");
  }

  bindEvents () {
    const query = `Discover Pharrell's world through his fans. ${baseURL}`;
    const sDesc = encodeURIComponent(query);
    const picture = `${baseURL}/pw_site/assets/img/Share_Asset_Facebook.png`;
    encodeURI(`${baseURL}/pw_site/assets/img/Share_Asset_Twitter.jpg`);
    document.querySelector(".share-entry--fb").addEventListener("click", (event) => {
      event.preventDefault();
      /*      FB.ui({
              method: "feed",
              href: location.href,
              link: location.href,
              name: "pharrellwilliams.com",
              picture: picture,
              description: query
            }, (res) => {
            });
            $.post("/trackevent", {
              category: "Nav",
              action: "Click",
              label: "Click - Share facebook"
            });*/
    });
    document.querySelector(".share-entry--twitter").addEventListener("click", (event) => {
      event.preventDefault();
      const svurl = `https://twitter.com/intent/tweet?text=${sDesc}`;
      window.open(svurl, "twitter", "width=640,height=400");
/*      $.post("/trackevent", {
        category: "Nav",
        action: "Click",
        label: "Click - Share Twitter"
      });*/
    });
    interactions.on(this.dom, "move", (event) => {
      event.origin.preventDefault();
      event.origin.stopPropagation();
      event.origin.stopImmediatePropagation();
    });
    this._domBtClose.addEventListener("click", this._onBtCloseClick.bind(this), false);
    const n = this._domBtsLinks.length
    for (let i = 0; i < n; i++) {
      interactions.on(this._domBtsLinks[i], "click", (event) => {
        const el7 = event.origin.currentTarget;
        const lnkDiv = el7.querySelector("span");
        /*$.post("/trackevent", {
          category: "Nav",
          action: "Click",
          label: `Click - Category ${lnkDiv.innerHTML}`
        });*/
      });
    }
  }

  _onBtCloseClick (e) {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    this.hide()
  }

  show () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0];
    if (!this._isShown) {
      this._isShown = true;
      if (isMobile) {
        document.getElementById("main").style.overflow = "hidden";
        document.getElementById("main").style.height = "100%";
      } else {
        gridObserver.setMenuOpen(true);
      }
      TweenLite.to(this.dom, .6, {
        delay: delay,
        css: {
          x: "0%"
        },
        ease: Power2.easeInOut
      });
      TweenLite.to(this._domBtClose, .6, {
        delay: delay + .2,
        css: {
          alpha: 1
        },
        ease: Power2.easeInOut
      });
    }
  }

  hide () {
    const delay = arguments.length <= 0 || undefined === arguments[0] ? 0 : arguments[0];
    if (this._isShown) {
      this._isShown = false;
      if (isMobile) {
        document.getElementById("main").style.overflow = "auto";
        document.getElementById("main").style.height = "auto";
      } else {
        gridObserver.setMenuOpen(false);
      }
      TweenLite.killTweensOf(this.dom);
      TweenLite.to(this.dom, .6, {
        delay: delay,
        css: {
          x: "-100%"
        },
        ease: Power2.easeInOut
      });
      TweenLite.to(this._domBtClose, .2, {
        css: {
          alpha: 0
        },
        ease: Power2.easeInOut
      });
    }
  }
}
export default new Menu

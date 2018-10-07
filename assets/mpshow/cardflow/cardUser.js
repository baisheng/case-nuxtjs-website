/* eslint-disable no-unused-expressions,prefer-rest-params,spaced-comment */
import Emitter from '../../fz/events/Emitter'
import timeout from "../../fz/utils/timeout"

class CardUser extends Emitter {
  constructor () {
    super()
    this.id = null
    this.name = ''
    this.isConnected = false
  }

  set (id, name) {
    this.id = id
    this.url = `http://graph.facebook.com/${id}/picture?type=large`
    this.name = name.split(' ')[0]
    this.isConnected = true
    this.emit("connect")
    document.body.classList.add("isLogged")
  }

  checkIfConnected (cb) {
    /*if (!(arguments.length <= 1 || undefined === arguments[1])) {
      arguments[1];
    }
    if (this.isConnected) {
      onstep(true)
      // return void onstep(true);
    }
    let id = null;
    if (location.href.includes("localhost")) {
      id = timeout(() => {
        onstep(false);
      }, 2e3);
    }
    FB.getLoginStatus((self) => {
      if (id) {
        timeout.clear(id);
      }
      if ("connected" == self.status) {
        superagent.get("/fblogin_fz").end((canCreateDiscussions, res) => {
        });
        onstep(true);
      } else {
        onstep(false);
      }
    });*/
  }

  fetchInfos (cb) {
    const gr = this;
    /*    FB.api("/me", (column) => {
          gr.set(column.id, column.name);
          if (cb) {
            cb();
          }
          FB.api(`/${column.id}`, (canCreateDiscussions) => {
          });
          const lnkDiv = document.getElementById("label-createcard");
          if (lnkDiv) {
            lnkDiv.innerHTML = "UPDATE YOUR CARD";
          }
          const inStash = document.getElementById("label-createcard-hover");
          if (inStash) {
            inStash.innerHTML = "UPDATE YOUR CARD";
          }
        });*/
  }

  checkIfConnectedAndGetInfos () {
    const that = this;
    const cb = arguments.length <= 0 || undefined === arguments[0] ? null : arguments[0];
    const withTimeout = !(arguments.length <= 1 || undefined === arguments[1]) && arguments[1];
    this.checkIfConnected((canCreateDiscussions) => {
      if (canCreateDiscussions) {
        that.fetchInfos(cb)
      } else {
        cb()
      }
    }, withTimeout)
  }
}

export default new CardUser

import StepLogin from "./StepLogin";
import StepSelection from "./StepSelection";
import StepChoice from "./StepChoice";
import StepFinal from "./StepFinal";
import stepsElements from "./stepsElements";
import nav from "./navSteps";

const cardProject = (require("iao/cardflow/cardUser"),require("iao/cardflow/cardProject"))
import GridConfig from "iao/grid/GridConfig";

class Steps extends PIXI.Container {
  constructor () {
    super()
    this._isBtBackShown = false
    stepsElements.process()
    this._btBack = new PIXI.Sprite(PIXI.Texture.fromImage("cardflow_bt_back.png"))
    this._btBack.anchor.set(.5, .5)
    this._btBack.scale.set(.5, .5)
    this._btBack.x = 40
    this._btBack.y = 30
    this._btBack.alpha = 0
    this.addChild(this._btBack)
    this._zoneBack = new PIXI.Sprite(PIXI.Texture.fromImage("carflow_bg-bt-next.png"))
    this._zoneBack.width = 64
    this._zoneBack.height = 44
    this._zoneBack.y = 13
    this._zoneBack.alpha = 0
    this.addChild(this._zoneBack)
    this._binds = {}
    this._binds.onChangeId = this._onChangeId.bind(this)
    this._binds.onBtBackOver = this._onBtBackOver.bind(this)
    this._binds.onBtBackOut = this._onBtBackOut.bind(this)
    this._binds.onBtBackClick = this._onBtBackClick.bind(this)
    this._binds.onProjectSave = this._onProjectSave.bind(this)
  }

  _onChangeId () {
    const root = this;
    const txt = arguments.length <= 0 || void 0 === arguments[0] ? -1 : arguments[0];
    if (this._current) {
      !(() => {
        const m = root._current;
        m.unbindEvents();
        m.hide(() => {
          root.removeChild(m);
        });
      })();
    }
    this._current = this._getStep();
    this._current.bindEvents();
    this.addChild(this._current);
    this._current.show(txt == -1 ? .4 : txt);
  }

  _onBtBackOver () {
    TweenLite.to(this._btBack, .25, {
      x : 25,
      ease : Cubic.easeOut
    });
  }
  _onBtBackOut () {
    TweenLite.to(this._btBack, .25, {
      x : 30,
      ease : Cubic.easeOut
    });
  }
  _onBtBackClick () {
    if ("choice" == nav.id) {
      nav.setId("selection");
      nav.setType(null, .3);
    } else {
      if ("final" == nav.id) {
        nav.setId("choice");
      }
    }
  }
  _onProjectSave () {
    this.hideBtBack();
  }

  bindEvents () {
    nav.on("changeId", this._binds.onChangeId);
    this._zoneBack.on("mouseover", this._binds.onBtBackOver);
    this._zoneBack.on("mouseout", this._binds.onBtBackOut);
    this._zoneBack.on("mouseup", this._binds.onBtBackClick);
    windowEl.on("saving", this._binds.onProjectSave);
  }

  unbindEvents () {
    nav.off("changeId", this._binds.onChangeId);
    this._zoneBack.off("mouseover", this._binds.onBtBackOver);
    this._zoneBack.off("mouseout", this._binds.onBtBackOut);
    this._zoneBack.off("mouseup", this._binds.onBtBackClick);
    windowEl.off("saving", this._binds.onProjectSave);
  }
  _getStep () {
    return "login" == nav.id ? new StepLogin : "selection" == nav.id ? new StepSelection : "choice" == nav.id ? new StepChoice : "final" == nav.id ? new StepFinal : void 0;
  }
  show () {
    const artistTrack = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
    this._onChangeId(artistTrack);
  }

  showBtBack () {
    const scope = this;
    const delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
    if (!this._isBtBackShown) {
      this._btBack.x = 50;
      TweenLite.to(this._btBack, .6, {
        delay : delay,
        x : 30,
        alpha : 1,
        ease : Cubic.easeOut,
        onComplete() {
          scope._zoneBack.interactive = scope._zoneBack.buttonMode = true;
        }
      });
      this._btBack.tint = GridConfig.colors[nav.type].dark;
      this._isBtBackShown = true;
    }
  }

  hideBtBack () {
    const delay = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
    if (this._isBtBackShown) {
      TweenLite.to(this._btBack, .25, {
        delay : delay,
        x : 20,
        alpha : 0,
        ease : Cubic.easeOut
      });
      this._zoneBack.interactive = this._zoneBack.buttonMode = false;
      this._isBtBackShown = false;
    }
  }
  hide () {
    const artistTrack = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
    this.hideBtBack(artistTrack);
    this._current.unbindEvents();
    this._current.hide();
  }
}
export default Steps

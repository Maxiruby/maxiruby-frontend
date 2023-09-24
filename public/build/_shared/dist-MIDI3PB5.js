import {
  init_dist,
  ne,
  p,
  se,
  y
} from "/build/_shared/chunk-BH4QTBGM.js";
import {
  __esm
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/@walletconnect/modal/dist/index.js
var d;
var init_dist2 = __esm({
  "node_modules/@walletconnect/modal/dist/index.js"() {
    init_dist();
    d = class {
      constructor(e) {
        this.openModal = se.open, this.closeModal = se.close, this.subscribeModal = se.subscribe, this.setTheme = ne.setThemeConfig, ne.setThemeConfig(e), y.setConfig(e), this.initUi();
      }
      async initUi() {
        if (typeof window < "u") {
          await import("/build/_shared/dist-CCAY5TUL.js");
          const e = document.createElement("wcm-modal");
          document.body.insertAdjacentElement("beforeend", e), p.setIsUiLoaded(true);
        }
      }
    };
  }
});
init_dist2();
export {
  d as WalletConnectModal
};
//# sourceMappingURL=/build/_shared/dist-MIDI3PB5.js.map

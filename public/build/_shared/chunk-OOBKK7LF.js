import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PGEV6FY.js";
import {
  createHotContext
} from "/build/_shared/chunk-LW2SL6KW.js";
import {
  require_react
} from "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/context/priceContext.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/context/priceContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/priceContext.tsx"
  );
  import.meta.hot.lastModified = "1694343663964.3408";
}
var PriceContext = (0, import_react.createContext)({});
var PriceContextProvider = ({
  children
}) => {
  _s();
  const [prices, setPrices] = (0, import_react.useState)({});
  (0, import_react.useEffect)(() => {
    updatePrices();
    const interval = setInterval(async () => {
      try {
        await updatePrices();
      } catch (error) {
        console.error(error);
      }
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  async function updatePrices() {
    const prices2 = {};
    const markets = await fetch("https://api.binance.com/api/v3/ticker/price").then(async (x) => await x.json());
    for (const market of markets) {
      if (market.symbol.endsWith("USDT")) {
        const token = market.symbol.slice(0, -4);
        prices2[token] = +market.price;
        if (["ETH", "MATIC", "FTM", "AVAX", "BNB"].includes(token)) {
          prices2[`W${token}`] = +market.price;
        }
        if (["ETH", "USDC", "DAI", "USDT", "BTC"].includes(token)) {
          if (["ETH", "BTC"].includes(token)) {
            prices2[`W${token}.e`] = +market.price;
          } else {
            prices2[`${token}.e`] = +market.price;
          }
        }
        if (token === "BTC") {
          prices2["BTCB"] = +market.price;
        }
      }
    }
    prices2["USDT"] = 1;
    prices2["fUSDT"] = 1;
    prices2["USDT.e"] = 1;
    prices2["MIM"] = 1;
    setPrices(prices2);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PriceContext.Provider, { value: prices, children }, void 0, false, {
    fileName: "app/context/priceContext.tsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
};
_s(PriceContextProvider, "AyDZng7+aEBipOGwqaguTBzobZI=");
_c = PriceContextProvider;
var priceContext_default = PriceContext;
var _c;
$RefreshReg$(_c, "PriceContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PriceContextProvider,
  priceContext_default
};
//# sourceMappingURL=/build/_shared/chunk-OOBKK7LF.js.map

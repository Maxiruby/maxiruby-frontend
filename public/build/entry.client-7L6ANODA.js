import {
  require_client
} from "/build/_shared/chunk-QJACIIMR.js";
import {
  ConnectKitProvider,
  defaultConfig,
  require_chains,
  require_public
} from "/build/_shared/chunk-S3M4RR2O.js";
import "/build/_shared/chunk-SJOU5J2P.js";
import "/build/_shared/chunk-QOSJW2MN.js";
import "/build/_shared/chunk-HVBBQYES.js";
import "/build/_shared/chunk-CSQX3O44.js";
import {
  PriceContextProvider
} from "/build/_shared/chunk-OOBKK7LF.js";
import "/build/_shared/chunk-JZ6DPCI3.js";
import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-GFRV7PTJ.js";
import "/build/_shared/chunk-QS27G3MX.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-AOB2A6RH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PGEV6FY.js";
import {
  createHotContext
} from "/build/_shared/chunk-LW2SL6KW.js";
import "/build/_shared/chunk-DDY2UGSS.js";
import {
  require_react
} from "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_wagmi2 = __toESM(require_dist());

// app/wagmi.ts
var import_wagmi = __toESM(require_dist());
var import_chains = __toESM(require_chains());
var import_public = __toESM(require_public());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/wagmi.ts"
  );
  import.meta.hot.lastModified = "1694959810980.9739";
}
var { chains, publicClient } = (0, import_wagmi.configureChains)(
  [import_chains.bscTestnet],
  [(0, import_public.publicProvider)()]
);
var walletConnectProjectId = "8b598b955027ef59e158c27e7f42a7bd";
var config = (0, import_wagmi.createConfig)(
  defaultConfig({
    autoConnect: true,
    appName: "My wagmi + ConnectKit App",
    walletConnectProjectId,
    publicClient,
    chains
  })
);

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1694274261500.414";
}
(0, import_react2.startTransition)(() => {
  (0, import_client.hydrateRoot)(
    document,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_wagmi2.WagmiConfig, { config, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PriceContextProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ConnectKitProvider,
      {
        onConnect: async (kit) => {
          console.log(kit);
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append(
            "Authorization",
            "Bearer " + localStorage.getItem("token")?.replace(/['"]+/g, "")
          );
          var raw = JSON.stringify({
            wallet: kit.address
          });
          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          };
          fetch("http://maxiruby.com/api/users/auth/wallet", requestOptions).then((response) => response.text()).then((result) => console.log(result)).catch((error) => console.log("error", error));
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
          fileName: "app/entry.client.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/entry.client.tsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this)
  );
});
//# sourceMappingURL=/build/entry.client-7L6ANODA.js.map

import {
  Container,
  Section
} from "/build/_shared/chunk-4MNH2NYO.js";
import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-GFRV7PTJ.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  Button_default
} from "/build/_shared/chunk-Y3UV4XYA.js";
import "/build/_shared/chunk-6XZNRQXK.js";
import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-AOB2A6RH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PGEV6FY.js";
import {
  createHotContext
} from "/build/_shared/chunk-LW2SL6KW.js";
import "/build/_shared/chunk-DDY2UGSS.js";
import "/build/_shared/chunk-6NJTHYWJ.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/routes/portfolio.tsx
var import_wagmi = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/portfolio.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/portfolio.tsx"
  );
  import.meta.hot.lastModified = "1694272579887.0098";
}
var meta = () => {
  return [{
    title: "Portfolio \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Portfolio \u2014 Maxiruby"
  }];
};
function Portfolio() {
  _s();
  const {
    address
  } = (0, import_wagmi.useAccount)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-1 flex-col items-center justify-center gap-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-medium font-heading", children: "Portfolio" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center text-center gap-x-1.5 gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-muted-foreground font-medium uppercase", children: "Wallet Address" }, void 0, false, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-accent font-medium", children: address }, void 0, false, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-wrap items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/portfolio", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Tier", variant: isActive ? "primary" : "secondary", children: "Tier" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 63,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/portfolio/idos", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "IDO's Participated", variant: isActive ? "primary" : "secondary", children: "IDO's Participated" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 71,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/portfolio/claims", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Claims", variant: isActive ? "primary" : "secondary", children: "Claims" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 79,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 87,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 86,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 44,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Portfolio, "f9NWnmN5HVUZ/B5uvJNUrGbAStM=", false, function() {
  return [import_wagmi.useAccount];
});
_c = Portfolio;
var _c;
$RefreshReg$(_c, "Portfolio");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Portfolio as default,
  meta
};
//# sourceMappingURL=/build/routes/portfolio-6GHTBV5O.js.map

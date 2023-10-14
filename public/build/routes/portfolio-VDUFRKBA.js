import {
  axios_default
} from "/build/_shared/chunk-YY6PEDAH.js";
import {
  api
} from "/build/_shared/chunk-FXFW7OVD.js";
import {
  Container,
  Section
} from "/build/_shared/chunk-GQSZI2RT.js";
import {
  useSelector
} from "/build/_shared/chunk-JKJ7ZXCB.js";
import "/build/_shared/chunk-OZJUWIU6.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-XRILBDVH.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-AOB2A6RH.js";
import {
  Button_default
} from "/build/_shared/chunk-DV2ZTUAY.js";
import "/build/_shared/chunk-QJ3Y6ZRC.js";
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

// app/routes/portfolio.tsx
var import_react2 = __toESM(require_react());
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
  import.meta.hot.lastModified = "1695573171235.84";
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
  const {
    user
  } = useSelector((user2) => ({
    ...user2
  }));
  let userData = api.get("user");
  userData = JSON.parse(userData);
  const gerUSer = async () => {
    if (!userData.token)
      return;
    try {
      const {
        data
      } = await axios_default.get(`https://api.maxiruby.com/api/users/auth`, {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      });
      localStorage.setItem("profile", JSON.stringify(data.result));
    } catch (error) {
      console.log(error);
    }
  };
  (0, import_react2.useEffect)(() => {
    gerUSer();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-1 flex-col items-center justify-center gap-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-medium font-heading", children: "Portfolio" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center text-center gap-x-1.5 gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-muted-foreground font-medium uppercase", children: "Wallet Address" }, void 0, false, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-accent font-medium", children: address }, void 0, false, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-wrap items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/portfolio", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Tier", variant: isActive ? "primary" : "secondary", children: "Tier" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 92,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 89,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/portfolio/idos", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "IDO's Participated", variant: isActive ? "primary" : "secondary", children: "IDO's Participated" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 100,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/portfolio/claims", end: true, children: ({
        isActive
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Claims", variant: isActive ? "primary" : "secondary", children: "Claims" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 108,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 105,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 88,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 116,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 73,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 72,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(Portfolio, "P0gSgTcrO1vNiZCWj2UO/AVOEXQ=", false, function() {
  return [import_wagmi.useAccount, useSelector];
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
//# sourceMappingURL=/build/routes/portfolio-VDUFRKBA.js.map

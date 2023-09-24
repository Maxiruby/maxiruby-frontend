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

// app/routes/portfolio._index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/portfolio._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/portfolio._index.tsx"
  );
  import.meta.hot.lastModified = "1695297940769.325";
}
var meta = () => {
  return [{
    title: "Portfolio \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Portfolio \u2014 Maxiruby"
  }];
};
function PortfolioTier() {
  _s();
  const [projects, setProjects] = import_react.default.useState([]);
  (0, import_react.useEffect)(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token")?.replace(/['"]+/g, ""));
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      fetch("https://api.maxiruby.com/api/users/auth/getproject", requestOptions).then((response) => response.text()).then((result) => setProjects(JSON.parse(result).result)).catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-1 flex-col w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-1 flex-col w-full max-w-[700px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8", children: projects ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tier, {
          tier: {
            tier: projects.tier
          }
        }, void 0, false, {
          fileName: "app/routes/portfolio._index.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: "app/routes/portfolio._index.tsx",
        lineNumber: 52,
        columnNumber: 21
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-muted-foreground font-medium text-center py-3", children: "Once you start having activity, your tier level will be shown here." }, void 0, false, {
        fileName: "app/routes/portfolio._index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: "app/routes/portfolio._index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/portfolio._index.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(PortfolioTier, "TSrpuQX6QU8EgjQSxaAzj2u9i4o=");
_c = PortfolioTier;
function Tier({
  tier
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-1 flex-col w-full bg-card/80 rounded-3xl p-5 gap-y-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
      className: "flex items-center justify-center bg-accent rounded-2xl py-3 px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl text-accent-foreground font-bold capitalize", children: tier.tier }, void 0, false, {
        fileName: "app/routes/portfolio._index.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/portfolio._index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/portfolio._index.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_c2 = Tier;
var _c;
var _c2;
$RefreshReg$(_c, "PortfolioTier");
$RefreshReg$(_c2, "Tier");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PortfolioTier as default,
  meta
};
//# sourceMappingURL=/build/routes/portfolio._index-MMJ6I4YR.js.map

import {
  Button_default
} from "/build/_shared/chunk-DV2ZTUAY.js";
import "/build/_shared/chunk-QJ3Y6ZRC.js";
import {
  Link
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

// app/routes/portfolio.idos.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/portfolio.idos.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/portfolio.idos.tsx"
  );
  import.meta.hot.lastModified = "1695573168080.4753";
}
var meta = () => {
  return [{
    title: "Portfolio \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Portfolio \u2014 Maxiruby"
  }];
};
function PortfolioIDOsParticipated() {
  _s();
  const [projects, setProjects] = import_react2.default.useState([]);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col w-full max-w-[700px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-col justify-center items-center text-center gap-y-2 pb-5 border-b border-solid border-border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-medium text-muted-foreground", children: "IDO's Participated" }, void 0, false, {
        fileName: "app/routes/portfolio.idos.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl font-semibold", children: projects?.projects ? projects.projects.length : 0 }, void 0, false, {
        fileName: "app/routes/portfolio.idos.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.idos.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-center text-lg", children: "Participated IDO's" }, void 0, false, {
        fileName: "app/routes/portfolio.idos.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-y-6", children: projects.projects ? projects.projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-1 items-center justify-between gap-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex w-12 h-12 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: p.project_image, alt: p.project_image, className: "w-full h-full object-cover" }, void 0, false, {
            fileName: "app/routes/portfolio.idos.tsx",
            lineNumber: 72,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/portfolio.idos.tsx",
            lineNumber: 71,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-semibold", children: [
            " ",
            p.project_name
          ] }, void 0, true, {
            fileName: "app/routes/portfolio.idos.tsx",
            lineNumber: 75,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/portfolio.idos.tsx",
          lineNumber: 70,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/projects/" + p._id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "View", variant: "secondary", children: "View More" }, void 0, false, {
          fileName: "app/routes/portfolio.idos.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/portfolio.idos.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this)
      ] }, i, true, {
        fileName: "app/routes/portfolio.idos.tsx",
        lineNumber: 69,
        columnNumber: 66
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-sm text-muted-foreground font-semibold", children: "No projects to show currently." }, void 0, false, {
        fileName: "app/routes/portfolio.idos.tsx",
        lineNumber: 83,
        columnNumber: 26
      }, this) }, void 0, false, {
        fileName: "app/routes/portfolio.idos.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.idos.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/portfolio.idos.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/portfolio.idos.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(PortfolioIDOsParticipated, "TSrpuQX6QU8EgjQSxaAzj2u9i4o=");
_c = PortfolioIDOsParticipated;
var _c;
$RefreshReg$(_c, "PortfolioIDOsParticipated");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PortfolioIDOsParticipated as default,
  meta
};
//# sourceMappingURL=/build/routes/portfolio.idos-JNMSNI2V.js.map

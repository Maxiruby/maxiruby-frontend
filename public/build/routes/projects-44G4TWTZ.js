import {
  Project
} from "/build/_shared/chunk-GA3WQLPW.js";
import "/build/_shared/chunk-3GQJHFQO.js";
import {
  Container,
  Section
} from "/build/_shared/chunk-GQSZI2RT.js";
import {
  Button_default
} from "/build/_shared/chunk-DV2ZTUAY.js";
import "/build/_shared/chunk-QJ3Y6ZRC.js";
import "/build/_shared/chunk-AOB2A6RH.js";
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

// app/routes/projects.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects.tsx"
  );
  import.meta.hot.lastModified = "1695297940770.3699";
}
var meta = () => {
  return [{
    title: "Launchpad Projects \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Launchpad Projects \u2014 Maxiruby"
  }];
};
function Projects() {
  _s();
  const [filter, setFilter] = import_react.default.useState("all");
  const [projects, setProjects] = import_react.default.useState([]);
  (0, import_react.useEffect)(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      fetch("https://api.maxiruby.com/api/landing/all", requestOptions).then((response) => response.json()).then((result) => setProjects(result.result)).catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.status === filter);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-1 flex-col gap-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
            className: "flex flex-1 flex-row flex-wrap items-center justify-between gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-medium font-heading", children: "Projects" }, void 0, false, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "All", variant: filter === "all" ? "primary" : "secondary", onClick: () => setFilter("all"), children: "All" }, void 0, false, {
                fileName: "app/routes/projects.tsx",
                lineNumber: 63,
                columnNumber: 17
              }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Upcoming", variant: filter === "upcoming" ? "primary" : "secondary", onClick: () => setFilter("upcoming"), children: "Upcoming" }, void 0, false, {
                fileName: "app/routes/projects.tsx",
                lineNumber: 66,
                columnNumber: 17
              }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Open", variant: filter === "open" ? "primary" : "secondary", onClick: () => setFilter("open"), children: "Open" }, void 0, false, {
                fileName: "app/routes/projects.tsx",
                lineNumber: 69,
                columnNumber: 17
              }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Closed", variant: filter === "claim" ? "primary" : "secondary", onClick: () => setFilter("claim"), children: "Closed" }, void 0, false, {
                fileName: "app/routes/projects.tsx",
                lineNumber: 72,
                columnNumber: 17
              }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "flex flex-1 flex-wrap items-start justify-start gap-6", children: filteredProjects.length > 0 ? filteredProjects.map((p, i) => /* @__PURE__ */(0, import_jsx_dev_runtime.jsxDEV)(Project, { project: p }, i, false, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 79,
              columnNumber: 77
            }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-sm text-muted-foreground font-semibold", children: "No projects to show currently." }, void 0, false, {
              fileName: "app/routes/projects.tsx",
              lineNumber: 79,
              columnNumber: 112
            }, this)
          }, void 0, false, {
            fileName: "app/routes/projects.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Projects, "cJ77+IJ+5j5DlUr2ULJspuemW10=");
_c = Projects;
var _c;
$RefreshReg$(_c, "Projects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Projects as default,
  meta
};
//# sourceMappingURL=/build/routes/projects-44G4TWTZ.js.map

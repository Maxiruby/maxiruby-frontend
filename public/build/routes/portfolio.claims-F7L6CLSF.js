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

// app/routes/portfolio.claims.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/portfolio.claims.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/portfolio.claims.tsx"
  );
  import.meta.hot.lastModified = "1695297940769.5552";
}
var meta = () => {
  return [{
    title: "Portfolio \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Portfolio \u2014 Maxiruby"
  }];
};
function PortfolioClaims() {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-1 flex-col w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-1 flex-col w-full max-w-[1100px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "flex flex-col gap-y-6", children: projects.projects && projects?.projects?.filter((project) => project.status === "claim").map((project, index) => /* @__PURE__ */(0, import_jsx_dev_runtime.jsxDEV)("li", {
          className: "flex flex-1 flex-wrap items-center justify-between gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "relative flex w-12 h-12 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: project.project_image, alt: project.project_image, className: "w-full h-full object-cover" }, void 0, false, {
                fileName: "app/routes/portfolio.claims.tsx",
                lineNumber: 62,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: "app/routes/portfolio.claims.tsx",
              lineNumber: 61,
              columnNumber: 21
            }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-semibold", children: project.project_name }, void 0, false, {
              fileName: "app/routes/portfolio.claims.tsx",
              lineNumber: 65,
              columnNumber: 21
            }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/portfolio.claims.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center gap-x-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col justify-center items-center text-center gap-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-sm font-semibold text-muted-foreground", children: "Claimable Tokens" }, void 0, false, {
                fileName: "app/routes/portfolio.claims.tsx",
                lineNumber: 72,
                columnNumber: 23
              }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "className-": "text-lg", children: "50" }, void 0, false, {
                fileName: "app/routes/portfolio.claims.tsx",
                lineNumber: 75,
                columnNumber: 23
              }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/portfolio.claims.tsx",
              lineNumber: 71,
              columnNumber: 21
            }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col justify-center items-center text-center gap-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-sm font-semibold text-muted-foreground", children: "Your Allocation" }, void 0, false, {
                fileName: "app/routes/portfolio.claims.tsx",
                lineNumber: 78,
                columnNumber: 23
              }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "className-": "text-lg", children: "Private" }, void 0, false, {
                fileName: "app/routes/portfolio.claims.tsx",
                lineNumber: 81,
                columnNumber: 23
              }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/portfolio.claims.tsx",
              lineNumber: 77,
              columnNumber: 21
            }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/portfolio.claims.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClaimCountdown, { project }, void 0, false, {
            fileName: "app/routes/portfolio.claims.tsx",
            lineNumber: 85,
            columnNumber: 19
          }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/projects/1", className: "mx-auto sm:mx-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Claim", variant: "primary", children: "Claim" }, void 0, false, {
              fileName: "app/routes/portfolio.claims.tsx",
              lineNumber: 88,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: "app/routes/portfolio.claims.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 59,
          columnNumber: 123
        }, this))
      }, void 0, false, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/portfolio.claims.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/portfolio.claims.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(PortfolioClaims, "TSrpuQX6QU8EgjQSxaAzj2u9i4o=");
_c = PortfolioClaims;
function ClaimCountdown({
  project,
  showClaimCoundown = false
}) {
  _s2();
  const [timeLeft, setTimeLeft] = (0, import_react2.useState)({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const isClaim = project.status === "closed";
  (0, import_react2.useEffect)(() => {
    const interval = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const targetTime = project.status === "claim" ? new Date(project.vestingStartTime).getTime() : new Date(project.project_fcfs_open_time).getTime();
      const distance = targetTime - now;
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        const days = Math.floor(distance / (1e3 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
        const minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
        const seconds = Math.floor(distance % (1e3 * 60) / 1e3);
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [project.vestingStartTime, project.project_fcfs_open_time, project.status]);
  if (!showClaimCoundown && project.status === "closed")
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col justify-center items-center gap-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
      className: "text-sm text-muted-foreground font-semibold", children: [
        isClaim ? "Claim" : "Project",
        " ",
        project.status === "open" || project.status === "closed" ? "ends" : "starts",
        " ",
        "in"
      ]
    }, void 0, true, {
      fileName: "app/routes/portfolio.claims.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex items-center justify-center gap-x-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-center items-center text-center gap-y-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
          className: "text-lg text-accent font-bold", children: [
            " ",
            timeLeft.days
          ]
        }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground font-semibold", children: "DAYS" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-center items-center text-center gap-y-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
          className: "text-lg text-accent font-bold", children: [
            " ",
            timeLeft.hours
          ]
        }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground font-semibold", children: "HOURS" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-center items-center text-center gap-y-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
          className: "text-lg text-accent font-bold", children: [
            " ",
            timeLeft.minutes
          ]
        }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground font-semibold", children: "MINUTES" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-center items-center text-center gap-y-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
          className: "text-lg text-accent font-bold", children: [
            " ",
            timeLeft.seconds
          ]
        }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground font-semibold", children: "SECONDS" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/portfolio.claims.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/portfolio.claims.tsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_s2(ClaimCountdown, "oZ0hmyHHyK2tdLmzYTGUiP3Yycw=");
_c2 = ClaimCountdown;
var _c;
var _c2;
$RefreshReg$(_c, "PortfolioClaims");
$RefreshReg$(_c2, "ClaimCountdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PortfolioClaims as default,
  meta
};
//# sourceMappingURL=/build/routes/portfolio.claims-F7L6CLSF.js.map

import {
  Icon
} from "/build/_shared/chunk-3GQJHFQO.js";
import {
  Button_default
} from "/build/_shared/chunk-DV2ZTUAY.js";
import {
  cn
} from "/build/_shared/chunk-QJ3Y6ZRC.js";
import {
  Link,
  NavLink
} from "/build/_shared/chunk-AOB2A6RH.js";
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

// app/components/Project.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Project.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Project.tsx"
  );
  import.meta.hot.lastModified = "1695297940746.3652";
}
function Project({
  project
}) {
  function calculateProgress(totalTokens, soldTokens) {
    if (soldTokens === 0) {
      return 0;
    }
    return soldTokens / totalTokens * 100;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col min-w-[340px] max-w-[426px] rounded-xl bg-card py-6 px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-col justify-center items-center gap-y-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-24 h-24 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: project.project_image, alt: project.project_image, className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-medium", children: project.project_name }, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row items-center gap-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectStatus, { status: project.status }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCurrency, { currency: project.enableByUsdt === 1 ? "BNB" : "USDT" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectSocialLinks, {}, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-col py-4 pb-2 gap-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCountdown, { project }, void 0, false, {
        fileName: "app/components/Project.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-row items-center justify-between gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg", children: "Swap Rate" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg text-foreground/60 text-semibold", children: project.project_swap_rate }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-row items-center justify-between gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg", children: "Cap" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg text-foreground/60 text-semibold", children: project.project_hard_cap }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-row items-center justify-between gap-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg", children: "Access" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg text-foreground/60 text-semibold", children: project.project_total_user }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between text-foreground/60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Progress" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Participants" }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-2 rounded-full bg-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-0 top-0 bottom-0 h-full rounded-full bg-accent", style: {
          width: `${calculateProgress(Number(project.project_hard_cap), Number(project.selled))}%`
        } }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between text-lg font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            calculateProgress(Number(project.project_hard_cap), Number(project.selled)),
            "%"
          ] }, void 0, true, {
            fileName: "app/components/Project.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: project.project_total_fund_participated }, void 0, false, {
            fileName: "app/components/Project.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Project.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "flex flex-row items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: `/projects/${project._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "View More", variant: "border", className: "bg-background", children: "View More" }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Project.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Project.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c = Project;
function ProjectStatus({
  status
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center py-1 px-3 gap-x-2 border border-solid rounded-full text-xs font-semibold", {
    "border-accent text-accent": status === "open",
    "border-upcoming text-upcoming": status === "upcoming",
    "border-closed text-closed": status === "claim"
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("w-2 h-2 rounded-full", {
      "bg-accent shadow-[0_0_8px_1px_rgba(235,224,22,0.6)]": status === "open",
      "bg-upcoming shadow-[0_0_8px_1px_rgba(0,227,166,0.6)]": status === "upcoming",
      "bg-closed shadow-[0_0_8px_1px_rgba(158,158,158,0.6)]": status === "claim"
    }) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "capitalize", children: status === "claim" ? "closed" : status }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Project.tsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
_c2 = ProjectStatus;
function ProjectCurrency({
  currency
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center py-1 px-3 gap-x-2 bg-foreground/[.15] rounded-full text-sm font-bold", children: currency }, void 0, false, {
    fileName: "app/components/Project.tsx",
    lineNumber: 139,
    columnNumber: 10
  }, this);
}
_c3 = ProjectCurrency;
function ProjectSocialLinks({
  twitter,
  telegram,
  website
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-row items-center gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: website, target: "_blank", rel: "norefeerer noopenner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "globe", className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 152,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: twitter, target: "_blank", rel: "norefeerer noopenner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "twitter", className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 157,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: telegram, target: "_blank", rel: "norefeerer noopenner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "telegram", className: "w-6 h-6" }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Project.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Project.tsx",
    lineNumber: 149,
    columnNumber: 10
  }, this);
}
_c4 = ProjectSocialLinks;
function ProjectCountdown({
  project,
  showClaimCoundown = false
}) {
  _s();
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
      const targetTime = project.status === "upcoming" ? new Date(project.startTime * 1e3).getTime() : new Date(project.endTime * 1e3).getTime();
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
  }, [project.startTime, project.endTime, project.status]);
  const cn2 = (...args) => args.filter(Boolean).join(" ");
  if (!showClaimCoundown && project.status === "closed")
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col py-3 px-4 gap-y-3 bg-background rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-semibold text-foreground/75 text-center", children: [
      isClaim ? "Claim" : "Project",
      " ",
      project.status === "open" || project.status === "closed" ? "ends" : "starts",
      " ",
      "in"
    ] }, void 0, true, {
      fileName: "app/components/Project.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-wrap items-center space-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: cn2("text-xl font-bold", {
          "text-accent": project.status === "open",
          "text-upcoming": project.status === "upcoming"
        }), children: timeLeft.days }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 223,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "DAYS" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 229,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 222,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: cn2("text-xl font-bold", {
          "text-accent": project.status === "open",
          "text-upcoming": project.status === "upcoming"
        }), children: timeLeft.hours }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 232,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "HOURS" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: cn2("text-xl font-bold", {
          "text-accent": project.status === "open",
          "text-upcoming": project.status === "upcoming"
        }), children: timeLeft.minutes }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "MINUTES" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 249,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-1 justify-center items-center gap-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: cn2("text-xl font-bold", {
          "text-accent": project.status === "open",
          "text-upcoming": project.status === "upcoming"
        }), children: timeLeft.seconds }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 254,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-foreground/60 font-semibold", children: "SECONDS" }, void 0, false, {
          fileName: "app/components/Project.tsx",
          lineNumber: 260,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.tsx",
      lineNumber: 221,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Project.tsx",
    lineNumber: 214,
    columnNumber: 10
  }, this);
}
_s(ProjectCountdown, "oZ0hmyHHyK2tdLmzYTGUiP3Yycw=");
_c5 = ProjectCountdown;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "Project");
$RefreshReg$(_c2, "ProjectStatus");
$RefreshReg$(_c3, "ProjectCurrency");
$RefreshReg$(_c4, "ProjectSocialLinks");
$RefreshReg$(_c5, "ProjectCountdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Project,
  ProjectStatus,
  ProjectCurrency,
  ProjectSocialLinks,
  ProjectCountdown
};
//# sourceMappingURL=/build/_shared/chunk-GA3WQLPW.js.map

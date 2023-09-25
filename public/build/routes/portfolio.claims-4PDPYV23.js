import {
  ethers_exports,
  id_default,
  require_ClipLoader
} from "/build/_shared/chunk-WH7ANDTV.js";
import "/build/_shared/chunk-TW7RAODN.js";
import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-XRILBDVH.js";
import "/build/_shared/chunk-OZXLVGFP.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import "/build/_shared/chunk-65R6ZMAR.js";
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

// app/routes/portfolio.claims.tsx
var import_react = __toESM(require_react());
var import_ClipLoader = __toESM(require_ClipLoader());
var import_wagmi = __toESM(require_dist());
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
  import.meta.hot.lastModified = "1695582606955.7078";
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
  const {
    address
  } = (0, import_wagmi.useAccount)();
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
      fetch("https://api.maxiruby.com/api/users/auth/getproject", requestOptions).then((response) => response.text()).then((result) => setProjects(JSON.parse(result).result)).catch((error2) => console.log("error", error2));
    };
    getAllProject();
  }, []);
  const [error, setError] = (0, import_react.useState)("");
  const [success, setSuccess] = (0, import_react.useState)("");
  const [loader, setLoader] = (0, import_react.useState)(false);
  const handleClaim = async (project) => {
    const provider = new ethers_exports.providers.Web3Provider(window?.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers_exports.Contract("0x0DC6247f0b52363aB920369D39f7f801dE41902D", id_default, signer);
    setLoader(true);
    setError("");
    setSuccess("");
    try {
      const tx = await contract.claim(address, parseInt(project.project_id.toString(), 16), {
        gasLimit: "2000000"
      });
      await tx.wait();
      console.log(tx);
      setLoader(false);
      setError("");
      setSuccess("Successfully claimed!");
    } catch (error2) {
      console.log(error2);
      setLoader(false);
      setError("Transaction failed!");
      setSuccess("");
    }
  };
  const getDatas = async () => {
    const provider = new ethers_exports.providers.Web3Provider(window?.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers_exports.Contract("0x0DC6247f0b52363aB920369D39f7f801dE41902D", id_default, signer);
  };
  const isStartTimePresent = (project) => {
    return project.vestingStartTime != null && project.vestingStartTime > 0;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col w-full max-w-[1100px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      width: "100%",
      textAlign: "center"
    }, children: [
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm", children: error }, void 0, false, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 105,
        columnNumber: 21
      }, this),
      success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-500 text-sm", children: success }, void 0, false, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 106,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.claims.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-y-6", children: projects.projects && projects?.projects?.filter((project) => project.status === "claim").map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex flex-1 flex-wrap items-center justify-between gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex w-12 h-12 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: project.project_image, alt: project.project_image, className: "w-full h-full object-cover" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 112,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 111,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-semibold", children: project.project_name }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 115,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 110,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-sm font-semibold text-muted-foreground", children: "Claimable Tokens" }, void 0, false, {
            fileName: "app/routes/portfolio.claims.tsx",
            lineNumber: 122,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "className-": "text-lg", children: "50" }, void 0, false, {
            fileName: "app/routes/portfolio.claims.tsx",
            lineNumber: 125,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 121,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-sm font-semibold text-muted-foreground", children: "Your Allocation" }, void 0, false, {
            fileName: "app/routes/portfolio.claims.tsx",
            lineNumber: 128,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "className-": "text-lg", children: "Private" }, void 0, false, {
            fileName: "app/routes/portfolio.claims.tsx",
            lineNumber: 131,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 127,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 120,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClaimCountdown, { project }, void 0, false, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 135,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Join", variant: "primary", onClick: () => handleClaim(project), disabled: loader, children: loader ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ClipLoader.default, { color: "#1876f2", loading: loader, size: 18 }, void 0, false, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 138,
        columnNumber: 31
      }, this) : " Claim" }, void 0, false, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 137,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.claims.tsx",
      lineNumber: 109,
      columnNumber: 123
    }, this)) }, void 0, false, {
      fileName: "app/routes/portfolio.claims.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/portfolio.claims.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/portfolio.claims.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_s(PortfolioClaims, "d0ADMazzuL9yEQXKLQYubUFpJr8=", false, function() {
  return [import_wagmi.useAccount];
});
_c = PortfolioClaims;
function ClaimCountdown({
  project,
  showClaimCoundown = false
}) {
  _s2();
  const [timeLeft, setTimeLeft] = (0, import_react.useState)({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const isClaim = project.status === "closed";
  const [isTimeUp, setIsTimeUp] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const targetTime = project.status === "claim" ? new Date(project.vestingStartTime * 1e3).getTime() : new Date(project.project_fcfs_open_time * 1e3).getTime();
      const distance = targetTime - now;
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        setIsTimeUp(true);
      } else {
        setIsTimeUp(false);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center gap-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-sm text-muted-foreground font-semibold", children: isTimeUp ? "Claim Ended" : "Claim Start In" }, void 0, false, {
      fileName: "app/routes/portfolio.claims.tsx",
      lineNumber: 194,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-x-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-y-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg text-accent font-bold", children: [
          " ",
          timeLeft.days
        ] }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground font-semibold", children: "DAYS" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-y-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg text-accent font-bold", children: [
          " ",
          timeLeft.hours
        ] }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 210,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground font-semibold", children: "HOURS" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-y-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg text-accent font-bold", children: [
          " ",
          timeLeft.minutes
        ] }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground font-semibold", children: "MINUTES" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center text-center gap-y-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-lg text-accent font-bold", children: [
          " ",
          timeLeft.seconds
        ] }, void 0, true, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 230,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground font-semibold", children: "SECONDS" }, void 0, false, {
          fileName: "app/routes/portfolio.claims.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.claims.tsx",
        lineNumber: 229,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.claims.tsx",
      lineNumber: 198,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/portfolio.claims.tsx",
    lineNumber: 193,
    columnNumber: 10
  }, this);
}
_s2(ClaimCountdown, "aCvFn51elJ6/8O2iYW8KZN/Gji8=");
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
//# sourceMappingURL=/build/routes/portfolio.claims-4PDPYV23.js.map

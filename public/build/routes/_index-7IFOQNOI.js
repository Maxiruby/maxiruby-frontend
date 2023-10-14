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
  useDispatch,
  useSelector
} from "/build/_shared/chunk-JKJ7ZXCB.js";
import "/build/_shared/chunk-OZJUWIU6.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import {
  Features,
  Images,
  meta_config_exports
} from "/build/_shared/chunk-24ACUZVN.js";
import {
  Image_default
} from "/build/_shared/chunk-R2JPBEQ2.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  NavLink
} from "/build/_shared/chunk-AOB2A6RH.js";
import {
  Button_default
} from "/build/_shared/chunk-DV2ZTUAY.js";
import {
  cn
} from "/build/_shared/chunk-QJ3Y6ZRC.js";
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

// app/routes/_index.tsx
var import_react4 = __toESM(require_react());

// app/components/shared/SendVerification.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/SendVerification.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/SendVerification.tsx"
  );
  import.meta.hot.lastModified = "1695582794854.7422";
}
function SendVerification({
  user
}) {
  _s();
  const [error, setError] = (0, import_react.useState)("");
  const [success, setSuccess] = (0, import_react.useState)("");
  const sendVerificationLink = async () => {
    try {
      const {
        data
      } = await axios_default.post(`https://api.maxiruby.com/api/users/auth/sendeverify`, {}, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setSuccess(data.message);
    } catch (error2) {
      setError(error2.response.data.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "send_verification", style: {
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      color: "#EBDE14",
      fontSize: "1.2rem",
      fontWeight: "bold"
    }, children: "Your account is not verified,verify your account before it gets deleted after a month from creating." }, void 0, false, {
      fileName: "app/components/shared/SendVerification.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { onClick: () => {
      sendVerificationLink();
    }, children: "click here to resend verification link" }, void 0, false, {
      fileName: "app/components/shared/SendVerification.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "success_text", children: success }, void 0, false, {
      fileName: "app/components/shared/SendVerification.tsx",
      lineNumber: 60,
      columnNumber: 19
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error_text", children: error }, void 0, false, {
      fileName: "app/components/shared/SendVerification.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/SendVerification.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(SendVerification, "aeAmyFqV1TYEt8nbyJ8GEY0M1+4=");
_c = SendVerification;
var _c;
$RefreshReg$(_c, "SendVerification");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/Banner.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/Banner.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/Banner.tsx"
  );
  import.meta.hot.lastModified = "1697291200086.9226";
}
function Banner({
  user
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col w-full h-full pb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col justify-center items-center py-14", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute top-0 w-screen -mt-24 -z-1 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative inset-0 w-full h-0 pb-[61.783525291304635%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image_default, { src: Images.HomeBackground, alt: "MaxiRuby", width: "100%", height: "auto", objectFit: "cover" }, void 0, false, {
      fileName: "app/components/home/Banner.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/home/Banner.tsx",
      lineNumber: 38,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/home/Banner.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/home/Banner.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    user && user.verified === false && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SendVerification, { user }, void 0, false, {
      fileName: "app/components/home/Banner.tsx",
      lineNumber: 43,
      columnNumber: 47
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-heading font-semibold text-foreground text-center text-[max(3.896vw,28px)] pb-8 z-1", children: [
      "Empowering Visionaries ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/home/Banner.tsx",
        lineNumber: 45,
        columnNumber: 36
      }, this),
      "MaxiRuby Launchpad Unleashed"
    ] }, void 0, true, {
      fileName: "app/components/home/Banner.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-wrap items-center justify-center gap-x-3 lg:gap-x-5 gap-y-3 z-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "https://pancakeswap.finance/swap?chain=bscTestnet&outputCurrency=0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { type: "button", title: "Buy on PancakeSwap", variant: "secondary", disabled: true, children: "Buy on PancakeSwap" }, void 0, false, {
        fileName: "app/components/home/Banner.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/home/Banner.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "https://www.sushi.com/swap?chainId=1&token0=NATIVE&token1=0x6B175474E89094C44Da98b954EedeAC495271d0F", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { type: "button", title: "Buy on PancakeSwap", variant: "secondary", disabled: true, children: "Buy on SushiSwap" }, void 0, false, {
        fileName: "app/components/home/Banner.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/home/Banner.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { type: "button", title: "Buy on PancakeSwap", variant: "secondary", disabled: true, children: "Buy on Swap" }, void 0, false, {
        fileName: "app/components/home/Banner.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "https://docs.google.com/forms/d/e/1FAIpQLSdrVUjE2FvRdFm9CNNEk07iQ9mx7h00L2PNn4klIVQO6WMmDQ/viewform?usp=sf_link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { type: "button", title: "Apply for Launch", variant: "primary", children: "Apply for Launch" }, void 0, false, {
        fileName: "app/components/home/Banner.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/home/Banner.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/Banner.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/Banner.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/home/Banner.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/Banner.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c2 = Banner;
var _c2;
$RefreshReg$(_c2, "Banner");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/LaunchFeatures.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/LaunchFeatures.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/LaunchFeatures.tsx"
  );
  import.meta.hot.lastModified = "1697012536821.3518";
}
function LaunchFeatures() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap justify-between items-start gap-8 lg:gap-24", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-foreground font-medium font-heading", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-[max(3vw,26px)]", children: "Launch Your" }, void 0, false, {
        fileName: "app/components/home/LaunchFeatures.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/home/LaunchFeatures.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-[max(2.8vw,24px)]", children: "Tokens with" }, void 0, false, {
        fileName: "app/components/home/LaunchFeatures.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/LaunchFeatures.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "columns-1 md:columns-2 items-start gap-5", children: Features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Feature, { feature, index }, index, false, {
      fileName: "app/components/home/LaunchFeatures.tsx",
      lineNumber: 41,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/components/home/LaunchFeatures.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/LaunchFeatures.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/home/LaunchFeatures.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/LaunchFeatures.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c3 = LaunchFeatures;
function Feature({
  feature,
  index
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: cn("flex flex-1 flex-col min-w-[320px] lg:max-w-[360px] bg-secondary/20 rounded-2xl p-8 mb-5 gap-y-5", {
    "mt-0 md:mt-6": index === 0
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "flex items-start justify-start gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex w-1 h-8 bg-accent rounded-md" }, void 0, false, {
        fileName: "app/components/home/LaunchFeatures.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { className: "text-xl", children: feature.title }, void 0, false, {
        fileName: "app/components/home/LaunchFeatures.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/LaunchFeatures.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "flex flex-col gap-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-muted-foreground", children: feature.description }, void 0, false, {
        fileName: "app/components/home/LaunchFeatures.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start justify-start gap-x-2" }, void 0, false, {
          fileName: "app/components/home/LaunchFeatures.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm text-muted-foreground font-medium" }, void 0, false, {
          fileName: "app/components/home/LaunchFeatures.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/LaunchFeatures.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/LaunchFeatures.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/LaunchFeatures.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_c22 = Feature;
var _c3;
var _c22;
$RefreshReg$(_c3, "LaunchFeatures");
$RefreshReg$(_c22, "Feature");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/Partners.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/Partners.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/Partners.tsx"
  );
  import.meta.hot.lastModified = "1697284656064.1653";
}
function Partners() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Section, { className: "pt-24 pb-16" }, void 0, false, {
    fileName: "app/components/home/Partners.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c4 = Partners;
var _c4;
$RefreshReg$(_c4, "Partners");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/TierSystem.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/TierSystem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/TierSystem.tsx"
  );
  import.meta.hot.lastModified = "1697270174907.1372";
}
function TierSystem() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "flex flex-col gap-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-foreground text-[max(2vw,24px)] font-medium font-heading", children: "Tier System" }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "flex items-center gap-x-3 text-muted-foreground text-[max(1.75vw,18px)] font-medium font-heading", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-foreground", children: "Round 1" }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 42,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "\u2014" }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Allocation Round" }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full lg:max-w-4/5 lg:mx-auto gap-8", children: meta_config_exports.Tiers.map((tier, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tier, { tier }, index, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 49,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Section, { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Container, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-8 lg:gap-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "flex items-center gap-x-3 text-muted-foreground text-[max(1.75vw,18px)] font-medium font-heading", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-foreground", children: "Round 2" }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "\u2014" }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "FCFS Round" }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 flex-col-reverse lg:flex-row items-center justify-between gap-x-24 gap-y-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-lg leading-6 text-muted-foreground font-medium", children: [
            "MaxiRuby Launchpad introduces an exciting opportunity with our unique ROUND-2 FCFS ROUND for MAXI token holders. In this second round, any unsold tokens from the initial round become available on a First-Come-First-Served (FCFS) basis exclusively to our Platinum and above guaranteed tiers. These esteemed members can acquire an additional allocation, determined by a tier-based formula. This round remains open until every token finds its home, usually spanning just a few minutes. Once all tokens are claimed, the IDO reaches its conclusion.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            "We're committed to gathering valuable data and feedback on our IDO structure, continually optimizing it over time. Community feedback and potential DAO proposals hold a special place in our decision-making process",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 85,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            "Our system stands as a transparent and demonstrably equitable framework, motivating users to accumulate and hold MAXI tokens while backing every project launched. As time progresses, we'll fine-tune parameters, introduce new tiers, and make necessary adjustments to ensure the system remains functional, competitive, and rewarding for our entire community.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 93,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this),
            'MaxiRuby.com represents the next step in the evolution of blockchain launchpads, addressing the inherent flaws of existing platforms. Our platform benefits all MAXI token holders, leveling the playing field for traders of all sizes, granting them access to the most promising upcoming Binance Smart Chain projects."'
          ] }, void 0, true, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Image_default, { src: Images.FCFS, alt: "FCFS Round", width: 306, height: 363, objectFit: "contain" }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute right-0 -top-16 w-screen -z-1 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative inset-0 w-full h-0 pb-[61.783525291304635%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Image_default, { src: Images.FCFS_BG, alt: "MaxiRuby", width: "100%", height: "100%", objectFit: "cover" }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 112,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Section, { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Container, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-8 lg:gap-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h4", { className: "flex items-center gap-x-3 text-muted-foreground text-[max(1.75vw,18px)] font-medium font-heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-foreground", children: "About" }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 flex-col-reverse lg:flex-row items-center justify-between gap-x-24 gap-y-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-lg leading-6 text-muted-foreground font-medium", children: [
            "Maxiruby.com is a crypto launchpad platform that represents an exciting future in the crypto world. Our mission goes beyond providing a secure and user-friendly solution for crypto projects to have a successful start.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 135,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, this),
            "The Maxiruby.com team combines its experience in the crypto industry with the goal of making the crypto world more accessible and rewarding. In the near future, users holding Maxi tokens and tokens from projects launched on our platform will have the opportunity to earn exclusive discounts and rewards from numerous shopping brands in both Turkey and worldwide.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Why Choose Maxiruby.com?" }, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, this),
            "- Reliability: Security is our top priority, and we take the highest security measures to protect our users' assets.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            "- Reliability: We are committed to providing the",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 153,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this),
            "- Supporting Projects: We assist in successfully funding and growing crypto projects, thereby adding value to our community.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 157,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 158,
              columnNumber: 19
            }, this),
            "- User-Centric: We've designed our platform to maximize the user experience and focus on our users' needs.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 160,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 161,
              columnNumber: 19
            }, this),
            "- Investing in the Future: We believe in exploring the potential of the crypto world and continuously work to support the future growth of projects.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 164,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/home/TierSystem.tsx",
              lineNumber: 165,
              columnNumber: 19
            }, this),
            "Maxiruby.com is not only a gateway to the crypto world but also an ideal platform for anyone looking to earn special discounts and rewards from shopping brands by holding Maxi tokens and tokens from launch projects. Join us on this journey and enjoy an experience beyond the crypto world."
          ] }, void 0, true, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 justify-center items-center" }, void 0, false, {
            fileName: "app/components/home/TierSystem.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute right-0 -top-16 w-screen -z-1 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative inset-0 w-full h-0 pb-[61.783525291304635%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Image_default, { src: Images.FCFS_BG, alt: "MaxiRuby", width: "100%", height: "100%", objectFit: "cover" }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 189,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 188,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/TierSystem.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c5 = TierSystem;
function Tier({
  tier
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 flex-col w-full bg-card/80 rounded-3xl p-5 gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "flex items-center justify-center bg-accent rounded-2xl py-3 px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { className: "text-xl text-accent-foreground font-bold capitalize", children: tier.tier }, void 0, false, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 203,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "flex flex-col justify-center items-center gap-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "flex flex-col gap-y-1 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm text-muted-foreground font-medium", children: "Entry Requirement" }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 211,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { className: "text-2xl font-bold", children: tier.staking_requirement }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 214,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "flex flex-col gap-y-1 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm text-muted-foreground font-medium", children: "Pool Weight" }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 220,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { className: "text-2xl font-bold", children: tier.whitelist_requirement }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 223,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "flex flex-col gap-y-1 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm text-muted-foreground font-medium", children: "Whitelist Tickets" }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { className: "text-2xl font-bold", children: tier.lottery_ticket }, void 0, false, {
          fileName: "app/components/home/TierSystem.tsx",
          lineNumber: 232,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/TierSystem.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 209,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/TierSystem.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/TierSystem.tsx",
    lineNumber: 201,
    columnNumber: 10
  }, this);
}
_c23 = Tier;
var _c5;
var _c23;
$RefreshReg$(_c5, "TierSystem");
$RefreshReg$(_c23, "Tier");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1695575398868.7998";
}
var meta = () => {
  return [{
    title: "Launchpad \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Launchpad \u2014 Maxiruby"
  }];
};
function Index() {
  _s2();
  const {
    user
  } = useSelector((user2) => ({
    ...user2
  }));
  const profile = localStorage.getItem("profile");
  const dispatch = useDispatch();
  let userData = api.get("user");
  ;
  const gerUSer = async () => {
    if (!user)
      return;
    userData = JSON.parse(userData);
    try {
      const {
        data
      } = await axios_default.get(`https://api.maxiruby.com/api/users/auth`, {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      });
      localStorage.setItem("profile", JSON.stringify(data.result));
      api.set("user", JSON.stringify({
        ...user,
        verified: data.result.verify
      }));
      dispatch({
        type: "VERIFY",
        payload: data.result.verify
      });
    } catch (error) {
      console.log(error);
    }
  };
  (0, import_react4.useEffect)(() => {
    gerUSer();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Banner, { user }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LaunchFeatures, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TierSystem, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Partners, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_s2(Index, "///vX1FZ9qMGkeDNJGCfk9B4ZjU=", false, function() {
  return [useSelector, useDispatch];
});
_c6 = Index;
var _c6;
$RefreshReg$(_c6, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-7IFOQNOI.js.map

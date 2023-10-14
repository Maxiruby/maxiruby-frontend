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
import {
  require_animation,
  require_unitConverter
} from "/build/_shared/chunk-OZXLVGFP.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  useNavigate,
  useParams
} from "/build/_shared/chunk-AOB2A6RH.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/react-spinners/PropagateLoader.js
var require_PropagateLoader = __commonJS({
  "node_modules/react-spinners/PropagateLoader.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React2 = __importStar(require_react());
    var unitConverter_1 = require_unitConverter();
    var animation_1 = require_animation();
    var distance = [1, 3, 5];
    var propagate = [
      (0, animation_1.createAnimation)("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(-").concat(distance[2], "rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-0"),
      (0, animation_1.createAnimation)("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-1"),
      (0, animation_1.createAnimation)("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    75% {transform: translateX(-").concat(distance[0], "rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-2"),
      (0, animation_1.createAnimation)("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    75% {transform: translateX(").concat(distance[0], "rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-3"),
      (0, animation_1.createAnimation)("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-4"),
      (0, animation_1.createAnimation)("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(").concat(distance[2], "rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-5")
    ];
    function PropagateLoader2(_a) {
      var _b = _a.loading, loading = _b === void 0 ? true : _b, _c3 = _a.color, color = _c3 === void 0 ? "#000000" : _c3, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
      var _g = (0, unitConverter_1.parseLengthAndUnit)(size), value = _g.value, unit = _g.unit;
      var wrapper = __assign({ display: "inherit", position: "relative" }, cssOverride);
      var style = function(i) {
        return {
          position: "absolute",
          fontSize: "".concat(value / 3).concat(unit),
          width: "".concat(value).concat(unit),
          height: "".concat(value).concat(unit),
          background: color,
          borderRadius: "50%",
          animation: "".concat(propagate[i], " ").concat(1.5 / speedMultiplier, "s infinite"),
          animationFillMode: "forwards"
        };
      };
      if (!loading) {
        return null;
      }
      return React2.createElement(
        "span",
        __assign({ style: wrapper }, additionalprops),
        React2.createElement("span", { style: style(0) }),
        React2.createElement("span", { style: style(1) }),
        React2.createElement("span", { style: style(2) }),
        React2.createElement("span", { style: style(3) }),
        React2.createElement("span", { style: style(4) }),
        React2.createElement("span", { style: style(5) })
      );
    }
    exports.default = PropagateLoader2;
  }
});

// app/routes/activate_.$token.tsx
var import_react2 = __toESM(require_react());

// app/components/shared/ActivateForm.tsx
var import_PropagateLoader = __toESM(require_PropagateLoader());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/ActivateForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/ActivateForm.tsx"
  );
  import.meta.hot.lastModified = "1695569155553.6199";
}
function ActivateForm({
  type,
  header,
  text,
  loading
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blurr", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "popup", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `popup_header ${type === "success" ? "success_text" : "error_text"}`, children: header }, void 0, false, {
      fileName: "app/components/shared/ActivateForm.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "popup_message", children: text }, void 0, false, {
      fileName: "app/components/shared/ActivateForm.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_PropagateLoader.default, { color: "#1876f2", size: 30, loading }, void 0, false, {
      fileName: "app/components/shared/ActivateForm.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/ActivateForm.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/shared/ActivateForm.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = ActivateForm;
var _c;
$RefreshReg$(_c, "ActivateForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/activate_.$token.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/activate_.$token.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/activate_.$token.tsx"
  );
  import.meta.hot.lastModified = "1695573143229.7288";
}
var meta = () => {
  return [{
    title: "Activate \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Activate \u2014 Maxiruby"
  }];
};
function Active() {
  _s();
  const {
    user
  } = useSelector((user2) => ({
    ...user2
  }));
  const {
    token
  } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [success, setSuccess] = (0, import_react2.useState)("");
  const [error, setError] = (0, import_react2.useState)("");
  const [loading, setLoading] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    activateAccount();
  }, [token]);
  const activateAccount = async () => {
    try {
      setLoading(true);
      const {
        data
      } = await axios_default.post(`https://api.maxiruby.com/api/users/auth/activate`, {
        token
      }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setSuccess(data.message);
      api.set("user", JSON.stringify({
        ...user,
        verified: true
      }));
      dispatch({
        type: "VERIFY",
        payload: true
      });
      setTimeout(() => {
        navigate("/");
      }, 3e3);
    } catch (error2) {
      setError(error2.message);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { children: [
    success && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ActivateForm, { type: "success", header: "Account verification succeded.", text: success, loading }, void 0, false, {
      fileName: "app/routes/activate_.$token.tsx",
      lineNumber: 91,
      columnNumber: 23
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ActivateForm, { type: "error", header: "Account verification failed.", text: error, loading }, void 0, false, {
      fileName: "app/routes/activate_.$token.tsx",
      lineNumber: 92,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/activate_.$token.tsx",
    lineNumber: 90,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/activate_.$token.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/activate_.$token.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(Active, "mofT0h6nMd2HBMnHWGjlokfvmuY=", false, function() {
  return [useSelector, useParams, useNavigate, useDispatch];
});
_c2 = Active;
var _c2;
$RefreshReg$(_c2, "Active");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Active as default,
  meta
};
//# sourceMappingURL=/build/routes/activate_.$token-OLZSNKP3.js.map

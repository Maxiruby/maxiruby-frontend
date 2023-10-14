import {
  Input_default
} from "/build/_shared/chunk-5672AWU3.js";
import {
  api
} from "/build/_shared/chunk-FXFW7OVD.js";
import {
  useDispatch
} from "/build/_shared/chunk-JKJ7ZXCB.js";
import "/build/_shared/chunk-OZJUWIU6.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import {
  useAppStore
} from "/build/_shared/chunk-F7B7HIES.js";
import {
  Images
} from "/build/_shared/chunk-24ACUZVN.js";
import {
  Image_default
} from "/build/_shared/chunk-R2JPBEQ2.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  NavLink,
  useNavigate
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

// app/routes/login.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1695573162012.6853";
}
var meta = () => {
  return [{
    title: "Login \u2014 Maxiruby Launchpad"
  }, {
    name: "description",
    content: "Login \u2014 Maxiruby Launchpad"
  }];
};
function Login() {
  _s();
  const {
    profile,
    setProfile,
    token,
    setToken
  } = useAppStore((store) => store);
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [email, setEmail] = (0, import_react2.useState)("");
  const [password, setPassword] = (0, import_react2.useState)("");
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)("");
  const [success, setSuccess] = (0, import_react2.useState)("");
  const handleLogin = async () => {
    if (!email || !password)
      return setError("Please fill all the fields");
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        email,
        password
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      const response = fetch("https://api.maxiruby.com/api/users/auth/login", requestOptions);
      const data = await (await response).json();
      if (data.user) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("profile", JSON.stringify(data.user));
        setProfile(data.user);
        setToken(data.token);
        dispatch({
          type: "LOGIN",
          payload: data
        });
        api.set("user", JSON.stringify(data));
        navigate("/");
        return;
      }
      setError("Invalid credentials");
      setSuccess("");
      setLoading(false);
    } catch (error2) {
      setError(error2.message);
      setSuccess("");
      setLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-start justify-start columns-1 md:columns-2 h-fit md:h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col md:border-r md:border-solid md:border-border min-w-[400px] h-full overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: "flex p-5 w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.Logo, alt: "Maxiruby", width: 215, height: 26, objectFit: "contain" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 w-screen h-screen md:-mt-24 -z-1 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative inset-0 w-full h-0 pb-[61.783525291304635%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.HomeBackground, alt: "MaxiRuby", width: "100%", height: "auto", objectFit: "cover" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 112,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 h-full min-w-[340px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col items-center justify-center p-10 gap-y-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-[max(3vw,36px)] text-center text-foreground font-heading font-bold", children: "Welcome" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-8 w-full max-w-[600px] mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-semibold text-foreground/70 pl-1", children: "Email" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "text", placeholder: "Enter your e-mail here", value: email, onChange: (e) => {
            setEmail(e.target.value);
          }, className: "py-4 px-5 placeholder:text-muted-foreground/60" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-semibold text-foreground/70 pl-1", children: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => {
            setPassword(e.target.value);
          }, className: "py-4 px-5 placeholder:text-muted-foreground/60" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-4 justify-center items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Log in", variant: "invert", className: "w-fit min-w-[160px]", onClick: handleLogin, disabled: loading, children: loading ? "Loading..." : "Log in" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { style: {
            color: "red"
          }, children: [
            " ",
            error
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { style: {
            color: "green"
          }, children: [
            " ",
            success
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-foreground/50", children: [
            "Don\u2019t you have an account?",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/signup", className: "text-foreground font-bold pl-0.5", children: "Sign Up" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-semibold", children: "OR" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row flex-wrap items-center justify-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Log in", variant: "secondary", className: "w-fit min-w-[100px]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.GoogleG, alt: "Google", width: 24, height: 24 }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 170,
              columnNumber: 17
            }, this),
            "Log in with Google"
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Log in", variant: "secondary", className: "w-fit min-w-[100px]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: Images.Twitter, alt: "Twitter", width: 24, height: 24 }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 174,
              columnNumber: 17
            }, this),
            "Log in with Twitter"
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_s(Login, "UDOH1RMVzvdRyOzljxfcsvz65Yg=", false, function() {
  return [useAppStore, useNavigate, useDispatch];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/login-GF22VX7M.js.map

import {
  Input_default
} from "/build/_shared/chunk-5672AWU3.js";
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
} from "/build/_shared/chunk-RZLTBEW4.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import "/build/_shared/chunk-65R6ZMAR.js";
import {
  Form,
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

// app/routes/profile.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/profile.tsx"
  );
  import.meta.hot.lastModified = "1695573175794.8076";
}
var meta = () => {
  return [{
    title: "Profile \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Profile \u2014 Maxiruby"
  }];
};
function Profile() {
  _s();
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage?.getItem("profile"));
  const {
    user
  } = useSelector((user2) => ({
    ...user2
  }));
  const [username, setUsername] = (0, import_react2.useState)(profile?.username);
  const [surname, setSurname] = (0, import_react2.useState)(profile?.surname);
  const [success, setSuccess] = (0, import_react2.useState)("");
  const [error, setError] = (0, import_react2.useState)("");
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const [password, setPassword] = (0, import_react2.useState)("");
  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        username,
        surname
      });
      myHeaders.append("Authorization", "Bearer " + user.token);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      const response = fetch("https://api.maxiruby.com/api/users/auth/update", requestOptions);
      const data = await (await response).json();
      setLoading(false);
      localStorage.setItem("profile", JSON.stringify(data.result.user));
      setSuccess("Profile updated successfully");
      setTimeout(() => {
        setSuccess("");
      }, 2e3);
      setError("");
    } catch (error2) {
      setError(error2.message);
      setLoading(false);
      setSuccess("");
    }
  };
  const handleChangePassword = async () => {
    setSuccess("");
    setError("");
    setLoading(true);
    if (!password) {
      setError("Password is required");
      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 2e3);
      return;
    }
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        newpassword: password
      });
      myHeaders.append("Authorization", "Bearer " + user.token);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      const response = fetch("https://api.maxiruby.com/api/users/auth/resetpassword", requestOptions);
      const data = await (await response).json();
      setSuccess("Profile updated successfully");
      setTimeout(() => {
        setSuccess("");
        localStorage.removeItem("profile");
        localStorage.removeItem("token");
        navigate("/login");
      }, 2e3);
      setError("");
    } catch (error2) {
      setLoading(false);
      setError(error2.message);
      setSuccess("");
    }
  };
  const {
    users
  } = useSelector((user2) => ({
    ...user2
  }));
  let userData = api.get("user");
  userData = JSON.parse(userData);
  const gerUSer = async () => {
    if (!users)
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
    } catch (error2) {
      console.log(error2);
    }
  };
  (0, import_react2.useEffect)(() => {
    gerUSer();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-medium font-heading", children: "Profile Settings" }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 158,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 157,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex flex-1 w-full max-w-[720px] mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormRow, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel, { optional: true, children: "Username" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 168,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "text", value: username, placeholder: "Name", onChange: (e) => {
            setUsername(e.target.value);
          }, className: "w-full min-w-[160px]" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 169,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 167,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel, { optional: true, children: "Surname" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 175,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "text", value: surname, placeholder: "Surname", onChange: (e) => {
            setSurname(e.target.value);
          }, className: "w-full min-w-[200px]" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 176,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 174,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 166,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel, { children: "Email Adress" }, void 0, false, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 183,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "text", value: "", placeholder: profile?.email, onChange: () => {
        }, className: "w-full min-w-[200px]" }, void 0, false, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 184,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 182,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel, { children: "Password" }, void 0, false, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 188,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 items-stretch flex-wrap gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "password", value: password, placeholder: "********", onChange: (e) => {
            setPassword(e.target.value);
          }, className: "flex flex-[5] min-w-[200px]" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 190,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "button", title: "Reset Password", variant: "border", className: "flex-[1] min-w-[200px]", onClick: handleChangePassword, disabled: loading, children: loading ? "Loading..." : "Reset Password" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 194,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 189,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 187,
        columnNumber: 19
      }, this),
      success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { style: {
        color: "green"
      }, children: [
        " ",
        success
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 199,
        columnNumber: 30
      }, this) : null,
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { style: {
        color: "red"
      }, children: [
        " ",
        error
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 202,
        columnNumber: 28
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: handleUpdateProfile, disabled: loading, type: "button", title: "Save Changes", variant: "primary", className: "w-fit mx-auto px-8", children: loading ? "Loading..." : "Save Changes" }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 206,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 205,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 165,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 164,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 163,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 156,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 155,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 154,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 153,
    columnNumber: 10
  }, this);
}
_s(Profile, "MXMLRlXiTQA3tvBqVSU0eGVonwA=", false, function() {
  return [useNavigate, useSelector, useSelector];
});
_c = Profile;
function FormField({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center items-center gap-y-6", children }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 225,
    columnNumber: 10
  }, this);
}
_c2 = FormField;
function FormGroup({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-2 w-full", children }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 233,
    columnNumber: 10
  }, this);
}
_c3 = FormGroup;
function FormRow({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap gap-4 w-full", children }, void 0, false, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 239,
    columnNumber: 10
  }, this);
}
_c4 = FormRow;
function FormLabel({
  children,
  optional = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex flex-1 flex-row items-center gap-x-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold text-foreground", children }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 249,
      columnNumber: 7
    }, this),
    optional && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-medium text-muted-foreground", children: "(Optional)" }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 250,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 248,
    columnNumber: 10
  }, this);
}
_c5 = FormLabel;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "Profile");
$RefreshReg$(_c2, "FormField");
$RefreshReg$(_c3, "FormGroup");
$RefreshReg$(_c4, "FormRow");
$RefreshReg$(_c5, "FormLabel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default,
  meta
};
//# sourceMappingURL=/build/routes/profile-D7EXQPNJ.js.map

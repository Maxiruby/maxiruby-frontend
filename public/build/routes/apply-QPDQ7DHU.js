import {
  Controller,
  DatePicker,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch_default,
  TextArea_default,
  require_node,
  useForm
} from "/build/_shared/chunk-33MBYD57.js";
import "/build/_shared/chunk-EMTWGMLI.js";
import "/build/_shared/chunk-GILHEFSK.js";
import "/build/_shared/chunk-ISFNYMWC.js";
import {
  Input_default
} from "/build/_shared/chunk-5672AWU3.js";
import "/build/_shared/chunk-WCD4TU47.js";
import {
  Icon
} from "/build/_shared/chunk-3GQJHFQO.js";
import "/build/_shared/chunk-QS27G3MX.js";
import {
  Container,
  Section
} from "/build/_shared/chunk-GQSZI2RT.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-ABUHE4LZ.js";
import {
  useLoaderData
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

// app/routes/apply.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apply.tsx"' + id);
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
    "app/routes/apply.tsx"
  );
  import.meta.hot.lastModified = "1695573149283.6748";
}
var meta = () => {
  return [{
    title: "Apply \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Apply \u2014 Maxiruby"
  }];
};
function Apply() {
  _s();
  const {
    ref
  } = useLoaderData();
  const {
    register,
    control,
    watch,
    handleSubmit,
    getValues,
    formState
  } = useForm();
  const [step, setStep] = import_react.default.useState(1);
  const [response, setResponse] = import_react.default.useState({
    loading: false,
    error: false,
    success: false
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-1 flex-row flex-wrap items-center justify-center gap-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl text-center font-medium font-heading", children: "Application Form" }, void 0, false, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 85,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ApplicationForm, { referance: ref, register, control, watch, handleSubmit, formState, response }, void 0, false, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 91,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 90,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apply.tsx",
    lineNumber: 83,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/apply.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/apply.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/apply.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(Apply, "NvP+9KEZsnR6YKZpM7Lo82sZobo=", false, function() {
  return [useLoaderData, useForm];
});
_c = Apply;
function ApplicationForm({
  referance,
  register,
  control,
  watch,
  handleSubmit,
  formState,
  response
}) {
  _s2();
  const [isVestingEnabled, setIsVestingEnabled] = import_react.default.useState(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: () => {
  }, className: "flex flex-1 flex-col max-w-[768px] mx-auto gap-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-1 flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-bold text-lg", children: "Project Information" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "private_key", children: "Reference Key *" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("private_key", {
          required: true,
          maxLength: 19,
          pattern: /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/
        }), type: "text", id: "private_key", placeholder: "XXXX-XXXX-XXXX-XXXX", defaultValue: referance, readOnly: true }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "project_name", children: "Project Name" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("project_name", {
          required: true
        }), type: "text", id: "project_name", placeholder: "My Awesome Project" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "project_description", children: "Project Description" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArea_default, { ...register("project_description", {
          required: true
        }), id: "project_name", placeholder: "About my project..." }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "relative flex items-center gap-4 -translate-y-2 cursor-pointer", htmlFor: "private", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("project_type", {
            required: true
          }), id: "private", type: "radio", value: "private", className: "hidden" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex w-5 h-5 rounded-full border border-solid border-border transition-colors duration-150" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Private" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "relative flex items-center gap-4 -translate-y-2 cursor-pointer", htmlFor: "public", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("project_type", {
            required: true
          }), id: "public", type: "radio", value: "public", className: "hidden" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex w-5 h-5 rounded-full border border-solid border-border transition-colors duration-150" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Public" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "chain", children: "Chain" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 171,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { ...register("chain", {
            required: true
          }), id: "chain", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "!h-[46px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select Chain", className: "!h-[46px]" }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 176,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 175,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "0x38", children: "BNB" }, void 0, false, {
                fileName: "app/routes/apply.tsx",
                lineNumber: 180,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "0x89", children: "POLYGON" }, void 0, false, {
                fileName: "app/routes/apply.tsx",
                lineNumber: 181,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 179,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-1 flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-bold text-lg", children: "Token Information" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "token_address", children: "Token Address" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 194,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("token_address", {
            required: true
          }), type: "text", id: "token_address", placeholder: "0x...." }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 195,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "token_owner_address", children: "Token Owner Address" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 201,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("token_owner_address", {
            required: true
          }), type: "text", id: "token_owner_address", placeholder: "0x...." }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "token_icon", children: "Token Icon" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 210,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-xs text-muted-foreground font-medium", children: "Only CDN urls are supported." }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 211,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("token_icon", {
            required: true,
            pattern: {
              value: /^https?:\/\//
            }
          }), type: "text", id: "token_icon", placeholder: "https://" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "token_symbol", children: "Token Symbol" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("token_symbol", {
            required: true
          }), type: "text", id: "token_symbol", placeholder: "XXX" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 224,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 222,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 208,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "token_price", children: "Token Price" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 232,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-xs text-muted-foreground font-medium", children: "Token price in USD." }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 233,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("token_price", {
            required: true
          }), type: "text", id: "token_price", placeholder: "0.00" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 236,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 231,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "token_decimals", children: "Token Decimals" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("token_decimals", {
            required: true
          }), type: "text", id: "token_decimals", placeholder: "18" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-1 flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-bold text-lg", children: "Supply" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 252,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "hard_cap", children: "Hard Cap" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 256,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("hard_cap", {
            required: true
          }), type: "text", id: "hard_cap", placeholder: "0" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "soft_cap", children: "Soft Cap" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 263,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("soft_cap", {
            required: true
          }), type: "text", id: "soft_cap", placeholder: "0" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 264,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 262,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "cap", children: "Cap" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 272,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("cap", {
            required: true
          }), type: "text", id: "cap", placeholder: "0" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 273,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "total_supply", children: "Total Supply" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("total_supply", {
            required: true
          }), type: "text", id: "total_supply", placeholder: "0" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 270,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "minimum_payment_amount", children: "Minimum Payment Amount" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("minimum_payment_amount", {
            required: true
          }), type: "text", id: "minimum_payment_amount", placeholder: "0" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 287,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "maximum_payment_amount", children: "Maxiumum Payment Amount" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 297,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("maximum_payment_amount", {
            required: true
          }), type: "text", id: "maximum_payment_amount", placeholder: "0" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 296,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 286,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-1 flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-bold text-lg", children: "Listing" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 309,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "dex_listing_time", children: "Dex Listing Time" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 313,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, { name: "dex_listing_time", control, render: ({
            field
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePicker, { date: field.value, setDate: (date) => field.onChange(date) }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 316,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 314,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 312,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "dex_listing_percentage", children: "Dex Listing Percentage" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 320,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute right-4", children: "%" }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 324,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("dex_listing_percentage", {
              required: true
            }), type: "number", id: "dex_listing_percentage", placeholder: "0", min: 0, max: 100, maxLength: 3, className: "appearance-none" }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 325,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 323,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 319,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 311,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "open_time", children: "Open Time" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 334,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, { name: "open_time", control, render: ({
            field
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePicker, { date: field.value, setDate: (date) => field.onChange(date) }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 337,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 335,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 333,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "close_time", children: "Close Time" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 341,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, { name: "close_time", control, render: ({
            field
          }) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePicker, { date: field.value, setDate: (date) => field.onChange(date) }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 345,
              columnNumber: 20
            }, this);
          } }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 342,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 340,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 332,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "fcfs_open_time", children: "FCFS Open Time" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 352,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, { name: "fcfs_open_time", control, render: ({
            field
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePicker, { date: field.value, setDate: (date) => field.onChange(date) }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 355,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 353,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 351,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "claim_open_time", children: "Claim Open Time" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 359,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, { name: "claim_open_time", control, render: ({
            field
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePicker, { date: field.value, setDate: (date) => field.onChange(date) }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 362,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 360,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 358,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 350,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 308,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-1 flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-bold text-lg", children: "Vesting" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 369,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "vesting", className: "flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-semibold", children: "Enable Vesting (optional)" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 374,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("vesting", {
          onChange: () => setIsVestingEnabled((current) => !current)
        }), type: "checkbox", id: "vesting", className: "hidden" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 378,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch_default, { checked: isVestingEnabled, onCheckedChange: (checked) => setIsVestingEnabled(checked) }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 382,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 373,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 372,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 371,
        columnNumber: 9
      }, this),
      isVestingEnabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "vesting_period", children: "Vesting Period" }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { ...register("chain", {
              required: true
            }), id: "vesting_period", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "!h-[46px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select Vesting Period", className: "!h-[46px]" }, void 0, false, {
                fileName: "app/routes/apply.tsx",
                lineNumber: 396,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/apply.tsx",
                lineNumber: 395,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "2629743", children: "1 month" }, void 0, false, {
                  fileName: "app/routes/apply.tsx",
                  lineNumber: 400,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "5256000", children: "2 months" }, void 0, false, {
                  fileName: "app/routes/apply.tsx",
                  lineNumber: 401,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "7884000", children: "3 months" }, void 0, false, {
                  fileName: "app/routes/apply.tsx",
                  lineNumber: 402,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "10518984", children: "4 months" }, void 0, false, {
                  fileName: "app/routes/apply.tsx",
                  lineNumber: 403,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "13140000", children: "5 months" }, void 0, false, {
                  fileName: "app/routes/apply.tsx",
                  lineNumber: 404,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "15778463", children: "6 months" }, void 0, false, {
                  fileName: "app/routes/apply.tsx",
                  lineNumber: 405,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apply.tsx",
                lineNumber: 399,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 392,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 389,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "vesting_amount", children: "Vesting Percentage" }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 411,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute right-4", children: "%" }, void 0, false, {
                fileName: "app/routes/apply.tsx",
                lineNumber: 413,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("vesting_amount", {
                required: true
              }), type: "text", id: "vesting_amount", placeholder: "0", className: "appearance-none" }, void 0, false, {
                fileName: "app/routes/apply.tsx",
                lineNumber: 414,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 412,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 410,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 388,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "vesting_start_time", children: "Vesting Start" }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 423,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, { name: "vesting_start_time", control, render: ({
              field
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePicker, { date: field.value, setDate: (date) => field.onChange(date) }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 426,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 424,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 422,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "vesting_duration", children: "Vesting End" }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 430,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Controller, { name: "vesting_duration", control, render: ({
              field
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatePicker, { date: field.value, setDate: (date) => field.onChange(date) }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 433,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/apply.tsx",
              lineNumber: 431,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 429,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 421,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 387,
        columnNumber: 29
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 368,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-1 flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-bold text-lg", children: "Security" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 441,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "audit_url", children: "Audit URL (optional)" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 445,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("audit_url", {
          pattern: {
            value: /^https?:\/\//
          }
        }), type: "text", id: "audit_url", placeholder: "https://" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 446,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 444,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 443,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "burn_address", children: "Burn Address (optional)" }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 456,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("burn_address"), type: "text", id: "burn_address", placeholder: "0x...." }, void 0, false, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 457,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 455,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 454,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 440,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-1 flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "font-bold text-lg", children: "Social" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 464,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "coingecko_coin_id", children: "Coingecko Coin ID (optional)" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 468,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("coingecko_coin_id"), type: "text", id: "coingecko_coin_id", placeholder: "my-coin" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 471,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 467,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "website_url", children: "Website URL" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 475,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("website_url", {
            required: true,
            pattern: {
              value: /^https?:\/\//
            }
          }), type: "text", id: "website_url", placeholder: "https://" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 476,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 474,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 466,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "twitter_url", children: "Twitter URL (optional)" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 487,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("twitter_url", {
            pattern: {
              value: /^https?:\/\//
            }
          }), type: "text", id: "twitter_url", placeholder: "https://" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 488,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 486,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "telegram_url", children: "Telegram URL" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 496,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("telegram_url", {
            required: true,
            pattern: {
              value: /^https?:\/\//
            }
          }), type: "text", id: "telegram_url", placeholder: "https://" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 497,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 495,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 485,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "discord_url", children: "Discord URL (optional)" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 508,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("discord_url", {
            pattern: {
              value: /^https?:\/\//
            }
          }), type: "text", id: "discord_url", placeholder: "https://" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 509,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 507,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "linkedin_url", children: "Linkedin URL (optional)" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 517,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { ...register("linkedin_url", {
            pattern: {
              value: /^https?:\/\//
            }
          }), type: "text", id: "linkedin_url", placeholder: "https://" }, void 0, false, {
            fileName: "app/routes/apply.tsx",
            lineNumber: 518,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apply.tsx",
          lineNumber: 516,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 506,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 463,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-row flex-wrap items-end px-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", title: "Apply", variant: "primary", disabled: formState.isSubmitting || response.loading, children: response.loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { icon: "spinner" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 532,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Applying" }, void 0, false, {
        fileName: "app/routes/apply.tsx",
        lineNumber: 533,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 531,
      columnNumber: 33
    }, this) : "Apply" }, void 0, false, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 530,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 529,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/apply.tsx",
      lineNumber: 528,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apply.tsx",
    lineNumber: 113,
    columnNumber: 10
  }, this);
}
_s2(ApplicationForm, "Y7L/i8SFs/VG/2beEx/Fr741yEw=");
_c2 = ApplicationForm;
var _c;
var _c2;
$RefreshReg$(_c, "Apply");
$RefreshReg$(_c2, "ApplicationForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Apply as default,
  meta
};
//# sourceMappingURL=/build/routes/apply-QPDQ7DHU.js.map

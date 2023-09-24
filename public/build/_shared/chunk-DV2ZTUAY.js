import {
  cn
} from "/build/_shared/chunk-QJ3Y6ZRC.js";
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

// app/components/shared/Button.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/Button.tsx"
  );
  import.meta.hot.lastModified = "1695297940752.5706";
}
var Button = _s(import_react.default.forwardRef(_c = _s(function Button2({
  type,
  title,
  variant = "default",
  size = "large",
  onClick,
  className,
  disabled = false,
  children
}, ref) {
  _s();
  const id = import_react.default.useId();
  const variantStyles = cn("flex items-center justify-center rounded-xl font-bold text-sm transition-all duration-150", {
    // variants
    "bg-accent text-accent-foreground": variant.includes("primary"),
    "bg-secondary text-secondary-foreground": variant.includes("secondary"),
    "bg-foreground text-background": variant.includes("invert"),
    "bg-transparent text-foreground border border-border": variant.includes("border"),
    "border-foreground": variant.includes("border") && variant.includes("invert"),
    "bg-transparent text-foreground": variant.includes("ghost"),
    // sizes
    "py-2 px-4 gap-x-2": size === "small",
    "py-2.5 px-5 gap-x-2.5": size === "medium",
    "py-3 px-5 gap-x-3": size === "large",
    "sm:py-3.5 sm:px-7 sm:gap-x-3.5 py-2.5 px-5 gap-x-2": size === "xlarge",
    "py-3 px-3 gap-x-4 w-full": size === "fill",
    // states
    "cursor-not-allowed opacity-60": disabled,
    "hover:bg-accent-hover": variant.includes("primary") && !disabled,
    "hover:bg-secondary-hover": variant.includes("secondary") && !disabled,
    "hover:bg-secondary": (variant.includes("border") && !variant.includes("invert") || variant.includes("ghost")) && !disabled,
    "hover:bg-foreground/80": variant.includes("invert"),
    "hover:bg-foreground hover:text-background": variant.includes("invert") && variant.includes("border") || variant.includes("ghost")
  }, className);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref, id, type, title, "aria-label": title, className: variantStyles, onClick, disabled, children }, void 0, false, {
    fileName: "app/components/shared/Button.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
  return [import_react.default.useId];
})), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
  return [import_react.default.useId];
});
_c2 = Button;
var Button_default = Button;
var _c;
var _c2;
$RefreshReg$(_c, "Button$React.forwardRef");
$RefreshReg$(_c2, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Button_default
};
//# sourceMappingURL=/build/_shared/chunk-DV2ZTUAY.js.map

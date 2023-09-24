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

// app/components/shared/Image.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/Image.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/Image.tsx"
  );
  import.meta.hot.lastModified = "1695297940754.4985";
}
var Image = _s(import_react.default.memo(_c = _s(function Image2({
  src,
  alt,
  loading = "lazy",
  objectFit,
  width,
  height,
  onLoad
}) {
  _s();
  const id = import_react.default.useId();
  const image = import_react.default.useRef(null);
  const [imageLoaded, setImageLoaded] = import_react.default.useState(true);
  const handleImageLoaded = () => {
    setImageLoaded(true);
    if (typeof onLoad === "function") {
      onLoad();
    }
  };
  (0, import_react.useEffect)(() => {
    if (!image.current)
      return;
    if (image.current.complete) {
      handleImageLoaded();
    }
  }, [image.current]);
  const props = {
    src,
    alt,
    loading,
    ...width && {
      width
    },
    ...height && {
      height
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { ref: image, id, className: cn("opacity-0 transition-opacity duration-75", {
    "!opacity-100": imageLoaded,
    "max-w-full": !width,
    "object-cover": objectFit === "cover",
    "object-contain": objectFit === "contain",
    "object-fill": objectFit === "fill"
  }), style: width && height ? {
    width,
    height
  } : {}, onLoad: handleImageLoaded, ...props }, id, false, {
    fileName: "app/components/shared/Image.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}, "uFAAyTGojiCHhdfei0Xce7uKXko=", false, function() {
  return [import_react.default.useId];
})), "uFAAyTGojiCHhdfei0Xce7uKXko=", false, function() {
  return [import_react.default.useId];
});
_c2 = Image;
var Image_default = Image;
function ImageContainer({
  className,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("flex flex-1 bg-gray-100 dark:bg-gray-800 animate-pulse", className), children }, void 0, false, {
    fileName: "app/components/shared/Image.tsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
}
_c3 = ImageContainer;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Image$React.memo");
$RefreshReg$(_c2, "Image");
$RefreshReg$(_c3, "ImageContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Image_default
};
//# sourceMappingURL=/build/_shared/chunk-R2JPBEQ2.js.map

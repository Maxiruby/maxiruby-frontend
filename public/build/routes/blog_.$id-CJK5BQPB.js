import {
  Container,
  Section
} from "/build/_shared/chunk-4MNH2NYO.js";
import {
  Image_default
} from "/build/_shared/chunk-YWWAXGLY.js";
import "/build/_shared/chunk-6XZNRQXK.js";
import {
  useLocation
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

// app/routes/blog_.$id.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog_.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog_.$id.tsx"
  );
  import.meta.hot.lastModified = "1694346481525.9827";
}
var meta = ({
  data
}) => {
  return [
    {
      title: `One blog \u2014 Maxiruby`
    },
    // burasi data.blog.title olcak
    {
      name: "description",
      content: `One blog \u2014 Maxiruby`
    }
    // burasi data.blog.description olcak
  ];
};
function BlogDetails() {
  _s();
  const {
    pathname
  } = useLocation();
  const [projects, setProjects] = import_react2.default.useState([]);
  (0, import_react2.useEffect)(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      fetch("http://maxiruby.com/api/landing/blogone/" + pathname.split("/")[2], requestOptions).then((response) => response.json()).then((result) => setProjects(result.result)).catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-col gap-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-foreground", children: projects.title }, void 0, false, {
        fileName: "app/routes/blog_.$id.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center text-sm font-medium text-muted-foreground", children: "6d ago \u2022 16min read" }, void 0, false, {
        fileName: "app/routes/blog_.$id.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog_.$id.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative block max-h-[640px] mx-auto w-full rounded-xl overflow-hidden mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: projects.image, alt: projects.title, width: "100%", height: "100%", objectFit: "contain" }, void 0, false, {
        fileName: "app/routes/blog_.$id.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/blog_.$id.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
        __html: `${projects.text}`
      } }, void 0, false, {
        fileName: "app/routes/blog_.$id.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/blog_.$id.tsx",
        lineNumber: 77,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog_.$id.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog_.$id.tsx",
    lineNumber: 63,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/blog_.$id.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/blog_.$id.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/blog_.$id.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(BlogDetails, "IhKA5VwRh/zaTz6xzy+U0yyapUw=", false, function() {
  return [useLocation];
});
_c = BlogDetails;
var _c;
$RefreshReg$(_c, "BlogDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogDetails as default,
  meta
};
//# sourceMappingURL=/build/routes/blog_.$id-CJK5BQPB.js.map

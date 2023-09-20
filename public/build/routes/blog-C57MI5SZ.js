import {
  Container,
  Section
} from "/build/_shared/chunk-4MNH2NYO.js";
import {
  Image_default
} from "/build/_shared/chunk-YWWAXGLY.js";
import "/build/_shared/chunk-6XZNRQXK.js";
import {
  Link
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

// app/routes/blog.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.tsx"
  );
  import.meta.hot.lastModified = "1694346241072.7798";
}
var meta = () => {
  return [{
    title: "Blog \u2014 Maxiruby"
  }, {
    name: "description",
    content: "Blog \u2014 Maxiruby"
  }];
};
function Blog() {
  _s();
  const [projects, setProjects] = import_react2.default.useState([]);
  (0, import_react2.useEffect)(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      fetch("http://maxiruby.com/api/landing/blog", requestOptions).then((response) => response.json()).then((result) => setProjects(result.result)).catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col h-full min-h-[75vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col gap-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "flex flex-1 flex-row flex-wrap items-center justify-between gap-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-medium font-heading", children: "Blog" }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 55,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6", children: projects && projects.map((blog) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogCard, { blog }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 60,
        columnNumber: 22
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 53,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(Blog, "TSrpuQX6QU8EgjQSxaAzj2u9i4o=");
_c = Blog;
function BlogCard({
  blog
}) {
  console.log(blog);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blog/${blog._id}`, className: "flex flex-col gap-y-5 hover:opacity-80 transition-opacity duration-150", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "relative flex flex-col rounded-xl overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 w-full h-full pb-[52%] overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 w-full h-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image_default, { src: blog.image, alt: "Blog", width: "100%", height: "100%", objectFit: "cover" }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "text-xl font-bold", children: blog.title }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "line-clamp-3 font-medium text-sm text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
        __html: `${blog.text}`
      } }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-muted-foreground" }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_c2 = BlogCard;
var _c;
var _c2;
$RefreshReg$(_c, "Blog");
$RefreshReg$(_c2, "BlogCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Blog as default,
  meta
};
//# sourceMappingURL=/build/routes/blog-C57MI5SZ.js.map

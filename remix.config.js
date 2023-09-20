/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",`
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: [
    // "ssr-window",
    // "ssr-window/ssr-window.esm.js",
    // "dom7"
    "connectkit",
    "ethers",

  ],
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  },
  tailwind: true,
  postcss: true
};

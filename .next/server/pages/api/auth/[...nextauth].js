"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fauth_2F_5B_nextauth_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fauth_2F_5B_nextauth_5D_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/auth/[...nextauth].js
var _nextauth_namespaceObject = {};
__webpack_require__.r(_nextauth_namespaceObject);
__webpack_require__.d(_nextauth_namespaceObject, {
  "default": () => (_nextauth_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
var next_default = /*#__PURE__*/__webpack_require__.n(next_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/apple"
const apple_namespaceObject = require("next-auth/providers/apple");
var apple_default = /*#__PURE__*/__webpack_require__.n(apple_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/facebook"
const facebook_namespaceObject = require("next-auth/providers/facebook");
var facebook_default = /*#__PURE__*/__webpack_require__.n(facebook_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




/* harmony default export */ const _nextauth_ = (next_default()({
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        apple_default()({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        }),
        facebook_default()({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    secret: process.env.JWT_SECRET
}));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fauth_2F_5B_nextauth_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fauth_2F_5B_nextauth_5D_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_nextauth_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_nextauth_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/auth/[...nextauth]",
        pathname: "/api/auth/[...nextauth]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: _nextauth_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(638)));
module.exports = __webpack_exports__;

})();
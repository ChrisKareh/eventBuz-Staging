"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routeModule: () => (/* binding */ routeModule)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7153);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7305);
/* harmony import */ var private_next_pages_api_auth_URL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2112);
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_auth_URL_js__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_auth_URL_js__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/auth/URL",
        pathname: "/api/auth/URL",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_auth_URL_js__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 2112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkEmailURL: () => (/* binding */ checkEmailURL),
/* harmony export */   getPlacesURL: () => (/* binding */ getPlacesURL),
/* harmony export */   getSuppliersURL: () => (/* binding */ getSuppliersURL),
/* harmony export */   organizationTypeListURL: () => (/* binding */ organizationTypeListURL),
/* harmony export */   profileData: () => (/* binding */ profileData),
/* harmony export */   registrationByEmail: () => (/* binding */ registrationByEmail),
/* harmony export */   resendVerificationCodeURL: () => (/* binding */ resendVerificationCodeURL),
/* harmony export */   sendSMS: () => (/* binding */ sendSMS),
/* harmony export */   subscriptionsURL: () => (/* binding */ subscriptionsURL),
/* harmony export */   switchProfileURL: () => (/* binding */ switchProfileURL),
/* harmony export */   verifyEmailURL: () => (/* binding */ verifyEmailURL)
/* harmony export */ });
const App_URL = `https://jonathana74.sg-host.com/event-buz-backend-main/api/v1`;
const registrationByEmail = `${App_URL}/register`;
const checkEmailURL = `${App_URL}/check-email`;
const resendVerificationCodeURL = `${App_URL}/resend-email-verification-code`;
const verifyEmailURL = `${App_URL}/verify-email`;
const sendSMS = `${App_URL}/send-sms`;
const organizationTypeListURL = `${App_URL}/organiser/type`;
const subscriptionsURL = `${App_URL}/packages/all`;
const profileData = `${App_URL}/show-profile`;
const switchProfileURL = `${App_URL}/switch-profile`;
const getPlacesURL = `${App_URL}/get-user-places`;
const getSuppliersURL = `${App_URL}/get-user-suppliers`;



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(3615)));
module.exports = __webpack_exports__;

})();
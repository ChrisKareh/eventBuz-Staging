"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/apple":
/*!********************************************!*\
  !*** external "next-auth/providers/apple" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/apple");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50YnV6Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaGVscGVycy5qcz83NDkxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSG9pc3RzIGEgbmFtZSBmcm9tIGEgbW9kdWxlIG9yIHByb21pc2VkIG1vZHVsZS5cbiAqXG4gKiBAcGFyYW0gbW9kdWxlIHRoZSBtb2R1bGUgdG8gaG9pc3QgdGhlIG5hbWUgZnJvbVxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdG8gaG9pc3RcbiAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvbiB0aGUgbW9kdWxlIChvciBwcm9taXNlZCBtb2R1bGUpXG4gKi8gXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJob2lzdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaG9pc3Q7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBob2lzdChtb2R1bGUsIG5hbWUpIHtcbiAgICAvLyBJZiB0aGUgbmFtZSBpcyBhdmFpbGFibGUgaW4gdGhlIG1vZHVsZSwgcmV0dXJuIGl0LlxuICAgIGlmIChuYW1lIGluIG1vZHVsZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlW25hbWVdO1xuICAgIH1cbiAgICAvLyBJZiBhIHByb3BlcnR5IGNhbGxlZCBgdGhlbmAgZXhpc3RzLCBhc3N1bWUgaXQncyBhIHByb21pc2UgYW5kXG4gICAgLy8gcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuYW1lLlxuICAgIGlmIChcInRoZW5cIiBpbiBtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZS50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS50aGVuKChtb2QpPT5ob2lzdChtb2QsIG5hbWUpKTtcbiAgICB9XG4gICAgLy8gSWYgd2UncmUgdHJ5aW5nIHRvIGhvaXNlIHRoZSBkZWZhdWx0IGV4cG9ydCwgYW5kIHRoZSBtb2R1bGUgaXMgYSBmdW5jdGlvbixcbiAgICAvLyByZXR1cm4gdGhlIG1vZHVsZSBpdHNlbGYuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBuYW1lID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHJldHVybiB1bmRlZmluZWQuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/auth/[...nextauth].js */ \"(api)/./pages/api/auth/[...nextauth].js\");\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVELmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ2lGO0FBQ2xCO0FBQ21CO0FBQ2xGLDRCQUE0Qix1R0FBMEI7QUFDdEQ7QUFDQTtBQUM4RDtBQUM5RDtBQUNBLGlFQUFlLGdHQUFLLENBQUMsd0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSxnR0FBSyxDQUFDLHdEQUFRO0FBQ3BDO0FBQ087QUFDUDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50YnV6Lz8xYjhhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZVwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaGVscGVyc1wiO1xuY29uc3QgUGFnZXNBUElSb3V0ZU1vZHVsZSA9IG1vZHVsZS5QYWdlc0FQSVJvdXRlTW9kdWxlO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/apple */ \"next-auth/providers/apple\");\n/* harmony import */ var next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_apple__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.APPLE_ID,\n            clientSecret: process.env.APPLE_SECRET\n        }),\n        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.FACEBOOK_CLIENT_ID,\n            clientSecret: process.env.FACEBOOK_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.JWT_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNrQjtBQUNGO0FBQ007QUFFM0QsaUVBQWVBLHFEQUFRQSxDQUFDO0lBQ3BCSSxXQUFVO1FBQ05ILGlFQUFjQSxDQUFDO1lBQ1hJLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNsRDtRQUNBUixnRUFBYUEsQ0FBQztZQUNWRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNJLFFBQVE7WUFDOUJGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssWUFBWTtRQUMxQztRQUNBVCxtRUFBZ0JBLENBQUM7WUFDYkUsVUFBVUMsUUFBUUMsR0FBRyxDQUFDTSxrQkFBa0I7WUFDeENKLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ08sc0JBQXNCO1FBQ3BEO0tBQ0g7SUFFREMsUUFBT1QsUUFBUUMsR0FBRyxDQUFDUyxVQUFVO0FBRWpDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudGJ1ei8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcbmltcG9ydCBBcHBsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvYXBwbGUnXG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rJ1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUXG4gICAgICAgIH0pLFxuICAgICAgICBBcHBsZVByb3ZpZGVyKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BUFBMRV9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVBQTEVfU0VDUkVUXG4gICAgICAgIH0pLFxuICAgICAgICBGYWNlYm9va1Byb3ZpZGVyKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9TRUNSRVRcbiAgICAgICAgfSlcbiAgICBdLFxuICAgIFxuICAgIHNlY3JldDpwcm9jZXNzLmVudi5KV1RfU0VDUkVUXG4gICAgLy9BZGQgb3RoZXIgcHJvdmlkZXJzIGhlcmUgZm9yIG90aGVyIHBsYXRmb3Jtc1xufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkFwcGxlUHJvdmlkZXIiLCJGYWNlYm9va1Byb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiQVBQTEVfSUQiLCJBUFBMRV9TRUNSRVQiLCJGQUNFQk9PS19DTElFTlRfSUQiLCJGQUNFQk9PS19DTElFTlRfU0VDUkVUIiwic2VjcmV0IiwiSldUX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50YnV6Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmQuanM/YzQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlS2luZFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUm91dGVLaW5kO1xuICAgIH1cbn0pO1xudmFyIFJvdXRlS2luZDtcbihmdW5jdGlvbihSb3V0ZUtpbmQpIHtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBQQUdFU2AgcmVwcmVzZW50cyBhbGwgdGhlIFJlYWN0IHBhZ2VzIHRoYXQgYXJlIHVuZGVyIGBwYWdlcy9gLlxuICAgKi8gXCJQQUdFU1wiXSA9IFwiUEFHRVNcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBQQUdFU19BUElgIHJlcHJlc2VudHMgYWxsIHRoZSBBUEkgcm91dGVzIHVuZGVyIGBwYWdlcy9hcGkvYC5cbiAgICovIFwiUEFHRVNfQVBJXCJdID0gXCJQQUdFU19BUElcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBBUFBfUEFHRWAgcmVwcmVzZW50cyBhbGwgdGhlIFJlYWN0IHBhZ2VzIHRoYXQgYXJlIHVuZGVyIGBhcHAvYCB3aXRoIHRoZVxuICAgKiBmaWxlbmFtZSBvZiBgcGFnZS57aix0fXN7LHh9YC5cbiAgICovIFwiQVBQX1BBR0VcIl0gPSBcIkFQUF9QQUdFXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgQVBQX1JPVVRFYCByZXByZXNlbnRzIGFsbCB0aGUgQVBJIHJvdXRlcyBhbmQgbWV0YWRhdGEgcm91dGVzIHRoYXQgYXJlIHVuZGVyIGBhcHAvYCB3aXRoIHRoZVxuICAgKiBmaWxlbmFtZSBvZiBgcm91dGUue2osdH1zeyx4fWAuXG4gICAqLyBcIkFQUF9ST1VURVwiXSA9IFwiQVBQX1JPVVRFXCI7XG59KShSb3V0ZUtpbmQgfHwgKFJvdXRlS2luZCA9IHt9KSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWtpbmQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50YnV6Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5qcz81YzEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZXNBUElSb3V0ZU1vZHVsZTogbnVsbCxcbiAgICBkZWZhdWx0OiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIFBhZ2VzQVBJUm91dGVNb2R1bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUGFnZXNBUElSb3V0ZU1vZHVsZTtcbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxufSk7XG5jb25zdCBfcm91dGVtb2R1bGUgPSByZXF1aXJlKFwiLi4vcm91dGUtbW9kdWxlXCIpO1xuY29uc3QgX25vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vYXBpLXV0aWxzL25vZGVcIik7XG5jbGFzcyBQYWdlc0FQSVJvdXRlTW9kdWxlIGV4dGVuZHMgX3JvdXRlbW9kdWxlLlJvdXRlTW9kdWxlIHtcbiAgICAvKipcbiAgICpcbiAgICogQHBhcmFtIHJlcSB0aGUgaW5jb21pbmcgc2VydmVyIHJlcXVlc3RcbiAgICogQHBhcmFtIHJlcyB0aGUgb3V0Z29pbmcgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGZvciB0aGUgcmVuZGVyXG4gICAqLyBhc3luYyByZW5kZXIocmVxLCByZXMsIGNvbnRleHQpIHtcbiAgICAgICAgYXdhaXQgKDAsIF9ub2RlLmFwaVJlc29sdmVyKShyZXEsIHJlcywgY29udGV4dC5xdWVyeSwgdGhpcy51c2VybGFuZCwge1xuICAgICAgICAgICAgLi4uY29udGV4dC5wcmV2aWV3UHJvcHMsXG4gICAgICAgICAgICByZXZhbGlkYXRlOiBjb250ZXh0LnJldmFsaWRhdGUsXG4gICAgICAgICAgICB0cnVzdEhvc3RIZWFkZXI6IGNvbnRleHQudHJ1c3RIb3N0SGVhZGVyLFxuICAgICAgICAgICAgYWxsb3dlZFJldmFsaWRhdGVIZWFkZXJLZXlzOiBjb250ZXh0LmFsbG93ZWRSZXZhbGlkYXRlSGVhZGVyS2V5cyxcbiAgICAgICAgICAgIGhvc3RuYW1lOiBjb250ZXh0Lmhvc3RuYW1lXG4gICAgICAgIH0sIGNvbnRleHQubWluaW1hbE1vZGUsIGNvbnRleHQuZGV2LCBjb250ZXh0LnBhZ2UpO1xuICAgIH1cbn1cbmNvbnN0IF9kZWZhdWx0ID0gUGFnZXNBUElSb3V0ZU1vZHVsZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();
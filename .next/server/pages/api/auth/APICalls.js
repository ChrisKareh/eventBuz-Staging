"use strict";
(() => {
var exports = {};
exports.id = 468;
exports.ids = [468];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8941:
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 3388:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var private_next_pages_api_auth_APICalls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4200);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_auth_APICalls_js__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_auth_APICalls_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_auth_APICalls_js__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_auth_APICalls_js__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/auth/APICalls",
        pathname: "/api/auth/APICalls",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_auth_APICalls_js__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   km: () => (/* binding */ setStatusMessage)
/* harmony export */ });
/* unused harmony exports setverticalCarouselIndex, setusername */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    verticalCarouselIndex: null,
    username: "",
    statusMessage: null
};
const Slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "data",
    initialState,
    reducers: {
        setverticalCarouselIndex (state, action) {
            state.verticalCarouselIndex = action.payload;
        },
        setusername (state, action) {
            state.username = action.payload;
        },
        setStatusMessage (state, action) {
            state.statusMessage = action.payload;
        }
    }
});
const { setverticalCarouselIndex, setusername, setStatusMessage } = Slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slice.reducer);


/***/ }),

/***/ 3234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _Redux_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2293);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


const Store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
    reducer: {
        data: _Redux_slice__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP
    }
});


/***/ }),

/***/ 4200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkEmail: () => (/* binding */ checkEmail),
/* harmony export */   registerEmail: () => (/* binding */ registerEmail)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2112);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var _Redux_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2293);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const registerEmail = (name, lastName, email, gender, phoneNumber, country, nationality, dob, role, signinType)=>{
    const FormData = __webpack_require__(8941);
    let data = new FormData();
    data.append("name", name);
    data.append("family_name", lastName);
    data.append("email", email);
    data.append("gender", gender);
    data.append("phone", phoneNumber);
    data.append("country", country);
    data.append("nationality", nationality);
    data.append("dob", dob);
    data.append("sign_in_type", signinType);
    data.append("role", role);
    console.log("EMAIL", email);
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/register",
        headers: {
            "Content-Type": "application/json"
        },
        data: data
    };
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].request(config).then((response)=>{
        console.log(response);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Sign Up Completed");
        if (response.status = 200) {
            localStorage.setItem("access_Token", response.data.access_token);
            _Redux_store__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_2__/* .setStatusMessage */ .km)(response.status));
        }
    }).catch((error)=>{
        if (error.response) {
            // The request was made and the server responded with a status code
            console.log("Only the error message", error.response.data.errors);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Email or Phone Number exist");
            console.log("Data:", error.response.data);
            console.log("Status:", error.response.status);
            console.log("Headers:", error.response.headers);
        } else if (error.request) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Something went wrong please try again");
            console.log("Request:", error.request);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Something went wrong please try again");
            console.log("Error:", error.message);
        }
    });
};
// const login = (Email) => {
// }
const checkEmail = (Email, goToSignUp)=>{
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
        method: "post",
        maxBodyLength: Infinity,
        url: _URL__WEBPACK_IMPORTED_MODULE_4__.checkEmailURL,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            email: Email
        }
    }).then((response)=>{
        console.log(JSON.stringify(response.data));
    }).catch((error)=>{
        if (error.response) {
            console.log("DATA-ERROR:", error.response.data.message);
            console.log("STATUS-ERROR", error.response.status);
            console.log("HEADERS-ERROR", error.response.error);
        } else if (error.request) {
            console.log("REQUEST-ERROR", error.request);
        } else {
            console.log("ERROR-MESSAGE", error.message);
        }
    // console.log(error)
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkEmailURL: () => (/* binding */ checkEmailURL),
/* harmony export */   registrationByEmail: () => (/* binding */ registrationByEmail)
/* harmony export */ });
const App_URL = `https://jonathana74.sg-host.com/event-buz-backend-main/api/v1`;
const registrationByEmail = `${App_URL}/register`;
const checkEmailURL = `${App_URL}/check-email`;



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(3388)));
module.exports = __webpack_exports__;

})();
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

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
/* harmony export */   BI: () => (/* binding */ setListofCurrencies),
/* harmony export */   Fu: () => (/* binding */ setEmailVerified),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   km: () => (/* binding */ setStatusMessage),
/* harmony export */   s0: () => (/* binding */ setPhoneVerified),
/* harmony export */   yg: () => (/* binding */ setorganizationList)
/* harmony export */ });
/* unused harmony exports setNotUsername, setIsSwitch, setSponsorPicture, setPlaceName, setverticalCarouselIndex, setusername, setnotVerified, setListTypes, setReduxEmail, setLatitude, setlongitude */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    verticalCarouselIndex: null,
    username: "",
    notusername: "",
    statusMessage: null,
    notVerified: false,
    organizationList: [],
    placeName: "",
    listTypes: [],
    phoneVerified: "",
    emailVerified: "",
    reduxEmail: "",
    latitude: null,
    longitude: null,
    sponsorPicture: {},
    listOfCurrencies: [],
    isSwitch: false
};
const Slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "data",
    initialState,
    reducers: {
        setIsSwitch (state, action) {
            state.isSwitch = action.payload;
        },
        setverticalCarouselIndex (state, action) {
            state.verticalCarouselIndex = action.payload;
        },
        setNotUsername (state, action) {
            state.notusername = action.payload;
        },
        setusername (state, action) {
            state.username = action.payload;
        },
        setStatusMessage (state, action) {
            state.statusMessage = action.payload;
        },
        setnotVerified (state, action) {
            state.notVerified = action.payload;
        },
        setphoneNumber (state, action) {
            state.phoneNumber = action.payload;
        },
        setorganizationList (state, action) {
            state.organizationList = action.payload;
        },
        setPlaceName (state, action) {
            state.placeName = action.payload;
        },
        setListTypes (state, action) {
            state.listTypes = action.payload;
        },
        setPhoneVerified (state, action) {
            state.phoneVerified = action.payload;
        },
        setEmailVerified (state, action) {
            state.emailVerified = action.payload;
        },
        setReduxEmail (state, action) {
            state.reduxEmail = action.payload;
        },
        setLatitude (state, action) {
            state.latitude = action.payload;
        },
        setlongitude (state, action) {
            state.longitude = action.payload;
        },
        setSponsorPicture (state, action) {
            state.sponsorPicture = action.payload;
        },
        setListofCurrencies (state, action) {
            state.listOfCurrencies = action.payload;
        }
    }
});
const { setNotUsername, setIsSwitch, setListofCurrencies, setSponsorPicture, setPlaceName, setorganizationList, setverticalCarouselIndex, setusername, setStatusMessage, setnotVerified, setListTypes, setPhoneVerified, setEmailVerified, setReduxEmail, setLatitude, setlongitude } = Slice.actions;
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
/* harmony export */   SendSMS: () => (/* binding */ SendSMS),
/* harmony export */   checkEmail: () => (/* binding */ checkEmail),
/* harmony export */   createEvent: () => (/* binding */ createEvent),
/* harmony export */   createEventContact: () => (/* binding */ createEventContact),
/* harmony export */   createEventSocial: () => (/* binding */ createEventSocial),
/* harmony export */   getListofCurrencies: () => (/* binding */ getListofCurrencies),
/* harmony export */   organizationTypeList: () => (/* binding */ organizationTypeList),
/* harmony export */   registerEmail: () => (/* binding */ registerEmail),
/* harmony export */   registerEmailOrganizer: () => (/* binding */ registerEmailOrganizer),
/* harmony export */   resendVerificationCode: () => (/* binding */ resendVerificationCode),
/* harmony export */   subscriptionsData: () => (/* binding */ subscriptionsData),
/* harmony export */   verifyEmail: () => (/* binding */ verifyEmail)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2112);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var _Redux_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2293);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3234);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9771);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
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
const registerEmailOrganizer = (name, lastName, email, gender, phoneNumber, country, nationality, dob, role, signinType)=>{
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
const checkEmail = async (Email, callback)=>{
    await axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
        method: "post",
        maxBodyLength: Infinity,
        url: _URL__WEBPACK_IMPORTED_MODULE_6__.checkEmailURL,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            email: Email
        }
    }).then((response)=>{
        console.log("CHECK EMAIL", response.data.access_token);
        console.log("Check Email Response", response);
        if (response.status == 200) {
            _Redux_store__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_2__/* .setStatusMessage */ .km)(response.status));
            console.log(response.data.phoneVerified);
            const isNotVerified = !response.data.phoneVerified || !response.data.emailVerified;
            //put the value of phoneVerified and emailVerified into two redux states
            _Redux_store__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_2__/* .setPhoneVerified */ .s0)(response.data.phoneVerified));
            _Redux_store__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_2__/* .setEmailVerified */ .Fu)(response.data.emailVerified));
            const errorMsg = isNotVerified ? "Your account isn't verified" : "";
            localStorage.setItem("access_Token", response.data.access_token);
            callback(response.status, errorMsg);
        } else {
            callback(response.status, "Something went wrong.");
        }
    }).catch((error)=>{
        if (error.response) {
            console.log("DATA-ERROR:", error.response.data.message);
            console.log("STATUS-ERROR", error.response.status);
            console.log("HEADERS-ERROR", error.response.error);
            callback(error.response.status, error.response.data.message);
        } else if (error.request) {
            console.log("REQUEST-ERROR", error.request);
            callback(500, "Server did not respond");
        } else {
            callback(500, error.message);
            console.log("ERROR-MESSAGE", error.message);
        }
    // console.log(error)
    });
};
const resendVerificationCode = ()=>{
    const Token = localStorage.getItem("access_Token");
    console.log("TOKEN IN resendVerificationCode", Token);
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
        method: "post",
        maxBodyLength: Infinity,
        url: _URL__WEBPACK_IMPORTED_MODULE_6__.resendVerificationCodeURL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Token
        }
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
};
const verifyEmail = (otpCode)=>{
    const Token = localStorage.getItem("access_Token");
    console.log("TOKEN in verifyEmail Function", Token);
    console.log(otpCode);
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
        method: "post",
        maxBodyLength: Infinity,
        url: _URL__WEBPACK_IMPORTED_MODULE_6__.verifyEmailURL,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Token
        },
        data: {
            verification_code: otpCode
        }
    }).then((response)=>{
        console.log(response);
        if (response.status == 200) {
            _Redux_store__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_2__/* .setStatusMessage */ .km)(response.status));
        }
    }).catch((error)=>{
        console.log(error);
    });
};
const SendSMS = (phoneNumber)=>{
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
        method: "post",
        maxBodyLength: Infinity,
        url: _URL__WEBPACK_IMPORTED_MODULE_6__.sendSMS,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            phone: phoneNumber,
            message: "ayo put dat numba"
        }
    }).then((response)=>{
        console.log(response);
        if (response.status == 200) {
            _Redux_store__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_2__/* .setStatusMessage */ .km)(response.status));
        }
    }).catch((error)=>{
        console.log(error);
    });
};
const organizationTypeList = async ()=>{
    await axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
        method: "get",
        maxBodyLength: Infinity,
        url: _URL__WEBPACK_IMPORTED_MODULE_6__.organizationTypeListURL,
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response)=>{
        const formattedOrganizationList = response.data.data.map((org)=>({
                label: org.name,
                value: org.id
            }));
        _Redux_store__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_2__/* .setorganizationList */ .yg)(formattedOrganizationList));
    }).catch((error)=>{
        console.log(error);
    });
};
const subscriptionsData = async ()=>{
    await axios__WEBPACK_IMPORTED_MODULE_0__["default"].request({
        method: "get",
        url: _URL__WEBPACK_IMPORTED_MODULE_6__.subscriptionsURL,
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response)=>{
        console.log(response.data.data);
        return response.data.data;
    }).catch((error)=>{
        console.log(error);
    });
};
const createEvent = async (inputValue, onError)=>{
    console.log(typeof inputValue);
    console.log("Data passed to API", inputValue);
    const axios1 = __webpack_require__(2167);
    const Token = localStorage.getItem("access_Token");
    console.log("TOKEN in verifyEmail Function", Token);
    //send via parameter the inputValue 
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/create-event",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + Token
        },
        data: inputValue
    };
    axios1.request(config).then((response)=>{
        console.log(JSON.stringify(response.data));
        localStorage.setItem("createEvent_ID", response.data.data.id);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("General Information Saved");
    }).catch((error)=>{
        console.log(error);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Error occured, try again");
        onError();
    });
};
const createEventContact = async (inputValue, onError)=>{
    const axios1 = __webpack_require__(2167);
    const Token = localStorage.getItem("access_Token");
    const createEvent_ID = localStorage.getItem("createEvent_ID");
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/create-event-contact",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + Token
        },
        data: {
            ...inputValue,
            event_id: createEvent_ID
        }
    };
    axios1.request(config).then((response)=>{
        console.log(JSON.stringify(response.data));
    }).catch((error)=>{
        console.log(error);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Error occured, please try again");
        onError();
    });
};
const createEventSocial = async (inputValue, onError)=>{
    const axios1 = __webpack_require__(2167);
    const Token = localStorage.getItem("access_Token");
    const createEvent_ID = localStorage.getItem("createEvent_ID");
    console.log(inputValue);
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/create-event-social-media/",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + Token
        },
        data: {
            ...inputValue,
            event_id: createEvent_ID
        }
    };
    axios1.request(config).then((response)=>{
        console.log(JSON.stringify(response.data));
    }).catch((error)=>{
        console.log(error);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Error Occured, Please Try Again");
        onError();
    });
};
const getListofCurrencies = async ()=>{
    const axios1 = __webpack_require__(2167);
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/currency/all",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    axios1.request(config).then((response)=>{
        console.log(response.data.data);
        const formattedCurrencyList = response.data.data.map((org)=>({
                label: org.name,
                value: org.id
            }));
        _Redux_store__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_2__/* .setListofCurrencies */ .BI)(formattedCurrencyList));
    }).catch((error)=>{
        console.log(error);
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
var __webpack_exports__ = __webpack_require__.X(0, [172,771], () => (__webpack_exec__(3388)));
module.exports = __webpack_exports__;

})();
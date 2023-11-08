exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 5279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BI: () => (/* binding */ setListofCurrencies),
/* harmony export */   BL: () => (/* binding */ setIsSwitch),
/* harmony export */   F5: () => (/* binding */ setSponsorPicture),
/* harmony export */   Fu: () => (/* binding */ setEmailVerified),
/* harmony export */   Hu: () => (/* binding */ setNotUsername),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   km: () => (/* binding */ setStatusMessage),
/* harmony export */   ob: () => (/* binding */ setLatitude),
/* harmony export */   s0: () => (/* binding */ setPhoneVerified),
/* harmony export */   xt: () => (/* binding */ setlongitude),
/* harmony export */   yg: () => (/* binding */ setorganizationList)
/* harmony export */ });
/* unused harmony exports setPlaceName, setverticalCarouselIndex, setusername, setnotVerified, setListTypes, setReduxEmail */
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

/***/ 2564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _Redux_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5279);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


const Store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
    reducer: {
        data: _Redux_slice__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP
    }
});


/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_dhtmlxscheduler_material_eventsbuz_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1935);
/* harmony import */ var _styles_dhtmlxscheduler_material_eventsbuz_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_dhtmlxscheduler_material_eventsbuz_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2564);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _radix_ui_themes_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6485);
/* harmony import */ var _radix_ui_themes_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_themes_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5268);
/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8434);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4595);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
react_toastify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function App({ Component, pageProps, session }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
            store: _Redux_store__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .y,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__.Theme, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1935:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;
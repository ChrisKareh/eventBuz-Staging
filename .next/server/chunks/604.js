"use strict";
exports.id = 604;
exports.ids = [604];
exports.modules = {

/***/ 604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ registerEmail),
/* harmony export */   o: () => (/* binding */ checkEmail)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3330);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var _Redux_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5279);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2564);
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
        url: _URL__WEBPACK_IMPORTED_MODULE_4__/* .checkEmailURL */ .a,
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

/***/ 3330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ checkEmailURL)
/* harmony export */ });
/* unused harmony export registrationByEmail */
const App_URL = `https://jonathana74.sg-host.com/event-buz-backend-main/api/v1`;
const registrationByEmail = (/* unused pure expression or super */ null && (`${App_URL}/register`));
const checkEmailURL = `${App_URL}/check-email`;



/***/ })

};
;
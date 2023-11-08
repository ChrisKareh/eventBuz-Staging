"use strict";
exports.id = 604;
exports.ids = [604];
exports.modules = {

/***/ 604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getListofCurrencies),
/* harmony export */   YW: () => (/* binding */ SendSMS),
/* harmony export */   fv: () => (/* binding */ registerEmail),
/* harmony export */   hh: () => (/* binding */ resendVerificationCode),
/* harmony export */   i0: () => (/* binding */ createEventContact),
/* harmony export */   le: () => (/* binding */ organizationTypeList),
/* harmony export */   lm: () => (/* binding */ verifyEmail),
/* harmony export */   oP: () => (/* binding */ checkEmail),
/* harmony export */   tO: () => (/* binding */ createEventSocial),
/* harmony export */   yM: () => (/* binding */ createEvent)
/* harmony export */ });
/* unused harmony exports subscriptionsData, registerEmailOrganizer */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3330);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var _Redux_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5279);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2564);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9332);
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
    axios.request(config).then((response)=>{
        console.log(response);
        toast.success("Sign Up Completed");
        if (response.status = 200) {
            localStorage.setItem("access_Token", response.data.access_token);
            Store.dispatch(setStatusMessage(response.status));
        }
    }).catch((error)=>{
        if (error.response) {
            // The request was made and the server responded with a status code
            console.log("Only the error message", error.response.data.errors);
            toast.error("Email or Phone Number exist");
            console.log("Data:", error.response.data);
            console.log("Status:", error.response.status);
            console.log("Headers:", error.response.headers);
        } else if (error.request) {
            toast.error("Something went wrong please try again");
            console.log("Request:", error.request);
        } else {
            toast.error("Something went wrong please try again");
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
        url: _URL__WEBPACK_IMPORTED_MODULE_6__/* .checkEmailURL */ .ab,
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
        url: _URL__WEBPACK_IMPORTED_MODULE_6__/* .resendVerificationCodeURL */ .xw,
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
        url: _URL__WEBPACK_IMPORTED_MODULE_6__/* .verifyEmailURL */ .yT,
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
        url: _URL__WEBPACK_IMPORTED_MODULE_6__/* .sendSMS */ .X,
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
        url: _URL__WEBPACK_IMPORTED_MODULE_6__/* .organizationTypeListURL */ .It,
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
    await axios.request({
        method: "get",
        url: subscriptionsURL,
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

/***/ })

};
;
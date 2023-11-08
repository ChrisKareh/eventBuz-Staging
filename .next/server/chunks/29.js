"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 5029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MyTable = ({ data })=>{
    if (!data || data.length === 0) {
        return null;
    }
    // Using the first item in the array, but any item will work since they have the same structure
    const keys = Object.keys(data[0]);
    // Find the start and end indexes
    const startIndex = keys.indexOf("Create an event");
    const endIndex = keys.indexOf("Free period");
    // Slice the array to get the required keys
    const extractedKeys = keys.slice(startIndex, endIndex + 1);
    // const featureKeys = Object.keys(data[0].slice(3))
    console.log("SUP", extractedKeys);
    const featureKeys = Object.keys(data[0]).filter((key)=>key !== "id" && key !== "name" && key !== "price");
    const columnNames = Object.keys(data);
    console.log("DATA IN TABLE", data[0].name);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
        className: "subTable",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                className: "subTableHead",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "potato",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                        }),
                        data.map((columnName)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: columnName.name
                            }, columnName))
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                className: "subTableBody",
                children: featureKeys.map((feature)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: feature
                            }),
                            data.map((plan)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    children: String(plan[feature])
                                }, plan.id))
                        ]
                    }, feature))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTable);


/***/ })

};
;
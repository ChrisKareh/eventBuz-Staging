exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 2267:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ContactInfo_container__XDldp",
	"row": "ContactInfo_row__Bo_Wt",
	"item": "ContactInfo_item__gDRRq",
	"icon": "ContactInfo_icon__UTk5k"
};


/***/ }),

/***/ 4030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2267);
/* harmony import */ var _styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2__);
// ContactInfo.js


 // Make sure the path is correct
const SkeletonLoader = ()=>/*#__PURE__*/ _jsx("div", {
        className: "skeletonLoader"
    });
const ContactInfo = ({ data, loading })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            marginLeft: 50
        },
        className: (_styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card__skeleton card__title"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card__skeleton card__title",
                            style: {
                                marginLeft: 30
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    style: {
                        marginTop: 20
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card__skeleton card__title"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card__skeleton card__title",
                            style: {
                                marginLeft: 30
                            }
                        })
                    ]
                })
            ]
        }) : data.map((item, index)=>{
            // Skip rendering here if the value is null or if the index is odd (because the odd items will be rendered with the even ones)
            if (!item.value || index % 2 !== 0) return null;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),
                style: {
                    width: 500
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemLeft),
                        children: [
                            item.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),
                                children: item.icon
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: item.value
                            })
                        ]
                    }),
                    data[index + 1] && data[index + 1].value && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemRight),
                        style: {
                            marginLeft: 30
                        },
                        children: [
                            data[index + 1].icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_ContactInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),
                                children: data[index + 1].icon
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: data[index + 1].value
                            })
                        ]
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactInfo);


/***/ })

};
;
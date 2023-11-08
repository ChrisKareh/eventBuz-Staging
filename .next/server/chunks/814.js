exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 4489:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "embla-carousel-react"
var external_embla_carousel_react_ = __webpack_require__(2250);
;// CONCATENATED MODULE: ./Components/EmblaCarouselArrowsDotsButtons.jsx


const EmblaCarouselArrowsDotsButtons_DotButton = (props)=>{
    const { children, ...restProps } = props;
    return /*#__PURE__*/ _jsx("button", {
        type: "button",
        ...restProps,
        children: children
    });
};
const EmblaCarouselArrowsDotsButtons_PrevButton = (props)=>{
    const { children, ...restProps } = props;
    return /*#__PURE__*/ _jsxs("button", {
        className: "embla__button embla__button--prev",
        type: "button",
        ...restProps,
        children: [
            /*#__PURE__*/ _jsx("svg", {
                className: "embla__button__svg",
                viewBox: "0 0 532 532",
                children: /*#__PURE__*/ _jsx("path", {
                    fill: "currentColor",
                    d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                })
            }),
            children
        ]
    });
};
const EmblaCarouselArrowsDotsButtons_NextButton = (props)=>{
    const { children, ...restProps } = props;
    return /*#__PURE__*/ _jsxs("button", {
        className: "embla__button embla__button--next",
        type: "button",
        ...restProps,
        children: [
            /*#__PURE__*/ _jsx("svg", {
                className: "embla__button__svg",
                viewBox: "0 0 532 532",
                children: /*#__PURE__*/ _jsx("path", {
                    fill: "currentColor",
                    d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                })
            }),
            children
        ]
    });
};

// EXTERNAL MODULE: ./functions/imageByIndex.js
var functions_imageByIndex = __webpack_require__(2864);
;// CONCATENATED MODULE: ./Components/EmblaCarousel.jsx





const EmblaCarousel = (props)=>{
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const scrollPrev = useCallback(()=>emblaApi && emblaApi.scrollPrev(), [
        emblaApi
    ]);
    const scrollNext = useCallback(()=>emblaApi && emblaApi.scrollNext(), [
        emblaApi
    ]);
    const scrollTo = useCallback((index)=>emblaApi && emblaApi.scrollTo(index), [
        emblaApi
    ]);
    const onInit = useCallback((emblaApi)=>{
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);
    const onSelect = useCallback((emblaApi)=>{
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);
    useEffect(()=>{
        if (!emblaApi) return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [
        emblaApi,
        onInit,
        onSelect
    ]);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "embla",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "embla__viewport",
                        ref: emblaRef,
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "embla__container",
                            children: slides.map((index)=>/*#__PURE__*/ _jsxs("div", {
                                    className: "embla__slide",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "embla__slide__number",
                                            children: /*#__PURE__*/ _jsx("span", {
                                                children: index + 1
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("img", {
                                            className: "embla__slide__img",
                                            src: imageByIndex(index),
                                            alt: "Your alt text"
                                        })
                                    ]
                                }, index))
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "embla__buttons",
                        children: [
                            /*#__PURE__*/ _jsx(PrevButton, {
                                onClick: scrollPrev,
                                disabled: prevBtnDisabled
                            }),
                            /*#__PURE__*/ _jsx(NextButton, {
                                onClick: scrollNext,
                                disabled: nextBtnDisabled
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "embla__dots",
                children: scrollSnaps.map((_, index)=>/*#__PURE__*/ _jsx(DotButton, {
                        onClick: ()=>scrollTo(index),
                        className: "embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const Components_EmblaCarousel = ((/* unused pure expression or super */ null && (EmblaCarousel)));


/***/ }),

/***/ 452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const SecondaryHeader = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "secondary-et-hero-tabs-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "secondary-et-hero-tab",
                href: "#tab-es6",
                children: "My Panel"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "secondary-et-hero-tab",
                href: "#tab-flexbox",
                children: "My Profile"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "secondary-et-hero-tab",
                href: "#tab-react",
                children: "My Contacts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "secondary-et-hero-tab",
                href: "#tab-angular",
                children: "My Notifications"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "secondary-et-hero-tab",
                href: "#tab-other",
                children: "My Invitations"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "secondary-et-hero-tab",
                onClick: ()=>{
                    router.push("/myEvents");
                },
                children: " My Events"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "secondary-et-hero-tab",
                onClick: ()=>{
                    localStorage.setItem("access_Token", " ");
                    router.push("/login");
                },
                children: " LogOut"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondaryHeader);


/***/ }),

/***/ 8571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _pages_api_auth_URL__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3330);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5268);
/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2131);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2564);
/* harmony import */ var _Redux_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5279);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ThirdHeader = ()=>{
    const [places, setPlaces] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [suppliers, setSuppliers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [stateid, setStateId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [stateType, setstateType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [pressed, setPressed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [switchName, setSwitchName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    // const [isSwitchUser, setisSwitchUser] = useState(false);
    const [Token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    let dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const isSwitch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.data.isSwitch);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const getUserPlaces = async ()=>{
        const Token = localStorage.getItem("access_Token");
        console.log("TOKEN GET USER PLACES", Token);
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"].request({
            method: "get",
            url: _pages_api_auth_URL__WEBPACK_IMPORTED_MODULE_10__/* .getPlacesURL */ .NC,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Token
            }
        }).then((response)=>{
            console.log(response);
            // const extractedNames = response.data.data.map(item => item.name);
            // setPlaces(extractedNames)
            setPlaces(response.data.data);
            console.log("Place", response.data.data);
        // console.log("PLaces names", extractedNames)
        }).catch((error)=>{
            console.log(error);
        });
    };
    const getUserSuppliers = async ()=>{
        const axios = __webpack_require__(2167);
        const Token = localStorage.getItem("access_Token");
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/get-user-suppliers",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Token
            }
        };
        axios.request(config).then((response)=>{
            console.log(JSON.stringify(response.data));
            setSuppliers(response.data.data);
        }).catch((error)=>{
            console.log(error);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getUserPlaces();
        getUserSuppliers();
    }, []);
    const switchProfile = (id, type)=>{
        console.log("OI IM TRYING TO SWITCH PROFILE");
        const profile_loggedIn = localStorage.getItem("Profile_LoggedIn");
        if (profile_loggedIn) {
            const tempToken = localStorage.getItem("profile_access");
            console.log(tempToken, "TEMP TOKEN");
            setToken(tempToken);
            console.log("Debugging Token in HeaderSignIn line 31", Token);
        } else {
            const tempToken = localStorage.getItem("access_Token");
            setToken(tempToken);
            console.log("Debugging Main access Token in line 39 Switch function", tempToken);
        }
        const axios = __webpack_require__(2167);
        const FormData = __webpack_require__(8941);
        let data = new FormData();
        data.append("id", id);
        data.append("type", type);
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/switch-profile",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + "34|DHhs9SLHBZBi5xElsQlHTCN76Gh1GtR3r9mcHsXA78f0ceba"
            },
            data: data
        };
        axios.request(config).then((response)=>{
            if (type == "main") {
                localStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem("profile_loggedIn", false);
                console.log("Switched To user");
            } else {
                localStorage.setItem("profile_loggedIn", true);
                localStorage.setItem("profile_access_token", response.data.access_token);
                console.log("Switched to Place/Supplier");
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("Switch Success ");
            }
            console.log("Response of switching", response.data);
        }).catch((error)=>{
            console.log(error);
        });
    };
    const switchOrganizer = ()=>{
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/switch-profile",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Token
            },
            data: {
                type: "main",
                id: null
            }
        };
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].request(config).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            pressed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card-header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        setPressed(false);
                                    },
                                    className: "close",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M18.3 5.71021C17.91 5.32021 17.28 5.32021 16.89 5.71021L12 10.5902L7.10997 5.70021C6.71997 5.31021 6.08997 5.31021 5.69997 5.70021C5.30997 6.09021 5.30997 6.72021 5.69997 7.11021L10.59 12.0002L5.69997 16.8902C5.30997 17.2802 5.30997 17.9102 5.69997 18.3002C6.08997 18.6902 6.71997 18.6902 7.10997 18.3002L12 13.4102L16.89 18.3002C17.28 18.6902 17.91 18.6902 18.3 18.3002C18.69 17.9102 18.69 17.2802 18.3 16.8902L13.41 12.0002L18.3 7.11021C18.68 6.73021 18.68 6.09021 18.3 5.71021Z",
                                            fill: "#222124"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: {
                                        textAlign: "center",
                                        fontSize: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Switch Profile"
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card-body",
                            children: isSwitch ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    textAlign: "center",
                                    marginLeft: 55
                                },
                                children: "Do you want to switch to Organizer Role ? "
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    textAlign: "center",
                                    marginLeft: 55
                                },
                                children: [
                                    "Do you want to switch to ",
                                    switchName.name,
                                    " ? "
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card-footer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        if (isSwitch == true) {
                                            switchProfile(switchName.id, stateType);
                                            _Redux_store__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_7__/* .setNotUsername */ .Hu)(switchName.name));
                                        } else {}
                                        setPressed(false);
                                    },
                                    className: "btn",
                                    style: {
                                        backgroundColor: "#B62872",
                                        color: "#FFF"
                                    },
                                    children: "Switch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        setPressed(false);
                                    },
                                    className: "btn btn-primary",
                                    children: "Cancel"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "third-et-hero-tabs-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Root, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Trigger, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                onClick: ()=>{
                                    router.push("/userProfile");
                                },
                                className: "third-et-hero-tab",
                                style: {
                                    fontFamily: "sans-serif",
                                    fontWeight: 100,
                                    fontSize: 13,
                                    height: 50,
                                    background: "#25282D"
                                },
                                children: "Profile"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Root, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Trigger, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    className: "third-et-hero-tab",
                                    style: {
                                        fontFamily: "sans-serif",
                                        fontWeight: 100,
                                        fontSize: 13,
                                        height: 50,
                                        background: "#25282D"
                                    },
                                    children: "My Supplier"
                                })
                            }),
                            Array.isArray(suppliers) && suppliers.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Content, {
                                children: suppliers.map((suppliers)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Item, {
                                        onClick: ()=>{
                                            switchProfile(suppliers.id, "supplier");
                                            setstateType("supplier");
                                            setPressed(true);
                                            setSwitchName(suppliers);
                                            _Redux_store__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_7__/* .setIsSwitch */ .BL)(true));
                                            localStorage.setItem("switched", true);
                                            localStorage.setItem("notUsername", suppliers.name);
                                            // Store.dispatch(setNotUsername(suppliers.name))
                                            console.log(suppliers.name);
                                        },
                                        children: suppliers.name
                                    }, suppliers.id))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Content, {
                                style: {
                                    maxHeight: "80vh",
                                    overflowY: "auto"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Item, {
                                    children: "No Suppliers"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Root, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Trigger, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    style: {
                                        fontFamily: "sans-serif",
                                        fontWeight: 100,
                                        fontSize: 13,
                                        height: 50,
                                        background: "#25282D",
                                        marginLeft: 10,
                                        marginRight: 140
                                    },
                                    children: "My Places"
                                })
                            }),
                            Array.isArray(places) && places.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Content, {
                                children: places.map((place)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Item, {
                                        onClick: ()=>{
                                            setstateType("place");
                                            setPressed(true);
                                            setSwitchName(place);
                                            _Redux_store__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .y.dispatch((0,_Redux_slice__WEBPACK_IMPORTED_MODULE_7__/* .setIsSwitch */ .BL)(true));
                                            localStorage.setItem("switched", true);
                                            localStorage.setItem("notUsername", place.name);
                                        // Store.dispatch(setNotUsername(places.name))
                                        // setTimeout(() => {
                                        //     switchProfile(place.id, "place")
                                        // }, 500);
                                        },
                                        children: place.name
                                    }, place.id))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Content, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu.Item, {
                                    children: "No Places"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: ()=>{
                            console.log("Sup");
                        },
                        className: "third-et-hero-tab-edit",
                        children: " Edit Profile "
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThirdHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6593:
/***/ (() => {



/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/MainNavigation.jsx":
/*!**********************************************!*\
  !*** ./components/layout/MainNavigation.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainNavigation.module.css */ \"./components/layout/MainNavigation.module.css\");\n/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// import {  useSession } from 'next-auth/client'\n\nfunction MainNavigation() {\n    _s();\n    // const {session, loading} = useSession()\n    // console.log( {session, loading});\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    // console.log({session});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                children: \"(-_-)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                style: {\n                    color: \"white\"\n                },\n                children: [\n                    \"Welcome \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mark\", {\n                        style: {\n                            borderRadius: \"50px\"\n                        },\n                        children: session ? \"\".concat(session.user.name, \" \") : \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 43\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"Collections\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/new-meetup\",\n                                children: \"Add New \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/Favourites\",\n                                children: \"Favourites\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/blog\",\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/api/auth/signin\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"github\");\n                                    },\n                                    children: \"Sign In\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/api/auth/signout\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    onClick: function(e) {\n                                        e.preventDefault();\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                                    },\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\components\\\\layout\\\\MainNavigation.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNavigation, \"P15IEFsSJ2hHJPi+mVM1Q0+WyzQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = MainNavigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNavigation);\nvar _c;\n$RefreshReg$(_c, \"MainNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWtEO0FBQ3JCO0FBRTdCLGlEQUFpRDtBQUNhO0FBRzlELFNBQVNLLGNBQWMsR0FBRzs7SUFDeEIsMENBQTBDO0lBQzFDLG9DQUFvQztJQUNwQyxJQUF5QkQsR0FBWSxHQUFaQSwyREFBVSxFQUFFLEVBQTdCRSxPQUFZLEdBQUtGLEdBQVksQ0FBN0JFLElBQUk7SUFDZCwwQkFBMEI7SUFFeEIscUJBQ0UsOERBQUNFLFFBQU07UUFBQ0MsU0FBUyxFQUFFVCwwRUFBYzs7MEJBQy9CLDhEQUFDVSxLQUFHO2dCQUFDRCxTQUFTLEVBQUVULHdFQUFZOzBCQUFFLE9BQUs7Ozs7O29CQUFNOzBCQUV6Qyw4REFBQ1ksSUFBRTtnQkFBQ0MsS0FBSyxFQUFFO29CQUFDQyxLQUFLLEVBQUMsT0FBTztpQkFBQzs7b0JBQUUsVUFBUTtrQ0FBQSw4REFBQ0MsTUFBSTt3QkFBQ0YsS0FBSyxFQUFFOzRCQUFDRyxZQUFZLEVBQUMsTUFBTTt5QkFBQztrQ0FBR1QsT0FBTyxHQUFHLEVBQUMsQ0FBb0IsTUFBQyxDQUFuQkEsT0FBTyxDQUFDVSxJQUFJLENBQUNDLElBQUksRUFBQyxHQUFDLENBQUMsR0FBRyxFQUFFOzs7Ozs0QkFBUTs7Ozs7O29CQUFLOzBCQUU1SCw4REFBQ0MsS0FBRzswQkFDRiw0RUFBQ0MsSUFBRTtvQkFBQ1gsU0FBUzs7c0NBQ1gsOERBQUNZLElBQUU7c0NBQ0QsNEVBQUNwQixrREFBSTtnQ0FBQ3FCLElBQUksRUFBQyxHQUFHOzBDQUFDLGFBQVc7Ozs7O29DQUFPOzs7OztnQ0FDOUI7c0NBQ0wsOERBQUNELElBQUU7c0NBQ0QsNEVBQUNwQixrREFBSTtnQ0FBQ3FCLElBQUksRUFBQyxhQUFhOzBDQUFDLFVBQVE7Ozs7O29DQUFPOzs7OztnQ0FDckM7c0NBQ0wsOERBQUNELElBQUU7c0NBQ0QsNEVBQUNwQixrREFBSTtnQ0FBQ3FCLElBQUksRUFBQyxhQUFhOzBDQUFDLFlBQVU7Ozs7O29DQUFPOzs7OztnQ0FDdkM7c0NBQ0wsOERBQUNELElBQUU7c0NBQ0QsNEVBQUNwQixrREFBSTtnQ0FBQ3FCLElBQUksRUFBQyxPQUFPOzBDQUFDLE1BQUk7Ozs7O29DQUFPOzs7OztnQ0FDM0I7d0JBRUgsQ0FBQ2YsT0FBTyxrQkFDViw4REFBQ2MsSUFBRTtzQ0FDRCw0RUFBQ3BCLGtEQUFJO2dDQUFDcUIsSUFBSSxFQUFDLGtCQUFrQjswQ0FDM0IsNEVBQUNDLEdBQUM7b0NBQ0FDLE9BQU8sRUFBRUMsU0FBQUEsQ0FBQyxFQUFJO3dDQUNaQSxDQUFDLENBQUNDLGNBQWMsRUFBRTt3Q0FDbEJ4Qix1REFBTSxDQUFDLFFBQVEsQ0FBQztxQ0FDakI7OENBQUUsU0FFTDs7Ozs7d0NBQUk7Ozs7O29DQUNDOzs7OztnQ0FDSjt3QkFFTkssT0FBTyxrQkFDTiw4REFBQ2MsSUFBRTtzQ0FDRCw0RUFBQ3BCLGtEQUFJO2dDQUFDcUIsSUFBSSxFQUFDLG1CQUFtQjswQ0FDNUIsNEVBQUNDLEdBQUM7b0NBQ0FDLE9BQU8sRUFBRUMsU0FBQUEsQ0FBQyxFQUFJO3dDQUNaQSxDQUFDLENBQUNDLGNBQWMsRUFBRTt3Q0FDbEJ2Qix3REFBTyxFQUFFO3FDQUNWOzhDQUFFLFVBRUw7Ozs7O3dDQUFJOzs7OztvQ0FDQzs7Ozs7Z0NBQ0o7Ozs7Ozt3QkFHRjs7Ozs7b0JBQ0Q7Ozs7OztZQUNDLENBQ1Q7Q0FDSDtHQTFEUUUsY0FBYzs7UUFHSUQsdURBQVU7OztBQUg1QkMsS0FBQUEsY0FBYztBQTREdkIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5qc3g/YjAxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbi8vIGltcG9ydCB7ICB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKCkge1xyXG4gIC8vIGNvbnN0IHtzZXNzaW9uLCBsb2FkaW5nfSA9IHVzZVNlc3Npb24oKVxyXG4gIC8vIGNvbnNvbGUubG9nKCB7c2Vzc2lvbiwgbG9hZGluZ30pO1xyXG4gIGNvbnN0IHsgZGF0YTpzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcclxuLy8gY29uc29sZS5sb2coe3Nlc3Npb259KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PigtXy0pPC9kaXY+XHJcblxyXG4gICAgICA8aDMgc3R5bGU9e3tjb2xvcjond2hpdGUnfX0+V2VsY29tZSA8bWFyayBzdHlsZT17e2JvcmRlclJhZGl1czonNTBweCd9fT57c2Vzc2lvbiA/IGAke3Nlc3Npb24udXNlci5uYW1lfSBgIDogJyd9PC9tYXJrPjwvaDM+XHJcbiAgICAgIFxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU+IFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkNvbGxlY3Rpb25zPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXctbWVldHVwXCI+QWRkIE5ldyA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL0Zhdm91cml0ZXNcIj5GYXZvdXJpdGVzPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+QmxvZzwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgeyAhc2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hcGkvYXV0aC9zaWduaW4nPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgIHNpZ25JbignZ2l0aHViJylcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtzZXNzaW9uICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FwaS9hdXRoL3NpZ25vdXQnPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBTaWduIE91dFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2aWdhdGlvbjtcclxuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJMaW5rIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJNYWluTmF2aWdhdGlvbiIsImRhdGEiLCJzZXNzaW9uIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwibG9nbyIsImgzIiwic3R5bGUiLCJjb2xvciIsIm1hcmsiLCJib3JkZXJSYWRpdXMiLCJ1c2VyIiwibmFtZSIsIm5hdiIsInVsIiwibGkiLCJocmVmIiwiYSIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/MainNavigation.jsx\n"));

/***/ })

});
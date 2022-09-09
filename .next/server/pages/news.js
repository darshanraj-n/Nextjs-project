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
exports.id = "pages/news";
exports.ids = ["pages/news"];
exports.modules = {

/***/ "./pages/news/index.jsx":
/*!******************************!*\
  !*** ./pages/news/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction News({ articles  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function sports() {\n        router.push(\"/news\" + \"/sports\");\n    }\n    function politics() {\n        router.push(\"/news\" + \"/politics\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List of News Articles\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\index.jsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    cursor: \"pointer\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: sports,\n                        children: \"Sports\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    \" | \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: politics,\n                        children: \"Politics\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 42\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            articles.map((article)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                article.id,\n                                \" \",\n                                article.title,\n                                \" | \",\n                                article.category\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\index.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\index.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, article.id, true, {\n                    fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\news\\\\index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this);\n            })\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);\nasync function getServerSideProps() {\n    console.log(\" NewsArticleList\");\n    const response = await fetch(\"http://localhost:5000/news\");\n    const data = await response.json();\n    return {\n        props: {\n            articles: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1QztBQUV2QyxTQUFTQyxJQUFJLENBQUMsRUFBRUMsUUFBUSxHQUFFLEVBQUU7SUFFeEIsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBQzFCLFNBQVNJLE1BQU0sR0FBRztRQUNkRCxNQUFNLENBQUNFLElBQUksQ0FBQyxPQUFPLEdBQUMsU0FBUyxDQUFDO0tBQy9CO0lBQ0QsU0FBU0MsUUFBUSxHQUFHO1FBQ2xCSCxNQUFNLENBQUNFLElBQUksQ0FBQyxPQUFPLEdBQUMsV0FBVyxDQUFDO0tBQ2pDO0lBRUgscUJBQ0U7OzBCQUNFLDhEQUFDRSxJQUFFOzBCQUFDLHVCQUFxQjs7Ozs7b0JBQUs7MEJBRTlCLDhEQUFDQyxLQUFHO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUNDLE1BQU0sRUFBQyxTQUFTO2lCQUFDOztrQ0FDOUIsOERBQUNDLEdBQUM7d0JBQUNDLE9BQU8sRUFBRVIsTUFBTTtrQ0FBRSxRQUFNOzs7Ozs0QkFBSTtvQkFBQSxLQUFHO2tDQUFBLDhEQUFDTyxHQUFDO3dCQUFDQyxPQUFPLEVBQUVOLFFBQVE7a0NBQUUsVUFBUTs7Ozs7NEJBQUk7Ozs7OztvQkFDN0Q7WUFFTEosUUFBUSxDQUFDVyxHQUFHLENBQUNDLENBQUFBLE9BQU8sR0FBSTtnQkFDdkIscUJBQ0UsOERBQUNOLEtBQUc7O3NDQUNGLDhEQUFDTyxJQUFFOztnQ0FDQUQsT0FBTyxDQUFDRSxFQUFFO2dDQUFDLEdBQUM7Z0NBQUNGLE9BQU8sQ0FBQ0csS0FBSztnQ0FBQyxLQUFHO2dDQUFDSCxPQUFPLENBQUNJLFFBQVE7Ozs7OztnQ0FDN0M7c0NBQ0wsOERBQUNDLElBQUU7Ozs7Z0NBQUc7O21CQUpFTCxPQUFPLENBQUNFLEVBQUU7Ozs7d0JBS2QsQ0FDUDthQUNGLENBQUM7O29CQUNELENBQ0o7Q0FDRjtBQUVELGlFQUFlZixJQUFJO0FBRVosZUFBZW1CLGtCQUFrQixHQUFHO0lBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvQixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDO0lBQzFELE1BQU1DLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksRUFBRTtJQUVsQyxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMekIsUUFBUSxFQUFFdUIsSUFBSTtTQUNmO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHR0d28vLi9wYWdlcy9uZXdzL2luZGV4LmpzeD83YjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5mdW5jdGlvbiBOZXdzKHsgYXJ0aWNsZXMgfSkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBmdW5jdGlvbiBzcG9ydHMoKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9uZXdzJysnL3Nwb3J0cycpXHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gcG9saXRpY3MoKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9uZXdzJysnL3BvbGl0aWNzJylcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGgxPkxpc3Qgb2YgTmV3cyBBcnRpY2xlczwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cclxuICAgICAgICA8YSBvbkNsaWNrPXtzcG9ydHN9PlNwb3J0czwvYT4gfCA8YSBvbkNsaWNrPXtwb2xpdGljc30+UG9saXRpY3M8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2FydGljbGVzLm1hcChhcnRpY2xlID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXthcnRpY2xlLmlkfT5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5pZH0ge2FydGljbGUudGl0bGV9IHwge2FydGljbGUuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBOZXdzXHJcbiAgXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnNvbGUubG9nKCcgTmV3c0FydGljbGVMaXN0JylcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9uZXdzJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgYXJ0aWNsZXM6IGRhdGFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTmV3cyIsImFydGljbGVzIiwicm91dGVyIiwic3BvcnRzIiwicHVzaCIsInBvbGl0aWNzIiwiaDEiLCJkaXYiLCJzdHlsZSIsImN1cnNvciIsImEiLCJvbkNsaWNrIiwibWFwIiwiYXJ0aWNsZSIsImgyIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwiaHIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/index.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/news/index.jsx"));
module.exports = __webpack_exports__;

})();
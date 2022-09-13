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
exports.id = "pages/posts/[postid]";
exports.ids = ["pages/posts/[postid]"];
exports.modules = {

/***/ "./pages/posts/[postid].js":
/*!*********************************!*\
  !*** ./pages/posts/[postid].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Post({ post  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)() // when we change in url for other paths/ or use slice in index page with fallback true\n    ;\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\[postid].js\",\n            lineNumber: 7,\n            columnNumber: 15\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    post.id,\n                    \". \",\n                    post.title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\[postid].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\[postid].js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\nasync function getStaticPaths() {\n    // const response= await fetch('https://jsonplaceholder.typicode.com/posts')\n    // const data = await response.json()\n    // const paths =data.map((post)=>{\n    //     return{\n    //         params:{\n    //             postid:`${post.id}`\n    //         }\n    //     }\n    // }) \n    return {\n        paths: [\n            {\n                params: {\n                    postid: \"1\"\n                }\n            },\n            {\n                params: {\n                    postid: \"2\"\n                }\n            },\n            {\n                params: {\n                    postid: \"3\"\n                }\n            }, \n        ],\n        // paths:paths,\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    const { params  } = context;\n    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);\n    const data = await response.json();\n    if (!data.id) {\n        return {\n            notFound: true // if there is no path it will set 404 page for fallback set to true\n        };\n    }\n    return {\n        props: {\n            post: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdGlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBcUM7QUFFckMsU0FBU0MsSUFBSSxDQUFDLEVBQUVDLElBQUksR0FBRSxFQUN0QjtJQUNJLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRSxDQUFFLHVGQUF1RjtJQUF6RjtJQUN6QixJQUFHRyxNQUFNLENBQUNDLFVBQVUsRUFBQztRQUNsQixxQkFBTSw4REFBQ0MsSUFBRTtzQkFBQyxTQUFPOzs7OztnQkFBSztLQUN4QjtJQUVGLHFCQUNJOzswQkFDQSw4REFBQ0MsSUFBRTs7b0JBQUVKLElBQUksQ0FBQ0ssRUFBRTtvQkFBQyxJQUFFO29CQUFDTCxJQUFJLENBQUNNLEtBQUs7Ozs7OztvQkFBTTswQkFDaEMsOERBQUNDLEdBQUM7MEJBQUVQLElBQUksQ0FBQ1EsSUFBSTs7Ozs7b0JBQUs7O29CQUNmLENBQ047Q0FDSjtBQUNELGlFQUFlVCxJQUFJO0FBRVosZUFBZVUsY0FBYyxHQUFFO0lBQ2xDLDRFQUE0RTtJQUM1RSxxQ0FBcUM7SUFFckMsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixRQUFRO0lBQ1IsTUFBTTtJQUNWLE9BQU07UUFDRkMsS0FBSyxFQUFDO1lBQ0Y7Z0JBQ0lDLE1BQU0sRUFBQztvQkFBQ0MsTUFBTSxFQUFDLEdBQUc7aUJBQUM7YUFDdEI7WUFDRDtnQkFDSUQsTUFBTSxFQUFDO29CQUFDQyxNQUFNLEVBQUMsR0FBRztpQkFBQzthQUN0QjtZQUNEO2dCQUNJRCxNQUFNLEVBQUM7b0JBQUNDLE1BQU0sRUFBQyxHQUFHO2lCQUFDO2FBQ3RCO1NBQ0o7UUFDRCxlQUFlO1FBQ2ZDLFFBQVEsRUFBQyxJQUFJO0tBQ2hCO0NBQ0E7QUFFTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBQztJQUN6QyxNQUFNLEVBQUNKLE1BQU0sR0FBQyxHQUFDSSxPQUFPO0lBQ3RCLE1BQU1DLFFBQVEsR0FBRSxNQUFNQyxLQUFLLENBQUMsQ0FBQywyQ0FBMkMsRUFBRU4sTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFGLE1BQU1NLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksRUFBRTtJQUVsQyxJQUFHLENBQUNELElBQUksQ0FBQ2IsRUFBRSxFQUFDO1FBQ1IsT0FBTTtZQUNGZSxRQUFRLEVBQUUsSUFBSSxDQUFFLG9FQUFvRTtTQUN2RjtLQUNKO0lBQ0QsT0FBTTtRQUNGQyxLQUFLLEVBQUM7WUFDRnJCLElBQUksRUFBQ2tCLElBQUk7U0FDWjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dHdvLy4vcGFnZXMvcG9zdHMvW3Bvc3RpZF0uanM/NzIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSBcclxue1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCkgIC8vIHdoZW4gd2UgY2hhbmdlIGluIHVybCBmb3Igb3RoZXIgcGF0aHMvIG9yIHVzZSBzbGljZSBpbiBpbmRleCBwYWdlIHdpdGggZmFsbGJhY2sgdHJ1ZVxyXG4gICAgIGlmKHJvdXRlci5pc0ZhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm48aDE+TG9hZGluZzwvaDE+XHJcbiAgICAgfVxyXG4gICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxoMj57cG9zdC5pZH0uIHtwb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICAvLyBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXHJcbiAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgLy8gY29uc3QgcGF0aHMgPWRhdGEubWFwKChwb3N0KT0+e1xyXG4gICAgLy8gICAgIHJldHVybntcclxuICAgIC8vICAgICAgICAgcGFyYW1zOntcclxuICAgIC8vICAgICAgICAgICAgIHBvc3RpZDpgJHtwb3N0LmlkfWBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pIFxyXG5yZXR1cm57XHJcbiAgICBwYXRoczpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJhbXM6e3Bvc3RpZDonMSd9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJhbXM6e3Bvc3RpZDonMid9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJhbXM6e3Bvc3RpZDonMyd9LFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgLy8gcGF0aHM6cGF0aHMsXHJcbiAgICBmYWxsYmFjazp0cnVlXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xyXG4gICAgY29uc3Qge3BhcmFtc309Y29udGV4dFxyXG4gICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtwYXJhbXMucG9zdGlkfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgaWYoIWRhdGEuaWQpe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgbm90Rm91bmQ6IHRydWUgIC8vIGlmIHRoZXJlIGlzIG5vIHBhdGggaXQgd2lsbCBzZXQgNDA0IHBhZ2UgZm9yIGZhbGxiYWNrIHNldCB0byB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgcG9zdDpkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlBvc3QiLCJwb3N0Iiwicm91dGVyIiwiaXNGYWxsYmFjayIsImgxIiwiaDIiLCJpZCIsInRpdGxlIiwicCIsImJvZHkiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwicGFyYW1zIiwicG9zdGlkIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJub3RGb3VuZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[postid].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[postid].js"));
module.exports = __webpack_exports__;

})();
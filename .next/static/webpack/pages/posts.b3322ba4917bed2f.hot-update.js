"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DataFetching; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n// import Link from \"next/link\"\n// function PostList({posts}){\n// return(\n//     <>\n//     <h1>List of posts</h1>\n//     {posts.map((post)=>{\n//         return(\n//             <div key={post.id}>\n//                 <Link href={`posts/${post.id}`} passHref> \n//                 <h1>{post.id}. {post.title}</h1>\n//                 </Link>\n//                 <hr/>\n//             </div>\n//         )\n//     })}\n//     </>\n// )\n// }\n// export default PostList\n// export async function getStaticProps(){\n//     const response= await fetch('https://jsonplaceholder.typicode.com/posts')\n//     const data = await response.json()\n//     return{\n//         props:{\n//             posts:data\n//         }\n//     }\n// }\n\nvar _s = $RefreshSig$();\n\n\nfunction DataFetching() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), post = ref[0], setPost = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), id = ref1[0], setId = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts/\".concat(id)).then(function(res) {\n            setPost(res.data);\n        }).catch(function(err) {\n            console.log(err);\n        }, [\n            id\n        ]);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: id,\n                onChange: function(e) {\n                    return setId(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: posts.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n};\n_s(DataFetching, \"UujIW4BEgDcZZOLUMq4jK+pbRXk=\");\n_c = DataFetching;\nvar _c;\n$RefreshReg$(_c, \"DataFetching\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUM5QixVQUFVO0FBQ1YsU0FBUztBQUNULDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0Isa0JBQWtCO0FBQ2xCLGtDQUFrQztBQUNsQyw2REFBNkQ7QUFDN0QsbURBQW1EO0FBQ25ELDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIscUJBQXFCO0FBRXJCLFlBQVk7QUFDWixVQUFVO0FBQ1YsVUFBVTtBQUNWLElBQUk7QUFDSixJQUFJO0FBQ0osMEJBQTBCO0FBRTFCLDBDQUEwQztBQUMxQyxnRkFBZ0Y7QUFDaEYseUNBQXlDO0FBRXpDLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSTtBQUdKOztBQUFtRDtBQUN6QjtBQUVYLFNBQVNJLFlBQVksR0FBRTs7SUFDbEMsSUFBd0JGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JHLElBQUksR0FBYUgsR0FBWSxHQUF6QixFQUFFSSxPQUFPLEdBQUlKLEdBQVksR0FBaEI7SUFDcEIsSUFBb0JBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBeEJLLEVBQUUsR0FBV0wsSUFBVyxHQUF0QixFQUFFTSxLQUFLLEdBQUlOLElBQVcsR0FBZjtJQUVoQkQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZFLGdEQUFTLENBQUMsNkNBQTRDLENBQUssT0FBSEksRUFBRSxDQUFFLENBQUMsQ0FDNURHLElBQUksQ0FBQ0MsU0FBQUEsR0FBRyxFQUFFO1lBQ1BMLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDQyxJQUFJLENBQUM7U0FDcEIsQ0FBQyxDQUNEQyxLQUFLLENBQUNDLFNBQUFBLEdBQUcsRUFBRztZQUNUQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7U0FDcEIsRUFBQztZQUFDUCxFQUFFO1NBQUMsQ0FBQztLQUNWLENBQUM7SUFFRixxQkFDSSw4REFBQ1UsS0FBRzs7MEJBQ0EsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxLQUFLLEVBQUViLEVBQUU7Z0JBQUVjLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzsyQkFBSWQsS0FBSyxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO2lCQUFBOzs7OztvQkFBVTswQkFDNUUsOERBQUNILEtBQUc7MEJBQUVPLEtBQUssQ0FBQ0MsS0FBSzs7Ozs7b0JBQU87Ozs7OztZQUN0QixDQUNUO0NBQ0o7R0FwQnVCckIsWUFBWTtBQUFaQSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2luZGV4LmpzPzNiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbi8vIGZ1bmN0aW9uIFBvc3RMaXN0KHtwb3N0c30pe1xyXG4vLyByZXR1cm4oXHJcbi8vICAgICA8PlxyXG4vLyAgICAgPGgxPkxpc3Qgb2YgcG9zdHM8L2gxPlxyXG4vLyAgICAge3Bvc3RzLm1hcCgocG9zdCk9PntcclxuLy8gICAgICAgICByZXR1cm4oXHJcbi8vICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfT5cclxuLy8gICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Bwb3N0cy8ke3Bvc3QuaWR9YH0gcGFzc0hyZWY+IFxyXG4vLyAgICAgICAgICAgICAgICAgPGgxPntwb3N0LmlkfS4ge3Bvc3QudGl0bGV9PC9oMT5cclxuLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgIDxoci8+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICApXHJcbi8vICAgICB9KX1cclxuLy8gICAgIDwvPlxyXG4vLyApXHJcbi8vIH1cclxuLy8gZXhwb3J0IGRlZmF1bHQgUG9zdExpc3RcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICBwcm9wczp7XHJcbi8vICAgICAgICAgICAgIHBvc3RzOmRhdGFcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhRmV0Y2hpbmcoKXtcclxuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YClcclxuICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgc2V0UG9zdChyZXMuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSxbaWRdKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtlID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGRpdj57cG9zdHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRGF0YUZldGNoaW5nIiwicG9zdCIsInNldFBvc3QiLCJpZCIsInNldElkIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBvc3RzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PostList(param) {\n    var posts = param.posts;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List of posts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, this),\n            posts.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"posts/\".concat(post.id),\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    post.id,\n                                    \". \",\n                                    post.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                                lineNumber: 10,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 9,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, post.id, true, {\n                    fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, _this);\n            })\n        ]\n    }, void 0, true);\n}\n_c = PostList;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n //......................................\n // import React, { useEffect, useState } from \"react\";\n // import axios from \"axios\";\n // export default function DataFetching(){\n //     const [post, setPost] = useState({})\n //     const [id, setId] = useState(1)\n //     useEffect(()=>{\n //         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)\n //         .then(res=>{\n //             setPost(res.data)\n //         })\n //         .catch(err =>{\n //             console.log(err);\n //         },[id])\n //     })\n //     return(\n //         <div>\n //             <input type='text' value={id} onChange={e => setId(e.target.value)}></input>\n //             <div>{post.title}</div>\n //         </div>\n //     )\n // }\n //.....................................\n // import React, { useEffect, useState } from \"react\";\n // import axios from \"axios\";\n // export default function DataFetching(){\n //     const [post, setPost] = useState({})\n //     const [id, setId] = useState(1)\n //     const [click, setClick] = useState(1)\n //     const handleClick =()=>{\n //         setClick(id)\n //     }\n //     useEffect(()=>{\n //         axios.get(`https://jsonplaceholder.typicode.com/posts/${click}`)\n //         .then(res=>{\n //             setPost(res.data)\n //         })\n //         .catch(err =>{\n //             console.log(err);\n //         },[click])\n //     })\n //     return(\n //         <div>\n //             <input type='text' value={id} onChange={e => setId(e.target.value)}></input>\n //             <button type=\"button\" onClick={handleClick}>Fetch Post</button>\n //             <div>{post.title}</div>\n //         </div>\n //     )\n // }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRCO0FBQzVCLFNBQVNDLFFBQVEsQ0FBQyxLQUFPLEVBQUM7UUFBUixLQUFNLEdBQU4sS0FBTyxDQUFOQyxLQUFLOztJQUN4QixxQkFDSTs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsZUFBYTs7Ozs7b0JBQUs7WUFDckJELEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRztnQkFDZixxQkFDSSw4REFBQ0MsS0FBRzs7c0NBQ0EsOERBQUNOLGtEQUFJOzRCQUFDTyxJQUFJLEVBQUUsUUFBTyxDQUFVLE9BQVJGLElBQUksQ0FBQ0csRUFBRSxDQUFFOzRCQUFFQyxRQUFRO3NDQUN4Qyw0RUFBQ04sSUFBRTs7b0NBQUVFLElBQUksQ0FBQ0csRUFBRTtvQ0FBQyxJQUFFO29DQUFDSCxJQUFJLENBQUNLLEtBQUs7Ozs7OztxQ0FBTTs7Ozs7aUNBQ3pCO3NDQUNQLDhEQUFDQyxJQUFFOzs7O2lDQUFFOzttQkFKQ04sSUFBSSxDQUFDRyxFQUFFOzs7O3lCQUtYLENBRVQ7YUFDSixDQUFDOztvQkFDQyxDQUNOO0NBQ0E7QUFqQlFQLEtBQUFBLFFBQVE7O0FBa0JqQiwrREFBZUEsUUFBUTs7O0FBV3RCLENBRUQsd0NBQXdDO0NBRXhDLHNEQUFzRDtDQUN0RCw2QkFBNkI7Q0FFN0IsMENBQTBDO0NBQzFDLDJDQUEyQztDQUMzQyxzQ0FBc0M7Q0FFdEMsc0JBQXNCO0NBQ3RCLHdFQUF3RTtDQUN4RSx1QkFBdUI7Q0FDdkIsZ0NBQWdDO0NBQ2hDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtDQUNsQixTQUFTO0NBRVQsY0FBYztDQUNkLGdCQUFnQjtDQUNoQiwyRkFBMkY7Q0FDM0Ysc0NBQXNDO0NBQ3RDLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsSUFBSTtDQUVKLHVDQUF1QztDQUV2QyxzREFBc0Q7Q0FDdEQsNkJBQTZCO0NBRTdCLDBDQUEwQztDQUMxQywyQ0FBMkM7Q0FDM0Msc0NBQXNDO0NBQ3RDLDRDQUE0QztDQUU1QywrQkFBK0I7Q0FDL0IsdUJBQXVCO0NBQ3ZCLFFBQVE7Q0FFUixzQkFBc0I7Q0FDdEIsMkVBQTJFO0NBQzNFLHVCQUF1QjtDQUN2QixnQ0FBZ0M7Q0FDaEMsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixnQ0FBZ0M7Q0FDaEMscUJBQXFCO0NBQ3JCLFNBQVM7Q0FFVCxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLDJGQUEyRjtDQUMzRiw4RUFBOEU7Q0FDOUUsc0NBQXNDO0NBQ3RDLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9pbmRleC5qcz8zYjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5mdW5jdGlvbiBQb3N0TGlzdCh7cG9zdHN9KXtcclxucmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxoMT5MaXN0IG9mIHBvc3RzPC9oMT5cclxuICAgIHtwb3N0cy5tYXAoKHBvc3QpPT57XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgcG9zdHMvJHtwb3N0LmlkfWB9IHBhc3NIcmVmPiBcclxuICAgICAgICAgICAgICAgIDxoMT57cG9zdC5pZH0uIHtwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfSl9XHJcbiAgICA8Lz5cclxuKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBwb3N0czpkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhRmV0Y2hpbmcoKXtcclxuLy8gICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KVxyXG4vLyAgICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuLy8gICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4vLyAgICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YClcclxuLy8gICAgICAgICAudGhlbihyZXM9PntcclxuLy8gICAgICAgICAgICAgc2V0UG9zdChyZXMuZGF0YSlcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIC5jYXRjaChlcnIgPT57XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgfSxbaWRdKVxyXG4vLyAgICAgfSlcclxuICAgIFxyXG4vLyAgICAgcmV0dXJuKFxyXG4vLyAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtlID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuLy8gICAgICAgICAgICAgPGRpdj57cG9zdC50aXRsZX08L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhRmV0Y2hpbmcoKXtcclxuLy8gICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KVxyXG4vLyAgICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgxKVxyXG4vLyAgICAgY29uc3QgW2NsaWNrLCBzZXRDbGlja10gPSB1c2VTdGF0ZSgxKVxyXG5cclxuLy8gICAgIGNvbnN0IGhhbmRsZUNsaWNrID0oKT0+e1xyXG4vLyAgICAgICAgIHNldENsaWNrKGlkKVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4vLyAgICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7Y2xpY2t9YClcclxuLy8gICAgICAgICAudGhlbihyZXM9PntcclxuLy8gICAgICAgICAgICAgc2V0UG9zdChyZXMuZGF0YSlcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIC5jYXRjaChlcnIgPT57XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgfSxbY2xpY2tdKVxyXG4vLyAgICAgfSlcclxuICAgIFxyXG4vLyAgICAgcmV0dXJuKFxyXG4vLyAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtlID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuLy8gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkZldGNoIFBvc3Q8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgPGRpdj57cG9zdC50aXRsZX08L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gfSJdLCJuYW1lcyI6WyJMaW5rIiwiUG9zdExpc3QiLCJwb3N0cyIsImgxIiwibWFwIiwicG9zdCIsImRpdiIsImhyZWYiLCJpZCIsInBhc3NIcmVmIiwidGl0bGUiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});
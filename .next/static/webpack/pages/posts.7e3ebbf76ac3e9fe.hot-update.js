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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DataFetching; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n// import Link from \"next/link\"\n// function PostList({posts}){\n// return(\n//     <>\n//     <h1>List of posts</h1>\n//     {posts.map((post)=>{\n//         return(\n//             <div key={post.id}>\n//                 <Link href={`posts/${post.id}`} passHref> \n//                 <h1>{post.id}. {post.title}</h1>\n//                 </Link>\n//                 <hr/>\n//             </div>\n//         )\n//     })}\n//     </>\n// )\n// }\n// export default PostList\n// export async function getStaticProps(){\n//     const response= await fetch('https://jsonplaceholder.typicode.com/posts')\n//     const data = await response.json()\n//     return{\n//         props:{\n//             posts:data\n//         }\n//     }\n// }\n//......................................\n// import React, { useEffect, useState } from \"react\";\n// import axios from \"axios\";\n// export default function DataFetching(){\n//     const [post, setPost] = useState({})\n//     const [id, setId] = useState(1)\n//     useEffect(()=>{\n//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)\n//         .then(res=>{\n//             setPost(res.data)\n//         })\n//         .catch(err =>{\n//             console.log(err);\n//         },[id])\n//     })\n//     return(\n//         <div>\n//             <input type='text' value={id} onChange={e => setId(e.target.value)}></input>\n//             <div>{post.title}</div>\n//         </div>\n//     )\n// }\n//.....................................\n\nvar _s = $RefreshSig$();\n\n\nfunction DataFetching() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), post = ref[0], setPost = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), id = ref1[0], setId = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), click = ref2[0], setClick = ref2[1];\n    var handleClick = function() {\n        setClick(id);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts/\".concat(click)).then(function(res) {\n            setPost(res.data);\n        }).catch(function(err) {\n            console.log(err);\n        }, [\n            click\n        ]);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: id,\n                onChange: function(e) {\n                    return setId(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: handleClick,\n                children: \"Fetch Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                style: {\n                    color: \"red\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 36\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, this);\n};\n_s(DataFetching, \"86IkgnykZaF0N0ZmGwDOzcsTfa0=\");\n_c = DataFetching;\nvar _c;\n$RefreshReg$(_c, \"DataFetching\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7Ozs7O29CQUFPOzs7Ozs7WUFDcEIsQ0FDVDtDQUNKO0dBM0J1QjdCLFlBQVk7QUFBWkEsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9pbmRleC5qcz8zYjE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG4vLyBmdW5jdGlvbiBQb3N0TGlzdCh7cG9zdHN9KXtcclxuLy8gcmV0dXJuKFxyXG4vLyAgICAgPD5cclxuLy8gICAgIDxoMT5MaXN0IG9mIHBvc3RzPC9oMT5cclxuLy8gICAgIHtwb3N0cy5tYXAoKHBvc3QpPT57XHJcbi8vICAgICAgICAgcmV0dXJuKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XHJcbi8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgcG9zdHMvJHtwb3N0LmlkfWB9IHBhc3NIcmVmPiBcclxuLy8gICAgICAgICAgICAgICAgIDxoMT57cG9zdC5pZH0uIHtwb3N0LnRpdGxlfTwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICA8aHIvPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfSl9XHJcbi8vICAgICA8Lz5cclxuLy8gKVxyXG4vLyB9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbi8vICAgICByZXR1cm57XHJcbi8vICAgICAgICAgcHJvcHM6e1xyXG4vLyAgICAgICAgICAgICBwb3N0czpkYXRhXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhRmV0Y2hpbmcoKXtcclxuLy8gICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KVxyXG4vLyAgICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuLy8gICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4vLyAgICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YClcclxuLy8gICAgICAgICAudGhlbihyZXM9PntcclxuLy8gICAgICAgICAgICAgc2V0UG9zdChyZXMuZGF0YSlcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIC5jYXRjaChlcnIgPT57XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgfSxbaWRdKVxyXG4vLyAgICAgfSlcclxuICAgIFxyXG4vLyAgICAgcmV0dXJuKFxyXG4vLyAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtlID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuLy8gICAgICAgICAgICAgPGRpdj57cG9zdC50aXRsZX08L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhRmV0Y2hpbmcoKXtcclxuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgxKVxyXG4gICAgY29uc3QgW2NsaWNrLCBzZXRDbGlja10gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0oKT0+e1xyXG4gICAgICAgIHNldENsaWNrKGlkKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7Y2xpY2t9YClcclxuICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgc2V0UG9zdChyZXMuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSxbY2xpY2tdKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtlID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkZldGNoIFBvc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj57cG9zdC50aXRsZX08L2Rpdj48aHIgc3R5bGU9e3tjb2xvcjoncmVkJ319PjwvaHI+XHJcbiAgICAgICAgICAgIDxkaXY+e3Bvc3QuYm9keX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJEYXRhRmV0Y2hpbmciLCJwb3N0Iiwic2V0UG9zdCIsImlkIiwic2V0SWQiLCJjbGljayIsInNldENsaWNrIiwiaGFuZGxlQ2xpY2siLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInRpdGxlIiwiaHIiLCJzdHlsZSIsImNvbG9yIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});
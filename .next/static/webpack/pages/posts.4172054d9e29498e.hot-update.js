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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DataFetching; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n// import Link from \"next/link\"\n// function PostList({posts}){\n// return(\n//     <>\n//     <h1>List of posts</h1>\n//     {posts.map((post)=>{\n//         return(\n//             <div key={post.id}>\n//                 <Link href={`posts/${post.id}`} passHref> \n//                 <h1>{post.id}. {post.title}</h1>\n//                 </Link>\n//                 <hr/>\n//             </div>\n//         )\n//     })}\n//     </>\n// )\n// }\n// export default PostList\n// export async function getStaticProps(){\n//     const response= await fetch('https://jsonplaceholder.typicode.com/posts')\n//     const data = await response.json()\n//     return{\n//         props:{\n//             posts:data\n//         }\n//     }\n// }\n//......................................\n// import React, { useEffect, useState } from \"react\";\n// import axios from \"axios\";\n// export default function DataFetching(){\n//     const [post, setPost] = useState({})\n//     const [id, setId] = useState(1)\n//     useEffect(()=>{\n//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)\n//         .then(res=>{\n//             setPost(res.data)\n//         })\n//         .catch(err =>{\n//             console.log(err);\n//         },[id])\n//     })\n//     return(\n//         <div>\n//             <input type='text' value={id} onChange={e => setId(e.target.value)}></input>\n//             <div>{post.title}</div>\n//         </div>\n//     )\n// }\n//.....................................\n\nvar _s = $RefreshSig$();\n\n\nfunction DataFetching() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), post = ref[0], setPost = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), id = ref1[0], setId = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), click = ref2[0], setClick = ref2[1];\n    var handleClick = function() {\n        setClick(id);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts/\".concat(click)).then(function(res) {\n            setPost(res.data);\n        }).catch(function(err) {\n            console.log(err);\n        }, [\n            click\n        ]);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: id,\n                onChange: function(e) {\n                    return setId(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: handleClick,\n                children: \"Fetch Post\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this),\n            \"|\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                style: {\n                    backgroundColor: \"#0070f3\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 37\n            }, this),\n            \"|\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\darn\\\\Desktop\\\\next1\\\\nextfile\\\\pages\\\\posts\\\\index.js\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, this);\n};\n_s(DataFetching, \"86IkgnykZaF0N0ZmGwDOzcsTfa0=\");\n_c = DataFetching;\nvar _c;\n$RefreshReg$(_c, \"DataFetching\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRWYsSUFBSSxDQUFDNEIsSUFBSTs7Ozs7b0JBQU87Ozs7OztZQUNwQixDQUNUO0NBQ0o7R0EzQnVCN0IsWUFBWTtBQUFaQSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2luZGV4LmpzPzNiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbi8vIGZ1bmN0aW9uIFBvc3RMaXN0KHtwb3N0c30pe1xyXG4vLyByZXR1cm4oXHJcbi8vICAgICA8PlxyXG4vLyAgICAgPGgxPkxpc3Qgb2YgcG9zdHM8L2gxPlxyXG4vLyAgICAge3Bvc3RzLm1hcCgocG9zdCk9PntcclxuLy8gICAgICAgICByZXR1cm4oXHJcbi8vICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfT5cclxuLy8gICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Bwb3N0cy8ke3Bvc3QuaWR9YH0gcGFzc0hyZWY+IFxyXG4vLyAgICAgICAgICAgICAgICAgPGgxPntwb3N0LmlkfS4ge3Bvc3QudGl0bGV9PC9oMT5cclxuLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgIDxoci8+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICApXHJcbi8vICAgICB9KX1cclxuLy8gICAgIDwvPlxyXG4vLyApXHJcbi8vIH1cclxuLy8gZXhwb3J0IGRlZmF1bHQgUG9zdExpc3RcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2U9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICBwcm9wczp7XHJcbi8vICAgICAgICAgICAgIHBvc3RzOmRhdGFcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cclxuXHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFGZXRjaGluZygpe1xyXG4vLyAgICAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pXHJcbi8vICAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4vLyAgICAgdXNlRWZmZWN0KCgpPT57XHJcbi8vICAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtpZH1gKVxyXG4vLyAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4vLyAgICAgICAgICAgICBzZXRQb3N0KHJlcy5kYXRhKVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgLmNhdGNoKGVyciA9PntcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgICAgICB9LFtpZF0pXHJcbi8vICAgICB9KVxyXG4gICAgXHJcbi8vICAgICByZXR1cm4oXHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtpZH0gb25DaGFuZ2U9e2UgPT4gc2V0SWQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxyXG4vLyAgICAgICAgICAgICA8ZGl2Pntwb3N0LnRpdGxlfTwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFGZXRjaGluZygpe1xyXG4gICAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKDEpXHJcbiAgICBjb25zdCBbY2xpY2ssIHNldENsaWNrXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSgpPT57XHJcbiAgICAgICAgc2V0Q2xpY2soaWQpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtjbGlja31gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICBzZXRQb3N0KHJlcy5kYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9LFtjbGlja10pXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtpZH0gb25DaGFuZ2U9e2UgPT4gc2V0SWQoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RmV0Y2ggUG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2Pntwb3N0LnRpdGxlfTwvZGl2Pnw8aHIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMwMDcwZjMnfX0vPnxcclxuICAgICAgICAgICAgPGRpdj57cG9zdC5ib2R5fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkRhdGFGZXRjaGluZyIsInBvc3QiLCJzZXRQb3N0IiwiaWQiLCJzZXRJZCIsImNsaWNrIiwic2V0Q2xpY2siLCJoYW5kbGVDbGljayIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidGl0bGUiLCJociIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});
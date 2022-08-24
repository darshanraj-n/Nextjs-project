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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db.json */ \"(api)/./db.json\");\n// import {comments} from '../../data'\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(_db_json__WEBPACK_IMPORTED_MODULE_0__.comments) //.status - is a function to set status code, .json - sends json response\n        ;\n    } else if (req.method === \"POST\") {\n        const comment = req.body.enteredMeetupData;\n        const newComment = {\n            id: _db_json__WEBPACK_IMPORTED_MODULE_0__.comments.length + 1,\n            text: comment\n        };\n        // console.log(newComment);\n        _db_json__WEBPACK_IMPORTED_MODULE_0__.comments.push(newComment);\n        res.status(201).json(newComment);\n    // res.status(201).json({message:'meetup inserted'})\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNDQUFzQztBQUNBO0FBRXZCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTiw4Q0FBUSxDQUFDLENBQUUseUVBQXlFOztLQUM1RyxNQUNJLElBQUlFLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUM1QixNQUFNRyxPQUFPLEdBQUdMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxpQkFBaUI7UUFFMUMsTUFBTUMsVUFBVSxHQUFHO1lBQ2ZDLEVBQUUsRUFBRVgscURBQWUsR0FBQyxDQUFDO1lBQ3JCYSxJQUFJLEVBQUVOLE9BQU87U0FDaEI7UUFDRCwyQkFBMkI7UUFDM0JQLG1EQUFhLENBQUNVLFVBQVUsQ0FBQztRQUN6QlAsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ksVUFBVSxDQUFDO0lBQ2hDLG9EQUFvRDtLQUN2RDtDQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHR3by8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtjb21tZW50c30gZnJvbSAnLi4vLi4vZGF0YSdcclxuaW1wb3J0IHtjb21tZW50c30gZnJvbSAnLi4vLi4vZGIuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuIFxyXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY29tbWVudHMpICAvLy5zdGF0dXMgLSBpcyBhIGZ1bmN0aW9uIHRvIHNldCBzdGF0dXMgY29kZSwgLmpzb24gLSBzZW5kcyBqc29uIHJlc3BvbnNlXHJcbn1cclxuZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCBjb21tZW50ID0gcmVxLmJvZHkuZW50ZXJlZE1lZXR1cERhdGFcclxuICBcclxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgICAgaWQ6IGNvbW1lbnRzLmxlbmd0aCsxLFxyXG4gICAgICAgIHRleHQ6IGNvbW1lbnQsXHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdDb21tZW50KTtcclxuICAgIGNvbW1lbnRzLnB1c2gobmV3Q29tbWVudClcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld0NvbW1lbnQpXHJcbiAgICAvLyByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTonbWVldHVwIGluc2VydGVkJ30pXHJcbn1cclxuXHJcbn1cclxuICBcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNvbW1lbnRzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJjb21tZW50IiwiYm9keSIsImVudGVyZWRNZWV0dXBEYXRhIiwibmV3Q29tbWVudCIsImlkIiwibGVuZ3RoIiwidGV4dCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ }),

/***/ "(api)/./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/***/ ((module) => {

module.exports = JSON.parse('{"comments":[{"id":1,"title":"This is a first meetup","image":"https://media.istockphoto.com/photos/bangalore-or-bengaluru-picture-id1384436794?b=1&k=20&m=1384436794&s=170667a&w=0&h=FAK5T9qXpGhhNaP9phyaWwZ13n1swmtz7gtlXAvNlAY=","address":"Meetupstreet 5, 12345 Meetup City","description":"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"},{"id":2,"title":"This is a second meetup","image":"https://c4.wallpaperflare.com/wallpaper/35/554/469/arquitectura-bangalore-palace-wallpaper-preview.jpg","address":"Meetupstreet 5, 12345 Meetup City","description":"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"},{"id":3,"title":"This is a third meetup","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuYmHYRyYJHssUKQrDYG9Qj0cOET_RHHcAQ&usqp=CAU","address":"Meetupstreet 5, 12345 Meetup City","description":"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();
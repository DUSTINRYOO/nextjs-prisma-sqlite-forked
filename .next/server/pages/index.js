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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/client/useUser.ts":
/*!*******************************!*\
  !*** ./lib/client/useUser.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);\nswr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction useUser() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/appa\");\n    console.log(data);\n    console.log(error);\n    return {\n        data\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFFVixTQUFTQyxPQUFPLEdBQUc7SUFDaEMsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRSxHQUFHSCwrQ0FBTSxDQUFDLFdBQVcsQ0FBQztJQUMzQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO0lBQ2xCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7SUFFbkIsT0FBTztRQUFFRCxJQUFJO0tBQUUsQ0FBQztDQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vbGliL2NsaWVudC91c2VVc2VyLnRzP2VkODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvYXBwYVwiKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICByZXR1cm4geyBkYXRhIH07XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client/useUser.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client/useUser */ \"./lib/client/useUser.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Home = ()=>{\n    (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome Nico!!\"\n            }, void 0, false, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your email is: \"\n            }, void 0, false, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEI7QUFDa0I7QUFFNUMsTUFBTUUsSUFBSSxHQUFhLElBQU07SUFDM0JELCtEQUFPLEVBQUUsQ0FBQztJQUNWLHFCQUNFLDhEQUFDRSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxnQkFBYzs7Ozs7eUJBQUs7MEJBQ3ZCLDhEQUFDQyxJQUFFOzBCQUFDLGlCQUFlOzs7Ozt5QkFBTzs7Ozs7O2lCQUN0QixDQUNOO0NBQ0g7QUFDRCxpRUFBZUgsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1zcWxpdGUvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlVXNlciBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VVc2VyXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICB1c2VVc2VyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIE5pY28hITwvaDE+XG4gICAgICA8aDI+WW91ciBlbWFpbCBpczoge308L2gyPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VVc2VyIiwiSG9tZSIsImRpdiIsImgxIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
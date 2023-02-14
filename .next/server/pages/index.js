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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction useUser() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/me\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && !data.ok) {\n            router.push(\"/create-account\");\n        }\n        if (error) {\n            router.push(\"/create-account\");\n        }\n    }, [\n        error\n    ]);\n    return {\n        user: data?.user,\n        isLoading: error\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDVDtBQUVWLFNBQVNHLE9BQU8sR0FBRztJQUNoQyxNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdILCtDQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3pDLE1BQU1JLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQkMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSUcsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ0csRUFBRSxFQUFFO1lBQ3BCRCxNQUFNLENBQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSUgsS0FBSyxFQUFFO1lBQ1RDLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDaEM7S0FDRixFQUFFO1FBQUNILEtBQUs7S0FBQyxDQUFDLENBQUM7SUFDWixPQUFPO1FBQUVJLElBQUksRUFBRUwsSUFBSSxFQUFFSyxJQUFJO1FBQUVDLFNBQVMsRUFBRUwsS0FBSztLQUFFLENBQUM7Q0FDL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXNxbGl0ZS8uL2xpYi9jbGllbnQvdXNlVXNlci50cz9lZDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXNlcigpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9tZVwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgJiYgIWRhdGEub2spIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2NyZWF0ZS1hY2NvdW50XCIpO1xuICAgIH1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2NyZWF0ZS1hY2NvdW50XCIpO1xuICAgIH1cbiAgfSwgW2Vycm9yXSk7XG4gIHJldHVybiB7IHVzZXI6IGRhdGE/LnVzZXIsIGlzTG9hZGluZzogZXJyb3IgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJ1c2VVc2VyIiwiZGF0YSIsImVycm9yIiwicm91dGVyIiwib2siLCJwdXNoIiwidXNlciIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/client/useUser.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client/useUser */ \"./lib/client/useUser.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Home = ()=>{\n    const { user  } = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Welcome \",\n                    user?.name,\n                    \"!!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Your email is: \",\n                    user?.email\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEI7QUFDa0I7QUFFNUMsTUFBTUUsSUFBSSxHQUFhLElBQU07SUFDM0IsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR0YsK0RBQU8sRUFBRTtJQUMxQixxQkFDRSw4REFBQ0csS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7O29CQUFDLFVBQVE7b0JBQUNGLElBQUksRUFBRUcsSUFBSTtvQkFBQyxJQUFFOzs7Ozs7eUJBQUs7MEJBQy9CLDhEQUFDQyxJQUFFOztvQkFBQyxpQkFBZTtvQkFBQ0osSUFBSSxFQUFFSyxLQUFLOzs7Ozs7eUJBQU07Ozs7OztpQkFDakMsQ0FDTjtDQUNIO0FBQ0QsaUVBQWVOLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlVXNlclwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHt1c2VyPy5uYW1lfSEhPC9oMT5cbiAgICAgIDxoMj5Zb3VyIGVtYWlsIGlzOiB7dXNlcj8uZW1haWx9PC9oMj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVXNlciIsIkhvbWUiLCJ1c2VyIiwiZGl2IiwiaDEiLCJuYW1lIiwiaDIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
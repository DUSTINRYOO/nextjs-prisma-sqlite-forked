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
exports.id = "pages/create-account";
exports.ids = ["pages/create-account"];
exports.modules = {

/***/ "./pages/create-account/index.tsx":
/*!****************************************!*\
  !*** ./pages/create-account/index.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst createAccount = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const onValid = (data)=>{\n        fetch(\"/api/create-account\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        router.push(\"/log-in\");\n    };\n    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const onSubmit = async (data)=>onValid(data)\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        ...register(\"name\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"This field is required\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Email: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        ...register(\"email\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"This field is required\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 26\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAccount);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0M7QUFDaUI7QUFPekQsTUFBTUUsYUFBYSxHQUFhLElBQU07SUFDcEMsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBRTFCLE1BQU1JLE9BQU8sR0FBRyxDQUFDQyxJQUFnQixHQUFLO1FBQ3BDQyxLQUFLLENBQUMscUJBQXFCLEVBQUU7WUFDM0JDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNMLElBQUksQ0FBQztZQUMxQk0sT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7U0FDRixDQUFDLENBQUM7UUFDSFIsTUFBTSxDQUFDUyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEI7SUFDRCxNQUFNLEVBQ0pDLFFBQVEsR0FDUkMsWUFBWSxHQUNaQyxTQUFTLEVBQUUsRUFBRUMsTUFBTSxHQUFFLEtBQ3RCLEdBQUdmLHdEQUFPLEVBQWM7SUFDekIsTUFBTWdCLFFBQVEsR0FBOEIsT0FBT1osSUFBSSxHQUFLRCxPQUFPLENBQUNDLElBQUksQ0FBQztJQUFDO0lBRTFFLHFCQUNFLDhEQUFDYSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxnQkFBYzs7Ozs7eUJBQUs7MEJBQ3ZCLDhEQUFDQyxNQUFJO2dCQUFDSCxRQUFRLEVBQUVILFlBQVksQ0FBQ0csUUFBUSxDQUFDOztrQ0FDcEMsOERBQUNJLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxNQUFNO2tDQUFDLFFBQU07Ozs7O2lDQUFRO2tDQUNwQyw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUUsR0FBR1gsUUFBUSxDQUFDLE1BQU0sRUFBRTs0QkFBRVksUUFBUSxFQUFFLElBQUk7eUJBQUUsQ0FBQzs7Ozs7aUNBQUk7b0JBQzlEVCxNQUFNLENBQUNVLElBQUksa0JBQUksOERBQUNDLE1BQUk7a0NBQUMsd0JBQXNCOzs7OztpQ0FBTztrQ0FDbkQsOERBQUNOLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxNQUFNO2tDQUFDLFNBQU87Ozs7O2lDQUFRO2tDQUNyQyw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE9BQU87d0JBQUUsR0FBR1gsUUFBUSxDQUFDLE9BQU8sRUFBRTs0QkFBRVksUUFBUSxFQUFFLElBQUk7eUJBQUUsQ0FBQzs7Ozs7aUNBQUk7b0JBQ2hFVCxNQUFNLENBQUNZLEtBQUssa0JBQUksOERBQUNELE1BQUk7a0NBQUMsd0JBQXNCOzs7OztpQ0FBTztrQ0FDcEQsOERBQUNKLE9BQUs7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDSyxLQUFLLEVBQUMsZ0JBQWdCOzs7OztpQ0FBRzs7Ozs7O3lCQUN6Qzs7Ozs7O2lCQUNILENBQ047Q0FDSDtBQUVELGlFQUFlM0IsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1zcWxpdGUvLi9wYWdlcy9jcmVhdGUtYWNjb3VudC9pbmRleC50c3g/NjBkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRm9ybSwgU3VibWl0SGFuZGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxudHlwZSBDcmVhdGVGb3JtID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBjcmVhdGVBY2NvdW50OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgb25WYWxpZCA9IChkYXRhOiBDcmVhdGVGb3JtKSA9PiB7XG4gICAgZmV0Y2goXCIvYXBpL2NyZWF0ZS1hY2NvdW50XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJvdXRlci5wdXNoKFwiL2xvZy1pblwiKTtcbiAgfTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtPENyZWF0ZUZvcm0+KCk7XG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPENyZWF0ZUZvcm0+ID0gYXN5bmMgKGRhdGEpID0+IG9uVmFsaWQoZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNyZWF0ZSBBY2NvdW50PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnJlZ2lzdGVyKFwibmFtZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSAvPlxuICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgPHNwYW4+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj59XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cbiAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8c3Bhbj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9zcGFuPn1cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNyZWF0ZSBBY2NvdW50XCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFjY291bnQ7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRm9ybSIsImNyZWF0ZUFjY291bnQiLCJyb3V0ZXIiLCJvblZhbGlkIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicHVzaCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwib25TdWJtaXQiLCJkaXYiLCJoMSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsIm5hbWUiLCJzcGFuIiwiZW1haWwiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create-account/index.tsx\n");

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

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/create-account/index.tsx"));
module.exports = __webpack_exports__;

})();
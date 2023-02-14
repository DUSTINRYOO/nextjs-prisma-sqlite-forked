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
exports.id = "pages/log-in";
exports.ids = ["pages/log-in"];
exports.modules = {

/***/ "./pages/log-in/index.tsx":
/*!********************************!*\
  !*** ./pages/log-in/index.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst logIn = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const onValid = async (data)=>{\n        const verified = await fetch(\"/api/log-in\", {\n            method: \"POST\",\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>response.json().catch(()=>{\n                return response.ok;\n            })\n        );\n        if (!verified.ok) {\n            resetField(\"email\");\n            alert(\"Email doesn't exist\");\n            return router.replace(\"/log-in\");\n        } else {\n            router.replace(\"/\");\n        }\n    };\n    const { register , handleSubmit , resetField , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const onSubmit = (data)=>onValid(data)\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/log-in/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Email: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/log-in/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        ...register(\"email\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/log-in/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"This field is required\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/log-in/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 26\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/log-in/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/log-in/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/log-in/index.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logIn);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2ctaW4vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ2lCO0FBTXpELE1BQU1FLEtBQUssR0FBYSxJQUFNO0lBQzVCLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUUxQixNQUFNSSxPQUFPLEdBQUcsT0FBT0MsSUFBZSxHQUFLO1FBQ3pDLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQzFDQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixJQUFJLENBQUM7WUFDMUJPLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1NBQ0YsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUNmQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUMsSUFBTTtnQkFDMUIsT0FBT0YsUUFBUSxDQUFDRyxFQUFFLENBQUM7YUFDcEIsQ0FBQztRQUFBLENBQ0g7UUFFRCxJQUFJLENBQUNYLFFBQVEsQ0FBQ1csRUFBRSxFQUFFO1lBQ2hCQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEJDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdCLE9BQU9oQixNQUFNLENBQUNpQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEMsTUFBTTtZQUNMakIsTUFBTSxDQUFDaUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxNQUFNLEVBQ0pDLFFBQVEsR0FDUkMsWUFBWSxHQUNaSixVQUFVLEdBQ1ZLLFNBQVMsRUFBRSxFQUFFQyxNQUFNLEdBQUUsS0FDdEIsR0FBR3ZCLHdEQUFPLEVBQWE7SUFDeEIsTUFBTXdCLFFBQVEsR0FBNkIsQ0FBQ3BCLElBQUksR0FBS0QsT0FBTyxDQUFDQyxJQUFJLENBQUM7SUFBQztJQUVuRSxxQkFDRSw4REFBQ3FCLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLE9BQUs7Ozs7O3lCQUFLOzBCQUNkLDhEQUFDQyxNQUFJO2dCQUFDSCxRQUFRLEVBQUVILFlBQVksQ0FBQ0csUUFBUSxDQUFDOztrQ0FDcEMsOERBQUNJLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxNQUFNO2tDQUFDLFNBQU87Ozs7O2lDQUFRO2tDQUNyQyw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE9BQU87d0JBQUUsR0FBR1gsUUFBUSxDQUFDLE9BQU8sRUFBRTs0QkFBRVksUUFBUSxFQUFFLElBQUk7eUJBQUUsQ0FBQzs7Ozs7aUNBQUk7b0JBQ2hFVCxNQUFNLENBQUNVLEtBQUssa0JBQUksOERBQUNDLE1BQUk7a0NBQUMsd0JBQXNCOzs7OztpQ0FBTztrQ0FDcEQsOERBQUNKLE9BQUs7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDSSxLQUFLLEVBQUMsT0FBTzs7Ozs7aUNBQUc7Ozs7Ozt5QkFDaEM7Ozs7OztpQkFDSCxDQUNOO0NBQ0g7QUFFRCxpRUFBZWxDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vcGFnZXMvbG9nLWluL2luZGV4LnRzeD80MjU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTdWJtaXRIYW5kbGVyLCB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG50eXBlIGxvZ2luRm9ybSA9IHtcbiAgZW1haWw6IHN0cmluZztcbn07XG5cbmNvbnN0IGxvZ0luOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgb25WYWxpZCA9IGFzeW5jIChkYXRhOiBsb2dpbkZvcm0pID0+IHtcbiAgICBjb25zdCB2ZXJpZmllZCA9IGF3YWl0IGZldGNoKFwiL2FwaS9sb2ctaW5cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+XG4gICAgICByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2s7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoIXZlcmlmaWVkLm9rKSB7XG4gICAgICByZXNldEZpZWxkKFwiZW1haWxcIik7XG4gICAgICBhbGVydChcIkVtYWlsIGRvZXNuJ3QgZXhpc3RcIik7XG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UoXCIvbG9nLWluXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XG4gICAgfVxuICB9O1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlc2V0RmllbGQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxsb2dpbkZvcm0+KCk7XG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPGxvZ2luRm9ybT4gPSAoZGF0YSkgPT4gb25WYWxpZChkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5FbWFpbDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IC8+XG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPHNwYW4+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj59XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dJbjtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwibG9nSW4iLCJyb3V0ZXIiLCJvblZhbGlkIiwiZGF0YSIsInZlcmlmaWVkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJvayIsInJlc2V0RmllbGQiLCJhbGVydCIsInJlcGxhY2UiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm9uU3VibWl0IiwiZGl2IiwiaDEiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJlbWFpbCIsInNwYW4iLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/log-in/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/log-in/index.tsx"));
module.exports = __webpack_exports__;

})();
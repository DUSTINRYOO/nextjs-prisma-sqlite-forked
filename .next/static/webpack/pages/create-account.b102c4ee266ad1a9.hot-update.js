"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-account",{

/***/ "./pages/create-account/index.tsx":
/*!****************************************!*\
  !*** ./pages/create-account/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar createAccount = function() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, watch = ref.watch, errors = ref.formState.errors;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    console.log(watch(\"name\")); // watch input value by passing the name of it\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"text\"\n                    }, register(\"name\", {\n                        required: true\n                    })), void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"This field is required\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Email: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"email\"\n                    }, register(\"email\", {\n                        required: true\n                    })), void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"This field is required\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 26\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"email\",\n                        type: \"email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dustin/dustins/nextjs-prisma-sqlite-forked/pages/create-account/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(createAccount, \"+LcrTzTax1ndAePIwZBfPwbnP68=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAccount);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUQ7O0FBT3pELElBQU1DLGFBQWEsR0FBYSxXQUFNOztJQUNwQyxJQUtJRCxHQUFpQixHQUFqQkEsd0RBQU8sRUFBVSxFQUpuQkUsUUFBUSxHQUlORixHQUFpQixDQUpuQkUsUUFBUSxFQUNSQyxZQUFZLEdBR1ZILEdBQWlCLENBSG5CRyxZQUFZLEVBQ1pDLEtBQUssR0FFSEosR0FBaUIsQ0FGbkJJLEtBQUssRUFDTEMsTUFBbUIsR0FDakJMLEdBQWlCLENBRG5CSyxTQUFTLENBQUlDLE1BQU07SUFFckIsSUFBTUMsUUFBUSxHQUEwQixTQUFDQyxJQUFJO2VBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7S0FBQTtJQUVuRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsOENBQThDO0lBQzFFLHFCQUNFLDhEQUFDTyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxnQkFBYzs7Ozs7cUJBQUs7MEJBQ3ZCLDhEQUFDQyxNQUFJO2dCQUFDTixRQUFRLEVBQUVKLFlBQVksQ0FBQ0ksUUFBUSxDQUFDOztrQ0FDcEMsOERBQUNPLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxNQUFNO2tDQUFDLFFBQU07Ozs7OzZCQUFRO2tDQUNwQyw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07dUJBQUtmLFFBQVEsQ0FBQyxNQUFNLEVBQUU7d0JBQUVnQixRQUFRLEVBQUUsSUFBSTtxQkFBRSxDQUFDOzs7OzZCQUFJO29CQUM5RFosTUFBTSxDQUFDYSxJQUFJLGtCQUFJLDhEQUFDQyxNQUFJO2tDQUFDLHdCQUFzQjs7Ozs7NkJBQU87a0NBQ25ELDhEQUFDTixPQUFLO3dCQUFDQyxPQUFPLEVBQUMsTUFBTTtrQ0FBQyxTQUFPOzs7Ozs2QkFBUTtrQ0FDckMsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxPQUFPO3VCQUFLZixRQUFRLENBQUMsT0FBTyxFQUFFO3dCQUFFZ0IsUUFBUSxFQUFFLElBQUk7cUJBQUUsQ0FBQzs7Ozs2QkFBSTtvQkFDaEVaLE1BQU0sQ0FBQ2UsS0FBSyxrQkFBSSw4REFBQ0QsTUFBSTtrQ0FBQyx3QkFBc0I7Ozs7OzZCQUFPO2tDQUNwRCw4REFBQ0osT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7d0JBQUNLLEtBQUssRUFBQyxnQkFBZ0I7Ozs7OzZCQUFHOzs7Ozs7cUJBQ3pDOzBCQUNQLDhEQUFDVCxNQUFJOztrQ0FDSCw4REFBQ0MsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLE1BQU07a0NBQUMsT0FBSzs7Ozs7NkJBQVE7a0NBQ25DLDhEQUFDQyxPQUFLO3dCQUFDTyxFQUFFLEVBQUMsTUFBTTt3QkFBQ04sSUFBSSxFQUFDLE1BQU07Ozs7OzZCQUFTO2tDQUNyQyw4REFBQ0gsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLE9BQU87a0NBQUMsUUFBTTs7Ozs7NkJBQVE7a0NBQ3JDLDhEQUFDQyxPQUFLO3dCQUFDTyxFQUFFLEVBQUMsT0FBTzt3QkFBQ04sSUFBSSxFQUFDLE9BQU87Ozs7OzZCQUFTO2tDQUN2Qyw4REFBQ08sUUFBTTtrQ0FBQyxnQkFBYzs7Ozs7NkJBQVM7Ozs7OztxQkFDMUI7Ozs7OzthQUNILENBQ047Q0FDSDtHQS9CS3ZCLGFBQWE7O1FBTWJELG9EQUFPOzs7QUEyQmIsK0RBQWVDLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtYWNjb3VudC9pbmRleC50c3g/NjBkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbnR5cGUgSW5wdXRzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBjcmVhdGVBY2NvdW50OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtPElucHV0cz4oKTtcbiAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8SW5wdXRzPiA9IChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcblxuICBjb25zb2xlLmxvZyh3YXRjaChcIm5hbWVcIikpOyAvLyB3YXRjaCBpbnB1dCB2YWx1ZSBieSBwYXNzaW5nIHRoZSBuYW1lIG9mIGl0XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DcmVhdGUgQWNjb3VudDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5yZWdpc3RlcihcIm5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cbiAgICAgICAge2Vycm9ycy5uYW1lICYmIDxzcGFuPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L3NwYW4+fVxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5FbWFpbDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IC8+XG4gICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPHNwYW4+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj59XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGUgQWNjb3VudFwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIj48L2lucHV0PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIj48L2lucHV0PlxuICAgICAgICA8YnV0dG9uPkNyZWF0ZSBBY2NvdW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBY2NvdW50O1xuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJjcmVhdGVBY2NvdW50IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsIm5hbWUiLCJzcGFuIiwiZW1haWwiLCJ2YWx1ZSIsImlkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-account/index.tsx\n");

/***/ })

});
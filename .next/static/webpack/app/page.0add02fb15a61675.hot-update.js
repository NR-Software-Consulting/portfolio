"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/skills/skills.tsx":
/*!******************************************!*\
  !*** ./app/components/skills/skills.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"(app-client)/./app/components/skills/styles.ts\");\n/* harmony import */ var _app_jsonData_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/jsonData/data */ \"(app-client)/./app/jsonData/data.ts\");\n/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ramonak/react-progress-bar */ \"(app-client)/./node_modules/@ramonak/react-progress-bar/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Skills = ()=>{\n    _s();\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const calculatedProgress = 20 / 100 * 100;\n        setProgress(calculatedProgress);\n    }, [\n        value\n    ]);\n    const barStyle = {\n        width: \"\".concat(progress, \"%\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.MainBox,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                container: true,\n                item: true,\n                xs: 12,\n                sm: 12,\n                md: 12,\n                lg: 12,\n                sx: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.MainGrid,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        item: true,\n                        xs: 12,\n                        sm: 12,\n                        md: 12,\n                        lg: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            fontSize: \"28px\",\n                            children: \"Skills:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    _app_jsonData_data__WEBPACK_IMPORTED_MODULE_3__.SkillsData.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            item: true,\n                            xs: 12,\n                            sx: {\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    item: true,\n                                    xs: 1.5,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        sx: {\n                                            color: \"grey\"\n                                        },\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"progress-bar\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bar\",\n                                            style: barStyle\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"percentage\",\n                                            children: [\n                                                progress.toFixed(2),\n                                                \"%\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    completed: item.rating,\n                                    maxCompleted: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/portfolio/app/components/skills/skills.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Skills, \"ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=\");\n_c = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNkO0FBQ2pCO0FBQ2U7QUFDSztBQUV0RCxNQUFNVSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxxQkFBcUIsS0FBTSxNQUFPO1FBQ3hDRCxZQUFZQztJQUNkLEdBQUc7UUFBQ0M7S0FBTTtJQUVWLE1BQU1DLFdBQVc7UUFDZkMsT0FBTyxHQUFZLE9BQVRMLFVBQVM7SUFDckI7SUFDQSxxQkFDRSw4REFBQ1gscURBQUdBO1FBQUNpQixJQUFJVixtREFBY1c7a0JBQ3JCLDRFQUFDakIscURBQVNBO3NCQUNSLDRFQUFDQyxxREFBSUE7Z0JBQ0hpQixTQUFTO2dCQUNUQyxJQUFJO2dCQUNKQyxJQUFJO2dCQUNKQyxJQUFJO2dCQUNKQyxJQUFJO2dCQUNKQyxJQUFJO2dCQUNKUCxJQUFJVixvREFBZWtCOztrQ0FFbkIsOERBQUN2QixxREFBSUE7d0JBQUNrQixJQUFJO3dCQUFDQyxJQUFJO3dCQUFJQyxJQUFJO3dCQUFJQyxJQUFJO3dCQUFJQyxJQUFJO2tDQUNyQyw0RUFBQ3JCLHFEQUFVQTs0QkFBQ3VCLFVBQVU7c0NBQVE7Ozs7Ozs7Ozs7O29CQUUvQmxCLDhEQUFjbUIsQ0FBQyxDQUFDUDt3QkFDZixxQkFDRSw4REFBQ2xCLHFEQUFJQTs0QkFBQ2tCLElBQUk7NEJBQUNDLElBQUk7NEJBQUlKLElBQUk7Z0NBQUVXLFNBQVM7NEJBQU87OzhDQUN2Qyw4REFBQzFCLHFEQUFJQTtvQ0FBQ2tCLElBQUk7b0NBQUNDLElBQUk7OENBQ2IsNEVBQUNsQixxREFBVUE7d0NBQUNjLElBQUk7NENBQUVZLE9BQU87d0NBQU87a0RBQUlULEtBQUtVOzs7Ozs7Ozs7Ozs4Q0FFM0MsOERBQUNDO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7NENBQU1DLE9BQU9sQjs7Ozs7O3NEQUM1Qiw4REFBQ21COzRDQUFLRixXQUFVOztnREFBY3JCLFNBQVN3QixRQUFRO2dEQUFHOzs7Ozs7Ozs7Ozs7OzhDQUVwRCw4REFBQzFCLG1FQUFXQTtvQ0FBQzJCLFdBQVdoQixLQUFLaUI7b0NBQVFDLGNBQWM7Ozs7Ozs7Ozs7OztvQkFHekQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0EzQ001QjtLQUFBQTtBQTZDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLnRzeD8xYWY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IFNraWxsc0RhdGEgfSBmcm9tIFwiQC9hcHAvanNvbkRhdGEvZGF0YVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCJAcmFtb25hay9yZWFjdC1wcm9ncmVzcy1iYXJcIjtcblxuY29uc3QgU2tpbGxzID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRQcm9ncmVzcyA9ICgyMCAvIDEwMCkgKiAxMDA7XG4gICAgc2V0UHJvZ3Jlc3MoY2FsY3VsYXRlZFByb2dyZXNzKTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgY29uc3QgYmFyU3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke3Byb2dyZXNzfSVgLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5NYWluQm94fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgaXRlbVxuICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICBzbT17MTJ9XG4gICAgICAgICAgbWQ9ezEyfVxuICAgICAgICAgIGxnPXsxMn1cbiAgICAgICAgICBzeD17c3R5bGVzLk1haW5HcmlkfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZm9udFNpemU9e1wiMjhweFwifT5Ta2lsbHM6PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICB7U2tpbGxzRGF0YS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEuNX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogXCJncmV5XCIgfX0+e2l0ZW0ubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiIHN0eWxlPXtiYXJTdHlsZX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZXJjZW50YWdlXCI+e3Byb2dyZXNzLnRvRml4ZWQoMil9JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXIgY29tcGxldGVkPXtpdGVtLnJhdGluZ30gbWF4Q29tcGxldGVkPXsxMDB9IC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sIm5hbWVzIjpbIkJveCIsIkNvbnRhaW5lciIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNraWxsc0RhdGEiLCJQcm9ncmVzc0JhciIsIlNraWxscyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJjYWxjdWxhdGVkUHJvZ3Jlc3MiLCJ2YWx1ZSIsImJhclN0eWxlIiwid2lkdGgiLCJzeCIsIk1haW5Cb3giLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJzbSIsIm1kIiwibGciLCJNYWluR3JpZCIsImZvbnRTaXplIiwibWFwIiwiZGlzcGxheSIsImNvbG9yIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwic3BhbiIsInRvRml4ZWQiLCJjb21wbGV0ZWQiLCJyYXRpbmciLCJtYXhDb21wbGV0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/skills/skills.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add",{

/***/ "./pages/add.js":
/*!**********************!*\
  !*** ./pages/add.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/lib/utils */ \"./node_modules/ethers/lib/utils.js\");\n/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar addContract = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Tokens = ref[0], setTokens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref1[0], setAreaWA = ref1[1];\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        {\n            key: \"B\",\n            text: \"BSC\",\n            value: \"bsc\"\n        },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, disperseSinger, wallets, wallet, amount, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        disperseSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        console.log(\"wallets\", wallets);\n                        wallet = [];\n                        amount = [];\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            //console.log(\"t1\",(t1[0]));\n                            var v1 = t1[1] * Math.pow(10, 18);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                        //console.log(\"\",t1,v1);\n                        });\n                        wallet = (0,ethers_lib_utils__WEBPACK_IMPORTED_MODULE_6__.hexConcat)(wallet);\n                        console.log(\"wallet:\", wallet, \"amount:\", amount);\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return disperseSinger[\"disperseEther(address[],uint256[])\"](wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        console.log(\"response\", response);\n                        _ctx.next = 20;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(\"error\", _ctx.t0);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n            onSubmit: handleSublit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Group, {\n                    widths: \"equal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input,\n                            label: \"Token\",\n                            value: Tokens,\n                            placeholder: \"Tokens Address\",\n                            onChange: function(event) {\n                                return setTokens(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.TextArea, {\n                            label: \"Wallets\",\n                            value: AreaWA,\n                            placeholder: \"Walets&Tokens\",\n                            onChange: function(event) {\n                                return setAreaWA(event.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Select,\n                            label: \"Chain\",\n                            options: options,\n                            placeholder: \"Chain\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    primary: true,\n                    children: \"Send\"\n                }, void 0, false, {\n                    fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/add.js\",\n        lineNumber: 64,\n        columnNumber: 14\n    }, _this);\n};\n_s(addContract, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (addContract);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIseURBQVU7b0JBQUN1QyxNQUFNLEVBQUMsT0FBTzs7c0NBQ3hCLDhEQUFDdkMseURBQVU7NEJBQUN5QyxPQUFPLEVBQUV4QyxvREFBSzs0QkFBRXlDLEtBQUssRUFBQyxPQUFPOzRCQUFDM0IsS0FBSyxFQUFFUCxNQUFNOzRCQUFFbUMsV0FBVyxFQUFDLGdCQUFnQjs0QkFBQ0MsUUFBUSxFQUFJM0IsU0FBQUEsS0FBSzt1Q0FBRVIsU0FBUyxDQUFDUSxLQUFLLENBQUM0QixNQUFNLENBQUM5QixLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFJO3NDQUMxSSw4REFBQ1osdURBQVE7NEJBQUN1QyxLQUFLLEVBQUMsU0FBUzs0QkFBQzNCLEtBQUssRUFBRUwsTUFBTTs0QkFBRWlDLFdBQVcsRUFBQyxlQUFlQzs0QkFBQUEsUUFBUSxFQUFJM0IsU0FBQUEsS0FBSzt1Q0FBRU4sU0FBUyxDQUFDTSxLQUFLLENBQUM0QixNQUFNLENBQUM5QixLQUFLLENBQUM7NkJBQUE7Ozs7O2lDQUFJO3NDQUN4SCw4REFBQ2YseURBQVU7NEJBQUN5QyxPQUFPLEVBQUV2QyxxREFBTTs0QkFBRXdDLEtBQUssRUFBQyxPQUFPOzRCQUFDOUIsT0FBTyxFQUFFQSxPQUFPOzRCQUFFK0IsV0FBVyxFQUFDLE9BQU87Ozs7O2lDQUFFOzs7Ozs7eUJBRXZFOzhCQUNiLDhEQUFDNUMscURBQU07b0JBQUMrQyxPQUFPOzhCQUFDLE1BQUk7Ozs7O3lCQUFTOzs7Ozs7aUJBQ3RCOzs7OzthQUdGLENBQUc7Q0FDZjtHQXJFS3ZDLFdBQVc7QUF1RWpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkLmpzP2M5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGV4Q29uY2F0LCBpc0hleFN0cmluZyB9IGZyb20gXCJldGhlcnMvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBkaXNwZXJzZSBmcm9tIFwiLi4vZGlzcGVyc2VcIjtcbmltcG9ydCBwcm92aWRlciBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcblxuY29uc3QgYWRkQ29udHJhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW1Rva2VucyxzZXRUb2tlbnNdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW0FyZWFXQSxzZXRBcmVhV0FdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIHsga2V5OiAnRScsIHRleHQ6ICdFVEgnLCB2YWx1ZTogJ2V0aCcgfSxcbiAgICAgICAgeyBrZXk6ICdCJywgdGV4dDogJ0JTQycsIHZhbHVlOiAnYnNjJyB9LFxuICAgICAgICB7IGtleTogJ00nLCB0ZXh0OiAnTUFUSUMnLCB2YWx1ZTogJ21hdGljJyB9LFxuICAgICAgXVxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJsaXQgPWFzeW5jIChldmVudCkgPT57XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvdmlkZXIuZnVuY3Rpb25zKTtcbiAgICAgICAgY29uc3QgZGlzcGVyc2VTaW5nZXIgPSBkaXNwZXJzZS5jb25uZWN0KHNpbmdlcik7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGlzcGVyc2VTaW5nZXIuZnVuY3Rpb25zKTtcblxuICAgICAgICBjb25zdCB3YWxsZXRzID0gQXJlYVdBLnNwbGl0KCdcXG4nKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FsbGV0c1wiLHdhbGxldHMpO1xuICAgICAgICAgY29uc3Qgd2FsbGV0PVtdO1xuICAgICAgICAgY29uc3QgYW1vdW50PVtdO1xuICAgICAgICAgd2FsbGV0cy5mb3JFYWNoKHcxID0+IHtcbiAgICAgICAgICAgICBjb25zdCB0MT13MS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0MVwiLCh0MVswXSkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgY29uc3QgdjEgPXQxWzFdKjEwKioxODtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIHdhbGxldC5wdXNoKHQxWzBdKTtcbiAgICAgICAgICAgICBhbW91bnQucHVzaCgodjEpLnRvU3RyaW5nKCkpO1xuICBcbiAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiXCIsdDEsdjEpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICB3YWxsZXQ9aGV4Q29uY2F0KHdhbGxldCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWxsZXQ6XCIsd2FsbGV0LCBcImFtb3VudDpcIixhbW91bnQpO1xuICAgICAgICBcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwZXJzZVNpbmdlcltcImRpc3BlcnNlRXRoZXIoYWRkcmVzc1tdLHVpbnQyNTZbXSlcIl0od2FsbGV0LGFtb3VudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIscmVzcG9uc2UpO1xuXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3IpXG4gICAgICAgIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yXCIsZXJyb3IpO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuICAgIHJldHVybiAoIDxMYXlvdXQ+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibGl0fT5cbiAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2Vuc30gcGxhY2Vob2xkZXI9J1Rva2VucyBBZGRyZXNzJyBvbkNoYW5nZSA9IHtldmVudD0+c2V0VG9rZW5zKGV2ZW50LnRhcmdldC52YWx1ZSkgfS8+XG4gICAgICAgICAgPFRleHRBcmVhIGxhYmVsPSdXYWxsZXRzJyB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzJlRva2VucydvbkNoYW5nZSA9IHtldmVudD0+c2V0QXJlYVdBKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17U2VsZWN0fSBsYWJlbD0nQ2hhaW4nIG9wdGlvbnM9e29wdGlvbnN9IHBsYWNlaG9sZGVyPSdDaGFpbicvPlxuICAgICAgICAgIFxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5TZW5kPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cblxuXG4gICAgPC9MYXlvdXQ+ICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBhZGRDb250cmFjdDsiXSwibmFtZXMiOlsiaGV4Q29uY2F0IiwiaXNIZXhTdHJpbmciLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIlNlbGVjdCIsIlRleHRBcmVhIiwiTGF5b3V0IiwiZGlzcGVyc2UiLCJwcm92aWRlciIsImFkZENvbnRyYWN0IiwiVG9rZW5zIiwic2V0VG9rZW5zIiwiQXJlYVdBIiwic2V0QXJlYVdBIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsImhhbmRsZVN1YmxpdCIsImV2ZW50Iiwic2luZ2VyIiwiZGlzcGVyc2VTaW5nZXIiLCJ3YWxsZXRzIiwid2FsbGV0IiwiYW1vdW50IiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsImdldFNpZ25lciIsImNvbm5lY3QiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidzEiLCJ0MSIsInYxIiwicHVzaCIsInRvU3RyaW5nIiwiZXJyb3IiLCJvblN1Ym1pdCIsIkdyb3VwIiwid2lkdGhzIiwiRmllbGQiLCJjb250cm9sIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/add.js\n");

/***/ })

});
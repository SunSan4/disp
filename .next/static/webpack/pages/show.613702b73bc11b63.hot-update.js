"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/show",{

/***/ "./pages/show.js":
/*!***********************!*\
  !*** ./pages/show.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _utils_try_show__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/try_show */ \"./utils/try_show.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar show = function() {\n    _s();\n    var addressRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref[0], setErrorMessage = ref[1];\n    var walletsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), NameD = ref1[0], setName = ref1[1];\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var address, wallets, wallet, value, singer, disperseSinger, abi, contract, constractsinger, show1;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        address = addressRef.current.value;\n                        wallets = walletsRef.current.value.toString().split(\"\\n\");\n                        wallet = [];\n                        value = [];\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_7__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            value.push(v1.toString());\n                        // console.log(\"\");\n                        });\n                        // toString().replace(/ /g, ',')];\n                        // wallets = wallets.includes(\"0x\");\n                        console.log(\"address:\", address);\n                        console.log(\"wallet:\", wallet, \"value:\", value);\n                        //сброс ошибки\n                        setErrorMessage();\n                        if (address) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        setErrorMessage(\"\\u041F\\u0443\\u0441\\u0442\\u043E\\u0439 \\u0430\\u0434\\u0440\\u0435\\u0441\");\n                        return _ctx.abrupt(\"return\");\n                    case 12:\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getSigner();\n                        disperseSinger = _disperse__WEBPACK_IMPORTED_MODULE_5__[\"default\"].connect(singer);\n                        abi = [\n                            \"function approve(address _spender, uint256 _value) public returns (bool success)\"\n                        ];\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(address, abi, _provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n                        constractsinger = contract.connect(singer);\n                        console.log(\"constractsinger.f\", constractsinger.function);\n                        _ctx.next = 20;\n                        return constractsinger.approve(_disperse__WEBPACK_IMPORTED_MODULE_5__[\"default\"].address, 10 * Math.pow(10, 18));\n                    case 20:\n                        _ctx.prev = 20;\n                        _ctx.next = 23;\n                        return (0,_utils_try_show__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(address);\n                    case 23:\n                        show1 = _ctx.sent;\n                        setName(show1.NameD);\n                        //const response = await disperseSinger.disperseToken(address,wallet,amount);\n                        console.log(\"response\", response);\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 33;\n                        break;\n                    case 29:\n                        _ctx.prev = 29;\n                        _ctx.t0 = _ctx[\"catch\"](20);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 33:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    20,\n                    29\n                ]\n            ]);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                error: !!erroMessage,\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"\\u0420\\u0430\\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0431\\u043E\\u0440\\u043E\\u043C(\\u043F\\u0440\\u043E\\u0441\\u0442\\u0430\\u044F)\"\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                ref: addressRef,\n                                placeholder: \"\\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430\"\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                            ref: walletsRef,\n                            label: \"wallets\",\n                            placeholder: \"address value\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {\n                            label: \"\\u0447\\u0435\\u043A \\u0431\\u043E\\u043A\\u0441 test\"\n                        }, void 0, false, {\n                            fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        primary: true,\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, _this),\n            NameD && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Name:\",\n                    NameD\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n                lineNumber: 111,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/show.js\",\n        lineNumber: 84,\n        columnNumber: 13\n    }, _this);\n};\n_s(show, \"dz5Imu8AW4PJHa+6zkIZRAnBBg0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (show);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFFBQU07Ozs7OzZCQUFTO2tDQUM3Qyw4REFBQ3hELHNEQUFPO3dCQUFDOEMsS0FBSzt3QkFDVlcsTUFBTSxFQUFHLFFBQVE7d0JBQ2pCQyxPQUFPLEVBQUloRCxXQUFXOzs7Ozs2QkFDdEI7Ozs7OztxQkFHQztZQUdORyxLQUFLLGtCQUFJLDhEQUFDOEMsSUFBRTs7b0JBQUMsT0FBSztvQkFBQzlDLEtBQUs7Ozs7OztxQkFBTTs7Ozs7O2FBRXRCLENBQUk7Q0FDbEI7R0F6R0tMLElBQUk7QUEyR1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaG93LmpzPzFkNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSxCdXR0b24sQ2hlY2tib3gsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQge0JpZ051bWJlciwgZXRoZXJzLCB1dGlsc30gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHByb3ZpZGVyIGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IGRpc3BlcnNlIGZyb20gXCIuLi9kaXNwZXJzZVwiO1xuaW1wb3J0IHRyeV9zaG93IGZyb20gXCIuLi91dGlscy90cnlfc2hvd1wiO1xuXG5jb25zdCBzaG93ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgYWRkcmVzc1JlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IFtlcnJvTWVzc2FnZSxzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCB3YWxsZXRzUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgW05hbWVELHNldE5hbWVdID11c2VTdGF0ZSgpO1xuXG4gICBcblxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhZGRyZXNzUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgICAgIGNvbnN0IHdhbGxldHMgPSB3YWxsZXRzUmVmLmN1cnJlbnQudmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnXFxuJyk7IFxuICAgICAgICBjb25zdCB3YWxsZXQ9W107XG4gICAgICAgIGNvbnN0IHZhbHVlPVtdO1xuICAgICAgICB3YWxsZXRzLmZvckVhY2godzEgPT4ge1xuICAgICAgICAgICAgY29uc3QgdDE9dzEuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IHYxID11dGlscy5wYXJzZUV0aGVyKHQxWzFdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2FsbGV0LnB1c2godDFbMF0pO1xuICAgICAgICAgICAgdmFsdWUucHVzaCh2MS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHRvU3RyaW5nKCkucmVwbGFjZSgvIC9nLCAnLCcpXTtcbiAgICAgICAvLyB3YWxsZXRzID0gd2FsbGV0cy5pbmNsdWRlcyhcIjB4XCIpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkcmVzczpcIixhZGRyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3YWxsZXQ6XCIsd2FsbGV0LCBcInZhbHVlOlwiLHZhbHVlKTtcbiAgICAgICAgLy/RgdCx0YDQvtGBINC+0YjQuNCx0LrQuFxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoKTtcbiAgICAgICAgLy/QtdGB0LvQuCDQv9GD0YHRgtC+INGC0L4g0L7RiNC40LHQutCwXG4gICAgICAgIGlmKCFhZGRyZXNzKXtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQn9GD0YHRgtC+0Lkg0LDQtNGA0LXRgVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vc3RhcnQgY29ubmVjdCB0byBtbVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvdmlkZXIuZnVuY3Rpb25zKTtcbiAgICAgICAgY29uc3QgZGlzcGVyc2VTaW5nZXIgPSBkaXNwZXJzZS5jb25uZWN0KHNpbmdlcik7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkaXNwZXJzZVNpbmdlclwiLGRpc3BlcnNlU2luZ2VyKTtcbiAgICAgICAgLy9jb25uZWN0IHRvIGNvbnRyYWN0XG4gICAgICAgIGxldCBhYmkgPSBbXCJmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3MgX3NwZW5kZXIsIHVpbnQyNTYgX3ZhbHVlKSBwdWJsaWMgcmV0dXJucyAoYm9vbCBzdWNjZXNzKVwiXTtcbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChhZGRyZXNzLCBhYmksIHByb3ZpZGVyKTtcbiAgICAgICAgbGV0IGNvbnN0cmFjdHNpbmdlciA9IGNvbnRyYWN0LmNvbm5lY3Qoc2luZ2VyKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cmFjdHNpbmdlci5mXCIsY29uc3RyYWN0c2luZ2VyLmZ1bmN0aW9uKTtcbiAgICAgICAgYXdhaXQgY29uc3RyYWN0c2luZ2VyLmFwcHJvdmUoZGlzcGVyc2UuYWRkcmVzcywgMTAqMTAqKjE4KTtcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBzaG93ID0gYXdhaXQgdHJ5X3Nob3coYWRkcmVzcyk7XG4gICAgICAgICAgICBzZXROYW1lKHNob3cuTmFtZUQpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwZXJzZVNpbmdlci5kaXNwZXJzZVRva2VuKGFkZHJlc3Msd2FsbGV0LGFtb3VudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIscmVzcG9uc2UpO1xuICAgICAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoXCJoYXNoOlwiICsgcmVzcG9uc2UuaGFzaCk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICBcblxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICBcblxuXG4gICAgfVxuICAgIHJldHVybiAoPExheW91dD5cbiAgICAgICAgXG4gICAgICAgIDxGb3JtIGVycm9yPXshIWVycm9NZXNzYWdlfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPtCg0LDRgdGB0YvQu9C60LAg0L/QtdGA0LXQsdC+0YDQvtC8KNC/0YDQvtGB0YLQsNGPKTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHJlZj17YWRkcmVzc1JlZn0gcGxhY2Vob2xkZXI9J9Cw0LTRgNC10YEg0YLQvtC60LXQvdCwJyAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8dGV4dGFyZWEgcmVmPXt3YWxsZXRzUmVmfSBsYWJlbD0nd2FsbGV0cycgcGxhY2Vob2xkZXI9J2FkZHJlc3MgdmFsdWUnID5cbiAgXG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgIFxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9J9GH0LXQuiDQsdC+0LrRgSB0ZXN0JyAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICA8TWVzc2FnZSBlcnJvclxuICAgICAgICAgICAgaGVhZGVyID0gJ0Vycm9yOidcbiAgICAgICAgICAgIGNvbnRlbnQgPSB7ZXJyb01lc3NhZ2V9XG4gICAgICAgICAgLz4gICAgICAgIFxuXG4gICAgICAgXG4gICAgICA8L0Zvcm0+XG4gICAgICBcbiAgICAgIHsvKiDQvtGC0L7QsdGA0LDQt9C40YLRjCDQtdGB0LvQuCDQtdGB0YLRjCAqL31cbiAgICAgIHtOYW1lRCAmJiA8aDI+TmFtZTp7TmFtZUR9PC9oMj59XG5cbiAgICAgIDwvTGF5b3V0PiAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IHNob3c7Il0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiRm9ybSIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiTWVzc2FnZSIsIkxheW91dCIsIkJpZ051bWJlciIsImV0aGVycyIsInV0aWxzIiwicHJvdmlkZXIiLCJkaXNwZXJzZSIsInRyeV9zaG93Iiwic2hvdyIsImFkZHJlc3NSZWYiLCJlcnJvTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsIndhbGxldHNSZWYiLCJOYW1lRCIsInNldE5hbWUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImFkZHJlc3MiLCJ3YWxsZXRzIiwid2FsbGV0IiwidmFsdWUiLCJzaW5nZXIiLCJkaXNwZXJzZVNpbmdlciIsImFiaSIsImNvbnRyYWN0IiwiY29uc3RyYWN0c2luZ2VyIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidG9TdHJpbmciLCJzcGxpdCIsImZvckVhY2giLCJ3MSIsInQxIiwidjEiLCJwYXJzZUV0aGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJnZXRTaWduZXIiLCJjb25uZWN0IiwiQ29udHJhY3QiLCJmdW5jdGlvbiIsImFwcHJvdmUiLCJyZXNwb25zZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiaGFzaCIsImVycm9yIiwibWVzc2FnZSIsIm9uU3VibWl0IiwiRmllbGQiLCJsYWJlbCIsImlucHV0IiwicmVmIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInByaW1hcnkiLCJ0eXBlIiwiaGVhZGVyIiwiY29udGVudCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/show.js\n");

/***/ })

});
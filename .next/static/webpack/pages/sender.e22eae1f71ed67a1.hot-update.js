"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sender",{

/***/ "./pages/sender.js":
/*!*************************!*\
  !*** ./pages/sender.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _disperse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../disperse */ \"./disperse.js\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ \"./provider.js\");\n/* harmony import */ var _utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ch_approve */ \"./utils/ch_approve.js\");\n/* harmony import */ var _utils_try_approve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/try_approve */ \"./utils/try_approve.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sender = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), CheckApprove = ref[0], setCheckApprove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Token = ref1[0], setToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), AreaWA = ref2[0], setAreaWA = ref2[1];\n    // const [stoper,setStoper] = useState(0);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), erroMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), successMessage = ref4[0], setSuccessMessage = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), Information = ref5[0], setInformMessage = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref6[0], setLoading = ref6[1];\n    var TokenAddress = Token;\n    var preTokenA = \"\";\n    var options = [\n        {\n            key: \"E\",\n            text: \"ETH\",\n            value: \"eth\"\n        },\n        // { key: 'B', text: 'BSC', value: 'bsc' },\n        {\n            key: \"M\",\n            text: \"MATIC\",\n            value: \"matic\"\n        }, \n    ];\n    if (preTokenA != TokenAddress) {\n        checkers(TokenAddress);\n    }\n    function checkers(adress) {\n        return _checkers.apply(this, arguments);\n    }\n    function _checkers() {\n        _checkers = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(adress) {\n            var ch_allows;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        preTokenA = adress;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,_utils_ch_approve__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(adress);\n                    case 4:\n                        ch_allows = _ctx.sent;\n                        console.log(\"ch_allows\", ch_allows);\n                        if (ch_allows <= 0) {\n                            //reset error && active button\n                            setErrorMessage(\"\");\n                            setCheckApprove(true);\n                        }\n                        _ctx.next = 14;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(_ctx.t0);\n                        setErrorMessage(\"\\u043F\\u0440\\u043E\\u0432\\u0435\\u0440\\u044C \\u0430\\u0434\\u0440\\u0435\\u0441 \\u0442\\u043E\\u043A\\u0435\\u043D\\u0430  -  \\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 :\" + _ctx.t0.message);\n                        setCheckApprove(false);\n                    case 14:\n                        return _ctx.abrupt(\"return\");\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    9\n                ]\n            ]);\n        }));\n        return _checkers.apply(this, arguments);\n    }\n    var handApprove = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var approve;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return (0,_utils_try_approve__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(TokenAddress, \"999999999999999999\".toString());\n                    case 6:\n                        approve = _ctx.sent;\n                        console.log(\"approve\", approve);\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 14:\n                        _ctx.prev = 14;\n                        setLoading(false);\n                        return _ctx.finish(14);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10,\n                    14,\n                    17\n                ]\n            ]);\n        }));\n        return function handApprove(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSublit = function() {\n        var _ref = _asyncToGenerator(_home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var singer, SenderSinger, wallets, wallet, amount, totaltokens, response;\n            return _home_ethdev_Projects_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setErrorMessage(\"\");\n                        setSuccessMessage(\"\");\n                        singer = _provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getSigner();\n                        SenderSinger = _disperse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].connect(singer);\n                        wallets = AreaWA.split(\"\\n\");\n                        wallet = [];\n                        amount = [];\n                        totaltokens = 0;\n                        wallets.forEach(function(w1) {\n                            var t1 = w1.split(\" \");\n                            var v1 = ethers__WEBPACK_IMPORTED_MODULE_8__.utils.parseEther(t1[1]);\n                            wallet.push(t1[0]);\n                            amount.push(v1.toString());\n                            totaltokens += parseInt(t1[1]);\n                        //console.log(\"v1\",amount + TokenAddress);\n                        });\n                        _ctx.prev = 10;\n                        _ctx.next = 13;\n                        return SenderSinger.disperseToken(TokenAddress, wallet, amount);\n                    case 13:\n                        response = _ctx.sent;\n                        setSuccessMessage(\"hash:\" + response.hash);\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](10);\n                        console.error(_ctx.t0);\n                        setErrorMessage(_ctx.t0.message);\n                    case 21:\n                        _ctx.prev = 21;\n                        setLoading(false);\n                        return _ctx.finish(21);\n                    case 24:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    10,\n                    17,\n                    21,\n                    24\n                ]\n            ]);\n        }));\n        return function handleSublit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {\n                error: !!erroMessage,\n                success: !!successMessage,\n                info: !!Information,\n                onSubmit: handleSublit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {}, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Group, {\n                        widths: \"equal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Input,\n                                label: \"Token\",\n                                value: Token,\n                                placeholder: \"0x...\",\n                                onChange: function(event) {\n                                    return setToken(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 144,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Field, {\n                                control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.TextArea,\n                                label: \"Walets Tokens\",\n                                value: AreaWA,\n                                placeholder: \"Walets Tokens\",\n                                onChange: function(event) {\n                                    return setAreaWA(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                                lineNumber: 146,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, _this),\n                    CheckApprove ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        primary: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 152,\n                        columnNumber: 33\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        loading: isLoading,\n                        disabled: true,\n                        type: \"submit\",\n                        onClick: handApprove,\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 153,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        style: {\n                            wordBreak: \"break-word\"\n                        },\n                        error: true,\n                        header: \"Error:\",\n                        content: erroMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 155,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        success: true,\n                        header: \"success:\",\n                        content: successMessage\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 156,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                        header: \"Info:\",\n                        content: Information\n                    }, void 0, false, {\n                        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                        lineNumber: 157,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 139,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 159,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"test tokens:\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 160,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"0xa34ddb7393706CB3C8c4232839DCc033ECFbD0a5\"\n            }, void 0, false, {\n                fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n                lineNumber: 161,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ethdev/\\u0420\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0441\\u0442\\u043E\\u043B/Projects/client/pages/sender.js\",\n        lineNumber: 138,\n        columnNumber: 17\n    }, _this);\n};\n_s(sender, \"p/55q/MsFXqBvZ9mCHyblI4x44I=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (sender);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsUUFBUTt3QkFBQ0MsT0FBTyxFQUFFakUsV0FBVzs7Ozs7NkJBQUk7a0NBQzNGLDhEQUFDZixzREFBTzt3QkFBQzZELE9BQU87d0JBQUNrQixNQUFNLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFFL0QsY0FBYzs7Ozs7NkJBQUk7a0NBQzlELDhEQUFDakIsc0RBQU87d0JBQUMrRSxNQUFNLEVBQUMsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFN0QsV0FBVzs7Ozs7NkJBQUk7Ozs7OztxQkFDN0M7MEJBQ1AsOERBQUM4RCxHQUFDOzs7O3FCQUFLOzBCQUNQLDhEQUFDQSxHQUFDOzBCQUFDLGNBQVk7Ozs7O3FCQUFJOzBCQUNuQiw4REFBQ0EsR0FBQzswQkFBQyw0Q0FBMEM7Ozs7O3FCQUFJOzs7Ozs7YUFJNUMsQ0FBRTtDQUNkO0dBM0pDekUsTUFBTTtBQTZKUiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlbmRlci5qcz9kZmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgZGlzcGVyc2UgZnJvbSBcIi4uL2Rpc3BlcnNlXCI7XG5pbXBvcnQgcHJvdmlkZXIgZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgY2hfYXBwcm92ZSBmcm9tIFwiLi4vdXRpbHMvY2hfYXBwcm92ZVwiO1xuaW1wb3J0IHRyeV9hcHByb3ZlIGZyb20gXCIuLi91dGlscy90cnlfYXBwcm92ZVwiO1xuXG5cbmNvbnN0IHNlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbQ2hlY2tBcHByb3ZlLCBzZXRDaGVja0FwcHJvdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtUb2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW0FyZWFXQSwgc2V0QXJlYVdBXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgLy8gY29uc3QgW3N0b3BlcixzZXRTdG9wZXJdID0gdXNlU3RhdGUoMCk7XG5cblxuXG5cbiAgICBjb25zdCBbZXJyb01lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtJbmZvcm1hdGlvbixzZXRJbmZvcm1NZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgVG9rZW5BZGRyZXNzID0gVG9rZW47XG4gICAgY29uc3QgcHJlVG9rZW5BID0gXCJcIjtcbiAgICBcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICB7IGtleTogJ0UnLCB0ZXh0OiAnRVRIJywgdmFsdWU6ICdldGgnIH0sXG4gICAgICAgLy8geyBrZXk6ICdCJywgdGV4dDogJ0JTQycsIHZhbHVlOiAnYnNjJyB9LFxuICAgICAgICB7IGtleTogJ00nLCB0ZXh0OiAnTUFUSUMnLCB2YWx1ZTogJ21hdGljJyB9LFxuICAgIF1cbiAgICBcbiBcbiAgICBpZiAocHJlVG9rZW5BICE9IFRva2VuQWRkcmVzcyAgKSB7XG4gICAgICAgIFxuICAgICAgICBjaGVja2VycyhUb2tlbkFkZHJlc3MpO1xuICAgICAgICBcbiAgICB9XG4gIFxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tlcnMoYWRyZXNzKSB7XG5cbiAgICAgICAgcHJlVG9rZW5BID0gYWRyZXNzO1xuXG5cbiAgICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGNoX2FsbG93cyA9IGF3YWl0IGNoX2FwcHJvdmUoYWRyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaF9hbGxvd3NcIixjaF9hbGxvd3MpO1xuXG5cbiAgICAgICBpZihjaF9hbGxvd3MgPD0wKXtcblxuICAgICAgIC8vcmVzZXQgZXJyb3IgJiYgYWN0aXZlIGJ1dHRvblxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgICAgIHNldENoZWNrQXBwcm92ZSh0cnVlKTtcbiAgICAgICB9ICAgfSAgICAgXG4gICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwi0L/RgNC+0LLQtdGA0Ywg0LDQtNGA0LXRgSDRgtC+0LrQtdC90LAgIC0gINCe0YjQuNCx0LrQsCA6XCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgc2V0Q2hlY2tBcHByb3ZlKGZhbHNlKTtcbiAgICAgICAgICAgfVxuICAgICAgXG5cblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cblxuXG4gICAgY29uc3QgaGFuZEFwcHJvdmUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwcm92ZSA9IGF3YWl0IHRyeV9hcHByb3ZlKFRva2VuQWRkcmVzcywgXCI5OTk5OTk5OTk5OTk5OTk5OTlcIi50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXBwcm92ZVwiLCBhcHByb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1YmxpdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NNZXNzYWdlKFwiXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IFNlbmRlclNpbmdlciA9IGRpc3BlcnNlLmNvbm5lY3Qoc2luZ2VyKTtcblxuXG5cblxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0cyA9IEFyZWFXQS5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgdG90YWx0b2tlbnMgPSAwO1xuXG5cblxuICAgICAgICAgICAgd2FsbGV0cy5mb3JFYWNoKHcxID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0MSA9IHcxLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdjEgPSB1dGlscy5wYXJzZUV0aGVyKHQxWzFdKTtcblxuICAgICAgICAgICAgICAgIHdhbGxldC5wdXNoKHQxWzBdKTtcbiAgICAgICAgICAgICAgICBhbW91bnQucHVzaCh2MS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0b3RhbHRva2VucyArPSBwYXJzZUludCh0MVsxXSk7XG5cbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidjFcIixhbW91bnQgKyBUb2tlbkFkZHJlc3MpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTZW5kZXJTaW5nZXIuZGlzcGVyc2VUb2tlbihUb2tlbkFkZHJlc3MsIHdhbGxldCwgYW1vdW50KTtcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZShcImhhc2g6XCIgKyByZXNwb25zZS5oYXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gKDxMYXlvdXQ+XG4gICAgICAgICAgICA8Rm9ybSBlcnJvcj17ISFlcnJvTWVzc2FnZX0gc3VjY2Vzcz17ISFzdWNjZXNzTWVzc2FnZX0gaW5mbyA9IHshIUluZm9ybWF0aW9ufSBvblN1Ym1pdD17aGFuZGxlU3VibGl0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1NlbGVjdH0gbGFiZWw9J0NoYWluJyBvcHRpb25zPXtvcHRpb25zfSBwbGFjZWhvbGRlcj0nQ2hhaW4nIC8+ICovfVxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9J2VxdWFsJz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgY29udHJvbD17SW5wdXR9IGxhYmVsPSdUb2tlbicgdmFsdWU9e1Rva2VufSBwbGFjZWhvbGRlcj0nMHguLi4nIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRUb2tlbihldmVudC50YXJnZXQudmFsdWUpfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIGNvbnRyb2w9e1RleHRBcmVhfSBsYWJlbD1cIldhbGV0cyBUb2tlbnNcIiB2YWx1ZT17QXJlYVdBfSBwbGFjZWhvbGRlcj0nV2FsZXRzIFRva2Vucycgb25DaGFuZ2U9e2V2ZW50ID0+IHNldEFyZWFXQShldmVudC50YXJnZXQudmFsdWUpfSAvPlxuXG5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmd9IHByaW1hcnk+U2VuZDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAge0NoZWNrQXBwcm92ZSA/IDxCdXR0b24gbG9hZGluZz17aXNMb2FkaW5nfSBwcmltYXJ5IHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZEFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj4gOlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2lzTG9hZGluZ30gZGlzYWJsZWQgdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPn1cblxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnIH19IGVycm9yIGhlYWRlcj0nRXJyb3I6JyBjb250ZW50PXtlcnJvTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGhlYWRlcj0nc3VjY2VzczonIGNvbnRlbnQ9e3N1Y2Nlc3NNZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGhlYWRlcj0nSW5mbzonIGNvbnRlbnQ9e0luZm9ybWF0aW9ufSAvPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgPHA+dGVzdCB0b2tlbnM6PC9wPlxuICAgICAgICAgICAgPHA+MHhhMzRkZGI3MzkzNzA2Q0IzQzhjNDIzMjgzOURDYzAzM0VDRmJEMGE1PC9wPlxuXG5cblxuICAgICAgICA8L0xheW91dD4pO1xuICAgIH1cblxuICAgIGV4cG9ydCBkZWZhdWx0IHNlbmRlcjsiXSwibmFtZXMiOlsidXRpbHMiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJTZWxlY3QiLCJUZXh0QXJlYSIsIkxheW91dCIsImRpc3BlcnNlIiwicHJvdmlkZXIiLCJjaF9hcHByb3ZlIiwidHJ5X2FwcHJvdmUiLCJzZW5kZXIiLCJDaGVja0FwcHJvdmUiLCJzZXRDaGVja0FwcHJvdmUiLCJUb2tlbiIsInNldFRva2VuIiwiQXJlYVdBIiwic2V0QXJlYVdBIiwiZXJyb01lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiSW5mb3JtYXRpb24iLCJzZXRJbmZvcm1NZXNzYWdlIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsIlRva2VuQWRkcmVzcyIsInByZVRva2VuQSIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJjaGVja2VycyIsImFkcmVzcyIsImNoX2FsbG93cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kQXBwcm92ZSIsImV2ZW50IiwiYXBwcm92ZSIsInByZXZlbnREZWZhdWx0IiwidG9TdHJpbmciLCJoYW5kbGVTdWJsaXQiLCJzaW5nZXIiLCJTZW5kZXJTaW5nZXIiLCJ3YWxsZXRzIiwid2FsbGV0IiwiYW1vdW50IiwidG90YWx0b2tlbnMiLCJyZXNwb25zZSIsImdldFNpZ25lciIsImNvbm5lY3QiLCJzcGxpdCIsImZvckVhY2giLCJ3MSIsInQxIiwidjEiLCJwYXJzZUV0aGVyIiwicHVzaCIsInBhcnNlSW50IiwiZGlzcGVyc2VUb2tlbiIsImhhc2giLCJzdWNjZXNzIiwiaW5mbyIsIm9uU3VibWl0IiwiR3JvdXAiLCJ3aWR0aHMiLCJGaWVsZCIsImNvbnRyb2wiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsb2FkaW5nIiwicHJpbWFyeSIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJzdHlsZSIsIndvcmRCcmVhayIsImhlYWRlciIsImNvbnRlbnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sender.js\n");

/***/ })

});
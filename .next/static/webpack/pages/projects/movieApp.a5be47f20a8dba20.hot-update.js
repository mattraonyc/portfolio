"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/movieApp",{

/***/ "./pages/Contact.js":
/*!**************************!*\
  !*** ./pages/Contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Contact() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    }), mousePosition = ref[0], setMousePosition = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\"), cursorVariant = ref1[0], setCursorVariant = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var mouseMove = function(e) {\n            setMousePosition({\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        window.addEventListener(\"mousemove\", mouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", mouseMove);\n        };\n    }, []);\n    var variants = {\n        default: {\n            x: mousePosition.x - 16,\n            y: mousePosition.y - 16\n        },\n        text: {\n            height: 150,\n            width: 150,\n            x: mousePosition.x - 75,\n            y: mousePosition.y - 75,\n            backgroundColor: \"smokeWhite\",\n            mixBlendMode: \"difference\"\n        }\n    };\n    var textEnter = function() {\n        return setCursorVariant(\"text\");\n    };\n    var textLeave = function() {\n        return setCursorVariant(\"default\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            initial: {\n                opacity: 0,\n                scale: 0.8,\n                y: 10\n            },\n            whileInView: {\n                opacity: 1,\n                scale: 1,\n                y: 0\n            },\n            transition: {\n                delay: 0,\n                duration: \"0.6\",\n                ease: \"easeOut\"\n            },\n            viewport: {\n                once: true\n            },\n            onMouseEnter: textEnter,\n            onMouseLeave: textLeave,\n            className: \"sm:w-[30rem]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-5xl font-bold py-1 dark:text-white \",\n                    id: \"contact\",\n                    children: \"Contact Me!\"\n                }, void 0, false, {\n                    fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/Contact.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xl py-2 leading-8 text-gray-800 dark:text-gray-200\",\n                    children: [\n                        \"Like what you see? I would love to get in touch with you!\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block pt-6 text-white pb-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"mailto:mattraonyc@gmail.com\",\n                                target: \"_blank\",\n                                children: \"mattraonyc@gmail.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/Contact.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/Contact.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/Contact.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/Contact.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/Contact.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"lnOkrTcQSuabK0FuYlKYF3uTp/4=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQUNDLElBQUksRUFBQyw2QkFBNkI7Z0NBQUNDLE1BQU0sRUFBQyxRQUFROzBDQUFDLHNCQUV0RDs7Ozs7b0NBQUk7Ozs7O2dDQUNDOzs7Ozs7d0JBQ0w7Ozs7OztnQkFDTzs7Ozs7WUFDTCxDQUNWO0FBQ0osQ0FBQztHQXRFdUI1QyxPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29udGFjdC5qcz80YmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgfSk7XG4gIGNvbnN0IFtjdXJzb3JWYXJpYW50LCBzZXRDdXJzb3JWYXJpYW50XSA9IHVzZVN0YXRlKFwiZGVmYXVsdFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICBzZXRNb3VzZVBvc2l0aW9uKHtcbiAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICB5OiBlLmNsaWVudFksXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICB4OiBtb3VzZVBvc2l0aW9uLnggLSAxNixcbiAgICAgIHk6IG1vdXNlUG9zaXRpb24ueSAtIDE2LFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgeDogbW91c2VQb3NpdGlvbi54IC0gNzUsXG4gICAgICB5OiBtb3VzZVBvc2l0aW9uLnkgLSA3NSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJzbW9rZVdoaXRlXCIsXG4gICAgICBtaXhCbGVuZE1vZGU6IFwiZGlmZmVyZW5jZVwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgdGV4dEVudGVyID0gKCkgPT4gc2V0Q3Vyc29yVmFyaWFudChcInRleHRcIik7XG4gIGNvbnN0IHRleHRMZWF2ZSA9ICgpID0+IHNldEN1cnNvclZhcmlhbnQoXCJkZWZhdWx0XCIpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjgsIHk6IDEwIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxLCB5OiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAsIGR1cmF0aW9uOiBcIjAuNlwiLCBlYXNlOiBcImVhc2VPdXRcIiB9fVxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGV4dEVudGVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RleHRMZWF2ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwic206dy1bMzByZW1dXCJcbiAgICAgID5cbiAgICAgICAgey8qIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yXCJcbiAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICAgICAgYW5pbWF0ZT17Y3Vyc29yVmFyaWFudH1cbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgIHB5LTEgZGFyazp0ZXh0LXdoaXRlIFwiIGlkPVwiY29udGFjdFwiPlxuICAgICAgICAgIENvbnRhY3QgTWUhXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgcHktMiBsZWFkaW5nLTggdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICBMaWtlIHdoYXQgeW91IHNlZT8gSSB3b3VsZCBsb3ZlIHRvIGdldCBpbiB0b3VjaCB3aXRoIHlvdSF7XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgcHQtNiB0ZXh0LXdoaXRlIHBiLTEwXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOm1hdHRyYW9ueWNAZ21haWwuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIG1hdHRyYW9ueWNAZ21haWwuY29tXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwibW90aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWN0IiwieCIsInkiLCJtb3VzZVBvc2l0aW9uIiwic2V0TW91c2VQb3NpdGlvbiIsImN1cnNvclZhcmlhbnQiLCJzZXRDdXJzb3JWYXJpYW50IiwibW91c2VNb3ZlIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ2YXJpYW50cyIsImRlZmF1bHQiLCJ0ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaXhCbGVuZE1vZGUiLCJ0ZXh0RW50ZXIiLCJ0ZXh0TGVhdmUiLCJzZWN0aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJzY2FsZSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNlIiwidmlld3BvcnQiLCJvbmNlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiY2xhc3NOYW1lIiwiaDMiLCJpZCIsInAiLCJzcGFuIiwiYSIsImhyZWYiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Contact.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/My-story.js":
/*!***************************!*\
  !*** ./pages/My-story.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyStory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction MyStory() {\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)().scrollYProgress;\n    var y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [\n        0,\n        0.35\n    ], [\n        \"100%\",\n        \"0%\"\n    ]);\n    var mouseEnter = function() {\n        return document.getElementById(\"pixel\").classList.remove(\"hide\");\n    };\n    var mouseLeave = function() {\n        return document.getElementById(\"pixel\").classList.add(\"hide\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-10 md:relative md:pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    scale: 0.8,\n                    y: 10\n                },\n                whileInView: {\n                    opacity: 1,\n                    scale: 1,\n                    y: 0\n                },\n                transition: {\n                    delay: 0,\n                    duration: \"0.6\",\n                    ease: \"easeOut\"\n                },\n                whileHover: {},\n                viewport: {\n                    once: true\n                },\n                className: \"rounded-3xl bg-[#212121] p-[20px] md:mr-56\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"my-story\", {}, void 0, false, {\n                        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-3xl font-bold py-1 dark:text-white \",\n                        id: \"my-story\",\n                        children: \"About Matt \\uD83D\\uDC4B\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[19px] py-2 leading-8 text-gray-800 dark:text-gray-200\",\n                        children: \"I am a frontend developer with particular interests in React.js, Javascript and TailwindCSS. With a background in marketing, I quickly discovered my passion for web development through school projects and the opportunity to combine technical problem solving with the ever-growing technology stacks energizes me to keep actively learn about the technologies that make frontend development better. When I am not coding or studying, I love to spend my free time going on hikes and playing video games.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    scale: 0.8,\n                    rotate: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    scale: 1,\n                    rotate: 3\n                },\n                transition: {\n                    delay: 0,\n                    duration: \"0.6\",\n                    ease: \"easeOut\"\n                },\n                // style={{ y }}\n                viewport: {\n                    once: true\n                },\n                className: \"md:absolute md:top-0 md:right-0 w-60 md:mt-0 mt-6 mx-auto rotate-2 cursor-pointer\",\n                onMouseEnter: mouseEnter,\n                onMouseLeave: mouseLeave,\n                whileTap: {\n                    y: -5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/matt-02.jpeg\",\n                    className: \"rounded-xl\"\n                }, void 0, false, {\n                    fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/pixel-glasses.png\",\n                    className: \"md:absolute md:top-[128px] md:right-[103px] md:mt-0 mt-6 mx-auto rotate-2 w-7 hide\",\n                    id: \"pixel\"\n                }, void 0, false, {\n                    fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(MyStory, \"bz1shsR69pD/hkKmLkfhPtO51TU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n    ];\n});\n_c = MyStory;\nvar _c;\n$RefreshReg$(_c, \"MyStory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNTOzs7Ozs7WUFDVCxDQUNOO0FBQ0osQ0FBQztHQXpEdUJ6QixPQUFPOztRQUNISCxvREFBUztRQUMzQkMsdURBQVk7OztBQUZFRSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL015LXN0b3J5LmpzPzczMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlTdG9yeSgpIHtcbiAgbGV0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoKTtcbiAgbGV0IHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4zNV0sIFtcIjEwMCVcIiwgXCIwJVwiXSk7XG5cbiAgY29uc3QgbW91c2VFbnRlciA9ICgpID0+XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaXhlbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgY29uc3QgbW91c2VMZWF2ZSA9ICgpID0+XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaXhlbFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTAgbWQ6cmVsYXRpdmUgbWQ6cHQtMTBcIj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCwgeTogMTAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEsIHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMCwgZHVyYXRpb246IFwiMC42XCIsIGVhc2U6IFwiZWFzZU91dFwiIH19XG4gICAgICAgIHdoaWxlSG92ZXI9e3t9fVxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJnLVsjMjEyMTIxXSBwLVsyMHB4XSBtZDptci01NlwiXG4gICAgICA+XG4gICAgICAgIDxteS1zdG9yeSAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHB5LTEgZGFyazp0ZXh0LXdoaXRlIFwiIGlkPVwibXktc3RvcnlcIj5cbiAgICAgICAgICBBYm91dCBNYXR0IPCfkYtcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTlweF0gcHktMiBsZWFkaW5nLTggdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICBJIGFtIGEgZnJvbnRlbmQgZGV2ZWxvcGVyIHdpdGggcGFydGljdWxhciBpbnRlcmVzdHMgaW4gUmVhY3QuanMsXG4gICAgICAgICAgSmF2YXNjcmlwdCBhbmQgVGFpbHdpbmRDU1MuIFdpdGggYSBiYWNrZ3JvdW5kIGluIG1hcmtldGluZywgSSBxdWlja2x5XG4gICAgICAgICAgZGlzY292ZXJlZCBteSBwYXNzaW9uIGZvciB3ZWIgZGV2ZWxvcG1lbnQgdGhyb3VnaCBzY2hvb2wgcHJvamVjdHMgYW5kXG4gICAgICAgICAgdGhlIG9wcG9ydHVuaXR5IHRvIGNvbWJpbmUgdGVjaG5pY2FsIHByb2JsZW0gc29sdmluZyB3aXRoIHRoZVxuICAgICAgICAgIGV2ZXItZ3Jvd2luZyB0ZWNobm9sb2d5IHN0YWNrcyBlbmVyZ2l6ZXMgbWUgdG8ga2VlcCBhY3RpdmVseSBsZWFyblxuICAgICAgICAgIGFib3V0IHRoZSB0ZWNobm9sb2dpZXMgdGhhdCBtYWtlIGZyb250ZW5kIGRldmVsb3BtZW50IGJldHRlci4gV2hlbiBJXG4gICAgICAgICAgYW0gbm90IGNvZGluZyBvciBzdHVkeWluZywgSSBsb3ZlIHRvIHNwZW5kIG15IGZyZWUgdGltZSBnb2luZyBvbiBoaWtlc1xuICAgICAgICAgIGFuZCBwbGF5aW5nIHZpZGVvIGdhbWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCwgcm90YXRlOiAwIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxLCByb3RhdGU6IDMgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMCwgZHVyYXRpb246IFwiMC42XCIsIGVhc2U6IFwiZWFzZU91dFwiIH19XG4gICAgICAgIC8vIHN0eWxlPXt7IHkgfX1cbiAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICBjbGFzc05hbWU9XCJtZDphYnNvbHV0ZSBtZDp0b3AtMCBtZDpyaWdodC0wIHctNjAgbWQ6bXQtMCBtdC02IG14LWF1dG8gcm90YXRlLTIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17bW91c2VMZWF2ZX1cbiAgICAgICAgd2hpbGVUYXA9e3sgeTogLTUgfX1cbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9XCIvbWF0dC0wMi5qcGVnXCIgY2xhc3NOYW1lPVwicm91bmRlZC14bFwiIC8+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJ6LTEwXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvcGl4ZWwtZ2xhc3Nlcy5wbmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmFic29sdXRlIG1kOnRvcC1bMTI4cHhdIG1kOnJpZ2h0LVsxMDNweF0gbWQ6bXQtMCBtdC02IG14LWF1dG8gcm90YXRlLTIgdy03IGhpZGVcIlxuICAgICAgICAgIGlkPVwicGl4ZWxcIlxuICAgICAgICAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIkltYWdlIiwiTXlTdG9yeSIsInNjcm9sbFlQcm9ncmVzcyIsInkiLCJtb3VzZUVudGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm1vdXNlTGVhdmUiLCJhZGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2UiLCJ3aGlsZUhvdmVyIiwidmlld3BvcnQiLCJvbmNlIiwibXktc3RvcnkiLCJoMyIsImlkIiwicCIsInJvdGF0ZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIndoaWxlVGFwIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/My-story.js\n"));

/***/ })

});
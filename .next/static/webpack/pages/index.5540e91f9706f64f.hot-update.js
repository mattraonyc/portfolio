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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyStory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyStory() {\n    _s();\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)().scrollYProgress;\n    var y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        0.35\n    ], [\n        \"100%\",\n        \"0%\"\n    ]);\n    var mouseEnter = function() {\n        return document.getElementById(\"pixel\").classList.remove(\"hide\");\n    };\n    var mouseLeave = function() {\n        return document.getElementById(\"pixel\").classList.add(\"hide\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-5 md:relative md:pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    scale: 0.8,\n                    y: 10\n                },\n                whileInView: {\n                    opacity: 1,\n                    scale: 1,\n                    y: 0\n                },\n                transition: {\n                    delay: 0,\n                    duration: \"0.6\",\n                    ease: \"easeOut\"\n                },\n                whileHover: {},\n                viewport: {\n                    once: true\n                },\n                className: \"rounded-3xl bg-[#212121] p-[20px] md:mr-56\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"my-story\", {}, void 0, false, {\n                        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-3xl font-bold py-1 dark:text-white \",\n                        id: \"my-story\",\n                        children: \"About Matt \\uD83D\\uDC4B\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[19px] py-2 leading-8 text-gray-800 dark:text-gray-200\",\n                        children: \"I am a frontend developer with particular interests in React.js, Javascript and TailwindCSS. With a background in marketing, I quickly discovered my passion for web development through school projects. The opportunity to combine technical problem solving with the technology energizes me to keep actively learning frontend development as well as the backend. When I am not coding or studying, I love to spend my free time going on hikes and playing video games.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    rotate: 3\n                },\n                whileInView: {\n                    rotate: 3\n                },\n                transition: {\n                    delay: 0,\n                    duration: \"0.6\",\n                    ease: \"easeOut\"\n                },\n                // style={{ y }}\n                viewport: {\n                    once: true\n                },\n                className: \"md:absolute md:top-0 md:right-0 w-60 md:mt-0 mt-6 mx-auto rotate-2 cursor-pointer\",\n                onMouseEnter: mouseEnter,\n                onMouseLeave: mouseLeave,\n                whileTap: {\n                    y: -5\n                },\n                animate: {\n                    y: 5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/matt-02.jpeg\",\n                    className: \"rounded-xl\"\n                }, void 0, false, {\n                    fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matthewrao/Desktop/dev/portfolio/pages/My-story.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(MyStory, \"bz1shsR69pD/hkKmLkfhPtO51TU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = MyStory;\nvar _c;\n$RefreshReg$(_c, \"MyStory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NeS1zdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFnRTtBQUNqQztBQUNFO0FBRWxCLFNBQVNLLE9BQU8sR0FBRzs7SUFDaEMsSUFBSSxlQUFpQixHQUFLSix3REFBUyxFQUFFLENBQS9CSyxlQUFlO0lBQ3JCLElBQUlDLENBQUMsR0FBR0wsMkRBQVksQ0FBQ0ksZUFBZSxFQUFFO0FBQUMsU0FBQztBQUFFLFlBQUk7S0FBQyxFQUFFO1FBQUMsTUFBTTtRQUFFLElBQUk7S0FBQyxDQUFDO0lBRWhFLElBQU1FLFVBQVUsR0FBRztlQUNqQkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUFBO0lBQzNELElBQU1DLFVBQVUsR0FBRztlQUNqQkosUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUFBO0lBRXhELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQywyQkFBMkI7OzBCQUN4Qyw4REFBQ2hCLHFEQUFVO2dCQUNUaUIsT0FBTyxFQUFFO29CQUFFQyxPQUFPLEVBQUUsQ0FBQztvQkFBRUMsS0FBSyxFQUFFLEdBQUc7b0JBQUVaLENBQUMsRUFBRSxFQUFFO2lCQUFFO2dCQUMxQ2EsV0FBVyxFQUFFO29CQUFFRixPQUFPLEVBQUUsQ0FBQztvQkFBRUMsS0FBSyxFQUFFLENBQUM7b0JBQUVaLENBQUMsRUFBRSxDQUFDO2lCQUFFO2dCQUMzQ2MsVUFBVSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsQ0FBQztvQkFBRUMsUUFBUSxFQUFFLEtBQUs7b0JBQUVDLElBQUksRUFBRSxTQUFTO2lCQUFFO2dCQUMxREMsVUFBVSxFQUFFLEVBQUU7Z0JBQ2RDLFFBQVEsRUFBRTtvQkFBRUMsSUFBSSxFQUFFLElBQUk7aUJBQUU7Z0JBQ3hCWCxTQUFTLEVBQUMsNENBQTRDOztrQ0FFdEQsOERBQUNZLFVBQVE7Ozs7NEJBQUc7a0NBQ1osOERBQUNDLElBQUU7d0JBQUNiLFNBQVMsRUFBQywwQ0FBMEM7d0JBQUNjLEVBQUUsRUFBQyxVQUFVO2tDQUFDLHlCQUV2RTs7Ozs7NEJBQUs7a0NBQ0wsOERBQUNDLEdBQUM7d0JBQUNmLFNBQVMsRUFBQyw2REFBNkQ7a0NBQUMsK2NBUTNFOzs7Ozs0QkFBSTs7Ozs7O29CQUNPOzBCQU1iLDhEQUFDaEIscURBQVU7Z0JBQ1RpQixPQUFPLEVBQUU7b0JBQUVlLE1BQU0sRUFBRSxDQUFDO2lCQUFFO2dCQUN0QlosV0FBVyxFQUFFO29CQUFFWSxNQUFNLEVBQUUsQ0FBQztpQkFBRTtnQkFDMUJYLFVBQVUsRUFBRTtvQkFBRUMsS0FBSyxFQUFFLENBQUM7b0JBQUVDLFFBQVEsRUFBRSxLQUFLO29CQUFFQyxJQUFJLEVBQUUsU0FBUztpQkFBRTtnQkFDMUQsZ0JBQWdCO2dCQUNoQkUsUUFBUSxFQUFFO29CQUFFQyxJQUFJLEVBQUUsSUFBSTtpQkFBRTtnQkFDeEJYLFNBQVMsRUFBQyxtRkFBbUY7Z0JBQzdGaUIsWUFBWSxFQUFFekIsVUFBVTtnQkFDeEIwQixZQUFZLEVBQUVyQixVQUFVO2dCQUN4QnNCLFFBQVEsRUFBRTtvQkFBRTVCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQUU7Z0JBQ25CNkIsT0FBTyxFQUFFO29CQUFFN0IsQ0FBQyxFQUFFLENBQUM7aUJBQUU7MEJBR2pCLDRFQUFDOEIsS0FBRztvQkFBQ0MsR0FBRyxFQUFDLGVBQWU7b0JBQUN0QixTQUFTLEVBQUMsWUFBWTs7Ozs7d0JBQUc7Ozs7O29CQUN2Qzs7Ozs7O1lBUVQsQ0FDTjtBQUNKLENBQUM7R0E5RHVCWCxPQUFPOztRQUNISixvREFBUztRQUMzQkMsdURBQVk7OztBQUZFRyxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL015LXN0b3J5LmpzPzczMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15U3RvcnkoKSB7XG4gIGxldCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKCk7XG4gIGxldCB5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMzVdLCBbXCIxMDAlXCIsIFwiMCVcIl0pO1xuXG4gIGNvbnN0IG1vdXNlRW50ZXIgPSAoKSA9PlxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGl4ZWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIGNvbnN0IG1vdXNlTGVhdmUgPSAoKSA9PlxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGl4ZWxcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTUgbWQ6cmVsYXRpdmUgbWQ6cHQtMTBcIj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCwgeTogMTAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEsIHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMCwgZHVyYXRpb246IFwiMC42XCIsIGVhc2U6IFwiZWFzZU91dFwiIH19XG4gICAgICAgIHdoaWxlSG92ZXI9e3t9fVxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJnLVsjMjEyMTIxXSBwLVsyMHB4XSBtZDptci01NlwiXG4gICAgICA+XG4gICAgICAgIDxteS1zdG9yeSAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHB5LTEgZGFyazp0ZXh0LXdoaXRlIFwiIGlkPVwibXktc3RvcnlcIj5cbiAgICAgICAgICBBYm91dCBNYXR0IPCfkYtcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTlweF0gcHktMiBsZWFkaW5nLTggdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICBJIGFtIGEgZnJvbnRlbmQgZGV2ZWxvcGVyIHdpdGggcGFydGljdWxhciBpbnRlcmVzdHMgaW4gUmVhY3QuanMsXG4gICAgICAgICAgSmF2YXNjcmlwdCBhbmQgVGFpbHdpbmRDU1MuIFdpdGggYSBiYWNrZ3JvdW5kIGluIG1hcmtldGluZywgSSBxdWlja2x5XG4gICAgICAgICAgZGlzY292ZXJlZCBteSBwYXNzaW9uIGZvciB3ZWIgZGV2ZWxvcG1lbnQgdGhyb3VnaCBzY2hvb2wgcHJvamVjdHMuIFRoZVxuICAgICAgICAgIG9wcG9ydHVuaXR5IHRvIGNvbWJpbmUgdGVjaG5pY2FsIHByb2JsZW0gc29sdmluZyB3aXRoIHRoZSB0ZWNobm9sb2d5XG4gICAgICAgICAgZW5lcmdpemVzIG1lIHRvIGtlZXAgYWN0aXZlbHkgbGVhcm5pbmcgZnJvbnRlbmQgZGV2ZWxvcG1lbnQgYXMgd2VsbCBhc1xuICAgICAgICAgIHRoZSBiYWNrZW5kLiBXaGVuIEkgYW0gbm90IGNvZGluZyBvciBzdHVkeWluZywgSSBsb3ZlIHRvIHNwZW5kIG15IGZyZWVcbiAgICAgICAgICB0aW1lIGdvaW5nIG9uIGhpa2VzIGFuZCBwbGF5aW5nIHZpZGVvIGdhbWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIHsvKiA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUSZhYl9jaGFubmVsPVJpY2tBc3RsZXlcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgPiAqL31cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgcm90YXRlOiAzIH19XG4gICAgICAgIHdoaWxlSW5WaWV3PXt7IHJvdGF0ZTogMyB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLCBkdXJhdGlvbjogXCIwLjZcIiwgZWFzZTogXCJlYXNlT3V0XCIgfX1cbiAgICAgICAgLy8gc3R5bGU9e3sgeSB9fVxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIGNsYXNzTmFtZT1cIm1kOmFic29sdXRlIG1kOnRvcC0wIG1kOnJpZ2h0LTAgdy02MCBtZDptdC0wIG10LTYgbXgtYXV0byByb3RhdGUtMiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17bW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXttb3VzZUxlYXZlfVxuICAgICAgICB3aGlsZVRhcD17eyB5OiAtNSB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDUgfX1cbiAgICAgICAgLy8gdHJhbnNpdGlvbj17eyByZXBlYXQ6IEluZmluaXR5LCByZXBlYXRUeXBlOiBcInJldmVyc2VcIiwgZHVyYXRpb246IDIgfX1cbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9XCIvbWF0dC0wMi5qcGVnXCIgY2xhc3NOYW1lPVwicm91bmRlZC14bFwiIC8+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICB7LyogPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiei0xMFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3BpeGVsLWdsYXNzZXMucG5nXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZDphYnNvbHV0ZSBtZDp0b3AtWzEzNXB4XSBtZDpyaWdodC1bMTAzcHhdIG1kOm10LTAgbXQtNiBteC1hdXRvIHJvdGF0ZS0yIHctNyBoaWRlXCJcbiAgICAgICAgICBpZD1cInBpeGVsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbW90aW9uLmRpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiSW1hZ2UiLCJMaW5rIiwiTXlTdG9yeSIsInNjcm9sbFlQcm9ncmVzcyIsInkiLCJtb3VzZUVudGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm1vdXNlTGVhdmUiLCJhZGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2UiLCJ3aGlsZUhvdmVyIiwidmlld3BvcnQiLCJvbmNlIiwibXktc3RvcnkiLCJoMyIsImlkIiwicCIsInJvdGF0ZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIndoaWxlVGFwIiwiYW5pbWF0ZSIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/My-story.js\n"));

/***/ })

});
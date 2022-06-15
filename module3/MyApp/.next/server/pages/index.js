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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_DigitalClock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/DigitalClock */ \"./src/DigitalClock.js\");\n\n\n\nclass Index extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    constructor(props){\n        super(props);\n        this.state = {\n            time: new Date().toLocaleString()\n        };\n    }\n    tick() {\n        this.setState(()=>{\n            return {\n                time: new Date().toLocaleString()\n            };\n        });\n    }\n    componentDidMount() {\n        this.interval = setInterval(()=>this.tick()\n        , 1000);\n    }\n    componentWillUnmount() {\n        clearInterval(this.interval);\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_DigitalClock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            time: this.state.time\n        }, void 0, false, {\n            fileName: \"D:\\\\React\\\\SourceCode\\\\server-side-rendering-react-beginner\\\\module3\\\\MyApp\\\\pages\\\\index.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNxQjtBQUUvQyxNQUFNRSxLQUFLLFNBQVNGLHdEQUFlO0lBQ2pDSSxZQUFZQyxLQUFLLENBQUU7UUFDakIsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHO1lBQ1hDLElBQUksRUFBRSxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0MsY0FBYyxFQUFFO1NBQ2xDLENBQUM7S0FDSDtJQUVEQyxJQUFJLEdBQUc7UUFDTCxJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFNO1lBQ2xCLE9BQU87Z0JBQ0xKLElBQUksRUFBRSxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0MsY0FBYyxFQUFFO2FBQ2xDLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjtJQUVERyxpQkFBaUIsR0FBRztRQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBR0MsV0FBVyxDQUFDLElBQU0sSUFBSSxDQUFDSixJQUFJLEVBQUU7UUFBQSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3REO0lBRURLLG9CQUFvQixHQUFHO1FBQ3JCQyxhQUFhLENBQUMsSUFBSSxDQUFDSCxRQUFRLENBQUMsQ0FBQztLQUM5QjtJQUVESSxNQUFNLEdBQUc7UUFDUCxxQkFBTyw4REFBQ2hCLHlEQUFZO1lBQUNNLElBQUksRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsSUFBSTs7Ozs7Z0JBQWlCLENBQUM7S0FDN0Q7Q0FDRjtBQUVELGlFQUFlTCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGlnaXRhbENsb2NrIGZyb20gXCIuLi9zcmMvRGlnaXRhbENsb2NrXCI7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0aWNrKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnRpY2soKSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPERpZ2l0YWxDbG9jayB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9PjwvRGlnaXRhbENsb2NrPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEaWdpdGFsQ2xvY2siLCJJbmRleCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRpbWUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ0aWNrIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/DigitalClock.js":
/*!*****************************!*\
  !*** ./src/DigitalClock.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass DigitalClock extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        const date = new Date(this.props.time);\n        let h = date.getHours();\n        let m = date.getMinutes();\n        let s = (date.getSeconds() + date.getMilliseconds() / 1000.0).toFixed(3);\n        let session = \"AM\";\n        if (h == 0) {\n            h = 12;\n        }\n        if (h > 12) {\n            h = h - 12;\n            session = \"PM\";\n        }\n        h = h < 10 ? \"0\" + h : h;\n        m = m < 10 ? \"0\" + m : m;\n        s = s < 10 ? \"0\" + s : s;\n        const time = h + \":\" + m + \":\" + s + \" \" + session;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"clock\",\n            children: time\n        }, void 0, false, {\n            fileName: \"D:\\\\React\\\\SourceCode\\\\server-side-rendering-react-beginner\\\\module3\\\\MyApp\\\\src\\\\DigitalClock.js\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, this);\n    }\n}\nDigitalClock.propTypes = {};\nDigitalClock.defaultProps = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitalClock);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRGlnaXRhbENsb2NrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFFekMsTUFBTUUsWUFBWSxTQUFTRCw0Q0FBUztJQUNsQ0UsTUFBTSxHQUFHO1FBQ1AsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO1FBRXRDLElBQUlDLENBQUMsR0FBR0osSUFBSSxDQUFDSyxRQUFRLEVBQUU7UUFDdkIsSUFBSUMsQ0FBQyxHQUFHTixJQUFJLENBQUNPLFVBQVUsRUFBRTtRQUN6QixJQUFJQyxDQUFDLEdBQUcsQ0FBQ1IsSUFBSSxDQUFDUyxVQUFVLEVBQUUsR0FBR1QsSUFBSSxDQUFDVSxlQUFlLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJQyxPQUFPLEdBQUcsSUFBSTtRQUNsQixJQUFJUixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1ZBLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDUjtRQUNELElBQUlBLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDVkEsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1hRLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDaEI7UUFDRFIsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBR0EsQ0FBQyxHQUFHQSxDQUFDLENBQUM7UUFDekJFLENBQUMsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUdBLENBQUMsR0FBR0EsQ0FBQyxDQUFDO1FBQ3pCRSxDQUFDLEdBQUdBLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHQSxDQUFDLEdBQUdBLENBQUMsQ0FBQztRQUV6QixNQUFNTCxJQUFJLEdBQUdDLENBQUMsR0FBRyxHQUFHLEdBQUdFLENBQUMsR0FBRyxHQUFHLEdBQUdFLENBQUMsR0FBRyxHQUFHLEdBQUdJLE9BQU87UUFDbEQscUJBQU8sOERBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLE9BQU87c0JBQUVYLElBQUk7Ozs7O2dCQUFPLENBQUM7S0FDNUM7Q0FDRjtBQUVETCxZQUFZLENBQUNpQixTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCakIsWUFBWSxDQUFDa0IsWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUUvQixpRUFBZWxCLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vc3JjL0RpZ2l0YWxDbG9jay5qcz9iY2Y5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIERpZ2l0YWxDbG9jayBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMudGltZSk7XHJcblxyXG4gICAgbGV0IGggPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHMgPSAoZGF0ZS5nZXRTZWNvbmRzKCkgKyBkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwMC4wKS50b0ZpeGVkKDMpO1xyXG4gICAgbGV0IHNlc3Npb24gPSBcIkFNXCI7XHJcbiAgICBpZiAoaCA9PSAwKSB7XHJcbiAgICAgIGggPSAxMjtcclxuICAgIH1cclxuICAgIGlmIChoID4gMTIpIHtcclxuICAgICAgaCA9IGggLSAxMjtcclxuICAgICAgc2Vzc2lvbiA9IFwiUE1cIjtcclxuICAgIH1cclxuICAgIGggPSBoIDwgMTAgPyBcIjBcIiArIGggOiBoO1xyXG4gICAgbSA9IG0gPCAxMCA/IFwiMFwiICsgbSA6IG07XHJcbiAgICBzID0gcyA8IDEwID8gXCIwXCIgKyBzIDogcztcclxuXHJcbiAgICBjb25zdCB0aW1lID0gaCArIFwiOlwiICsgbSArIFwiOlwiICsgcyArIFwiIFwiICsgc2Vzc2lvbjtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCI+e3RpbWV9PC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuRGlnaXRhbENsb2NrLnByb3BUeXBlcyA9IHt9O1xyXG5EaWdpdGFsQ2xvY2suZGVmYXVsdFByb3BzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWdpdGFsQ2xvY2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkRpZ2l0YWxDbG9jayIsInJlbmRlciIsImRhdGUiLCJEYXRlIiwicHJvcHMiLCJ0aW1lIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRvRml4ZWQiLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/DigitalClock.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
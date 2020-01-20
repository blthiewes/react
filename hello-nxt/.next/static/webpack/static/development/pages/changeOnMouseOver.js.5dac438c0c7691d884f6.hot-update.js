webpackHotUpdate("static\\development\\pages\\changeOnMouseOver.js",{

/***/ "./src/TextToggleOnMouseOver.js":
/*!**************************************!*\
  !*** ./src/TextToggleOnMouseOver.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\thiewb01\\source\\repos\\react\\hello-nxt\\src\\TextToggleOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TextToggleOnMouseOver = function TextToggleOnMouseOver(_ref) {
  var primaryText = _ref.primaryText,
      secondaryText = _ref.secondaryText;
  var textRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("h1", {
    onMouseOver: function onMouseOver() {
      textRef.current = secondaryText;
      console.log(secondaryText);
    },
    onMouseOut: function onMouseOut() {
      textRef.current = primaryText;
      console.log(primaryText);
    },
    ref: textRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, primaryText);
};

/* harmony default export */ __webpack_exports__["default"] = (TextToggleOnMouseOver);

/***/ })

})
//# sourceMappingURL=changeOnMouseOver.js.5dac438c0c7691d884f6.hot-update.js.map
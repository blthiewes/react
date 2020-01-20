(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\changeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FchangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cthiewb01%5Csource%5Crepos%5Creact%5Chello-nxt%5Cpages%5CchangeOnMouseOver.js!./":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FchangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cthiewb01%5Csource%5Crepos%5Creact%5Chello-nxt%5Cpages%5CchangeOnMouseOver.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/changeOnMouseOver", function() {
      var mod = __webpack_require__(/*! ./pages/changeOnMouseOver.js */ "./pages/changeOnMouseOver.js")
      if(true) {
        module.hot.accept(/*! ./pages/changeOnMouseOver.js */ "./pages/changeOnMouseOver.js", function() {
          if(!next.router.components["/changeOnMouseOver"]) return
          var updatedPage = __webpack_require__(/*! ./pages/changeOnMouseOver.js */ "./pages/changeOnMouseOver.js")
          next.router.update("/changeOnMouseOver", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/changeOnMouseOver.js":
/*!************************************!*\
  !*** ./pages/changeOnMouseOver.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_TextToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/TextToggleOnMouseOver */ "./src/TextToggleOnMouseOver.js");
var _jsxFileName = "C:\\Users\\thiewb01\\source\\repos\\react\\hello-nxt\\pages\\changeOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ChangeOnMouseOver = function ChangeOnMouseOver() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_src_TextToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryText: "This Text",
    secondaryText: "That Text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ChangeOnMouseOver);

/***/ }),

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
  return __jsx("input", {
    onMouseOver: function onMouseOver() {
      textRef.current.value = secondaryText;
      console.log(secondaryText);
    },
    onMouseOut: function onMouseOut() {
      textRef.current.value = primaryText;
      console.log(primaryText);
    },
    ref: textRef,
    value: primaryText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TextToggleOnMouseOver);

/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FchangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cthiewb01%5Csource%5Crepos%5Creact%5Chello-nxt%5Cpages%5CchangeOnMouseOver.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FchangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cthiewb01%5Csource%5Crepos%5Creact%5Chello-nxt%5Cpages%5CchangeOnMouseOver.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FchangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5Cthiewb01%5Csource%5Crepos%5Creact%5Chello-nxt%5Cpages%5CchangeOnMouseOver.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=changeOnMouseOver.js.map
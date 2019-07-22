webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./components/ErrorDisplay.js":
/*!************************************!*\
  !*** ./components/ErrorDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ErrorDisplay = function ErrorDisplay(props) {
  var status = props.errorCode ? "An error [".concat(props.errorCode, "] occurred on server") : "An error occurred on client";
  var erStatement = props.errorCode === 404 ? "Sorry, page not found" : "Error";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1417607594" + " " + "errordiv"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1417607594"
  }, erStatement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1417607594"
  }, status), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1417607594"
  }, "If you think I should know about this issue let me know me on the", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/contact",
    className: "jsx-1417607594"
  }, "contact page"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1417607594"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://res.cloudinary.com/web-school/image/upload/w_530/v1561372166/Paintings/lavendar_skull_izgphk.jpg",
    alt: "Vanitas Still Life with Lavendar",
    className: "jsx-1417607594" + " " + "img404"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1417607594"
  }, "div.errordiv.jsx-1417607594{min-height:400px;max-width:600px;width:100%;margin-left:auto;margin-right:auto;}img.img404.jsx-1417607594{width:100%;height:auto;max-width:530px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2hyaXNcXERvY3VtZW50c1xcUmVwb3NcXGNiLXdlYnNpdGUtbmV4dFxcY29tcG9uZW50c1xcRXJyb3JEaXNwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHNEIsQUFRTixXQUNDLE1BUkksTUFTQSxVQVJMLE1BU2IsS0FSbUIsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2hyaXNcXERvY3VtZW50c1xcUmVwb3NcXGNiLXdlYnNpdGUtbmV4dFxcY29tcG9uZW50c1xcRXJyb3JEaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRXJyb3JEaXNwbGF5ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHN0YXR1cyA9IHByb3BzLmVycm9yQ29kZVxyXG4gICAgPyBgQW4gZXJyb3IgWyR7cHJvcHMuZXJyb3JDb2RlfV0gb2NjdXJyZWQgb24gc2VydmVyYFxyXG4gICAgOiBcIkFuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudFwiO1xyXG4gIGNvbnN0IGVyU3RhdGVtZW50ID1cclxuICAgIHByb3BzLmVycm9yQ29kZSA9PT0gNDA0ID8gXCJTb3JyeSwgcGFnZSBub3QgZm91bmRcIiA6IFwiRXJyb3JcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JkaXZcIj5cclxuICAgICAgPGgyPntlclN0YXRlbWVudH08L2gyPlxyXG4gICAgICA8cD57c3RhdHVzfTwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgSWYgeW91IHRoaW5rIEkgc2hvdWxkIGtub3cgYWJvdXQgdGhpcyBpc3N1ZSBsZXQgbWUga25vdyBtZSBvbiB0aGV7XCIgXCJ9XHJcbiAgICAgICAgPGEgaHJlZj1cIi9jb250YWN0XCI+Y29udGFjdCBwYWdlPC9hPi5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbWc0MDRcIlxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vd2ViLXNjaG9vbC9pbWFnZS91cGxvYWQvd181MzAvdjE1NjEzNzIxNjYvUGFpbnRpbmdzL2xhdmVuZGFyX3NrdWxsX2l6Z3Boay5qcGdcIlxyXG4gICAgICAgICAgYWx0PVwiVmFuaXRhcyBTdGlsbCBMaWZlIHdpdGggTGF2ZW5kYXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGRpdi5lcnJvcmRpdiB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nLmltZzQwNCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIG1heC13aWR0aDogNTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JEaXNwbGF5O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\chris\\Documents\\Repos\\cb-website-next\\components\\ErrorDisplay.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorDisplay);

/***/ }),

/***/ "./node_modules/http-status/lib/index.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cchris%5CDocuments%5CRepos%5Ccb-website-next%5Cpages%5C_error.js!./":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cchris%5CDocuments%5CRepos%5Ccb-website-next%5Cpages%5C_error.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var page = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_ErrorDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ErrorDisplay */ "./components/ErrorDisplay.js");








var pageTitle = "Error Page";

var pageContent = function pageContent(data) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ErrorDisplay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    errorCode: data
  });
};

var Error =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Error, _React$Component);

  function Error() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Error);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Error).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Error, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: pageTitle,
        content: pageContent(this.props.statusCode)
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cchris%5CDocuments%5CRepos%5Ccb-website-next%5Cpages%5C_error.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cchris%5CDocuments%5CRepos%5Ccb-website-next%5Cpages%5C_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5Cchris%5CDocuments%5CRepos%5Ccb-website-next%5Cpages%5C_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.4cd3b50983007a417c72.hot-update.js.map
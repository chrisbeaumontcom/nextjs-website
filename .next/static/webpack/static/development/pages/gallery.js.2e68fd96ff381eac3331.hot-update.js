webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/utils */ "./helpers/utils.js");











var Item =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Item, _React$Component);

  function Item(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Item);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Item).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Item, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.props.getItem(this.props.index);
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data; // const createID = (name, id) => {
      //   return name.toLowerCase().replace(/ /g, "-") + "-" + id;
      // };
      // <div className="enlarge">
      //    <a href={data.url}>
      //       Examine image&nbsp;
      //       <img src="/static/img/mag.png" alt="Click to view full image" />
      //     </a>
      // </div>

      var urlslug = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["itemSlug"])(data.name, data.id);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3653399783" + " " + "itembox"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        as: "/detail/".concat(urlslug),
        href: "/detail?id=".concat(urlslug)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-3653399783"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: data.url.replace("/image/upload/", "/image/upload/w_530/"),
        className: "jsx-3653399783" + " " + "card-img-top sml"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3653399783" + " " + "textbox"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-3653399783"
      }, data.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3653399783" + " " + "card-text itemp"
      }, data.medium, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        className: "jsx-3653399783"
      }), data.height / 10, " x ", data.width / 10, "cm", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        className: "jsx-3653399783"
      }), data.year)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3653399783"
      }, "div.itembox.jsx-3653399783{text-align:left;font-size:12px;margin-bottom:15px;position:relative;}div.textbox.jsx-3653399783{position:relative;}div.enlarge.jsx-3653399783{text-align:right;font-size:10px;}h4.jsx-3653399783{font-size:13px;font-style:italic;margin-bottom:2px;padding-left:15px;padding-top:0;}p.itemp.jsx-3653399783{margin-top:0;padding-top:0;padding-left:15px;margin-bottom:0;padding-bottom:0;}@media only screen and (min-width:650px){div.itembox.jsx-3653399783{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2hyaXNcXERvY3VtZW50c1xcUmVwb3NcXGNiLXdlYnNpdGUtbmV4dFxcY29tcG9uZW50c1xcSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ29CLEFBRzZCLEFBTUUsQUFHRCxBQUlGLEFBT0YsQUFTRSxhQVJELEFBU2QsRUFoQmtCLENBYkgsQ0FTQSxDQUhqQixTQWVvQixJQXBCQyxDQVNyQixDQUlvQixZQVFGLEtBcEJFLENBYUEsVUFRRCxPQXBCbkIsQ0FhZ0IsU0FRaEIsS0FQQSIsImZpbGUiOiJDOlxcVXNlcnNcXGNocmlzXFxEb2N1bWVudHNcXFJlcG9zXFxjYi13ZWJzaXRlLW5leHRcXGNvbXBvbmVudHNcXEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGl0ZW1TbHVnIH0gZnJvbSBcIi4uL2hlbHBlcnMvdXRpbHNcIjtcclxuXHJcbmNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5nZXRJdGVtKHRoaXMucHJvcHMuaW5kZXgpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgLy8gY29uc3QgY3JlYXRlSUQgPSAobmFtZSwgaWQpID0+IHtcclxuICAgIC8vICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csIFwiLVwiKSArIFwiLVwiICsgaWQ7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJlbmxhcmdlXCI+XHJcbiAgICAvLyAgICA8YSBocmVmPXtkYXRhLnVybH0+XHJcbiAgICAvLyAgICAgICBFeGFtaW5lIGltYWdlJm5ic3A7XHJcbiAgICAvLyAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL21hZy5wbmdcIiBhbHQ9XCJDbGljayB0byB2aWV3IGZ1bGwgaW1hZ2VcIiAvPlxyXG4gICAgLy8gICAgIDwvYT5cclxuICAgIC8vIDwvZGl2PlxyXG4gICAgY29uc3QgdXJsc2x1ZyA9IGl0ZW1TbHVnKGRhdGEubmFtZSwgZGF0YS5pZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1ib3hcIj5cclxuICAgICAgICA8TGluayBhcz17YC9kZXRhaWwvJHt1cmxzbHVnfWB9IGhyZWY9e2AvZGV0YWlsP2lkPSR7dXJsc2x1Z31gfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtkYXRhLnVybC5yZXBsYWNlKFwiL2ltYWdlL3VwbG9hZC9cIiwgXCIvaW1hZ2UvdXBsb2FkL3dfNTMwL1wiKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3Agc21sXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGJveFwiPlxyXG4gICAgICAgICAgPGg0PntkYXRhLm5hbWV9PC9oND5cclxuXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgaXRlbXBcIj5cclxuICAgICAgICAgICAge2RhdGEubWVkaXVtfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge2RhdGEuaGVpZ2h0IC8gMTB9IHgge2RhdGEud2lkdGggLyAxMH1jbVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge2RhdGEueWVhcn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBkaXYuaXRlbWJveCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2LnRleHRib3gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXYuZW5sYXJnZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwLml0ZW1wIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xyXG4gICAgICAgICAgICBkaXYuaXRlbWJveCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\chris\\Documents\\Repos\\cb-website-next\\components\\Item.js */"));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=gallery.js.2e68fd96ff381eac3331.hot-update.js.map
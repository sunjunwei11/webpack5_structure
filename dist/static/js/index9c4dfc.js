"use strict";
(self["webpackChunkwebpack5_structure"] = self["webpackChunkwebpack5_structure"] || []).push([["index"],{

/***/ "./src/fun/img.js":
/*!************************!*\
  !*** ./src/fun/img.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_img_nodejs_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/nodejs.png */ "./src/assets/img/nodejs.png");

console.log('nodeImgUrl: ', _assets_img_nodejs_png__WEBPACK_IMPORTED_MODULE_0__);
var imgEle = document.createElement('img');
imgEle.src = _assets_img_nodejs_png__WEBPACK_IMPORTED_MODULE_0__;
imgEle.style = 'width: 100px; height: 100px;';
document.getElementById('app').appendChild(imgEle);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_iconfont_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/iconfont.scss */ "./src/styles/iconfont.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _fun_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fun/img */ "./src/fun/img.js");



var num1 = 1;
var num2 = 2;
console.log(num1 + num2);
var arr = [1, 2, 3];
console.log('includes:', arr.includes(1));

document.getElementById('btn').onclick = function () {
  // 魔法注释，定义chunk的名字
  __webpack_require__.e(/*! import() | utils */ "utils").then(__webpack_require__.bind(__webpack_require__, /*! ./utils */ "./src/utils/index.js")).then(function (_ref) {
    var add = _ref.add,
        testPromise = _ref.testPromise;
    console.log(add(2, 3));
    testPromise.then(function (num) {
      console.log(num);
    });
  });
};

/***/ }),

/***/ "./src/styles/iconfont.scss":
/*!**********************************!*\
  !*** ./src/styles/iconfont.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/img/nodejs.png":
/*!***********************************!*\
  !*** ./src/assets/img/nodejs.png ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nodejs[chunkhash:10].png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=index9c4dfc.js.map
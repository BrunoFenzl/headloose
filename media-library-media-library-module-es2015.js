(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-library-media-library-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/media-library/media-library.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/media-library/media-library.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>media-library works!</p>\n");

/***/ }),

/***/ "./src/app/media-library/media-library-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/media-library/media-library-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ROUTES, MediaLibraryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaLibraryRoutingModule", function() { return MediaLibraryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _media_library_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-library.component */ "./src/app/media-library/media-library.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const ROUTES = [
    {
        path: '',
        component: _media_library_component__WEBPACK_IMPORTED_MODULE_2__["MediaLibraryComponent"],
    },
];
let MediaLibraryRoutingModule = class MediaLibraryRoutingModule {
};
MediaLibraryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], MediaLibraryRoutingModule);



/***/ }),

/***/ "./src/app/media-library/media-library.component.scss":
/*!************************************************************!*\
  !*** ./src/app/media-library/media-library.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLWxpYnJhcnkvbWVkaWEtbGlicmFyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/media-library/media-library.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/media-library/media-library.component.ts ***!
  \**********************************************************/
/*! exports provided: MediaLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaLibraryComponent", function() { return MediaLibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MediaLibraryComponent = class MediaLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
};
MediaLibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-media-library',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./media-library.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/media-library/media-library.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./media-library.component.scss */ "./src/app/media-library/media-library.component.scss")).default]
    })
], MediaLibraryComponent);



/***/ }),

/***/ "./src/app/media-library/media-library.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/media-library/media-library.module.ts ***!
  \*******************************************************/
/*! exports provided: MediaLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaLibraryModule", function() { return MediaLibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _media_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-library.component */ "./src/app/media-library/media-library.component.ts");
/* harmony import */ var _media_library_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-library-routing.module */ "./src/app/media-library/media-library-routing.module.ts");





let MediaLibraryModule = class MediaLibraryModule {
};
MediaLibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_media_library_component__WEBPACK_IMPORTED_MODULE_3__["MediaLibraryComponent"]],
        exports: [_media_library_component__WEBPACK_IMPORTED_MODULE_3__["MediaLibraryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _media_library_routing_module__WEBPACK_IMPORTED_MODULE_4__["MediaLibraryRoutingModule"],
        ]
    })
], MediaLibraryModule);



/***/ })

}]);
//# sourceMappingURL=media-library-media-library-module-es2015.js.map
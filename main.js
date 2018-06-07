(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-entry/new-entry.component */ "./src/app/new-entry/new-entry.component.ts");
/* harmony import */ var _lookup_lookup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lookup/lookup.component */ "./src/app/lookup/lookup.component.ts");
/* harmony import */ var _footer_component_footer_compoent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-component/footer-compoent */ "./src/app/footer-component/footer-compoent.ts");
/* harmony import */ var _auto_complete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auto-complete/autocomplete.component */ "./src/app/auto-complete/autocomplete.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var _query_result_table_query_result_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./query-result-table/query-result-table.component */ "./src/app/query-result-table/query-result-table.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_entry_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/entry.service */ "./src/app/shared/entry.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_5__["NewEntryComponent"],
                _lookup_lookup_component__WEBPACK_IMPORTED_MODULE_6__["LookupComponent"],
                _footer_component_footer_compoent__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _auto_complete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteFilterEmployeesComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__["DatepickerComponent"],
                _query_result_table_query_result_table_component__WEBPACK_IMPORTED_MODULE_14__["QueryResultTableComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot([
                    { path: 'new-entry', component: _new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_5__["NewEntryComponent"] },
                    { path: 'entry-lookup', component: _lookup_lookup_component__WEBPACK_IMPORTED_MODULE_6__["LookupComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '**', redirectTo: 'login', pathMatch: 'full' }
                ])
            ],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], _shared_entry_service__WEBPACK_IMPORTED_MODULE_16__["EntryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auto-complete/autocomplete.component.css":
/*!**********************************************************!*\
  !*** ./src/app/auto-complete/autocomplete.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".autocomplete-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n    color: black;\r\n  }\r\n  \r\n  .autocomplete-full-width {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/auto-complete/autocomplete.component.html":
/*!***********************************************************!*\
  !*** ./src/app/auto-complete/autocomplete.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"autocomplete-form\">\r\n    <mat-form-field class=\"autocomplete-full-width\">\r\n        <input type=\"text\" placeholder=\"Employee\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let employee of filteredEmployees | async\" [value]=\"employee\">\r\n                {{ employee }}\r\n            </mat-option>\r\n        </mat-autocomplete>\r\n    </mat-form-field>\r\n</form>"

/***/ }),

/***/ "./src/app/auto-complete/autocomplete.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auto-complete/autocomplete.component.ts ***!
  \*********************************************************/
/*! exports provided: AutocompleteFilterEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteFilterEmployeesComponent", function() { return AutocompleteFilterEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutocompleteFilterEmployeesComponent = /** @class */ (function () {
    function AutocompleteFilterEmployeesComponent(userService) {
        this.userService = userService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.employees = [];
    }
    AutocompleteFilterEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredEmployees = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filter(val); }));
        this.userService.getUsers().subscribe(function (users) {
            _this.employees = users;
            console.log(_this.employees);
        });
    };
    AutocompleteFilterEmployeesComponent.prototype.filter = function (val) {
        var filteredString = this.employees.filter(function (employee) { return employee !== null && employee.toLowerCase().includes(val.toLowerCase()); });
        this.value = filteredString[0];
        this.sendValue();
        return filteredString;
    };
    AutocompleteFilterEmployeesComponent.prototype.sendValue = function () {
        this.selected.emit(this.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AutocompleteFilterEmployeesComponent.prototype, "selected", void 0);
    AutocompleteFilterEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete-filter',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/auto-complete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.css */ "./src/app/auto-complete/autocomplete.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AutocompleteFilterEmployeesComponent);
    return AutocompleteFilterEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/datepicker/datepicker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.html":
/*!******************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" (dateChange)=\"addEvent('change', $event)\" >\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.ts ***!
  \****************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this.dateSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DatepickerComponent.prototype.addEvent = function (type, event) {
        this.dateValue = event.value;
        this.sendDate();
    };
    DatepickerComponent.prototype.sendDate = function () {
        this.dateSelected.emit(this.dateValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatepickerComponent.prototype, "dateSelected", void 0);
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.css */ "./src/app/datepicker/datepicker.component.css")],
        })
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/footer-component/footer-compoent.ts":
/*!*****************************************************!*\
  !*** ./src/app/footer-component/footer-compoent.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-component',
            template: __webpack_require__(/*! ./footer-component.html */ "./src/app/footer-component/footer-component.html"),
            styles: [__webpack_require__(/*! ./footer-component.css */ "./src/app/footer-component/footer-component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footer-component/footer-component.css":
/*!*******************************************************!*\
  !*** ./src/app/footer-component/footer-component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".MCImage {\r\n    padding-top: 0px;\r\n    width: 200px;\r\n    height: 200px;\r\n}"

/***/ }),

/***/ "./src/app/footer-component/footer-component.html":
/*!********************************************************!*\
  !*** ./src/app/footer-component/footer-component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <img src=\"assets/mc.png\" class=\"MCImage\"/>\r\n    <h6> Ⓒ MasterControl 2018. All Rights Reserved. </h6>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: 'Montserrat', sans-serif;\r\n    /*background: linear-gradient(to bottom right, #3d3d3d, #262626);*/\r\n    margin:0;\r\n    padding: 0;\r\n    color: white;\r\n\r\n\r\n    background: rgba(76, 175, 80, 0.0); /* Green background with 30% opacity */\r\n    height: 110vh;\r\n}\r\n\r\n.login {\r\n    background-color: #f7f7f7; /*f7f7f7   1c1c1c*/\r\n    width: 500px;\r\n    margin: auto;\r\n    height: 350px;\r\n    color: black;\r\n    border: 0.5px #494949 solid;\r\n    box-shadow: 0 8px 6px -6px black; /*565656*/\r\n    border-radius: 2px; /* Safari */\r\n    transition-duration: 0.7s;\r\n}\r\n\r\n.login:hover {\r\n    box-shadow: 0 18px 16px -6px black; /*565656*/\r\n\r\n}\r\n\r\n.inputTextWrapper {\r\n    padding: 10px;\r\n}\r\n\r\n.inputTextWrapper h3 {\r\n    text-align: center;\r\n}\r\n\r\n.inputText {\r\n    width: 70%;   \r\n    border: 0px solid black;\r\n    color: black;\r\n    border-bottom-width: 1px;\r\n    background-color: transparent;\r\n    font-size: 2em;\r\n    outline-color: #ea3c3c;\r\n}\r\n\r\n.loginButton {\r\n    position: relative;\r\n    background-color: #ea3c3c; /*4CAF50*/\r\n    border: none;\r\n    font-size: 15px;\r\n    color: white;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center; /* Safari */\r\n    transition-duration: 0.4s;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 30px 30px 30px 30px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.loginButton:hover {\r\n    box-shadow: 5px 10px 18px #888888;\r\n}\r\n\r\n.divider{\r\n    width:5px;\r\n    height:auto;\r\n    display:inline-block;\r\n}\r\n\r\n.MCImage {\r\n    padding-top: 10px;\r\n    width: 20%;\r\n}\r\n\r\n.failedMessage {\r\n    color: red\r\n}\r\n\r\n.specialHr {\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 5px solid #ea3c3c;\r\n    margin: 1em 0;\r\n    padding: 0; \r\n    clear:both;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat:100\" rel=\"stylesheet\">\r\n\r\n<body>\r\n    <div style=\"text-align:center\">\r\n\r\n        <h1>\r\n            Work From Home Tracker\r\n            <hr class=\"specialHr\">\r\n        </h1>\r\n\r\n        <h4 class=\"failedMessage\" *ngIf=\"loginFailed\">Login Failed: Username or Password is incorrect.</h4>\r\n        <!--<img width=\"300\" alt=\"image\" src=\"../photos/m.jpg\">-->\r\n    </div>\r\n\r\n    <div>\r\n        <h3>\r\n            Login\r\n        </h3>\r\n        <div class=\"login\">\r\n\r\n\r\n            <div class=\"inputTextWrapper\">\r\n                <h3>Username</h3>\r\n                <input class=\"inputText\" type=\"text\" name=\"name\" [(ngModel)]='username' />\r\n\r\n            </div>\r\n\r\n            <div class=\"inputTextWrapper\">\r\n                <h3>Password</h3>\r\n                <input class=\"inputText\" type=\"password\" name=\"name\" [(ngModel)]='password' />\r\n            </div>\r\n\r\n            <div style=\"padding-top: 30px;\">\r\n\r\n\r\n                <button class=\"loginButton\" style=\"background-color:#999999\" (click)=\"employee_login_was_clicked()\"> NEW ENTRY </button>\r\n\r\n                <div class=\"divider\"></div>\r\n\r\n                <button (click)=\"adam_login_was_clicked()\" class=\"loginButton\"> LOOKUP </button>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <app-footer-component></app-footer-component>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this.userService.getUsers().then(users => this.users = users);
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.employee_login_was_clicked = function () {
        this.routingUrl = '/new-entry';
        this.router.navigate([this.routingUrl]);
        //this.login(); For now!
    };
    LoginComponent.prototype.login = function () {
        // this.userFound = this.users.find(u => u.username === this.username);
        // if (this.userFound && this.userFound.password === this.password) {
        //     this.loginFailed = false;
        //     this.userService.setCurrentUser(this.userFound);
        //     this.router.navigate([this.routingUrl]);
        // } else {
        //     this.loginFailed = true;
        // }
    };
    LoginComponent.prototype.check_if_validation_is_true = function (username, password) {
        // for (const u of this.users) {
        //     if (u.username === username) {
        //         return true;
        //     }
        // }
        // return false;
    };
    LoginComponent.prototype.adam_login_was_clicked = function () {
        this.routingUrl = '/entry-lookup';
        this.router.navigate([this.routingUrl]);
        //this.login();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-component',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/lookup/lookup.component.css":
/*!*********************************************!*\
  !*** ./src/app/lookup/lookup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerWrapper {\r\n    background-color: #f7f7f7;\r\n    margin: auto;\r\n    height: 500px;\r\n    border: 0.5px black solid;\r\n    box-shadow: 0 10px 8px -8px black; /*#565656*/\r\n    border-radius: 2px; /* Safari */\r\n    transition-duration: 0.7s;\r\n    width: 500px;\r\n    float: left;\r\n\r\n}\r\n\r\n\r\n.outerWrapper:hover {\r\n    box-shadow: 0 18px 16px -6px black;\r\n\r\n}\r\n\r\n\r\ntextarea{\r\n    resize: none;\r\n    color: black;\r\n    outline-color: #ea3c3c;\r\n\r\n}\r\n\r\n\r\n.submitButton {\r\n    position: relative;\r\n    background-color: #ea3c3c;\r\n    border: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    padding: 20px;\r\n    width: 200px;\r\n    text-align: center; /* Safari */\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 7px;\r\n    border-radius: 30px 30px 30px 30px;\r\n    font-family: 'Montserrat', sans-serif;\r\n\r\n}\r\n\r\n\r\n.submitButton:hover {\r\n    box-shadow: 5px 10px 18px #888888;\r\n}\r\n\r\n\r\nbody {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: white;\r\n    min-height: 100vh;\r\n}\r\n\r\n\r\n.dropdown.dropdown-scroll .dropdown-menu {\r\n    max-height: 200px;\r\n    width: 60px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.search-control {\r\n    padding: 5px 10px;\r\n}\r\n\r\n\r\n.inputTextWrapper {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n}\r\n\r\n\r\n.overallWrapper {\r\n    width: 1100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.queryResults{\r\n    padding-bottom: 50px;\r\n    padding-top: 10px;\r\n    background-color: #f2f2f2;\r\n    width: 700px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    border: 0.25px #545454 solid;\r\n    color: black;\r\n\r\n}\r\n\r\n\r\n.newEntryButtonWrapper {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 120px;\r\n    \r\n}\r\n\r\n\r\n.newEntryButton {\r\n    background-color: #ea3c3c;\r\n    border: none;\r\n    font-size: 12px;\r\n    color: white;\r\n    padding: 10px;\r\n    width: 150px;\r\n    text-align: center; /* Safari */\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 7px;\r\n    border-radius: 30px 30px 30px 30px;\r\n\r\n}\r\n\r\n\r\n.newEntryButton:hover {\r\n    box-shadow: 5px 10px 18px black;\r\n}\r\n\r\n\r\n.logoutButton {\r\n    background-color: #999999;\r\n    border: none;\r\n    font-size: 12px;\r\n    color: white;\r\n    padding: 10px;\r\n    text-align: center; /* Safari */\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 7px;\r\n    border-radius: 30px 30px 30px 30px;\r\n\r\n}\r\n\r\n\r\n.logoutButton:hover {\r\n    box-shadow: 5px 10px 18px black;\r\n}\r\n\r\n\r\n.logoutButtonWrapper {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 40px;\r\n}\r\n\r\n\r\n.specialHr {\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 5px solid #ea3c3c;\r\n    margin: 1em 0;\r\n    padding: 0; \r\n    clear:both;\r\n}\r\n\r\n\r\n.wrapper {\r\n    position: relative;\r\n    border: 0px solid cornflowerblue;\r\n  }\r\n\r\n\r\n.wrapper label {\r\n    color: white;\r\n    line-height: 30px;\r\n    padding: 0px 15px;\r\n    position: absolute;\r\n    background-color: #3d3d3d;\r\n    /* Adjust these values to posiytion the title or label */\r\n    top: -15px;\r\n    left: 160px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border-radius: 2px;\r\n\r\n  }"

/***/ }),

/***/ "./src/app/lookup/lookup.component.html":
/*!**********************************************!*\
  !*** ./src/app/lookup/lookup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Montserrat:100\" rel=\"stylesheet\">\r\n\r\n\r\n<body>\r\n\r\n    <div class=\"newEntryButtonWrapper\">\r\n        <a [routerLink]=\"['/new-entry']\" class=\"newEntryButton\">\r\n            New Entry\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"logoutButtonWrapper\">\r\n        <a [routerLink]=\"['/login']\" class=\"logoutButton\">\r\n            Logout\r\n        </a>\r\n    </div>\r\n\r\n    <div style=\"text-align:center\">\r\n\r\n        <h1>\r\n            Lookup\r\n        </h1>\r\n        <hr class=\"specialHr\">\r\n\r\n    </div>\r\n\r\n    <div style=\"height: 50px;\"></div>\r\n\r\n    <div class=\"overallWrapper\">\r\n        <div>\r\n            <h4>Individual Query</h4>\r\n            <div class=\"outerWrapper\" style=\"height: 300px;\">\r\n\r\n                <div class=\"inputTextWrapper\">\r\n\r\n                    <!-- <input [(ngModel)]=\"selectedUser\" #selectedUser=\"ngModel\" id=\"user\" /> -->\r\n                    <app-autocomplete-filter (selected)=\"receiveEmployee($event)\">\r\n                    </app-autocomplete-filter>\r\n\r\n                </div>\r\n\r\n                <div class=\"inputTextWrapper\">\r\n                    <app-datepicker (dateSelected)=\"receiveDate($event)\" style=\"float: left;\"></app-datepicker>\r\n                </div>\r\n\r\n                <div style=\"height: 60px;\"></div>\r\n\r\n\r\n                <div style=\"padding-top: 20px;\">\r\n                    <button class=\"submitButton\" (click)=\"searchEntry()\"> SEARCH </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"height: 100px;\"></div>\r\n\r\n        <div>\r\n            <h4>General Query</h4>\r\n            <div class=\"outerWrapper\" style=\"height: 150px;\">\r\n\r\n                <div style=\"padding-top: 45px;\">\r\n                    <button class=\"submitButton\" style=\"width: 260px;\" (click)=\"exportToExcel()\"> EXPORT TO EXCEL </button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"height: 50px;\"></div>\r\n\r\n\r\n    <div *ngIf=\"showQueryResults\">\r\n        <app-query-result-table [user]=\"selectedUser\" [date]=\"date\" [entries]=\"entries\"></app-query-result-table>\r\n    </div>\r\n\r\n    <app-footer-component></app-footer-component>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/lookup/lookup.component.ts":
/*!********************************************!*\
  !*** ./src/app/lookup/lookup.component.ts ***!
  \********************************************/
/*! exports provided: LookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupComponent", function() { return LookupComponent; });
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/entry.service */ "./src/app/shared/entry.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-csv/Angular2-csv */ "./node_modules/angular2-csv/Angular2-csv.js");
/* harmony import */ var angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LookupComponent = /** @class */ (function () {
    function LookupComponent(userService, entryService) {
        this.userService = userService;
        this.entryService = entryService;
        this.showQueryResults = false;
    }
    LookupComponent.prototype.ngOnInit = function () {
    };
    LookupComponent.prototype.exportToExcel = function () {
        var _this = this;
        this.entryService.getAllEntries().subscribe(function (entries) {
            _this.entries = entries;
        });
        var head = ['Full Name', 'Did Yesterday', 'Doing Today', 'Start Notes', 'Start Time', 'Did Today', 'End Notes', 'Time Finished', 'Hours Worked'];
        new angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_3__["Angular2Csv"](this.entries, "General-Query", { headers: (head) });
    };
    LookupComponent.prototype.receiveEmployee = function ($event) {
        this.selectedUserName = $event;
        // if (this.users) {
        //     this.selectedUser = this.users.find(u => u.name === this.selectedUserName);
        // }
    };
    LookupComponent.prototype.receiveDate = function ($event) {
        this.date = $event;
    };
    LookupComponent.prototype.searchEntry = function () {
        var _this = this;
        this.showQueryResults = false;
        if (!this.selectedUserName && !this.date) {
            this.entryService.getAllEntries().subscribe(function (entries) {
                _this.entries = entries;
            });
        }
        else if (this.selectedUserName && !this.date) {
            this.entryService.getEntriesByName(this.selectedUserName).subscribe(function (entries) {
                _this.entries = entries;
            });
        }
        else if (this.date && !this.selectedUserName) {
            this.entryService.getEntriesByDate(this.date).subscribe(function (entries) {
                _this.entries = entries;
            });
        }
        else {
            this.entryService.getEntriesByNameAndDate(this.selectedUserName, this.date).subscribe(function (entries) {
                _this.entries = entries;
            });
        }
        this.showQueryResults = true;
        // this.entryService.getEntriesByName(this.selectedUser).subscribe((entries: Entry[]) => {
        //   console.log(entries);
        //   // this.entry = entries[0];
        //   // this.showQueryResults = true;
        // });
        // if (this.selectedUser && this.date) {
        //     this.entry = this.selectedUser.entries.find(entry => entry.date === this.date.toDateString());
        //     if (!this.entry) {
        //         this.entry = {
        //             date: this.date.toDateString(),
        //             morning_startTime: '--',
        //             morning_didYesterday: '--',
        //             morning_doingToday: '--',
        //             morning_notes: '--',
        //             evening_endTime: '--',
        //             evening_didToday: '--',
        //             evening_notes: '--'
        //         };
        //     }
        // }
    };
    LookupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./lookup.component.html */ "./src/app/lookup/lookup.component.html"),
            styles: [__webpack_require__(/*! ./lookup.component.css */ "./src/app/lookup/lookup.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], _shared_entry_service__WEBPACK_IMPORTED_MODULE_1__["EntryService"]])
    ], LookupComponent);
    return LookupComponent;
}());



/***/ }),

/***/ "./src/app/new-entry/new-entry.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-entry/new-entry.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerWrapper {\r\n    background-color: #f7f7f7; \r\n    width: 500px;\r\n    margin: auto;\r\n    height: 500px;\r\n    border: 0.5px black solid;\r\n    box-shadow: 0 8px 6px -6px black;\r\n    border-radius: 2px; /* Safari */\r\n    transition-duration: 0.7s;\r\n    float: left;\r\n    color: black;\r\n}\r\n\r\n\r\n.outerWrapper:hover {\r\n    box-shadow: 0 18px 16px -6px black;\r\n\r\n}\r\n\r\n\r\ntextarea{\r\n    resize: none;\r\n    background-color: #efefef;\r\n    color: black;\r\n    box-shadow:         inset 0 0 10px #bababa;   \r\n     border: none;\r\n     outline-color: #ea3c3c;\r\n\r\n\r\n}\r\n\r\n\r\n/*ea3c3c*/\r\n\r\n\r\n.submitButton {\r\n    background-color: #ea3c3c;\r\n    border: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    padding: 20px;\r\n    width: 200px;\r\n    text-align: center; /* Safari */\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 7px;\r\n    border-radius: 30px 30px 30px 30px;\r\n    box-shadow:         inset 5 10 10px #545454; \r\n    font-family: 'Montserrat', sans-serif;\r\n\r\n\r\n}\r\n\r\n\r\n.submitButton:hover {\r\n    box-shadow: 5px 10px 18px #888888;\r\n}\r\n\r\n\r\nbody {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: white;\r\n    height: 100%;\r\n    min-height: 100vh;\r\n\r\n}\r\n\r\n\r\n.overallWrapper {\r\n    width: 1100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.lookupButtonWrapper {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 120px;\r\n    \r\n}\r\n\r\n\r\n.lookupButton {\r\n    background-color: #ea3c3c;\r\n    border: none;\r\n    font-size: 12px;\r\n    color: white;\r\n    padding: 10px;\r\n    width: 150px;\r\n    text-align: center; /* Safari */\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 7px;\r\n    border-radius: 30px 30px 30px 30px;\r\n\r\n}\r\n\r\n\r\n.lookupButton:hover {\r\n    box-shadow: 5px 10px 18px black;\r\n}\r\n\r\n\r\n.logoutButton {\r\n    background-color: #999999;\r\n    border: none;\r\n    font-size: 12px;\r\n    color: white;\r\n    padding: 10px;\r\n    text-align: center; /* Safari */\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 7px;\r\n    border-radius: 30px 30px 30px 30px;\r\n\r\n}\r\n\r\n\r\n.logoutButton:hover {\r\n    box-shadow: 5px 10px 18px black;\r\n}\r\n\r\n\r\n.logoutButtonWrapper {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 40px;\r\n}\r\n\r\n\r\n.specialHr {\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 5px solid #ea3c3c;\r\n    margin: 1em 0;\r\n    padding: 0; \r\n    clear:both;\r\n}\r\n\r\n\r\n.coolLabel {\r\n    background-color: red;\r\n    position: fixed;\r\n    float: left;\r\n    width: 120px;\r\n    top: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/new-entry/new-entry.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-entry/new-entry.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Montserrat:100\" rel=\"stylesheet\">\r\n\r\n\r\n<body>\r\n\r\n    <div class=\"lookupButtonWrapper\">\r\n        <a [routerLink]=\"['/entry-lookup']\" class=\"lookupButton\">\r\n           Lookup\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"logoutButtonWrapper\">\r\n        <a [routerLink]=\"['/login']\" class=\"logoutButton\">\r\n            Logout\r\n        </a>\r\n    </div>\r\n\r\n    <div style=\"text-align:center\">\r\n\r\n        <h1>\r\n            New Entry\r\n        </h1>\r\n        <hr class=\"specialHr\">\r\n\r\n    </div>\r\n\r\n    <div style=\"height: 50px;\"></div>\r\n\r\n    <div class=\"overallWrapper\">\r\n\r\n        <div style=\"position: relative;\">\r\n            <div>\r\n                <h4>Morning Log</h4>\r\n            </div>\r\n            <div class=\"outerWrapper\">\r\n                \r\n                    <div class=\"inputTextWrapper\">\r\n                        <h3>Did Yesterday (Labs)</h3>\r\n                        <textarea name=\"didYesterday\" rows=\"4\" cols=\"50\" [(ngModel)]='didYesterday'></textarea>\r\n                    </div>\r\n                \r\n\r\n                <div class=\"inputTextWrapper\">\r\n                    <h3>Plan For Today</h3>\r\n                    <textarea name=\"doToday\" rows=\"4\" cols=\"50\" [(ngModel)]='doingToday' required></textarea>\r\n                </div>\r\n\r\n                <div class=\"inputTextWrapper\">\r\n                    <h3>Notes</h3>\r\n                    <textarea name=\"notes\" rows=\"4\" [(ngModel)]='morningNotes' cols=\"50\"></textarea>\r\n                </div>\r\n\r\n                <div style=\"padding-top: 20px;\">\r\n                    <button class=\"submitButton\" (click)=\"morningSubmit()\"> SUBMIT </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <h4>Evening Log</h4>\r\n            <div class=\"outerWrapper\" style=\"height: 380px;\">\r\n\r\n                <div class=\"inputTextWrapper\">\r\n                    <h3>Accomplished Today</h3>\r\n                    <textarea\r\n                        name=\"didYesterday\"\r\n                        rows=\"4\"\r\n                        cols=\"50\"\r\n                        required\r\n                        [(ngModel)]=\"didToday\"></textarea>\r\n                </div>\r\n\r\n                <div class=\"inputTextWrapper\">\r\n                    <h3>Notes</h3>\r\n                    <textarea\r\n                    name=\"notes\"\r\n                    rows=\"4\"\r\n                    cols=\"50\"\r\n                    [(ngModel)]=\"eveningNotes\"></textarea>\r\n                </div>\r\n\r\n                <div style=\"padding-top: 20px;\">\r\n                    <button class=\"submitButton\" (click)=\"eveningSubmit()\"> SUBMIT </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-footer-component></app-footer-component>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/new-entry/new-entry.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-entry/new-entry.component.ts ***!
  \**************************************************/
/*! exports provided: NewEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEntryComponent", function() { return NewEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/entry.service */ "./src/app/shared/entry.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewEntryComponent = /** @class */ (function () {
    function NewEntryComponent(userService, entryService) {
        this.userService = userService;
        this.entryService = entryService;
    }
    NewEntryComponent.prototype.ngOnInit = function () {
        // this.todaysDate = new Date;
        // this.retrieveEntry();
    };
    Object.defineProperty(NewEntryComponent.prototype, "didYesterday", {
        get: function () {
            return this._didYesterday;
        },
        set: function (value) {
            this._didYesterday = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewEntryComponent.prototype, "doingToday", {
        get: function () {
            return this._doingToday;
        },
        set: function (value) {
            this._doingToday = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewEntryComponent.prototype, "morningNotes", {
        get: function () {
            return this._morningNotes;
        },
        set: function (value) {
            this._morningNotes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewEntryComponent.prototype, "didToday", {
        get: function () {
            return this._didToday;
        },
        set: function (value) {
            this._didToday = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewEntryComponent.prototype, "eveningNotes", {
        get: function () {
            return this._eveningNotes;
        },
        set: function (value) {
            this._eveningNotes = value;
        },
        enumerable: true,
        configurable: true
    });
    NewEntryComponent.prototype.morningSubmit = function () {
        console.log('submit morning data');
        //console.log('today\'s date: ', this.todaysDate.toDateString());
        console.log('Did Yesterday: ', this.didYesterday);
        console.log('Doing Today: ', this.doingToday);
        var timeStamp = new Date();
        var morningEntry = {
            userId: "bonadfjwef",
            fullName: "John Doe",
            time_started: timeStamp,
            didYesterday: this.didYesterday,
            doingToday: this.doingToday,
            notes: this.morningNotes,
        };
        this.entryService.sendMorningEntry(morningEntry);
    };
    NewEntryComponent.prototype.eveningSubmit = function () {
        // Need to send data to database
        console.log('submit evening data');
        //console.log('today\'s date: ', this.todaysDate.toDateString());
        console.log('Did Today: ', this.didYesterday);
        var timeStamp = new Date();
        var eveningEntry = {
            userId: "bonadfjwef",
            fullName: "John Doe",
            time_finished: timeStamp,
            didToday: this._didToday,
            notes: this._eveningNotes,
        };
        this.entryService.sendEveningEntry(eveningEntry);
    };
    NewEntryComponent.prototype.retrieveEntry = function () {
        // if (this.userService.getCurrentUser()) {
        //     // this.entry = this.userService.getCurrentUser().entries.find(entry => entry.date === this.todaysDate.toDateString());
        //     // if ( this.entry ) {
        //     //     if ( this.entry.didYesterday ) {
        //     //         this._didYesterday = this.entry.didYesterday;
        //     //     }
        //     //     if ( this.entry.doingToday ) {
        //     //         this._doingToday = this.entry.doingToday;
        //     //     }
        //     //     if ( this.entry.start_notes ) {
        //     //         this._morningNotes = this.entry.start_notes;
        //     //     }
        //     //     if ( this.entry.didToday ) {
        //     //         this._didToday = this.entry.didToday;
        //     //     }
        //     //     if ( this.entry.end_notes ) {
        //     //         this._eveningNotes = this.entry.end_notes;
        //     //     }
        //     // } else {
        //         this._didYesterday = '';
        //         this._doingToday = '';
        //         this._morningNotes = '';
        //         this._didToday = '';
        //         this._eveningNotes = '';
        //     //}
        // }
    };
    NewEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./new-entry.component.html */ "./src/app/new-entry/new-entry.component.html"),
            styles: [__webpack_require__(/*! ./new-entry.component.css */ "./src/app/new-entry/new-entry.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _shared_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"]])
    ], NewEntryComponent);
    return NewEntryComponent;
}());



/***/ }),

/***/ "./src/app/query-result-table/query-result-table.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/query-result-table/query-result-table.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    margin: 25px auto;\r\n    border-collapse: collapse;\r\n    border: 1px solid #eee;\r\n    border-bottom: 2px solid #ea3c3c;\r\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.05), 0px 30px 20px rgba(0, 0, 0, 0.05);\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n  }\r\n  table tr:hover {\r\n    background: white;\r\n  }\r\n  table tr:hover td {\r\n    background: lightgray;\r\n    color: black;\r\n  }\r\n  table th, table td {\r\n    color: black;\r\n    border: 1px solid #eee;\r\n    padding: 12px 35px;\r\n    border-collapse: collapse;\r\n  }\r\n  table th {\r\n    background: #ea3c3c;\r\n    color: #fff;\r\n}\r\n  table th.last {\r\n    border-right: none;\r\n  }\r\n  table td {\r\n    text-transform: capitalize;\r\n    background: white;\r\n    color: black;\r\n    font-family: Arial, Helvetica, sans-serif\r\n  }\r\n  .tableWrapper {\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/query-result-table/query-result-table.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/query-result-table/query-result-table.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tableWrapper\">\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <th>\r\n                </th>\r\n                <th colspan=\"4\">\r\n                    Morning\r\n                </th>\r\n                <th colspan=\"3\">\r\n                    Evening\r\n                </th>\r\n                <th>\r\n                </th>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th style=\"background-color: #888888;\">\r\n                    Name\r\n                </th>\r\n                <th style=\"background-color: #888888;\"> Start\r\n                </th>\r\n                <th style=\"background-color: #888888;\"> Did Yesterday (Labs)\r\n                </th>\r\n                <th style=\"background-color: #888888;\"> Plan For Today\r\n                </th>\r\n                <th style=\"background-color: #888888;\"> Notes\r\n                </th>\r\n                <th style=\"background-color: #888888;\"> End\r\n                </th>\r\n                <th style=\"background-color: #888888;\"> Accomplished Today\r\n                </th>\r\n                <th style=\"background-color: #888888;\"> Note\r\n                </th>\r\n                <th style=\"background-color: #888888;\"> Hours Worked\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tr *ngFor=\"let entry of entries\">\r\n            <td>{{ entry.fullName }}</td>\r\n            <td>{{ entry.time_started }}</td>\r\n            <td>{{ entry.didYesterday }}</td>\r\n            <td>{{ entry.doingToday }}</td>\r\n            <td>{{ entry.start_notes }}</td>\r\n            <td>{{ entry.time_finished}} </td>\r\n            <td>{{ entry.didToday }}</td>\r\n            <td>{{ entry.end_notes }}</td>\r\n            <td>{{ entry.hoursWorked }}</td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/query-result-table/query-result-table.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/query-result-table/query-result-table.component.ts ***!
  \********************************************************************/
/*! exports provided: QueryResultTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryResultTableComponent", function() { return QueryResultTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 // EventEmitter sends data between two components
var QueryResultTableComponent = /** @class */ (function () {
    function QueryResultTableComponent() {
    }
    // entriesFromUser: Entry[] = [];
    QueryResultTableComponent.prototype.ngOnInit = function () {
        console.log(this.user, 'user');
        console.log(this.date, 'date');
        console.log(this.entries);
        // if (this.user && !this.date) {
        //     this.entriesFromUser = this.user.entries;
        // } else if (this.user && this.date && this.entry) {
        // this.entriesFromUser.push(this.entry);
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QueryResultTableComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QueryResultTableComponent.prototype, "date", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], QueryResultTableComponent.prototype, "entries", void 0);
    QueryResultTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-result-table',
            template: __webpack_require__(/*! ./query-result-table.component.html */ "./src/app/query-result-table/query-result-table.component.html"),
            styles: [__webpack_require__(/*! ./query-result-table.component.css */ "./src/app/query-result-table/query-result-table.component.css")]
        })
    ], QueryResultTableComponent);
    return QueryResultTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/entry.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/entry.service.ts ***!
  \*****************************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntryService = /** @class */ (function () {
    function EntryService(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
    }
    EntryService.prototype.getEntriesByName = function (fullName) {
        var url = 'https://pricey-giver.glitch.me/entries?name=' + fullName;
        return this.httpClient.get(url);
    };
    EntryService.prototype.getEntriesByDate = function (date) {
        var url = 'https://pricey-giver.glitch.me/entries?date=' + date;
        return this.httpClient.get(url);
    };
    EntryService.prototype.getEntriesByNameAndDate = function (name, date) {
        var url = 'https://pricey-giver.glitch.me/entries?name=' + name + '&date=' + date;
        return this.httpClient.get(url);
    };
    EntryService.prototype.getAllEntries = function () {
        var url = 'https://pricey-giver.glitch.me/entries';
        return this.httpClient.get(url);
    };
    EntryService.prototype.sendMorningEntry = function (data) {
        var url = 'https://pricey-giver.glitch.me/start-day';
        console.log(data);
        this.http.post(url, data)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
        // this.httpClient.post(url, data).subscribe(
        //   res => {
        //     console.log(res);
        //   },
        //   err => {
        //     console.log("Error occured");
        //   }
        // );
    };
    EntryService.prototype.sendEveningEntry = function (data) {
        var url = 'https://pricey-giver.glitch.me/end-day';
        console.log(data);
        this.httpClient.post(url, data).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
    };
    EntryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], EntryService);
    return EntryService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getUsers = function () {
        var url = 'https://pricey-giver.glitch.me/users';
        return this.httpClient.get(url);
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UserService.prototype.setCurrentUser = function (newUser) {
        this.currentUser = newUser;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\workfromhome-app\wfh\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
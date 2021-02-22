(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Oky":
/*!**********************************************************!*\
  !*** ./src/app/scanning-test/scanning-test.component.ts ***!
  \**********************************************************/
/*! exports provided: ScanningTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanningTestComponent", function() { return ScanningTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ScanningTestComponent {
    constructor() { }
    ngOnInit() {
    }
    quit() {
        alert("quit");
        //EB.Application.quit();
    }
    navigate() {
        alert("navigate");
        // window.location.href='./index.html'
    }
    fnScanEnable() {
        alert('ScanEnable');
        new fnScanEnable();
        //EB.Barcode.enable({ allDecoders: true }, fnBarcodeScanned);
        /*document.getElementById('scanData').value
            = "enabled: press HW trigger to capture.";*/
    }
    fnBarcodeScanned(jsonObject) {
        new fnBarcodeScanned(jsonObject);
        console.log("Barcode Scanned:{" + JSON.stringify(jsonObject) + "}");
        /*document.getElementById('scanData').value = "barcode: " + jsonObject.data;*/
    }
    fnScanDisable() {
        alert("ScanDisable");
        new fnScanDisable();
        //EB.Barcode.disable();
        //document.getElementById('scanData').value = "disabled: press 'enable' to scan.";
    }
}
ScanningTestComponent.ɵfac = function ScanningTestComponent_Factory(t) { return new (t || ScanningTestComponent)(); };
ScanningTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScanningTestComponent, selectors: [["app-scanning-test"]], decls: 12, vars: 0, consts: [[3, "click"], ["id", "content"], ["id", "scanData", "type", "text"], ["type", "button", "value", "Enable Scan", 3, "click"], ["type", "button", "value", "Disable Scan", 3, "click"]], template: function ScanningTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "HEAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "BODY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Barcode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanningTestComponent_Template_button_click_4_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanningTestComponent_Template_button_click_6_listener() { return ctx.quit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanningTestComponent_Template_input_click_10_listener() { return ctx.fnScanEnable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanningTestComponent_Template_input_click_11_listener() { return ctx.fnScanDisable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FubmluZy10ZXN0LmNvbXBvbmVudC5jc3MifQ== */", "h1[_ngcontent-%COMP%] {\n            font-size: 2.5em;\n            background-color: lightgray;\n            margin: 5px;\n            padding: 5px;\n        }\n\n        button[_ngcontent-%COMP%] {\n            font-size: .5em;\n        }\n\n        input[_ngcontent-%COMP%] {\n            font-size: 1.3em;\n        }\n\n        #scanData[_ngcontent-%COMP%] {\n            width: 98%;\n            margin: 10px;\n        }"] });


/***/ }),

/***/ "/lol":
/*!*********************************************!*\
  !*** ./src/app/Services/bereich.service.ts ***!
  \*********************************************/
/*! exports provided: BereichService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BereichService", function() { return BereichService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BereichService {
    constructor() {
        this.bereiche = ["Laden", "Etikettieren", "Kette/Abdichten", "Verpacken", "Kotfluegel", "Nacharbeit"];
        this.bereich = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    isSelected() {
        return this.bereich.asObservable();
    }
    updateBereich(selectedBereich) {
        this.bereich.next(selectedBereich);
    }
    updateLocalStorage(selectedBereich) {
        localStorage.setItem('bereich', selectedBereich);
    }
    removeLocalStorage() {
        localStorage.removeItem('bereich');
    }
    getBereich() {
        return localStorage.getItem('bereich');
    }
    checkBereich(bereich) {
        if (this.bereiche.includes(bereich, 0))
            return true;
        else
            return false;
    }
    setBereich(bereich) {
        if (this.checkBereich(bereich)) {
            this.updateLocalStorage(bereich);
            this.updateBereich(bereich);
            return true;
        }
        else
            return false;
    }
    removeBereich() {
        this.removeLocalStorage();
        this.updateBereich(null);
    }
}
BereichService.ɵfac = function BereichService_Factory(t) { return new (t || BereichService)(); };
BereichService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BereichService, factory: BereichService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OthmE\OneDrive - MVI Group GmbH\Desktop\Angular\backup2\scannersystem-ktl-Demo\src\main.ts */"zUnb");


/***/ }),

/***/ "4mUn":
/*!**********************************************!*\
  !*** ./src/app/Views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Components_table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/table/table.component */ "cwsp");


class HomeComponent {
    constructor() {
        this.title = 'demo';
        this.MyColumns = MyColumnsTest;
        this.MySampleData = MySampleDataTest;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 2, consts: [[3, "Data", "columnsName"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Data", ctx.MySampleData)("columnsName", ctx.MyColumns);
    } }, directives: [_Components_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
const MyColumnsTest = ['Teil', 'Material', 'Gewicht', 'Herkunft'];
const MySampleDataTest = [
    { Teil: 1, Material: 'Plastik', Gewicht: 1.0079, Herkunft: 'DE' },
    { Teil: 2, Material: 'Eisen', Gewicht: 4.0026, Herkunft: 'DE' },
    { Teil: 3, Material: 'Plastik', Gewicht: 6.941, Herkunft: 'DE' },
    { Teil: 4, Material: 'Plastik', Gewicht: 9.0122, Herkunft: 'DE' },
    { Teil: 5, Material: 'Eisen', Gewicht: 10.811, Herkunft: 'DE' },
    { Teil: 6, Material: 'Eisen', Gewicht: 12.0107, Herkunft: 'DE' },
    { Teil: 7, Material: 'Eisen', Gewicht: 14.0067, Herkunft: 'DE' },
    { Teil: 8, Material: 'Eisen', Gewicht: 15.9994, Herkunft: 'DE' },
    { Teil: 9, Material: 'Eisen', Gewicht: 18.9984, Herkunft: 'DE' },
    { Teil: 10, Material: 'Eisen', Gewicht: 20.1797, Herkunft: 'DE' },
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FSvZ":
/*!****************************************************!*\
  !*** ./src/app/Services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthenticationService {
    constructor() {
        this.logger = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    isLoggedIn() {
        return this.logger.asObservable();
    }
    updateLogger(username) {
        this.logger.next(username);
    }
    updateLocalStorage(username, password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }
    removeLocalStorage() {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    getUsername() {
        return localStorage.getItem('username');
    }
    checkCredentials(username, password) {
        if ((username == 'user1' && password == 'user') || (username == 'user2' && password == 'user')) {
            this.login(username, password);
            return true;
        }
        else
            return false;
    }
    login(username, password) {
        this.updateLocalStorage(username, password);
        this.updateLogger(username);
    }
    logout() {
        this.removeLocalStorage();
        this.updateLogger(null);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PqBg":
/*!*******************************************!*\
  !*** ./src/app/Services/bereich.guard.ts ***!
  \*******************************************/
/*! exports provided: BereichGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BereichGuard", function() { return BereichGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bereich_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bereich.service */ "/lol");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class BereichGuard {
    constructor(bereichService, router) {
        this.bereichService = bereichService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.checkBereich();
    }
    checkBereich() {
        let val = this.bereichService.getBereich();
        if (val != null) {
            return true;
        }
        else {
            return this.router.navigate(['/selectbereich']);
        }
    }
}
BereichGuard.ɵfac = function BereichGuard_Factory(t) { return new (t || BereichGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bereich_service__WEBPACK_IMPORTED_MODULE_1__["BereichService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BereichGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BereichGuard, factory: BereichGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QNx5":
/*!*******************************************************!*\
  !*** ./src/app/Components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/authentication.service */ "FSvZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function LogoutComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LogoutComponent_div_0_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" username: ", ctx_r0.username, " ");
} }
class LogoutComponent {
    constructor(authService) {
        this.authService = authService;
        this.username = this.authService.getUsername();
    }
    windowReload() {
        window.location.reload();
    }
    ngOnInit() {
        this.subscription = this.authService.isLoggedIn()
            .subscribe(user => this.username = user);
    }
    onClickLogout() {
        this.authService.logout();
        this.windowReload();
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngSubmit"], ["form", "ngForm"], ["type", "submit", "value", "logout"]], template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogoutComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["input[type=submit][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #b23b3b;\r\n  color: white;\r\n  padding: 8px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #b90303;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMjNiM2I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5MDMwMztcclxufSJdfQ== */"] });


/***/ }),

/***/ "SHn0":
/*!************************************************!*\
  !*** ./src/app/Views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/authentication.service */ "FSvZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Benuter Unbekannt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.ErrorMessage = false;
    }
    ngOnInit() {
        if (this.authService.getUsername !== null) {
            this.router.navigate(['/teile']);
        }
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](""),
        });
    }
    onClickSubmit(data) {
        this.userName = data.userName;
        this.password = data.password;
        if (this.authService.checkCredentials(this.userName, this.password))
            this.router.navigate(['/teile']);
        else
            this.ErrorMessage = true;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 2, consts: [["id", "login"], [1, "form-signin", 3, "formGroup", "ngSubmit"], ["for", "inputUsername"], ["type", "text", "id", "username", "formControlName", "userName", "placeholder", "Username", "required", "", "autofocus", ""], ["for", "inputPassword"], ["type", "password", "id", "inputPassword", "formControlName", "password", "placeholder", "Password", "required", ""], ["type", "submit"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Anmeldung");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.onClickSubmit(ctx.formData.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Benutzer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ErrorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#login[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #1606f8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYwNmY4O1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_remove_bereich_remove_bereich_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/remove-bereich/remove-bereich.component */ "xsiU");
/* harmony import */ var _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/logout/logout.component */ "QNx5");
/* harmony import */ var _scanning_test_scanning_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scanning-test/scanning-test.component */ "/Oky");





class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'KTL-Scannersystem-Demo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 34, vars: 1, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "VW Logo", "src", "./assets/vw-logo.jpg"], ["routerLink", "/teile", "routerLinkActive", "active"], ["routerLink", "/team", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], [1, "spacer"], ["width", "40", "alt", "MVI Logo", "src", "./assets/mvi-proplant.jpg"], [1, "status"], [1, "remove-bereich"], [1, "logout"], ["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["href", "mailto:somename@mvi.com"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Teile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mitarbeiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-remove-bereich", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-logout", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developed By: MVI-Proplant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "somename@mvi.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-scanning-test");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _Components_remove_bereich_remove_bereich_component__WEBPACK_IMPORTED_MODULE_2__["RemoveBereichComponent"], _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _scanning_test_scanning_test_component__WEBPACK_IMPORTED_MODULE_4__["ScanningTestComponent"]], styles: [".spacer[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n\r\n.remove-bereich[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: gray;\r\n  font-weight: 600;\r\n  font-size: small;\r\n  text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 40px;\r\n  width: 200px;\r\n  margin: 0 8px 16px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  \r\n  line-height: 24px;\r\n}\r\n\r\n.card.card-small[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 168px;\r\n}\r\n\r\n.Instruction[_ngcontent-%COMP%] {\r\n  margin-top: 25%;\r\n}\r\n\r\n.card.highlight-card[_ngcontent-%COMP%] {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: auto;\r\n  min-width: 30%;\r\n  position: relative;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n  float: left;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  border-bottom: whitesmoke solid 2px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n  text-align: center;\r\n  padding: 3px;\r\n  background-color: #1976d2;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4ucmVtb3ZlLWJlcmVpY2gge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4ubG9nb3V0IHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKnRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0OyovXHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtc21hbGwge1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTY4cHg7XHJcbn1cclxuXHJcbi5JbnN0cnVjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG59XHJcblxyXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAzMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmxpIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5saSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IHdoaXRlc21va2Ugc29saWQgMnB4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Views/login/login.component */ "SHn0");
/* harmony import */ var _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/logout/logout.component */ "QNx5");
/* harmony import */ var _Views_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Views/home/home.component */ "4mUn");
/* harmony import */ var _Views_select_bereich_select_bereich_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Views/select-bereich/select-bereich.component */ "l0s0");
/* harmony import */ var _Components_remove_bereich_remove_bereich_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/remove-bereich/remove-bereich.component */ "xsiU");
/* harmony import */ var _Components_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/table/table.component */ "cwsp");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _Views_team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Views/team/team.component */ "cfw4");
/* harmony import */ var _Views_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Views/contact/contact.component */ "p//o");
/* harmony import */ var _Views_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Views/about/about.component */ "nDBk");
/* harmony import */ var _scanning_test_scanning_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scanning-test/scanning-test.component */ "/Oky");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _Views_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _Components_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
        _Views_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _Views_select_bereich_select_bereich_component__WEBPACK_IMPORTED_MODULE_8__["SelectBereichComponent"],
        _Components_remove_bereich_remove_bereich_component__WEBPACK_IMPORTED_MODULE_9__["RemoveBereichComponent"],
        _Components_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
        _Views_team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"],
        _Views_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
        _Views_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
        _scanning_test_scanning_test_component__WEBPACK_IMPORTED_MODULE_15__["ScanningTestComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"]] }); })();


/***/ }),

/***/ "cfw4":
/*!**********************************************!*\
  !*** ./src/app/Views/team/team.component.ts ***!
  \**********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Components_table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/table/table.component */ "cwsp");


class TeamComponent {
    constructor() {
        this.title = 'demo';
        this.MyColumns = MyColumnsTest;
        this.MySampleData = MySampleDataTest;
    }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 1, vars: 2, consts: [[3, "Data", "columnsName"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Data", ctx.MySampleData)("columnsName", ctx.MyColumns);
    } }, directives: [_Components_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5jc3MifQ== */"] });
const MyColumnsTest = ['MitarbeiterNR', 'Name', 'Vorname', 'Abteilung'];
const MySampleDataTest = [
    { MitarbeiterNR: 1, Vorname: 'Jan', Name: 'Kalo', Abteilung: 'Logistik' },
    { MitarbeiterNR: 2, Vorname: 'Tilo', Name: 'Littmann', Abteilung: 'Personal' },
    { MitarbeiterNR: 3, Vorname: 'Sabrina', Name: 'Steller', Abteilung: 'Logistik' },
    { MitarbeiterNR: 4, Vorname: 'Josephin', Name: 'Nachname', Abteilung: 'Personal' },
    { MitarbeiterNR: 5, Vorname: 'Christoph', Name: 'Nachname', Abteilung: 'Logistik' },
    { MitarbeiterNR: 6, Vorname: 'Janus', Name: 'Nachname', Abteilung: 'Logistik' },
    { MitarbeiterNR: 7, Vorname: 'Sara', Name: 'Nachname', Abteilung: 'Personal' },
    { MitarbeiterNR: 8, Vorname: 'Sandra', Name: 'Nachname', Abteilung: 'Logistik' },
    { MitarbeiterNR: 9, Vorname: 'Lina', Name: 'Nachname', Abteilung: 'Personal' },
    { MitarbeiterNR: 10, Vorname: 'Monika', Name: 'Nachname', Abteilung: 'Logistik' },
];


/***/ }),

/***/ "cwsp":
/*!*****************************************************!*\
  !*** ./src/app/Components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TableComponent_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disCol_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](disCol_r3);
} }
function TableComponent_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const disCol_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r8[disCol_r3]);
} }
function TableComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_ng_container_1_th_1_Template, 2, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_ng_container_1_td_2_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const disCol_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", disCol_r3);
} }
function TableComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 9);
} }
function TableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
} }
class TableComponent {
    constructor() {
        this.title = "dynamicTable";
    }
    ngOnInit() {
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { columnsName: "columnsName", Data: "Data" }, decls: 4, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_tr_2_Template, 1, 0, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_tr_3_Template, 1, 0, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.Data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnsName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsName);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\ntable.center[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n  .mat-row, .mat-header-row[_ngcontent-%COMP%] {\r\n  display: table-row;\r\n  min-height: 36px !important;\r\n}\r\n\r\n  .mat-cell, .mat-header-cell[_ngcontent-%COMP%] {\r\n  word-wrap: initial;\r\n  display: table-cell;\r\n  padding: 0px 5px;\r\n  line-break: unset;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  width: 20%;\r\n}\r\n\r\n  .mat-header-row, .mat-header-cell[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  min-height: 100px !important;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  align-self: center;\r\n}\r\n\r\n  th.mat-header-cell {\r\n  font-weight: bold;\r\n  background: rgba(243, 241, 241, 0.966);\r\n  font-size: x-large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEIiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxudGFibGUuY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXJvdywgLm1hdC1oZWFkZXItcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgbWluLWhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jZWxsLCAubWF0LWhlYWRlci1jZWxsIHtcclxuICB3b3JkLXdyYXA6IGluaXRpYWw7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGxpbmUtYnJlYWs6IHVuc2V0O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaGVhZGVyLXJvdywgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDEsIDI0MSwgMC45NjYpO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "l0s0":
/*!******************************************************************!*\
  !*** ./src/app/Views/select-bereich/select-bereich.component.ts ***!
  \******************************************************************/
/*! exports provided: SelectBereichComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBereichComponent", function() { return SelectBereichComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_bereich_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/bereich.service */ "/lol");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SelectBereichComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Bereich Unbekannt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SelectBereichComponent {
    constructor(bereichService, router) {
        this.bereichService = bereichService;
        this.router = router;
        this.ErrorMessage = false;
    }
    ngOnInit() {
        if (this.bereichService.getBereich() != null)
            this.router.navigate(['/login']);
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            bereich: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("")
        });
    }
    onClickSubmit(data) {
        this.bereich = data.bereich;
        if (this.bereichService.setBereich(this.bereich)) {
            this.router.navigate(['/login']);
        }
        else
            this.ErrorMessage = true;
    }
}
SelectBereichComponent.ɵfac = function SelectBereichComponent_Factory(t) { return new (t || SelectBereichComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_bereich_service__WEBPACK_IMPORTED_MODULE_2__["BereichService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SelectBereichComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectBereichComponent, selectors: [["app-select-bereich"]], decls: 10, vars: 2, consts: [["id", "setBereich"], [1, "form-setBereich", 3, "formGroup", "ngSubmit"], ["for", "inputBereich"], ["type", "text", "id", "bereich", "formControlName", "bereich", "placeholder", "Bereich", "required", "", "autofocus", ""], ["type", "submit"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"]], template: function SelectBereichComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Zur Konfiguration, bitte Bereich eintragen!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SelectBereichComponent_Template_form_ngSubmit_3_listener() { return ctx.onClickSubmit(ctx.formData.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Bereich");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Eintragen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SelectBereichComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ErrorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#setBereich[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #1606f8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1iZXJlaWNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNlbGVjdC1iZXJlaWNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2V0QmVyZWljaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjA2Zjg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "mWMy":
/*!***************************************!*\
  !*** ./src/app/Services/ktl.guard.ts ***!
  \***************************************/
/*! exports provided: KtlGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KtlGuard", function() { return KtlGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "FSvZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class KtlGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.checkLogin();
    }
    checkLogin() {
        let val = this.authService.getUsername() ? "true" : "false";
        if (val != null && val == "true") {
            return true;
        }
        else {
            return this.router.navigate(['/login']);
        }
    }
}
KtlGuard.ɵfac = function KtlGuard_Factory(t) { return new (t || KtlGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
KtlGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KtlGuard, factory: KtlGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nDBk":
/*!************************************************!*\
  !*** ./src/app/Views/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 5, vars: 0, consts: [["id", "about"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Bei VW Baunatal werden Originalteile und Kaufteile f\u00FCr viele VW Fahrzeuge vorbehandelt, KTL lackiert, getrocknet, teilweise abgedichtet und anschlie\u00DFend Endkunden gerecht ver-packt. Bei diesem Prozess m\u00FCssen aktuell ca. 5000 Teilenummern gehandhabt werden. Aufgrund dieser Vielzahl an Teilenummern, der damit verbundenen Verwechslungsgefahr und der manuellen Handhabung von Teiledaten soll zur Prozessabsicherung ein Scanner-system eingef\u00FChrt werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#about[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "p//o":
/*!****************************************************!*\
  !*** ./src/app/Views/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 13, vars: 0, consts: [["id", "contact"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "kontakt:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fachlich-Support: _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "IT-support: _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Entwickler: _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#contact[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2QiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3Qge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Views_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Views/login/login.component */ "SHn0");
/* harmony import */ var _Views_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views/home/home.component */ "4mUn");
/* harmony import */ var _Services_ktl_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/ktl.guard */ "mWMy");
/* harmony import */ var _Views_select_bereich_select_bereich_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Views/select-bereich/select-bereich.component */ "l0s0");
/* harmony import */ var _Services_bereich_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/bereich.guard */ "PqBg");
/* harmony import */ var _Views_team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Views/team/team.component */ "cfw4");
/* harmony import */ var _Views_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Views/contact/contact.component */ "p//o");
/* harmony import */ var _Views_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Views/about/about.component */ "nDBk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    {
        path: '', canActivate: [_Services_bereich_guard__WEBPACK_IMPORTED_MODULE_5__["BereichGuard"]], children: [
            { path: 'login', component: _Views_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
            { path: 'teile', component: _Views_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_Services_ktl_guard__WEBPACK_IMPORTED_MODULE_3__["KtlGuard"]] },
            { path: 'team', component: _Views_team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"], canActivate: [_Services_ktl_guard__WEBPACK_IMPORTED_MODULE_3__["KtlGuard"]] },
        ]
    },
    { path: 'selectbereich', component: _Views_select_bereich_select_bereich_component__WEBPACK_IMPORTED_MODULE_4__["SelectBereichComponent"] },
    { path: 'contact', component: _Views_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'about', component: _Views_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xsiU":
/*!***********************************************************************!*\
  !*** ./src/app/Components/remove-bereich/remove-bereich.component.ts ***!
  \***********************************************************************/
/*! exports provided: RemoveBereichComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveBereichComponent", function() { return RemoveBereichComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_bereich_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/bereich.service */ "/lol");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/authentication.service */ "FSvZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function RemoveBereichComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RemoveBereichComponent_div_0_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickremoveBereich(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bereich: ", ctx_r0.bereich, "");
} }
class RemoveBereichComponent {
    constructor(bereichService, authService, router) {
        this.bereichService = bereichService;
        this.authService = authService;
        this.router = router;
        this.bereich = this.bereichService.getBereich();
    }
    windowReload() {
        window.location.reload();
    }
    ngOnInit() {
        this.subscription = this.bereichService.isSelected()
            .subscribe(b => this.bereich = b);
    }
    onClickremoveBereich() {
        this.bereichService.removeBereich();
        this.authService.logout();
        this.windowReload();
    }
}
RemoveBereichComponent.ɵfac = function RemoveBereichComponent_Factory(t) { return new (t || RemoveBereichComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_bereich_service__WEBPACK_IMPORTED_MODULE_1__["BereichService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RemoveBereichComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoveBereichComponent, selectors: [["app-remove-bereich"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngSubmit"], ["form", "ngForm"], ["type", "submit", "value", "removebereich"]], template: function RemoveBereichComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RemoveBereichComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bereich);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], styles: ["input[type=submit][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #b23b3b;\r\n    color: white;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background-color: #b90303;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZS1iZXJlaWNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJyZW1vdmUtYmVyZWljaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjIzYjNiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTAzMDM7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    color: #4a4a4a;\n    background: white;\n    box-shadow: 0px 0px 10px 1px #c1c1c1;\n    min-height: calc(100vh - 50px);\n    padding-top: 48px !important;\n}\n\n.container {\n    padding: 0;\n}\n>>> .ui-corner-all {\n    border-radius: 0;\n    box-shadow: 0;\n  }\n>>> .ui-accordion-content {\n  background:white;\n  color: black;\n  font-family: 'Roboto', sans-serif;\n}\n\n>>> .ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover {\n  background: #FF7849 ;\n}\n\n>>> .ui-accordion-header{\n  background:  #FF7849;\n  font-size: 20px;\n  text-align: center;\n  margin-top: 12px;\n  margin-left: -35px;\n  border-radius: 0;\n  text-decoration: none;\n  font-family: 'Roboto', sans-serif;\n}\n\n>>> .ui-accordion-header::after {\n  content: '/f078';\n  position: absolute;\n  right: 5px;\n  color: white;\n  font-family: FontAwesome;\n}\n>>> .ui-accordion-header a {\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <ul>\n  <li><a [routerLink]=\"['/']\">Home</a></li>\n  <li><a [routerLink]=\"['/user']\">User Profile</a></li>\n  <li><a [routerLink]=\"['/login']\">Login</a></li>\n  <li><a [routerLink]=\"['/signup']\">Sing Up</a></li>\n  <li><a [routerLink]=\"['/editprofile/:id']\">Edit Profile</a></li>\n  <li><a [routerLink]=\"['/map']\">go to map</a></li>\n  <li><a [routerLink]=\"['/allusers']\">have a look to all users</a></li>\n\n  </ul> -->\n  <app-navigation></app-navigation>\n  <main class=\"main container\">\n    <router-outlet></router-outlet>\n  </main>\n<!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'angularauth';
    }
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_accordion_accordion__ = __webpack_require__("../../../../primeng/components/accordion/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_accordion_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_accordion_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_panel_panel__ = __webpack_require__("../../../../primeng/components/panel/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_panel_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_panel_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_button_button__ = __webpack_require__("../../../../primeng/components/button/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_button_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_button_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_map_main_map_component__ = __webpack_require__("../../../../../src/app/main-map/main-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__traveller_traveller_component__ = __webpack_require__("../../../../../src/app/traveller/traveller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__place_place_component__ = __webpack_require__("../../../../../src/app/place/place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_plan_service__ = __webpack_require__("../../../../../src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__unic_plan_unic_plan_component__ = __webpack_require__("../../../../../src/app/unic-plan/unic-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//PRIME NG



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_19__editprofile_editprofile_component__["a" /* EditprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__main_map_main_map_component__["a" /* MainMapComponent */],
            __WEBPACK_IMPORTED_MODULE_24__traveller_traveller_component__["a" /* TravellerComponent */],
            __WEBPACK_IMPORTED_MODULE_26__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_27__place_place_component__["a" /* PlaceComponent */],
            __WEBPACK_IMPORTED_MODULE_21__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_30__unic_plan_unic_plan_component__["a" /* UnicPlanComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_32_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_34__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_33_angularfire2_firestore__["a" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_17__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_22__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CarouselModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2_primeng_components_accordion_accordion__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_components_panel_panel__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GalleriaModule"],
            __WEBPACK_IMPORTED_MODULE_4_primeng_components_button_button__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["RadioButtonModule"],
            __WEBPACK_IMPORTED_MODULE_31__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_23__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyA38CUyfeOsm6SfB63ej4xaxMdHb-XmqKA',
                libraries: ["places"]
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_25__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_28__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_29__services_plan_service__["a" /* PlanService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.form-control, \n.form-group {\n    width: 100%;\n}\n.btn {\n    width: 100%;\n    margin: 10px 0;\n}\n.board li {\n    background: #f5d6d6;\n    padding: 5px;\n    border-radius: 5px;\n    display: -webkit-inline-box;\n    list-style: none;\n    margin-bottom: 10px;\n}\n\n.board ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 10px;\n    margin: 0;\n}\n\n.input {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"board\">\n<ul>\n    <li *ngFor=\"let item of messages | async\">\n        <strong>{{item.name}}:</strong><br>\n        {{item.text}}\n    </li>\n</ul>\n</section>\n<section class=\"input form-group\">\n<input class=\"form-control\" [(ngModel)]=\"text\" type=\"text\">\n<button class=\"btn btn-default\" (click)=\"sendMessage()\">Enviar</button>\n</section>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent(db, auth, route) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this.route = route;
        this.toggle = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.route.params.subscribe(function (params) {
            _this.itemsCollection = _this.db.collection(params['id']);
            _this.messages = _this.itemsCollection.valueChanges();
            _this.user = _this.auth.getLoggedUser();
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.onClick = function () {
        this.toggle.emit(true);
    };
    ChatComponent.prototype.sendMessage = function () {
        this.itemsCollection.add({
            name: this.user ? this.user['username'] : 'Anónimo',
            text: this.text
        });
        this.text = "";
    };
    return ChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ChatComponent.prototype, "toggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChatComponent.prototype, "plan", void 0);
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["b" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["b" /* AngularFirestore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
], ChatComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grey{\n    background-color:  #3C4858;\n    color: whitesmoke;\n    margin-top: -10px;\n    padding: 15px;\n    text-align: center;\n  }\n\n  .container {\n      text-align: center;\n  }\n\n  .photo-container {\n    width: 100%;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 20px;\n  }\n  .photo {\n    width: 100px;\n    height: 100px;\n    border-radius: 100%;\n  }\n  input[type=file] {\n    display: inline-block;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"grey\">\n    <h2> Perfil <i class=\"fa fa-user-circle-o\"></i></h2>\n</header>\n<section class=\"container\">\n    <div>\n        <div>\n\n        <!-- BIENVENIDA AL USUARIO CON SU FOTO -->\n        <h3>Hola {{user.username}}</h3>\n        <h4>Dale un toque más personal a tu perfil</h4>\n          <label class=\"photo-container\" for=\"img\">\n            <img class=\"photo\" [src]= \"urlTxatxi + user.photo\" height=300/>\n            <input (change)=\"editprofile()\" id=\"img\" type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n          </label>\n\n      <!-- FORMULARIO DE CAMBIAR EL PERFIL -->\n          <form>\n            <fieldset>\n\n              <div class=\"\">\n                <label> Seleciona tu lugar de residencia: </label>\n                <div class=\"from-group\">\n                  <input type=\"text\" placeholder=\"lugar de residencia\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"  class=\"form-control\" #search>\n                </div>\n              </div>\n\n              <div class=\"\">\n                <label> Cuenta algo más sobre ti y comparte tus pasiones con otros viajeros:</label>\n                <input type=\"text\" [(ngModel)]=\"details\" name=\"details\"/>\n              </div>\n            </fieldset>\n            <!-- <button class=\"btn btn-default\" (click)=\"editprofile()\" type=\"submit\" name=\"action\">Validar cambios</button> -->\n          </form>\n\n      <!-- PASAR A SIGUIENTE PAGINA -->\n\n          <div>\n            <a [routerLink]=\"['/user']\"> Continuar </a>\n          </div>\n\n\n          </div>\n         </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditprofileComponent = (function () {
    function EditprofileComponent(auth, router, mapsAPILoader, ngZone) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.urlTxatxi = "http://localhost:3000";
        this.user = this.auth.getUser()
            .subscribe(function (user) {
            _this.user = user;
            _this.userId = user._id;
            _this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({ url: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASEURL + "/auth/editprofile/" + _this.userId
            });
        });
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["(regions)"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    //RESCATAMOS EL NOMBRE DEL LUGAR
                    _this.country = autocomplete.getPlace().name;
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    ;
    EditprofileComponent.prototype.editprofile = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('country', _this.country);
            form.append('details', _this.details);
        };
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function () {
            _this.auth.getUser()
                .subscribe(function (user) {
                _this.user = user;
                _this.userId = user._id;
            });
        };
    };
    return EditprofileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], EditprofileComponent.prototype, "searchElement", void 0);
EditprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editprofile',
        template: __webpack_require__("../../../../../src/app/editprofile/editprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editprofile/editprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
], EditprofileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=editprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    text-align: center;\n}\n\np {\n    margin: 10px;\n}\n\n.title {\n    font-size: 50px;\n    font-weight: bold;\n    margin: 45px;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 20px;\n}\n\n\n.grey{\n    background-color:  #3C4858;\n    color: whitesmoke;\n    margin-top: -10px;\n    padding: 15px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"grey\">\n    <h1 class=\"title\">TripMate</h1>\n</header>\n<section class=\"container\">\n    <p>¿Buscas compañeros para compartir tu viaje?</p>\n    <p>Ya tienes un usuario?</p>\n    <a class=\"btn btn-default\" [routerLink]=\"['/signup']\">Registrate!</a>\n    <a class=\"btn btn-warning\" [routerLink]=\"['/login']\">Login</a>\n    <p>Únete a la aventura</p>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-warning {\n    color: #fff;\n    background-color: #FF7849;\n    border-color: #eea236;\n    min-width: 50%;\n    margin-top: 50px;\n    text-align: center;\n    font-size: 20px;\n}\n\n.align-center {\n    text-align: center;\n}\n\nh2 {\n    margin-bottom: 20px;\n    text-align: center;\n}\n\n.container {\n    margin-top: 30px;\n}\n.grey{\n    background-color:  #3C4858;\n    color: whitesmoke;\n    margin-top: -10px;\n    padding: 15px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"grey\">\n    <h2> Login <i class=\"fa fa-user-circle-o\"></i></h2>\n</header>\n<section class=\"container\">\n  <form class=\"form-group\">\n    <input placeholder=\"Email\" class=\"form-control\" type=\"text\"  name=\"email\"/>\n    <br>\n    <input placeholder=\"Username\" class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n    <br>\n    <input placeholder=\"Password\" class=\"form-control\" type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n    <div class=\"align-center\">\n      <button class=\"btn btn-warning\" (click)=\"login()\"> login </button>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
        var user = this.auth.getLoggedUser();
        if (user) {
            this.router.navigate(["map"]);
        }
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            this.auth.login(username, password)
                .subscribe(function (user) {
                if (user.firstTime) {
                    _this.router.navigate(["editprofile/" + user._id]);
                }
                else {
                    _this.router.navigate(["map"]);
                }
            });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-map/main-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 200px;\n}\n\nngb-datepicker {\n  width: 100%;\n}\n\n.main-map h1{\n  border-bottom: 1px solid #cacaca;\n  padding: 10px 0;\n  margin-bottom: 20px;\n}\n.right {\n  min-height: 290px;\n}\n\n\n.grey{\n  background-color:  #3C4858;\n  color: whitesmoke;\n  margin-top: -10px;\n  margin-bottom: 20px;\n  padding: 15px;\n}\n\n.last-plans {\n  padding: 20px;\n}\n.plan:hover {\n  background: whitesmoke;\n  color: gray;\n}\n>>> .ngb-dp-months {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.col-sm-4 {\n  text-align: center;\n}\n.plan {\n  list-style: none;\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  border: 1px solid #d2d2d2;\n  margin: 0 1%;\n  list-style: none;\n  color: black;\n  text-decoration: none;\n  width: 30%;\n  display: inline-block;\n  text-align: center;\n}\nul {\n  padding: 0;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .plan {\n    width: 100%;\n    margin: 0;\n  }\n}\n\n.plan h1{\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.plan p{ \n  margin: 0;\n}\n.accept {\n  width: 100%;\n  margin: 10px 0;\n}\n.custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: #0275d8;\n      color: white;\n    }\n    .faded {\n      opacity: 0.5;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-map/main-map.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header class=\"grey\">\n\n  <h1>¿A donde nos vamos?</h1>\n</header>\n\n\n<!-- FORMULARIO DE BUSQUEDA -->\n<section class=\"main-map\">\n\n  <div class=\"col-sm-8\">\n      <agm-map [latitude]=\"lat\"  [longitude]=\"lng\"  [scrollwheel]=\"false\" >\n         <agm-marker *ngFor=\"let p of allPlans\" [latitude]=\"p.lat\" [longitude]=\"p.lng\" [markerDraggable]= FALSE >\n           <agm-info-window>\n             <strong> {{ p.plan }}</strong>\n             <hr>\n             <a>{{p.day}}/{{p.month}}/{{p.year}}</a>\n             <a [routerLink]=\"['/unicPlan',p._id]\"> Visita el plan </a>\n           </agm-info-window>\n       </agm-marker>\n     </agm-map>\n\n    <div class=\"from-group\">\n        <input type=\"text\" placeholder=\"Busca tu destino\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\"  class=\"form-control\" #search>\n    </div>\n</div>\n\n  <hr>\n\n<!-- SELECCION DE FECHA -->\n\n  <div class=\"col-sm-4\">\n    <p>Selecciona fechas:</p>\n    <div>\n      <ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\n      </ngb-datepicker>\n    </div>\n\n    <ng-template #t let-date=\"date\" let-focused=\"focused\">\n      <span class=\"custom-day\" [class.focused]=\"focused\" [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\" [class.faded]=\"isHovered(date) || isInside(date)\" (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\">\n      {{ date.day }}\n      </span>\n    </ng-template>\n\n    <!-- BOTON DE IR A UN SITIO -->\n    <button class=\"accept btn btn-default\" (click)=\"shareAndGo()\">Buscar planes</button>\n  </div>\n\n</section>\n\n<!-- FIN DE FORMULARIO -->\n\n<!-- ENSENA PLANES VENIDEROS -->\n\n<!-- <section class=\"last-plans\">\n    <ul>\n      <a [routerLink]=\"['/unicPlan',p._id]\" class=\"plan\" *ngFor=\"let p of allPlans\">\n        <h1>{{p.plan}}</h1>\n        <p>{{p.day}}/{{p.month}}</p>\n      </a>\n    </ul>\n\n  </section> -->\n"

/***/ }),

/***/ "../../../../../src/app/main-map/main-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//DATE PICKER

var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var MainMapComponent = (function () {
    function MainMapComponent(mapsAPILoader, ngZone, calendar, router, place /*public place: PlaceService*/) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.router = router;
        this.place = place; /*public place: PlaceService*/
        this.placeName = "ninguno";
        this.title = 'My first AGM project';
        this.lat = 43.12685367766785;
        this.lng = -2.7976560984375283;
        this.otherLat = "s";
        this.otherLng = "";
        this.id = '';
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    //  CALENARIO
    MainMapComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    MainMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.place.findAllPlans().subscribe(function (plans) {
                _this.allPlans = plans;
            });
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["(regions)"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    //PASAMOS LATITUD Y LONGITUD DEL LUGAR PARA PINTAR EN EL MAPA
                    _this.lat = autocomplete.getPlace().geometry.location.lat();
                    _this.lng = autocomplete.getPlace().geometry.location.lng();
                    //QUITAMOS PUNTOS Y COMAS
                    var nocomas = autocomplete.getPlace().formatted_address;
                    nocomas = nocomas.replace(/\s+/g, '');
                    nocomas = nocomas.replace(/,/g, '');
                    _this.title = nocomas;
                    //RESCATAMOS EL NOMBRE DEL LUGAR SIN ESPACIOS
                    var placeNameWithoutSPaces = autocomplete.getPlace().name;
                    placeNameWithoutSPaces = placeNameWithoutSPaces.replace(/\s+/g, '-');
                    _this.placeName = placeNameWithoutSPaces;
                    //RESCATAMOS LNG Y LAT SIN PUNTOS
                    var stringLat = _this.lat.toString();
                    _this.otherLat = stringLat.split('.').join('_');
                    var stringLng = _this.lng.toString();
                    var prueba = stringLng.split('.').join('_');
                    _this.otherLng = prueba;
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    MainMapComponent.prototype.shareAndGo = function () {
        if (this.placeName != '') {
            this.router.navigate(["holiday/" + this.title + "/" + this.placeName + "/" + this.otherLat + "/" + this.otherLng]);
            this.place.copyParams(this.fromDate, this.toDate, this.title, this.placeName, this.otherLat, this.otherLng);
        }
    };
    return MainMapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], MainMapComponent.prototype, "searchElement", void 0);
MainMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-map',
        template: __webpack_require__("../../../../../src/app/main-map/main-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-map/main-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbCalendar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbCalendar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_place_service__["a" /* PlaceService */] /*public place: PlaceService*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_place_service__["a" /* PlaceService */] /*public place: PlaceService*/) === "function" && _f || Object])
], MainMapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=main-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    color: #fff;\n}\n.fa {\n    font-size: 25px;\n    color: #whitesmoke;\n}\n.header {\n    background: #FF7849;\n    padding: 10px;\n    position: fixed;\n    z-index: 9;\n    width: 100%;\n}\n.nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.button-close {\n    border: 0;\n    background: transparent;\n}\n.nav:before,\n.nav:after{\n    display:none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div *ngIf=\"!user\">\n    <a [routerLink]=\"['/login']\">Login</a>\n    <a [routerLink]=\"['/signup']\">Sing Up</a>\n  </div>\n  \n  <div *ngIf=\"user\">\n    <nav  class=\"nav\">  \n      <a [routerLink]=\"['/map']\"><i class=\"fa fa-home\"></i></a>\n      <div>\n        <a [routerLink]=\"['/user']\"><i class=\"fa fa-user-circle\"></i></a>\n        <button class=\"button-close\"(click)=\"logout()\" [routerLink]=\"['/home']\"> <i class=\"fa fa-window-close\"></i> </button>\n      </div>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function () { return _this.user = null; }, function (err) { return _this.error = err; });
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/place/place.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px;\n}\n\n.container {\n  text-align: center;\n}\n\n.dates {\n  text-align: center;\n  padding: 10px;\n}\n.mapa{\n  height: 300px;\n  clear: both;\n}\n.content {\n  text-align: center;\n}\n.center {\n  text-align: center;\n}\n\n.date-container {\n  width: 100%;\n}\n\n.date {\n  width: 90%;\n  float: left;\n}\n.cuad-content {\n  text-align: center;\n}\n\n.cuadrado {\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid orange;\n}\n.cuad-content button {\n  margin-left: 20px;\n  border: 0;\n}\n\n.btn.btn-warning {\n  margin: 10px;\n  background: #FF7849;\n}\n.date-button {\n  width: 10%;\n  float: right;\n  font-size: 20px;\n  border: 0;\n  background: none;\n}\n\n>>> .ui-carousel-item {\n  text-align: center;\n  background: none;\n}\n\n>>> .ui-carousel-header{\nbackground-color:  #3C4858;\n\n}\n\n.grey{\n  background-color:  #3C4858;\n  color: whitesmoke;\n}\n\n.legends {\n  border: 0;\n  text-align: center;\n  padding-top: 10px;\n  margin-bottom: 10px;\n}\n\n.photo-input{\n  display:none;\n}\n\n.formm {\n  text-align: center;\n}\n\n.formm .btn {\n  margin-bottom: 15px;\n}\n\n.file-label {\n  font-size: 32px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.plans {\n    width: 100%;\n    display: inline-block;\n}\n.plan {\n    padding: 10px;\n    width: 100%;\n    border-bottom: 1px solid lightgray;\n}\n.plan a {\n  color: gray;\n}\n.plan h3{\n    margin-top: 0;\n}\n\n.place {\n  padding: 20px;\n}\n\n.title {\n  padding: 20px;\n  border-bottom: 1px solid lightgray;\n  margin: 0;\n  text-align: center\n}\n\n.photo {\n  border-radius: 100%;\n  width: 100px;\n  height: 100px;\n  border: 2px solid white;\n}\n\n.traveler img {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  border: 1px solid black;\n  margin-bottom: 10px;\n}\n\n.carrousel{\n  background: greenyellow;\n}\n\n.createPlan{\n  clear: both;\nbackground-color: #c14848;\n  margin-top: 200px;\n}\n\n.usersvisiting{\n  clear: both;\n  background-color: orange;\n  margin-top: 200px;\n}\n\n.centrado{\n  text-align: center;\n}\n\n.black{\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/place/place.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section>\n<div class=\"\">\n  <div class=\"grey\">\n\n    <h1 class=\" title\">{{ placename }} <i class=\"fa fa-map-marker\"></i></h1>\n    <div class=\"dates\" *ngIf=\"travelStarts\">\n      <p> {{travelStarts.day}} / {{travelStarts.month}} / {{travelStarts.year}} - {{travelFinish.day}} / {{travelFinish.month}} / {{travelFinish.year}}</p>\n    </div>\n  </div>\n<!-- BOTON PARA INDICAR QUE VAS AL LUGAR  -->\n\n  <div class=\"centrado\" *ngIf=\"isHeGoing\">\n    <div *ngIf='isHeGoing.length == 0'>\n      <p>¿Será {{ placename }} tu proximo destino?</p>\n      <button class=\"btn btn-default\"(click)=\"newConexion()\">Voy a ir! </button>\n    </div>\n  </div>\n\n<!-- FOTOS DEL DESTINO -->\n\n<div class=\"content\">\n\n    <!-- CARROUSEL DE FOTOS -->\n\n    <div *ngIf=\"allPhotos\">\n      <div *ngIf='allPhotos.length != 0'>\n        <p-carousel [value]=\"allPhotos\"  easing=\"easeOutStrong\" autoplayInterval=\"3000\" headerText = \"Fotos de {{placename}}\" autoplayInterval= 5000>\n\n            <ng-template let-photo pTemplate=\"item\">\n                <a [routerLink]=\"['/traveller',photo.userId]\">\n                  <img [src]= \"urlTxatxi + photo.photo\" height=\"200px\"/>\n                  <hr>\n                   <h3>Instantanea de {{photo.user}}</h3>\n                 </a >\n            </ng-template>\n        </p-carousel>\n      </div>\n    </div>\n\n\n      <div *ngIf=\"allPhotos\">\n        <div *ngIf='allPhotos.length == 0'>\n          <h3>No hay fotos de {{ placename }}</h3>\n            <p> Aun no hay ninguna foto de {{placename}}. Se el primero en compartir tus instantaneas </p>\n        </div>\n      </div>\n\n    <!-- SUBIR FOTO   -->\n\n    <div>\n      <form class=\"formm\">\n        <fieldset>\n          <legend class=\"legends\"> Comparte tus fotos </legend>\n          <div class=\"from-group\">\n            <input class=\"form-control\" hidden type=\"number\" [(ngModel)]=\"user\" name=\"user\"  />\n            <input class=\"form-control\" hidden type=\"number\" [(ngModel)]=\"userId\" name=\"userId\" />\n            <input class=\"form-control\" hidden type=\"number\" [(ngModel)]=\"place\" name=\"place\" />\n            <input id=\"filee\" (change)=\"submit()\" class=\"form-control photo-input\" type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n          </div>\n        </fieldset>\n        <label for=\"filee\" class=\"file-label fa fa-camera\"></label>\n      </form>\n    </div>\n</div>\n\n</div>\n\n<!-- PLANES EN ESTE LUGAR -->\n\n<p-accordion>\n    <p-accordionTab header=\"Planes en propuestos en {{ placename }}\">\n      <div>\n        <div *ngIf=\"travelStarts\">\n          <h4>Del {{travelStarts.day}} / {{travelStarts.month}} / {{travelStarts.year}} al {{travelFinish.day}} / {{travelFinish.month}} / {{travelFinish.year}}</h4>\n        </div>\n\n        <!-- MAPA CON LOS PLANES DEL LUGAR  -->\n\n        <div  class=\"mapa\">\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [scrollwheel]=\"false\" >\n            <div *ngIf=\"allPlans\">\n              <agm-marker *ngFor=\"let p of allPlans\" [latitude]=\"p.lat\" [longitude]=\"p.lng\" [markerDraggable]= FALSE >\n                <agm-info-window>\n                  <strong> {{ p.plan }}</strong>\n                  <a>{{p.day}}/{{p.month}}/{{p.year}}</a>\n                  <a [routerLink]=\"['/unicPlan',p._id]\" class=\"black\"> Visita el plan </a>\n                </agm-info-window>\n              </agm-marker>\n            </div>\n          </agm-map>\n        </div>\n\n        <!-- PLANES EN EL LUGAR CUADRADO -->\n\n        <div>\n          <div *ngIf=\"allPlans\">\n\n            <div *ngIf='allPlans.length == 0'>\n              <div class=\"\">\n                <p>No hemos encontrado ninguna actividad entre el {{travelStarts.day}} y {{travelFinish.day}}</p>\n              </div>\n            </div>\n\n            <div *ngIf='allPlans.length > 0'>\n              <div *ngFor=\"let plan of allPlans\" class=\"cuadrado\">\n                <h3> {{ plan.plan }} </h3>\n                <p>propuesto por: {{plan.user}}</p>\n                <p>{{plan.day}} / {{plan.month}} / {{plan.year}}</p>\n                <a [routerLink]=\"['/unicPlan',plan._id]\"> Ver detalles del plan </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </p-accordionTab>\n\n  <!-- VIAJEROS QUE VISITARAN -->\n\n    <p-accordionTab header=\"Viajeros que visitarán {{ placename }}\">\n      <div>\n        <div *ngIf=\"allConexions\">\n          <div *ngIf='allConexions.length == 0'>\n            <p>Por ahora ningun viajero ira a {{ placename }} </p>\n          </div>\n\n          <div class=\"cuad-content\" *ngIf='allConexions.length > 0'>\n            <div *ngFor=\"let conexion of allConexions\" class=\"cuadrado\">\n              <img class=\"photo\" [src]= \"urlTxatxi + conexion.userId.photo\" height=50/>\n              <button pButton type=\"button\" [routerLink]=\"['/traveller', conexion.userId._id]\" label=\"ver detalles del usuario\" class=\"btn btn-default ui-button-secondary traveler \">  {{ conexion.userId.username }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </p-accordionTab>\n\n<!-- PROPONER UN PLAN -->\n\n    <p-accordionTab header=\"Proponer un plan\">\n\n      <div class=\"center\">\n        <form>\n          <h3> ¿Algún plan en mente? </h3>\n          <p>¡Comparte tus vivencias!</p>\n\n          <!-- MAPA PARA PROPONER UN PLAN -->\n\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)= \"mapCliqueado($event)\" [scrollwheel]=\"false\">\n            <agm-marker (markerClick)=\"marcadorCliqueado()\" [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]= \"arrastable\"  (dragEnd) = \"posicionFinalMarcador($event)\" >\n              <agm-info-window>\n                <strong> {{ placename }}</strong>\n              </agm-info-window>\n            </agm-marker>\n          </agm-map>\n\n          <!-- INPUT DIA DEL PLAN -->\n\n          <!-- <p>Selecciona el dia de tu plan</p> -->\n          <form class=\"form-inline\">\n            <div class=\"date-container form-group\">\n              <div class=\"input-group\" class=\"date-container\">\n                <input class=\"date form-control\" placeholder=\"yyyy-mm-dd\"\n                name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                <button class=\"date-button\" (click)=\"d.toggle()\" type=\"button\">\n                  <i class=\" fa fa-calendar\"></i>\n                 </button>\n              </div>\n            </div>\n          </form>\n\n            <!-- INPUTS DETALLES DEL PLAN -->\n          <section class=\"form-group\">\n            <label>Nuevo plan:</label>\n            <input placeholder=\"Título\" class=\"form-control\" type=\"text\" [(ngModel)]=\"plan\" name=\"plan\"/>\n            <input placeholder=\"Descripción\" class=\"form-control\" type=\"text\" [(ngModel)]=\"details\" name=\"details\"/>\n\n            <button class=\"btn btn-warning\" (click)=\"newPlan()\"> Comparte tu plan! </button>\n          </section>\"\n\n        </form>\n      </div>\n    </p-accordionTab>\n\n<!-- FORO SOBRE EL LUGAR -->\n\n    <p-accordionTab header=\"Foro de {{ placename }}\">\n      <div>\n        <input type=\"text\" [(ngModel)]=\"comment\" name=\"comment\"/>\n        <p>¿ALguna duda o sugerencia?</p>\n        <button (click)=\"newComment()\">envia tu comentario! </button>\n\n\n        <div *ngIf=\"allComments\">\n\n          <div *ngIf='allComments.length == 0'>\n            <div class=\"\">\n              <p>No hay mensajes aún. Sé el primero en dar tu opinión.</p>\n            </div>\n          </div>\n\n          <div *ngIf='allComments.length > 0'>\n          <div *ngFor=\"let comment of allComments \">\n            <img class=\"photo\" [src]= \"urlTxatxi + comment.userId.photo\" height=50/>\n            <p> comentario de {{ comment.userId.username }} </p>\n            <p>{{ comment.comment }}</p>\n          </div>\n          </div>\n        </div>\n      </div>\n    </p-accordionTab>\n\n</p-accordion>\n\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/place/place.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var now = new Date();
var PlaceComponent = (function () {
    function PlaceComponent(auth, router, route, place, mapsAPILoader, ngZone) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.place = place;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASEURL + "/place/photoPlace"
        });
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.arrastable = true;
        this.urlTxatxi = "http://localhost:3000";
        this.user = this.auth.getUser()
            .subscribe(function (user) { _this.user = user; });
    }
    PlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getPlaceDetails(params['id']);
            _this.okID = params['id'];
            //OBTENER EL NOMBRE DEL LUGAR SIN GUIONES
            var withSpaces = params['name'];
            withSpaces = withSpaces.replace(/-/g, ' ');
            _this.placename = withSpaces;
            _this.okName = params['name'];
            //OBTENER LA LAT CON PUNTOS
            var withDots = params['otherLat'];
            withDots = withDots.split('_').join('.');
            _this.lat = Number(withDots);
            _this.okLat = params['otherLat'];
            //OBTENER  LA LNG CON PUNTOS
            var withDots2 = params['otherLng'];
            withDots2 = withDots2.split('_').join('.');
            _this.lng = Number(withDots2);
            _this.okLng = params['otherLng'];
        });
    };
    // GET THE PLACE DETAILS AND ALL THE PEOPLE GOING THERE
    PlaceComponent.prototype.getPlaceDetails = function (id) {
        var _this = this;
        this.place.get(id)
            .subscribe(function (place) {
            _this.unicPlace = place;
            _this.place.isHeGoing(_this.placename, _this.user._id).subscribe(function (a) {
                _this.isHeGoing = a;
            });
            _this.gallery = [];
            _this.travelStarts = _this.place.getInitDate();
            _this.travelFinish = _this.place.getFinishDate();
            _this.place.findPlans(_this.unicPlace.identification, _this.travelStarts.year, _this.travelStarts.month, _this.travelStarts.day, _this.travelFinish.year, _this.travelFinish.month, _this.travelFinish.day)
                .subscribe(function (plan) { return _this.allPlans = plan; });
            _this.place.findConexion(_this.placename)
                .subscribe(function (conex) { return _this.allConexions = conex; });
            _this.allPoints = _this.place.getAllPointsInMap();
            _this.place.getAllPhotos(_this.unicPlace.identification).subscribe(function (todaslasfotos) {
                _this.allPhotos = todaslasfotos;
                _this.allPhotos.forEach(function (photo) {
                    this.gallery.push({ source: photo.photo });
                });
            });
            _this.place.findComments(_this.unicPlace.identification).subscribe(function (res) {
                _this.allComments = res;
                console.log("AQUI ESTAN TODOS LOS COMMENTARIOS");
                console.log(_this.allComments);
            });
        });
    };
    // CREATE NEW PLAN ON THIS SPECIFIC PLACE
    PlaceComponent.prototype.newPlan = function () {
        var _this = this;
        if (this.plan != "") {
            this.date = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
            this.place.sendMyPlan(this.plan, this.details, this.unicPlace.identification, this.placename, this.user.username, this.model.year, this.model.month, this.model.day, this.lat, this.lng)
                .subscribe(function (plan) {
                _this.travelStarts = _this.place.getInitDate();
                _this.travelFinish = _this.place.getFinishDate();
                _this.place.findPlans(_this.unicPlace.identification, _this.travelStarts.year, _this.travelStarts.month, _this.travelStarts.day, _this.travelFinish.year, _this.travelFinish.month, _this.travelFinish.day)
                    .subscribe(function (plan) {
                    _this.allPlans = plan;
                    _this.plan = "";
                    _this.details = "";
                    _this.model = "";
                });
            });
        }
        else {
            console.log("ponte un plan locooo");
        }
    };
    // CREATE NEW CONEXION THIS USER - THIS PLACE
    PlaceComponent.prototype.newConexion = function () {
        var _this = this;
        this.place.sendThisConexion(this.placename, this.user._id)
            .subscribe(function () {
            (function (plan) { return console.log(plan); });
            _this.place.findConexion(_this.placename)
                .subscribe(function (conex) { return _this.allConexions = conex; });
            _this.place.isHeGoing(_this.placename, _this.user._id).subscribe(function (a) {
                _this.isHeGoing = a;
            });
        });
    };
    // LO QUE PASA CUANDO CLICAS EL marcador
    PlaceComponent.prototype.marcadorCliqueado = function () {
        console.log("se marca el marcador");
    };
    PlaceComponent.prototype.mapCliqueado = function ($event) {
        this.lat = $event.coords.lat,
            this.lng = $event.coords.lng,
            this.arrastable = true;
    };
    PlaceComponent.prototype.posicionFinalMarcador = function ($event) {
        this.lat = $event.coords.lat,
            this.lng = $event.coords.lng,
            this.arrastable = true;
    };
    // ADD PHOTO TO THIS PLACE
    PlaceComponent.prototype.submit = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('user', _this.user.username);
            form.append('userId', _this.user._id);
            form.append('place', _this.unicPlace.identification);
        };
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function () {
            _this.place.getAllPhotos(_this.unicPlace.identification).subscribe(function (todaslasfotos) {
                _this.allPhotos = todaslasfotos;
            });
        };
    };
    // CREATE NEW COMMENT ON THIS SPECIFIC PLAN
    PlaceComponent.prototype.newComment = function () {
        var _this = this;
        if (this.comment != "") {
            this.place.sendMyComment(this.comment, this.unicPlace.identification, this.user._id)
                .subscribe(function () {
                _this.place.findComments(_this.unicPlace.identification).subscribe(function (res) {
                    _this.allComments = res;
                });
            });
        }
        else {
            console.log("ponte un comentario locooo");
        }
    };
    return PlaceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], PlaceComponent.prototype, "searchElement", void 0);
PlaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-place',
        template: __webpack_require__("../../../../../src/app/place/place.component.html"),
        styles: [__webpack_require__("../../../../../src/app/place/place.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object])
], PlaceComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=place.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_map_main_map_component__ = __webpack_require__("../../../../../src/app/main-map/main-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__traveller_traveller_component__ = __webpack_require__("../../../../../src/app/traveller/traveller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__place_place_component__ = __webpack_require__("../../../../../src/app/place/place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__unic_plan_unic_plan_component__ = __webpack_require__("../../../../../src/app/unic-plan/unic-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'editprofile/:id', component: __WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile_component__["a" /* EditprofileComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_5__main_map_main_map_component__["a" /* MainMapComponent */], },
    { path: 'traveller/:id', component: __WEBPACK_IMPORTED_MODULE_6__traveller_traveller_component__["a" /* TravellerComponent */] },
    { path: 'unicPlan/:id', component: __WEBPACK_IMPORTED_MODULE_8__unic_plan_unic_plan_component__["a" /* UnicPlanComponent */] },
    { path: 'holiday/:id/:name/:otherLat/:otherLng', component: __WEBPACK_IMPORTED_MODULE_7__place_place_component__["a" /* PlaceComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    // SHOWS THE CURRENT USER PROFILE
    AuthService.prototype.getUser = function () {
        return this.http.get(BASEURL + "/user")
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getLoggedUser = function () {
        return this.user;
    };
    // SING UP
    AuthService.prototype.signup = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/signup", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user, true); })
            .catch(this.handleError);
    };
    // LOG IN
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    //LOGOUT
    AuthService.prototype.logout = function () {
        var _this = this;
        this.user = null;
        return this.http.post(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    //IS LOGGED IN
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    // OTHERS
    AuthService.prototype.emitUserLoginEvent = function (user, isSignup) {
        if (isSignup === void 0) { isSignup = null; }
        if (!isSignup) {
            this.user = user;
        }
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        return this.auth.getUser() ? true : false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/place.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL + "/place";
var PlaceService = (function () {
    function PlaceService(http) {
        this.http = http;
    }
    PlaceService.prototype.getUrlInfo = function () {
        return this.urlInfo;
    };
    PlaceService.prototype.getInitDate = function () {
        return this.dateFrom;
    };
    PlaceService.prototype.getFinishDate = function () {
        return this.dateTo;
    };
    PlaceService.prototype.copyParams = function (from, to, title, placeName, otherLat, otherLng) {
        this.dateFrom = from;
        this.dateTo = to;
        this.urlInfo = { title: title, placeName: placeName, otherLat: otherLat, otherLng: otherLng };
    };
    //FIND OR CREATE THE PLACE
    PlaceService.prototype.get = function (id) {
        return this.http.get(BASEURL + "/holiday/" + id)
            .map(function (res) { return res.json(); });
    };
    // CREATE A PLAN
    PlaceService.prototype.sendMyPlan = function (plan, details, place, placeName, user, year, month, day, lat, lng) {
        return this.http.post(BASEURL + "/plan", { plan: plan, details: details, place: place, placeName: placeName, user: user, year: year, month: month, day: day, lat: lat, lng: lng })
            .map(function (res) { return res.json(); });
    };
    // FIND THE PLANS ON THE SPECIFIC PLACE AND DATE
    PlaceService.prototype.findPlans = function (place, sYear, sMonth, sDay, fYear, fMonth, fDay) {
        return this.http.get(BASEURL + "/plan/" + place + "/" + sYear + "/" + sMonth + "/" + sDay + "/" + fYear + "/" + fMonth + "/" + fDay)
            .map(function (res) { return res.json(); });
    };
    // FIND ALL PLANS
    PlaceService.prototype.findAllPlans = function () {
        return this.http.get(BASEURL + "/allplans")
            .map(function (res) { return res.json(); });
    };
    // FIND THE PLANS POINTS ON MAP
    PlaceService.prototype.getAllPointsInMap = function () {
        return this.http.get(BASEURL + "/pointFainder/")
            .map(function (res) { return res.json(); });
    };
    // CREATE A CONEXION USER - PLACE
    PlaceService.prototype.sendThisConexion = function (place, userId) {
        return this.http.post(BASEURL + "/whoToWhere", { place: place, userId: userId })
            .map(function (res) { return res.json(); });
    };
    // FIND THE CONEXIONS ON THE SPECIFIC PLACE
    PlaceService.prototype.findConexion = function (place) {
        return this.http.get(BASEURL + "/conexion/" + place)
            .map(function (res) { return res.json(); });
    };
    // FIND THE CONEXIONS ON THE SPECIFIC PLACE
    PlaceService.prototype.getAllPhotos = function (place) {
        return this.http.get(BASEURL + "/allphotos/" + place)
            .map(function (res) { return res.json(); });
    };
    //FIND IF THE USER IS GOING TO THE PLACE OR NOT
    PlaceService.prototype.isHeGoing = function (place, userId) {
        return this.http.get(BASEURL + "/isHeGoing/" + place + "/" + userId)
            .map(function (res) { return res.json(); });
    };
    // CREATE A COMMENT ON THIS SPECIFIC PLACE
    PlaceService.prototype.sendMyComment = function (comment, place, userId) {
        return this.http.post(BASEURL + "/comment", { comment: comment, place: place, userId: userId })
            .map(function (res) { return res.json(); });
    };
    // FIND THE COMMENTS ON THE SPECIFIC PLACE
    PlaceService.prototype.findComments = function (place) {
        return this.http.get(BASEURL + "/comment/" + place)
            .map(function (res) { return res.json(); });
    };
    return PlaceService;
}());
PlaceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PlaceService);

var _a;
//# sourceMappingURL=place.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/plan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL + "/plan";
var PlanService = (function () {
    function PlanService(http) {
        this.http = http;
    }
    // GET A PARTICULAR PLAN DETAILS
    PlanService.prototype.getUnicPlan = function (id) {
        return this.http.get(BASEURL + "/unicPlan/" + id)
            .map(function (res) { return res.json(); });
    };
    // CREATE A COMMENT ON THIS SPECIFIC PLAN
    PlanService.prototype.sendMyComment = function (comment, planId, userId) {
        return this.http.post(BASEURL + "/comment", { comment: comment, planId: planId, userId: userId })
            .map(function (res) { return res.json(); });
    };
    // FIND THE COMMENTS ON THE SPECIFIC PLAN
    PlanService.prototype.findComments = function (planId) {
        return this.http.get(BASEURL + "/comment/" + planId)
            .map(function (res) { return res.json(); });
    };
    // CREATE THE CONEXIONS USER - PLAN
    PlanService.prototype.sendThisConexion = function (userId, planId) {
        return this.http.post(BASEURL + "/joinThePlan", { userId: userId, planId: planId })
            .map(function (res) { return res.json(); });
    };
    // FIND THE PEOPL THE PLAN
    PlanService.prototype.findUsers = function (planId) {
        return this.http.get(BASEURL + "/user/" + planId)
            .map(function (res) { return res.json(); });
    };
    //FIND IF THE USER IS GOING TO THE PLAN OR NOT
    PlanService.prototype.isHeGoing = function (planId, userId) {
        return this.http.get(BASEURL + "/isHeGoing/" + planId + "/" + userId)
            .map(function (res) { return res.json(); });
    };
    return PlanService;
}());
PlanService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PlanService);

var _a;
//# sourceMappingURL=plan.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL + "/user";
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    // GET ALL USERS LIST
    UsersService.prototype.getList = function () {
        return this.http.get(BASEURL + "/allusers")
            .map(function (res) { return res.json(); });
    };
    // GET A PARTICULAR USER DETAILS
    UsersService.prototype.get = function (id) {
        return this.http.get(BASEURL + "/traveller/" + id)
            .map(function (res) { return res.json(); });
    };
    // FIND PLANS PRUPOSED BY SPECIFIC USER
    UsersService.prototype.findPlans = function (user) {
        return this.http.get(BASEURL + "/plan/" + user)
            .map(function (res) { return res.json(); });
    };
    // FIND PLANS WHERE THIS SPECIFIC USER IS GOING
    UsersService.prototype.findPlansGoing = function (userId) {
        return this.http.get(BASEURL + "/goingPlan/" + userId)
            .map(function (res) { return res.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-warning {\n    color: #fff;\n    background-color: #FF7849;\n    border-color: #eea236;\n    min-width: 50%;\n    margin-top: 50px;\n    text-align: center;\n    font-size: 20px;\n}\n\n.align-center {\n    text-align: center;\n}\n\nh2 {\n    margin-bottom: 20px;\n    text-align: center;\n}\n\n.container {\n    margin-top: 30px;\n}\n.grey{\n    background-color:  #3C4858;\n    color: whitesmoke;\n    margin-top: -10px;\n    padding: 15px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"grey\">\n    <h2> Signup <i class=\"fa fa-user-circle-o\"></i></h2>\n</header>\n<section class=\"container\">\n  <form class=\"form-group\">\n    <input placeholder=\"Email\" class=\"form-control\" type=\"text\"  name=\"email\"/>\n    <br>\n    <input placeholder=\"Username\" class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n    <br>\n    <input placeholder=\"Password\" class=\"form-control\" type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n    <div class=\"align-center\">\n      <button class=\"btn btn-warning\" (click)=\"signup()\"> signup </button>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Signup with " + username + " " + password);
            this.auth.signup(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/login']); });
        }
        else {
            console.log("Tienes que poner un username y un pasword");
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/traveller/traveller.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo {\n    border-radius: 100%;\n    width: 100px;\n    height: 100px;\n    border: 2px solid white;\n}\n\n\n\n\n.img {\n    text-align: center;\n    border-right: 1px solid gray;\n    background: #3C4858;\n    padding: 20px;\n    color: whitesmoke;\n    min-height: calc(100vh - 50px);\n}\n.plans {\n    width: 100%;\n    display: inline-block;\n}\n.plan {\n    padding: 10px;\n    width: 100%;\n    border-bottom: 1px solid lightgray;\n}\n.plan a {\n  color: gray;\n}\n.plan h3{\n    margin-top: 0;\n}\n@media (max-width: 768px) {\n    .img {\n        min-height: inherit;\n        min-width: 100%;\n    }\n}\n\n.img h3 {\n    border-top: 1px solid gray;\n    padding-top: 30px;\n}\n.link {\n    text-align: center;\n    font-size: 18px;\n    color: #c14848;\n    margin-top: 50px;\n    cursor: pointer;\n}\n\n.links .fa {\n    margin: 0 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/traveller/traveller.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"unictraveller\">\n\n<!-- DATOS GENERALES -->\n\n    <div class=\"img col-sm-3\">\n      <img class=\"photo\" [src]= \"urlTxatxi + unictraveller.photo\" height=300/>\n      <h2>{{ unictraveller.username }}</h2>\n      <h3>Acerca de {{ unictraveller.username }}:</h3>\n      <p> \" {{unictraveller.details}} \" </p>\n      <h3>Lugar de residencia:</h3>\n      <p>{{unictraveller.country}} </p>\n    </div>\n\n\n<!-- PRUEBA -->\n\n<p-accordion>\n  <!-- PLANES PROPUESTOS -->\n    <p-accordionTab header=\"Planes propuestos\">\n      <div class=\"plans\">\n        <div class=\"plan\" *ngFor=\"let plan of allPlans | async\">\n          <h3> {{ plan.plan }} </h3>\n          <a [routerLink]=\"['/unicPlan',plan._id]\"> Ver detalles del plan </a>\n        </div>\n      </div>\n    </p-accordionTab>\n  <!-- PLANES QUE VA A VISITAR -->\n    <p-accordionTab header=\"Va a asistir\">\n      <div class=\"plans\">\n        <div class=\"plan\" *ngFor=\"let plan of allPlansGoing | async\">\n          <h3> {{ plan.planId.plan }} </h3>\n          <a [routerLink]=\"['/unicPlan', plan.planId._id]\"> Mas detalles</a>\n        </div>\n      </div>\n    </p-accordionTab>\n\n</p-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/traveller/traveller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravellerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TravellerComponent = (function () {
    function TravellerComponent(router, route, usersService) {
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.urlTxatxi = "http://localhost:3000";
    }
    TravellerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getUserDetails(params['id']);
        });
    };
    TravellerComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.usersService.get(id)
            .subscribe(function (user) {
            _this.unictraveller = user;
            _this.allPlans = _this.usersService.findPlans(user.username);
            _this.allPlansGoing = _this.usersService.findPlansGoing(user._id);
        });
    };
    return TravellerComponent;
}());
TravellerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-traveller',
        template: __webpack_require__("../../../../../src/app/traveller/traveller.component.html"),
        styles: [__webpack_require__("../../../../../src/app/traveller/traveller.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _c || Object])
], TravellerComponent);

var _a, _b, _c;
//# sourceMappingURL=traveller.component.js.map

/***/ }),

/***/ "../../../../../src/app/unic-plan/unic-plan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".traveler {\n    display: inline-block;\n    text-align: center;\n    padding: 10px;\n}\n\n.container {\n    text-align: center;\n}\n\n.cuadrado {\n    margin-bottom: 20px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid orange;\n}\n\n.grey{\n  background-color:  #3C4858;\n  color: whitesmoke;\n}\n\n.traveler img {\n    width: 80px;\n    height: 80px;\n    border-radius: 100%;\n    border: 1px solid black;\n    margin-bottom: 10px;\n}\n\n.plan {\n    padding: 20px;\n}\n\n.going {\n    text-align: center;\n}\n.user {\n    float: left;\n}\n.all-users {\n    display: inline-block;\n}\n.comment {\n    padding-top: 10px;\n    border-bottom: 1px solid orange;\n}\n.plan-title {\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 10px;\n    margin-top: 0;\n    padding-top: 10px;\n}\n\n.little {\n    opacity: 0.7;\n    text-align: right;\n}\n\n.btn-send {\n    float: right;\n    margin-top: 10px;\n}\n\nagm-map {\n  height: 150px;\n}\n\n.mapeo{\n  padding:  10px\n\n}\n\n.info{\n  text-align: center;\n}\n\n.dark{\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/unic-plan/unic-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='unicplan'>\n\n<!-- DETALLES DEL PLAN -->\n\n<div class=\"grey\">\n\n<div class=\"info\">\n  <h2 class=\"plan-title\"> {{ unicplan.plan }} </h2>\n  <p> \" {{ unicplan.details }} \"</p>\n  <p > Propuesto por: {{unicplan.user}}</p>\n  <p > Fecha: {{ unicplan.day }}/{{unicplan.month}}/{{unicplan.year}}</p>\n  <p > En: {{unicplan.placeName}}</p>\n</div>\n\n<!-- PLAN EN MAPA -->\n<div class=\"mapeo\">\n<agm-map [latitude]=\"unicplan.lat\" [longitude]=\"unicplan.lng\" [scrollwheel]=\"false\" >\n  <agm-marker  [latitude]=\"unicplan.lat\" [longitude]=\"unicplan.lng\" [markerDraggable]= FALSE >\n    <agm-info-window>\n      <strong class=\"dark\"> {{ unicplan.plan }}</strong>\n    </agm-info-window>\n  </agm-marker>\n</agm-map>\n</div>\n\n</div>\n\n<!-- BOTON DE UNIRSE AL PLAN -->\n\n<div *ngIf=\"isHeGoing\">\n  <div class=\"going\" *ngIf='isHeGoing.length == 0'>\n    <p>¿Te interesa el plan y te gustaria formar parte?</p>\n    <button class=\"btn btn-warning\" (click)=\"newConexion()\">voy a ir! </button>\n  </div>\n</div>\n\n<p-accordion>\n\n  <p-accordionTab header=\"Viajeros inscritos\">\n\n\n    <!-- LISTA DEVIAJEROS QUE VAN AL PLAN -->\n\n    <div>\n      <div *ngIf=\"allUsersGoingToPlan\">\n        <div *ngIf='allUsersGoingToPlan.length == 0'>\n          <p>Ningun viajero asistirá por el momento. Sé el primero en unirte al plan</p>\n        </div>\n\n\n        <div class=\"all-users\" *ngIf='allUsersGoingToPlan.length > 0'>\n          <div class=\"user\" *ngFor=\"let user of allUsersGoingToPlan\">\n            <a [routerLink]=\"['/traveller', user.userId._id]\" class=\"traveler\">\n            <img [src]= \"urlTxatxi + user.userId.photo\" height=50/>\n            <p>{{ user.userId.username }}</p>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </p-accordionTab>\n\n  <!-- ESPACIIO -->\n\n  <p-accordionTab header=\"Foro sobre  {{ unicplan.plan }}\" >\n\n\n    <!-- COMENTARIOS DEL PLAN -->\n\n    <h3>Comentarios del plan:</h3>\n      <div>\n        <div *ngIf=\"allComments\">\n          <div *ngIf='allComments.length == 0'>\n            <p>No hay comentarios. ¿Algun consejo o duda? Sé el primero en compartir tu experiencia sobre {{ unicplan.plan}} </p>\n          </div>\n          <div *ngIf='allComments.length > 0'>\n            <div class=\"comment\" *ngFor=\"let comment of allComments\">\n              <p> <strong>{{ comment.userId.username }} :</strong></p>\n              <p>{{ comment.comment }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- COMENTARIO FROM -->\n\n      <h2></h2>\n      <div class=\"input-group\">\n        <textarea class=\"form-control\"  placeholder=\"Escribe tu comentario\" type=\"text\" [(ngModel)]=\"comment\" name=\"comment\">\n        </textarea>\n        <button class=\"btn-send btn btn-default\" (click)=\"newComment()\">Enviar</button>\n      </div>\n\n  </p-accordionTab>\n\n<div *ngIf=\"isHeGoing\">\n <div *ngIf='isHeGoing.length !== 0'>\n\n  <p-accordionTab header=\"Chat de  {{ unicplan.plan }}\" >\n      <app-chat [ngClass]=\"{'open': chatStatus}\" class=\"main__aside\" ></app-chat>\n  </p-accordionTab>\n\n</div>\n</div>\n</p-accordion>\n\n\n\n\n\n<h3></h3>\n\n\n\n\n\n\n\n</div>\n\n<!-- CHAT -->\n\n\n\n\n\n<!-- BOTON DE VOLVER A LA BUSQUEDA\n\n<button (click)=\"goBack()\"> vuelve a la busqueda </button> -->\n"

/***/ }),

/***/ "../../../../../src/app/unic-plan/unic-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_plan_service__ = __webpack_require__("../../../../../src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnicPlanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UnicPlanComponent = (function () {
    function UnicPlanComponent(auth, router, route, planService, placeService) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.planService = planService;
        this.placeService = placeService;
        this.urlTxatxi = "http://localhost:3000";
        this.user = this.auth.getUser()
            .subscribe(function (user) { _this.user = user; });
    }
    UnicPlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getPlanDetails(params['id']);
            _this.urlInfo = _this.placeService.getUrlInfo();
        });
    };
    // GET THE PLANS DETAILS, PLAN'S COMMENTS AND ALL THE PEOPLE JOINED
    UnicPlanComponent.prototype.getPlanDetails = function (id) {
        var _this = this;
        this.planService.getUnicPlan(id)
            .subscribe(function (plan) {
            _this.unicplan = plan;
            _this.planService.isHeGoing(_this.unicplan._id, _this.user._id).subscribe(function (a) {
                _this.isHeGoing = a;
            });
            _this.planService.findComments(_this.unicplan._id).subscribe(function (com) {
                _this.allComments = com;
            });
            _this.planService.findUsers(_this.unicplan._id).subscribe(function (au) {
                _this.allUsersGoingToPlan = au;
            });
        });
    };
    // CREATE NEW COMMENT ON THIS SPECIFIC PLAN
    UnicPlanComponent.prototype.newComment = function () {
        var _this = this;
        if (this.comment != "") {
            this.planService.sendMyComment(this.comment, this.unicplan._id, this.user._id)
                .subscribe(function () {
                _this.planService.findComments(_this.unicplan._id).subscribe(function (com) {
                    _this.allComments = com;
                });
                _this.comment = "";
            });
        }
        else {
            console.log("ponte un comentario locooo");
        }
    };
    // CREATE NEW CONEXION THIS USER - THIS PLAN
    UnicPlanComponent.prototype.newConexion = function () {
        var _this = this;
        this.planService.sendThisConexion(this.user._id, this.unicplan._id)
            .subscribe(function () {
            (function (plan) { return console.log(plan); });
            _this.planService.findUsers(_this.unicplan._id).subscribe(function (au) {
                _this.allUsersGoingToPlan = au;
            });
            _this.planService.isHeGoing(_this.unicplan._id, _this.user._id).subscribe(function (a) {
                _this.isHeGoing = a;
            });
        });
    };
    UnicPlanComponent.prototype.goBack = function () {
        this.router.navigate(["holiday/" + this.urlInfo.title + "/" + this.urlInfo.placeName + "/" + this.urlInfo.otherLat + "/" + this.urlInfo.otherLng]);
    };
    return UnicPlanComponent;
}());
UnicPlanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-unic-plan',
        template: __webpack_require__("../../../../../src/app/unic-plan/unic-plan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/unic-plan/unic-plan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_plan_service__["a" /* PlanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_plan_service__["a" /* PlanService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_place_service__["a" /* PlaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_place_service__["a" /* PlaceService */]) === "function" && _e || Object])
], UnicPlanComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=unic-plan.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo {\n    border-radius: 100%;\n    width: 100px;\n    height: 100px;\n    border: 2px solid white;\n}\n\n.img {\n    text-align: center;\n    border-right: 1px solid gray;\n    background: #3C4858;\n    padding: 20px;\n    color: whitesmoke;\n    min-height: calc(100vh - 50px);\n}\n.plans {\n    width: 100%;\n    display: inline-block;\n}\n.plan {\n    padding: 10px;\n    width: 100%;\n    border-bottom: 1px solid lightgray;\n}\n.plan a {\n  color: gray;\n}\n\n.plan h3{\n    margin-top: 0;\n}\n@media (max-width: 768px) {\n    .img {\n        min-height: inherit;\n        min-width: 100%;\n    }\n}\n\n.img h3 {\n    border-top: 1px solid gray;\n    padding-top: 30px;\n}\n.link {\n    text-align: center;\n    font-size: 18px;\n    color: #c14848;\n    margin-top: 50px;\n    cursor: pointer;\n}\n\n.links {\n    position: absolute;\n    bottom: 0;\n    background: white;\n    padding: 20px;\n    border-top: 1px solid gray;\n    width: 100%;\n}\n\n.links .fa {\n    margin: 0 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "  <div *ngIf=\"!user\">\n  <h2>NO USER LOGGED IN</h2>\n</div>\n\n<!-- CUANDO HAY USUARIO -->\n<div *ngIf=\"user\">\n\n<!-- INFORMACION DE USUARIO -->\n  <div class=\"img col-sm-3\">\n    <img class=\"photo\" [src]= \"urlTxatxi + user.photo\" height=300/>\n    <h2>{{ user.username }}</h2>\n\n    <h3>Acerca de ti:</h3>\n    <p>\" {{user.details}} \" </p>\n\n    <h3>Lugar de residencia:</h3>\n    <p>{{user.country}} </p>\n  </div>\n\n<!-- MUESTRA LOS PLANES PROPUESTOS POR EL USUARIO, SI LOS HAY -->\n\n<p-accordion>\n    <p-accordionTab header=\"Tus planes propuestos\">\n    <div class=\"plans\">\n      <div class=\"plan\" *ngIf='allPlansProposed'>\n        <div *ngIf='allPlansProposed.length == 0'>\n          <div class=\"\">\n            <P>Aun no has propuesto ningun plan</P>\n          </div>\n        </div>\n\n        <div *ngIf='allPlansProposed.length > 0'>\n          <div class=\"plans\">\n            <div class=\"plan\" *ngFor=\"let plan of allPlansProposed\">\n              <h3> {{ plan.plan }} </h3>\n              <a [routerLink]=\"['/unicPlan',plan._id]\"> Ver detalles del plan </a>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </p-accordionTab>\n    <p-accordionTab header=\"Va a asistir\">\n  <div class=\"plans\">\n      <div *ngIf='allPlansGoing'>\n        <div class=\"plan\" *ngIf='allPlansGoing.length == 0'>\n          <div class=\"\">\n            <P>Aun no te has unido a ningun plan</P>\n          </div>\n        </div>\n\n\n          <div class=\"plan\" *ngIf='allPlansGoing.length > 0'>\n            <div class=\"plans\">\n              <div class=\"plan\" *ngFor=\"let plan of allPlansGoing\">\n              <h3> {{ plan.planId.plan }} </h3>\n              <a [routerLink]=\"['/unicPlan', plan.planId._id]\"> Mas detalles</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </p-accordionTab>\n\n</p-accordion>\n\n<!-- LINKS A EDITAR Y AL BUSCADOR -->\n  <div class=\"links\">\n    <a class=\"link col-sm-6\" [routerLink]=\"['/map']\"> Buscar planes <i class=\"fa fa-search\"></i></a>\n    <a class=\"link col-sm-6\" [routerLink]=\"['/editprofile', user._id]\"> <i class=\"fa fa-edit\"></i>Edita tu perfil</a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserprofileComponent = (function () {
    function UserprofileComponent(auth, usersService) {
        var _this = this;
        this.auth = auth;
        this.usersService = usersService;
        this.urlTxatxi = "http://localhost:3000";
        this.user = this.auth.getUser()
            .subscribe(function (user) { console.log(user); _this.user = user; _this.getUserDetails(user); });
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent.prototype.getUserDetails = function (user) {
        var _this = this;
        this.usersService.findPlans(user.username).subscribe(function (res) {
            _this.allPlansProposed = res;
        });
        this.usersService.findPlansGoing(user._id).subscribe(function (res) {
            _this.allPlansGoing = res;
        });
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], UserprofileComponent);

var _a, _b;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASEURL: 'http://localhost:3000',
    firebase: {
        apiKey: "AIzaSyCVTosLLjsm_Q8g2G98lH1rMBt7cuAaMKM",
        authDomain: "tripmate-89b3c.firebaseapp.com",
        databaseURL: "https://tripmate-89b3c.firebaseio.com",
        projectId: "tripmate-89b3c",
        storageBucket: "",
        messagingSenderId: "544411279165"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map
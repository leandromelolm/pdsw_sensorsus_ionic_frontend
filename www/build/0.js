webpackJsonp([0],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_usuario_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_confirmPassword__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, usuarioService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.alertCtrl = alertCtrl;
        this.formGroup = this.formBuilder.group({
            nomeCompleto: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(120)]],
            nickname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(50)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            senha: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
            senha_confirmar: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__validators_confirmPassword__["a" /* ValidateConfirmPassword */]]]
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        console.log(this.formGroup.value); //Teste
        this.usuarioService.insert(this.formGroup.value)
            .subscribe(function (response) {
            _this.showInsertOk();
        }, function (error) { });
    };
    SignupPage.prototype.homePage = function () {
        this.navCtrl.setRoot('HomePage');
    };
    SignupPage.prototype.showInsertOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            message: 'Cadastro efetuado com sucesso',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Criar Conta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="signupUser(); $event.preventDefault()">\n\n    <ion-item>\n      <ion-label stacked>Nome Completo*</ion-label>\n      <ion-input formControlName="nomeCompleto" type="text" placeholder="Nome"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.nomeCompleto.dirty && formGroup.controls.nomeCompleto.errors"\n      margin-left>\n      Nome inválido\n    </p>\n\n    <ion-item>\n      <ion-label stacked>Apelido*</ion-label>\n      <ion-input formControlName="nickname" type="text" placeholder="Nome de usuario"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls[\'nickname\'].dirty && formGroup.controls[\'nickname\'].errors" margin-left>\n      Apelido inválido\n    </p>\n\n    <ion-item>\n      <ion-label stacked>E-mail*</ion-label>\n      <ion-input formControlName="email" type="text" placeholder="E-mail"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.email.dirty && formGroup.controls.email.errors" margin-left>\n      E-mail inválido\n    </p>\n\n    <ion-item>\n      <ion-label stacked>Senha*</ion-label>\n      <ion-input formControlName="senha" type="password" placeholder="Senha"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.senha.dirty && formGroup.controls.senha.errors" margin-left>\n      Senha inválido\n    </p>\n\n    <ion-item>\n      <ion-label stacked>Redigite a senha*</ion-label>\n      <ion-input formControlName="senha_confirmar" name="senha_confirmar" type="password" placeholder="Confirmar senha">\n      </ion-input>\n    </ion-item>\n\n    <button ion-button block (click)="submit" [disabled]="formGroup.invalid">Criar conta</button>\n  </form>\n\n  <button ion-button block outline (click)="homePage()" expand="block">Voltar Página Principal</button>\n\n</ion-content>'/*ion-inline-end:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_domain_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_domain_usuario_service__["a" /* UsuarioService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidateConfirmPassword;
function ValidateConfirmPassword(control) {
    if (!control.root.value) {
        return null;
    }
    if (control.value === control.root.value.senha) {
        return null;
    }
    else {
        return { validConfirmPassword: true };
    }
}
//# sourceMappingURL=confirmPassword.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
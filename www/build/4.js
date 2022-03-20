webpackJsonp([4],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabelecimentosPageModule", function() { return EstabelecimentosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estabelecimentos__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstabelecimentosPageModule = /** @class */ (function () {
    function EstabelecimentosPageModule() {
    }
    EstabelecimentosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__estabelecimentos__["a" /* EstabelecimentosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estabelecimentos__["a" /* EstabelecimentosPage */]),
            ],
        })
    ], EstabelecimentosPageModule);
    return EstabelecimentosPageModule;
}());

//# sourceMappingURL=estabelecimentos.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstabelecimentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_estabelecimento_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EstabelecimentosPage = /** @class */ (function () {
    function EstabelecimentosPage(navCtrl, menu, navParams, estabelecimentService, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.estabelecimentService = estabelecimentService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.status = false;
        this.statusLoginButton = true;
    }
    EstabelecimentosPage.prototype.pageHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    EstabelecimentosPage.prototype.signinpage = function () {
        this.navCtrl.push('SignInPage');
    };
    EstabelecimentosPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    EstabelecimentosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.estabelecimentService.findAll()
            .subscribe(function (response) {
            _this.items = response;
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    EstabelecimentosPage.prototype.ionViewDidEnter = function () {
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.status = true;
            this.statusLoginButton = false;
        }
    };
    EstabelecimentosPage.prototype.showAvaliacoes = function (estabelecimento_id) {
        this.navCtrl.push('EstabDetailPage', { estabelecimento_id: estabelecimento_id });
    };
    EstabelecimentosPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde... Buscando dados do servidor..."
        });
        loader.present();
        return loader;
    };
    EstabelecimentosPage.prototype.showHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    // abrir menu lateral com arrastar
    EstabelecimentosPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(true);
    };
    EstabelecimentosPage.prototype.ionViewDidLeave = function () {
        this.menu.swipeEnable(true);
    };
    EstabelecimentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estabelecimentos',template:/*ion-inline-start:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/estabelecimentos/estabelecimentos.html"*/'<ion-header>\n  <!-- <ion-navbar [hidden] *ngIf="status"> -->\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <div class="container">\n      <div class="title">\n        <ion-title>SensorSus</ion-title>\n      </div>\n      <div [hidden] *ngIf="!status" class="buttons">\n        <button ion-button (click)="signinpage()">Entrar</button>\n        <button ion-button (click)="signup()">Registrar</button>\n      </div>\n    </div>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="content-container">\n\n    <!-- <ion-fab top right edge>\n    <button navPush="SignInPage" ion-fab mini> Entrar</button>\n   </ion-fab> -->\n\n    <div [hidden] *ngIf="statusLoginButton">\n\n      <!-- <button ion-button block (click)="signinpage()">Entrar</button> -->\n      <!-- <button ion-button block outline (click)="signup()">Registrar</button> -->\n\n      <!-- <ion-row>\n      <ion-col>\n        <button ion-button block (click)="signinpage()" expand="block">Entrar</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block outline (click)="signup()" expand="block">Registrar</button>\n      </ion-col>\n    </ion-row> -->\n\n      <button ion-button block outline (click)="pageHome()"> ver ultimas avaliações</button>\n    </div>\n\n\n    <h5>Lista de Estabelecimentos</h5>\n\n\n    <ion-list>\n      <button class="button" ion-item *ngFor="let item of items" (click)="showAvaliacoes(item.id)" icon-start>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/hospital.png">\n        </ion-thumbnail>\n        <h5 class="title-list">{{item.nome}}</h5>\n        <p class="p">{{item.endereco.cidade.nome}} • {{item.endereco.cidade.estado.nome}}</p>\n\n        <a style="font-size:larger; font-weight:bold;">{{item.score.toFixed(1)}}</a>\n\n        <span *ngIf="item.score > 0.1">\n          <span *ngIf="0.9 > item.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="item.score >= 1">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n        <span *ngIf="item.score > 1.1">\n          <span *ngIf="1.9 > item.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="item.score >= 2">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n        <span *ngIf="item.score > 2.1">\n          <span *ngIf="2.9 > item.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="item.score >= 3">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n        <span *ngIf="item.score > 3.1">\n          <span *ngIf="3.9 > item.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="item.score >= 4">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n        <span *ngIf="item.score > 4.1">\n          <span *ngIf="4.9 > item.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="item.score >= 5">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n\n        <!--star-outline - estrela apenas com contorno (sem preenchimento)-->\n\n        <span *ngIf="1 > item.score">\n          <span *ngIf="0.1 > item.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n\n        </span>\n        <span *ngIf="2 > item.score">\n          <span *ngIf="1.1 > item.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n        </span>\n\n        <span *ngIf="3 > item.score">\n          <span *ngIf="2.1 > item.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n        </span>\n\n        <span *ngIf="4 > item.score">\n          <span *ngIf="3.1 > item.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n        </span>\n\n        <span *ngIf="5 > item.score">\n          <span *ngIf="4.1 > item.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n        </span>\n\n        <a>({{item.count}})</a>\n\n      </button>\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/estabelecimentos/estabelecimentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_estabelecimento_service__["a" /* EstabelecimentoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]])
    ], EstabelecimentosPage);
    return EstabelecimentosPage;
}());

//# sourceMappingURL=estabelecimentos.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
webpackJsonp([3],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_module__["b" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_avaliacao_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu, auth, avaliacaoService, loadingCtrl, storage, renderer) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.auth = auth;
        this.avaliacaoService = avaliacaoService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.renderer = renderer;
        //@Input("header") head;
        this.status = false;
        this.statusLoginButton = true;
        this.items = [];
        this.page = 0;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.status = true;
            this.statusLoginButton = false;
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    HomePage.prototype.showDetail = function (estabelecimento_id) {
        this.navCtrl.push('EstabDetailPage', { estabelecimento_id: estabelecimento_id });
    };
    HomePage.prototype.showAvaliacoes = function (estabelecimento_id) {
        this.navCtrl.push('EstabDetailPage', { estabelecimento_id: estabelecimento_id });
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.avaliacaoService.finAllRatingUser(this.page, 10)
            .subscribe(function (response) {
            _this.items = _this.items.concat(response['content']);
            loader.dismiss();
            // console.log(this.page);
            //console.log(this.items);
        }, function (error) {
            loader.dismiss();
        });
    };
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    HomePage.prototype.pageEstabelecimento = function () {
        this.navCtrl.setRoot('EstabelecimentosPage');
    };
    HomePage.prototype.signinpage = function () {
        this.navCtrl.push('SignInPage');
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.items = [];
        this.loadData();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.loadData();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    // abrir menu lateral com arrastar
    HomePage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.menu.swipeEnable(false);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/home/home.html"*/'<ion-header #head [hidden] *ngIf="status">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div [hidden] *ngIf="statusLoginButton">    \n    <!-- <button ion-button block (click)="signinpage()">Entrar</button> -->\n    <!-- <button ion-button block outline (click)="signup()">Registrar</button> -->\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="signinpage()" expand="block">Entrar</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block outline (click)="signup()" expand="block">Registrar</button>\n      </ion-col>\n    </ion-row>\n    <button ion-button block outline (click)="pageEstabelecimento()">Ver lista de estabelecimentos</button>\n  </div>  \n\n  <h5 (click)="signup()">Últimas avaliações</h5>  \n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  \n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="showAvaliacoes(item.estabelecimentoId)">\n      <h2>{{item.nomeEstabelecimento}}</h2>\n      <p>avaliado por {{item.apelido}} em {{item.dataCriacao}} </p>\n      <a>Classificação: {{item.classificacao}}</a>  \n\n      <span *ngIf="item.classificacao > 0.1">\n        <span *ngIf="0.9 > item.classificacao" >\n          <ion-icon class="iconYellow" name="star-half" ></ion-icon>\n        </span>\n      </span>\n      <span *ngIf="item.classificacao >= 1">\n        <ion-icon class="iconYellow" name="star" ></ion-icon>\n      </span>\n\n      <span *ngIf="item.classificacao > 1.1">\n        <span *ngIf="1.9 > item.classificacao" >\n          <ion-icon class="iconYellow" name="star-half" ></ion-icon>\n        </span>\n      </span>\n      <span *ngIf="item.classificacao >= 2">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n      </span>\n\n      <span *ngIf="item.classificacao > 2.1">\n        <span *ngIf="2.9 > item.classificacao" >\n          <ion-icon class="iconYellow" name="star-half" ></ion-icon>\n        </span>\n      </span>\n      <span *ngIf="item.classificacao >= 3">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n      </span>\n\n      <span *ngIf="item.classificacao > 3.1">\n        <span *ngIf="3.9 > item.classificacao" >\n          <ion-icon class="iconYellow" name="star-half" ></ion-icon>\n        </span>\n      </span>\n      <span *ngIf="item.classificacao >= 4">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n      </span>\n\n      <span *ngIf="item.classificacao > 4.1">\n        <span *ngIf="4.9 > item.classificacao" >\n          <ion-icon class="iconYellow" name="star-half" ></ion-icon>\n        </span>\n      </span>\n      <span *ngIf="item.classificacao >= 5">\n        <ion-icon class="iconYellow" name="star"></ion-icon>\n      </span>    \n      \n      <p>Comentário:</p>\n        <ion-card>\n          <ion-card-content>\n            <p>\n              {{item.descricao}}\n            </p>\n          </ion-card-content>\n        </ion-card>\n    </button>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>  \n\n</ion-content>'/*ion-inline-end:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_avaliacao_service__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
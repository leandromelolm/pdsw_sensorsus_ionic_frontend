webpackJsonp([3],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRatingsPageModule", function() { return MyRatingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_ratings__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyRatingsPageModule = /** @class */ (function () {
    function MyRatingsPageModule() {
    }
    MyRatingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_ratings__["a" /* MyRatingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_ratings__["a" /* MyRatingsPage */]),
            ],
        })
    ], MyRatingsPageModule);
    return MyRatingsPageModule;
}());

//# sourceMappingURL=my-ratings.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRatingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_avaliacao_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_usuario_service__ = __webpack_require__(155);
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





var MyRatingsPage = /** @class */ (function () {
    function MyRatingsPage(navCtrl, navParams, loadingCtrl, storage, usuarioService, avaliacaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.usuarioService = usuarioService;
        this.avaliacaoService = avaliacaoService;
        this.items = [];
        this.page = 0;
        this.linesPerPage = 5;
    }
    MyRatingsPage.prototype.showAvaliacoes = function (estabelecimento_id) {
        this.navCtrl.push('EstabDetailPage', { estabelecimento_id: estabelecimento_id });
    };
    MyRatingsPage.prototype.ionViewDidLoad = function () {
        this.UserLogged();
    };
    MyRatingsPage.prototype.UserLogged = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.usuarioService.findByEmail(localUser.email)
                .subscribe(function (response) {
                _this.usuario = response;
                // console.log(this.usuario);  
                _this.loadData();
            }, function (error) { });
        }
    };
    MyRatingsPage.prototype.loadData = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.avaliacaoService.findByIDRatingUser(this.usuario.id, this.page, this.linesPerPage)
            .subscribe(function (response) {
            _this.items = _this.items.concat(response['content']);
            loader.dismiss();
            // console.log(this.page);
            // console.log(this.items);
        }, function (error) {
            loader.dismiss();
        });
    };
    MyRatingsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    MyRatingsPage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.items = [];
        this.loadData();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    MyRatingsPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.loadData();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    MyRatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-ratings',template:/*ion-inline-start:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/my-ratings/my-ratings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle right>\n      \n    </button>\n    <ion-title>SensorSus</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="container">\n    \n    <div class="col-1">\n    </div>\n\n    <div class="col-10">\n      <h5>Minhas Avaliações</h5>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n      <ion-list>\n        <button ion-item *ngFor="let item of items" (click)="showAvaliacoes(item.estabelecimentoId)">\n          <h5 class="title-list">{{item.nomeEstabelecimento}}</h5>\n          <p class="p">avaliado por {{item.apelido}} em {{item.dataCriacao}} </p>\n          <a>Classificação: {{item.classificacao}}</a>\n          <span *ngIf="item.classificacao > 0.1">\n            <span *ngIf="0.9 > item.classificacao">\n              <ion-icon class="iconYellow" name="star-half"></ion-icon>\n            </span>\n          </span>\n          <span *ngIf="item.classificacao >= 1">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="item.classificacao > 1.1">\n            <span *ngIf="1.9 > item.classificacao">\n              <ion-icon class="iconYellow" name="star-half"></ion-icon>\n            </span>\n          </span>\n          <span *ngIf="item.classificacao >= 2">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="item.classificacao > 2.1">\n            <span *ngIf="2.9 > item.classificacao">\n              <ion-icon class="iconYellow" name="star-half"></ion-icon>\n            </span>\n          </span>\n          <span *ngIf="item.classificacao >= 3">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="item.classificacao > 3.1">\n            <span *ngIf="3.9 > item.classificacao">\n              <ion-icon class="iconYellow" name="star-half"></ion-icon>\n            </span>\n          </span>\n          <span *ngIf="item.classificacao >= 4">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <span *ngIf="item.classificacao > 4.1">\n            <span *ngIf="4.9 > item.classificacao">\n              <ion-icon class="iconYellow" name="star-half"></ion-icon>\n            </span>\n          </span>\n          <span *ngIf="item.classificacao >= 5">\n            <ion-icon class="iconYellow" name="star"></ion-icon>\n          </span>\n          <p>Comentário:</p>\n          <ion-card>\n            <ion-card-content>\n              <p>\n                {{item.descricao}}\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </button>\n      </ion-list>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n\n    <div class="col-1">\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/my-ratings/my-ratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_avaliacao_service__["a" /* AvaliacaoService */]])
    ], MyRatingsPage);
    return MyRatingsPage;
}());

//# sourceMappingURL=my-ratings.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
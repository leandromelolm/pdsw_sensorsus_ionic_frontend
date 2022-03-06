webpackJsonp([5],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstabDetailPageModule", function() { return EstabDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estab_detail__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstabDetailPageModule = /** @class */ (function () {
    function EstabDetailPageModule() {
    }
    EstabDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__estab_detail__["a" /* EstabDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estab_detail__["a" /* EstabDetailPage */]),
            ],
        })
    ], EstabDetailPageModule);
    return EstabDetailPageModule;
}());

//# sourceMappingURL=estab-detail.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstabDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_avaliacao_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_estabelecimento_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EstabDetailPage = /** @class */ (function () {
    function EstabDetailPage(navCtrl, navParams, avaliacaoService, estabService, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.avaliacaoService = avaliacaoService;
        this.estabService = estabService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.detail = "avaliacoes";
    }
    EstabDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var estabelecimento_id = this.navParams.get('estabelecimento_id');
        this.avaliacaoService.findByEstabelecimentoAvaliacao(estabelecimento_id)
            .subscribe(function (response) {
            console.log(response['content']);
            _this.items = response['content'];
            _this.estabelecimentoEnderecoLoad();
        }, function (error) {
            console.log(error);
        });
    };
    EstabDetailPage.prototype.estabelecimentoEnderecoLoad = function () {
        var _this = this;
        var estabelecimento_id = this.navParams.get('estabelecimento_id');
        this.estabService.findById(estabelecimento_id)
            .subscribe(function (response) {
            console.log(response);
            _this.estab = response;
        });
    };
    EstabDetailPage.prototype.avaliar = function (estab) {
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.navCtrl.push('AvaliarPage', { estab: estab });
        }
        else {
            this.showNoLogin();
        }
    };
    EstabDetailPage.prototype.showNoLogin = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Precisa fazer o Login!',
            message: 'Faça o login ou cadastre-se!',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.setRoot('HomePage');
                    }
                }
            ]
        });
        alert.present();
    };
    EstabDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estab-detail',template:/*ion-inline-start:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/estab-detail/estab-detail.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon class="iconMenu" name="menu"></ion-icon>\n    </button>\n    <ion-title>Detalhes</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="detail">\n      <ion-segment-button value="avaliacoes">\n        Avaliações\n      </ion-segment-button>\n      <ion-segment-button value="informacoes">\n        Informações\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div [ngSwitch]="detail">\n\n    <ion-list *ngSwitchCase="\'avaliacoes\'">\n\n      <ion-list>\n        <h2>{{estab?.nome}}</h2>\n        <a style="font-size:larger; font-weight:bold;"> {{estab?.score.toFixed(1)}}</a>\n\n\n        <span *ngIf="estab?.score > 0.1">\n          <span *ngIf="0.9 > estab?.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="estab?.score >= 1">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n        <span *ngIf="estab?.score > 1.1">\n          <span *ngIf="1.9 > estab?.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="estab?.score >= 2">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n        <span *ngIf="estab?.score > 2.1">\n          <span *ngIf="2.9 > estab?.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="estab?.score >= 3">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n        <span *ngIf="estab?.score > 3.1">\n          <span *ngIf="3.9 > estab?.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="estab?.score >= 4">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n        <span *ngIf="estab?.score > 4.1">\n          <span *ngIf="4.9 > estab?.score">\n            <ion-icon class="iconYellow" name="star-half"></ion-icon>\n          </span>\n        </span>\n        <span *ngIf="estab?.score >= 5">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n\n\n        <!--star-outline - estrela apenas com contorno (sem preenchimento)-->\n\n        <span *ngIf="1 > estab?.score">\n          <span *ngIf="0.1 > estab?.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n\n        </span>\n        <span *ngIf="2 > estab?.score">\n          <span *ngIf="1.1 > estab?.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n        </span>\n\n        <span *ngIf="3 > estab?.score">\n          <span *ngIf="2.1 > estab?.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n        </span>\n\n        <span *ngIf="4 > estab?.score">\n          <span *ngIf="3.1 > estab?.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n        </span>\n\n        <span *ngIf="5 > estab?.score">\n          <span *ngIf="4.1 > estab?.score">\n            <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n          </span>\n        </span>\n\n        <a style="font-size:larger; font-weight:bold;"> ({{estab?.count}})</a>\n\n        <p>{{estab?.endereco.cidade.nome}} • {{estab?.endereco.cidade.estado.nome}}</p>\n\n      </ion-list>\n\n      <div class="divComentar">\n        <a>Compartilhe sua experiência</a>\n        <button ion-button block inline (click)="avaliar(estab)">Avaliar</button>\n      </div>\n\n      <button ion-item *ngFor="let item of items">\n        <h2>{{item.apelido}}</h2>\n        <span *ngIf="item.classificacao >= 1">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="item.classificacao >= 2">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="item.classificacao >= 3">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="item.classificacao >= 4">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="item.classificacao >= 5">\n          <ion-icon class="iconYellow" name="star"></ion-icon>\n        </span>\n        <span *ngIf="1 > item.classificacao">\n          <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n        </span>\n        <span *ngIf="2 > item.classificacao">\n          <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n        </span>\n        <span *ngIf="3 > item.classificacao">\n          <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n        </span>\n        <span *ngIf="4 > item.classificacao">\n          <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n        </span>\n        <span *ngIf="5 > item.classificacao">\n          <ion-icon class="iconGrey" name="star-outline"></ion-icon>\n        </span>\n        <!-- <a>{{item.classificacao}}</a> -->\n        <a> • {{item.dataCriacao}} </a>\n\n        <p>Comentário:</p>\n        <ion-card>\n          <ion-card-content>\n            <p>\n              {{item.descricao}}\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </button>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'informacoes\'">\n      <h2>{{estab?.nome}}</h2>\n      <ion-card>\n        <ion-card-content>\n          <p>Códico CNES: {{estab?.codCnes}}</p>\n          <p>Descrição: {{estab?.descricao}}</p>\n          <p>Logradouro: {{estab?.endereco.logradouro}}, {{estab?.endereco.numero}}</p>\n          <p>Bairro: {{estab?.endereco.bairro}}</p>\n          <p>complemento: {{estab?.endereco.complemento}}</p>\n          <p>Cidade: {{estab?.endereco.cidade.nome}}</p>\n          <p>Estado: {{estab?.endereco.cidade.estado.nome}}</p>\n          <p>Cep: {{estab?.endereco.cep}}</p>\n          <p>Natureza Jurídica: {{estab?.naturezaJuridica}}</p>\n          <p>Orgão Gestor: {{estab?.orgaoGestor}}</p>\n          <p>Telefones: {{estab?.telefones}}</p>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/melo/ws/pdsw-sensorsus-frontend/pdsw_sensorsus_frontend_ionic/src/pages/estab-detail/estab-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_avaliacao_service__["a" /* AvaliacaoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_estabelecimento_service__["a" /* EstabelecimentoService */],
            __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EstabDetailPage);
    return EstabDetailPage;
}());

//# sourceMappingURL=estab-detail.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
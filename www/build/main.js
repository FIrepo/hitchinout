webpackJsonp([0],{

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datasets_datasets__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfer_transfer__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__datasets_datasets__["a" /* DatasetsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__["a" /* WalletPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__transfer_transfer__["a" /* TransferPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Book" tabIcon="car"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Balance" tabIcon="cash"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dataprovider_dataprov__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatasetsPage = /** @class */ (function () {
    function DatasetsPage(navCtrl, hackin, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.hackin = hackin;
        this.loadingCtrl = loadingCtrl;
    }
    DatasetsPage.prototype.setup = function () {
        var _this = this;
        // this.loadingView = this.loadingCtrl.create({
        //   content: 'Bitte warten. Datensätze werden geladen.',
        // });
        // this.loadingView.present();
        this.hackin.datasets.subscribe(function (datasets) {
            _this.datasets = datasets;
            // if (this.loadingView) {
            //   this.loadingView.dismiss();
            // }
        });
    };
    DatasetsPage.prototype.ngOnInit = function () {
        this.setup();
    };
    DatasetsPage.prototype.doRefresh = function (refresher) {
        this.hackin.fetchDatasets().then(function () {
            refresher.complete();
        });
    };
    DatasetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datasets',template:/*ion-inline-start:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/pages/datasets/datasets.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Future Ride</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor="let item of datasets">\n      KM: {{item[0]}}, BatteryLvl: {{item[1]}}, GPS: {{item[2]}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/pages/datasets/datasets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_dataprovider_dataprov__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], DatasetsPage);
    return DatasetsPage;
}());

//# sourceMappingURL=datasets.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { PrometheusProvider } from '../../providers/hackin/hackin';
var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WalletPage.prototype.setup = function () {
        // this.address = this.hackin.getAccountAddress();
        // this.hackin.balance.subscribe((balance) => this.balance = balance);
        // this.hackin.fetchBalance();
    };
    WalletPage.prototype.doRefresh = function (refresher) {
        //this.hackin.fetchBalance().then((() => refresher.complete()))
    };
    WalletPage.prototype.ngOnInit = function () {
        this.setup();
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/pages/wallet/wallet.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Wallet\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item>\n      <h2>Address: {{address}}</h2>\n      <p>Balance: {{balance}} AudiCoins</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/pages/wallet/wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_dataprovider_dataprov__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransferPage = /** @class */ (function () {
    function TransferPage(barcodeScanner, hackin, alertCtrl, loadingCtrl) {
        this.barcodeScanner = barcodeScanner;
        this.hackin = hackin;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.disableQRButton = false;
    }
    TransferPage.prototype.ngOnInit = function () {
        this.scanQR();
    };
    TransferPage.prototype.scanQR = function () {
        var _this = this;
        this.receipt = false;
        this.barcodeScanner.scan({
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
        }).then(function (barcodeData) {
            _this.tx = _this.hackin.readQRCodeString(barcodeData.text);
            console.log(_this.tx);
            _this.disableQRButton = true;
            _this.showTxConfirmAlert();
        });
    };
    TransferPage.prototype.showTxConfirmAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm Transaction",
            subTitle: "Receiver: " + this.tx.to + ", Value: " + this.tx.value,
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        _this.disableQRButton = false;
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        _this.loadingView = _this.loadingCtrl.create({
                            content: 'Bitte warten. Transaction wird gemined.',
                        });
                        _this.loadingView.present();
                        _this.hackin.transfer(_this.tx.argsDefaults[0].value, parseInt(_this.tx.argsDefaults[1].value))
                            .then(function (receipt) {
                            _this.disableQRButton = false;
                            _this.receipt = receipt;
                            _this.loadingView.dismiss();
                        }).catch(console.error);
                    }
                }
            ]
        });
        alert.present();
    };
    TransferPage.prototype.showTxConfirmModal = function () {
    };
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/pages/transfer/transfer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Transfer\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button block round (click)="scanQR()" [disabled]="disableQRButton">Scan QR Code</button>\n  <div *ngIf="receipt">\n    <h1>Transfer successful</h1>\n    <a href="https://rinkeby.etherscan.io/tx/{{receipt.transactionHash}}">Details here</a>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/pages/transfer/transfer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1__providers_dataprovider_dataprov__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(330);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_datasets_datasets__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_dataprovider_dataprov__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_wallet_wallet__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transfer_transfer__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transfer_transfer__["a" /* TransferPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_datasets_datasets__["a" /* DatasetsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transfer_transfer__["a" /* TransferPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_datasets_datasets__["a" /* DatasetsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_dataprovider_dataprov__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dataprovider_dataprov__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, hackin) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            hackin.instantiateWeb3AndContractAndAccount();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/vigneshstreamoid/hitxhin/hitchinout/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_dataprovider_dataprov__["a" /* DataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ethereum_qr_code__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ethereum_qr_code___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ethereum_qr_code__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
        this.balance = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.datasets = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('DataProvider loaded');
    }
    DataProvider_1 = DataProvider;
    DataProvider.prototype.instantiateWeb3AndContractAndAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accex, account, accounts, balance, balance, that;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("test");
                        this.web3 = new __WEBPACK_IMPORTED_MODULE_1_web3___default.a(new __WEBPACK_IMPORTED_MODULE_1_web3___default.a.providers.HttpProvider(DataProvider_1.WEB3_PROVIDER));
                        console.log('Web3 instantiated and connected to ', DataProvider_1.WEB3_PROVIDER);
                        accex = localStorage.getItem("accountexists");
                        if (!accex) return [3 /*break*/, 2];
                        return [4 /*yield*/, localStorage.getItem("accountexists")];
                    case 1:
                        account = _a.sent();
                        account = JSON.parse(account);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.web3.eth.personal.newAccount("password")];
                    case 3:
                        account = _a.sent();
                        localStorage.setItem("accountexists", JSON.stringify(account));
                        _a.label = 4;
                    case 4:
                        console.log(account);
                        return [4 /*yield*/, this.web3.eth.getAccounts()];
                    case 5:
                        accounts = _a.sent();
                        console.log(accounts);
                        return [4 /*yield*/, this.web3.eth.getBalance(accounts[0])];
                    case 6:
                        balance = _a.sent();
                        console.log(balance); // instanceof BigNumber
                        return [4 /*yield*/, this.web3.eth.getBalance(account)];
                    case 7:
                        balance = _a.sent();
                        console.log(balance); // instanceof BigNumber
                        that = this;
                        this.web3.eth.sendTransaction({
                            from: accounts[0],
                            to: account,
                            value: 100,
                        }, function (err, transactionHash) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(transactionHash);
                            }
                            var balance = that.web3.eth.getBalance(accounts[0]).then(function (bal) {
                                console.log(balance); // instanceof BigNumber
                            });
                            var balance = that.web3.eth.getBalance(account).then(function (bal) {
                                console.log(balance); // instanceof BigNumber
                            });
                            ;
                            console.log(balance); // instanceof BigNumber
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DataProvider.prototype.fetchDatasets = function () {
        // const datasets = [];
        // // First get DataSetLength as Call (read)
        // return this.hackinContract.methods.getDataLength(this.account.address).call({ from: this.account.address })
        //   .then(async (length) => {
        //     for (let i = 0; i < length.valueOf(); i++) {
        //       // Then interate over each Dataset and Fetch Result as Call (read)
        //       const data = await this.hackinContract.methods.getDataSetOf(this.account.address, i).call({ from: this.account.address });
        //       datasets.push(data);
        //     }
        //     this.datasets.emit(datasets);
        //   })
    };
    DataProvider.prototype.fetchBalance = function () {
        var _this = this;
        return this.hackinContract.methods.balanceOf(this.account.address).call({ from: this.account.address })
            .then(function (value) { return _this.balance.emit(value.valueOf()); });
    };
    DataProvider.prototype.watchDatasets = function () {
        // Current not possible, because no Event set.
    };
    DataProvider.prototype.watchBalance = function () {
        var _this = this;
        this.allEventsListener = this.hackinContract.events.Mint({ filter: { to: this.account.address } }, function (error, event) { console.log(event); })
            .on('data', function () {
            _this.fetchBalance();
            _this.fetchDatasets();
        });
    };
    DataProvider.prototype.transfer = function (address, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var tx, signedTx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tx = {
                            from: this.account.address,
                            to: this.hackinContract.options.address,
                            data: this.hackinContract.methods.transfer(address, amount).encodeABI(),
                            gas: 800000,
                        };
                        console.log(tx);
                        console.log(this.account);
                        return [4 /*yield*/, this.account.signTransaction(tx)];
                    case 1:
                        signedTx = _a.sent();
                        console.log(signedTx.rawTransaction);
                        return [2 /*return*/, this.web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                                .on('error', function (error) { return console.error("Error!!!! :-(: " + error); })
                                .on('transactionHash', function (txHash) { return console.log("TxHash: " + txHash); })
                                .on('receipt', function (receipt) { return console.log(receipt); })];
                }
            });
        });
    };
    DataProvider.prototype.getAccountAddress = function () {
        return this.account.address;
    };
    DataProvider.prototype.readQRCodeString = function (qrcode) {
        return new __WEBPACK_IMPORTED_MODULE_2_ethereum_qr_code___default.a().readStringToJSON(qrcode);
    };
    DataProvider.prototype.sendTx = function (tx) {
        this.hackinContract.metho;
    };
    DataProvider.WEB3_PROVIDER = 'http://192.168.14.252:8545';
    DataProvider = DataProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], DataProvider);
    return DataProvider;
    var DataProvider_1, _a;
}());

//# sourceMappingURL=dataprov.js.map

/***/ })

},[307]);
//# sourceMappingURL=main.js.map
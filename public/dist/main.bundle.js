webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular4-carousel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_app_index__ = __webpack_require__("./src/app/angular4-carousel/src/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_app_services__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_app_services_declarations__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/declarations/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_app_index__["a"]; });
/* unused harmony reexport CarouselService */
/* unused harmony reexport WindowWidthService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_app_services_declarations__["a"]; });






/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.imageSources = [
            'http://www.violinshoptampa.com/assets/images/Panorama2a.jpg',
            'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
            'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
            'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
        ];
        // example config
        this.config = {
            verifyBeforeLoad: true,
            log: true,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_1__services__["a" /* AnimationConfig */].SLIDE,
            autoplay: true,
            autoplayDelay: 2000,
            stopAutoplayMinWidth: 768
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/app.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/assets/app.styles.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/app.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/assets/app.styles.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%);\n  width: 80%;\n  margin: 0 auto;\n  height: 400px; }\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/arrows/arrows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselArrowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselArrowsComponent = /** @class */ (function () {
    function CarouselArrowsComponent() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    CarouselArrowsComponent.prototype.onChangeSlide = function (direction) {
        this.changeSlide.emit(direction);
    };
    CarouselArrowsComponent.prototype.disableNavButtons = function () {
        var _this = this;
        this.disableElement = true;
        setTimeout(function () { return _this.disableElement = false; }, this.DISABLE_ELEMENT_TIME);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], CarouselArrowsComponent.prototype, "changeSlide", void 0);
    CarouselArrowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carousel-arrows',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/arrows.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/assets/arrows.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselArrowsComponent);
    return CarouselArrowsComponent;
}());



/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/arrows/arrows.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-nav\">\r\n  <div (click)=\"onChangeSlide('prev')\"\r\n       [class.carousel-nav__btn--disabled]=\"disableElement\">\r\n    <div class=\"carousel-nav__clickable-area carousel-nav__clickable-area--left\">\r\n      <i class=\"fa fa-angle-left carousel-nav__btn carousel-nav__btn--left\" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onChangeSlide('next')\"\r\n       [class.carousel-nav__btn--disabled]=\"disableElement\">\r\n    <div class=\"carousel-nav__clickable-area carousel-nav__clickable-area--right\">\r\n      <i class=\"fa fa-angle-right carousel-nav__btn carousel-nav__btn--right\" aria-hidden=\"true\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/arrows/assets/arrows.styles.scss":
/***/ (function(module, exports) {

module.exports = ".carousel-nav__clickable-area {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 50px; }\n  .carousel-nav__clickable-area:hover {\n    cursor: pointer; }\n  .carousel-nav__clickable-area--left {\n    right: auto;\n    left: 0; }\n  .carousel-nav__clickable-area--left:hover .carousel-nav__btn--left {\n      color: rgba(255, 255, 255, 0.8); }\n  .carousel-nav__clickable-area--right {\n    left: auto;\n    right: 0; }\n  .carousel-nav__clickable-area--right:hover .carousel-nav__btn--right {\n      color: rgba(255, 255, 255, 0.8); }\n  .carousel-nav__btn {\n  position: absolute;\n  top: 50%;\n  font-size: 46px;\n  -webkit-transform: scaleX(0.8) translateY(-50%);\n          transform: scaleX(0.8) translateY(-50%);\n  text-shadow: rgba(0, 0, 0, 0.8) 0 0 7px;\n  color: rgba(255, 255, 255, 0.6);\n  cursor: pointer; }\n  .carousel-nav__btn:hover {\n    color: rgba(255, 255, 255, 0.8); }\n  .carousel-nav__btn--left {\n    left: 15px; }\n  .carousel-nav__btn--right {\n    right: 15px; }\n  .carousel-nav__btn--disabled {\n    pointer-events: none; }\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/arrows/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrows_component__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/arrows.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__arrows_component__["a"]; });




/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/assets/carousel.styles.scss":
/***/ (function(module, exports) {

module.exports = ".carousel-wrapper {\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pins__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arrows__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("./src/app/angular4-carousel/src/app/directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(carouselService, windowWidthService) {
        this.carouselService = carouselService;
        this.windowWidthService = windowWidthService;
        this.currentSlide = 0;
        this.screenWidth = screen.width;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    CarouselComponent.prototype.initData = function () {
        var _this = this;
        this.galleryLength = this.sources.length;
        var _a = this.sources, showImmediate = _a[0], showWhenLoad = _a.slice(1);
        this.loadedImages = this.config.verifyBeforeLoad ? [showImmediate] : this.sources;
        if (this.galleryLength < 2) {
            return;
        }
        this.carouselService.init(showWhenLoad, this.config);
        this.carouselService.onImageLoad()
            .takeWhile(function () { return !!_this.galleryLength; })
            .subscribe(function (image) { return _this.loadedImages.push(image); });
        if (this.config.autoplay) {
            this.config.autoplayDelay = this.config.autoplayDelay < 1000 ? 1000 : this.config.autoplayDelay;
            var minWidth = this.config.stopAutoplayMinWidth;
            this.windowWidthService.onResize(minWidth, true)
                .takeWhile(function () { return !!_this.galleryLength; })
                .subscribe(function (isMinWidth) {
                _this.preventAutoplay = !isMinWidth;
                _this.onHandleAutoplay(!_this.config.autoplay);
            });
        }
    };
    CarouselComponent.prototype.onChangeSlide = function (direction) {
        if (direction === 'prev') {
            this.currentSlide = this.currentSlide === 0 ? this.loadedImages.length - 1 : --this.currentSlide;
        }
        else {
            this.currentSlide = this.currentSlide === this.loadedImages.length - 1 ? 0 : ++this.currentSlide;
        }
        this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
        this.disableCarouselNavBtns();
    };
    CarouselComponent.prototype.onChangeSlideIndex = function (index) {
        if (index === this.currentSlide) {
            return;
        }
        var direction = index > this.currentSlide ? 'next' : 'prev';
        this.currentSlide = index;
        this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
        this.disableCarouselNavBtns();
    };
    CarouselComponent.prototype.onHandleAutoplay = function (stopAutoplay) {
        if (stopAutoplay || this.preventAutoplay) {
            clearInterval(this.autoplayIntervalId);
            return;
        }
        this.startAutoplay(this.config.autoplayDelay);
    };
    CarouselComponent.prototype.startAutoplay = function (delay) {
        var _this = this;
        this.autoplayIntervalId = setInterval(function () {
            _this.onChangeSlide('next');
            _this.pinsComponent.disableNavButtons();
            _this.carouselArrowsComponent.disableNavButtons();
        }, delay);
    };
    CarouselComponent.prototype.disableCarouselNavBtns = function () {
        if (!this.config.animation) {
            return;
        }
        this.pinsComponent.disableNavButtons();
        if (this.carouselArrowsComponent) {
            this.carouselArrowsComponent.disableNavButtons();
        }
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        if (this.autoplayIntervalId) {
            clearInterval(this.autoplayIntervalId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "sources", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* CarouselHandlerDirective */]; })),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* CarouselHandlerDirective */])
    ], CarouselComponent.prototype, "carouselHandlerDirective", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__arrows__["a" /* CarouselArrowsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__arrows__["a" /* CarouselArrowsComponent */])
    ], CarouselComponent.prototype, "carouselArrowsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__pins__["a" /* PinsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__pins__["a" /* PinsComponent */])
    ], CarouselComponent.prototype, "pinsComponent", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carousel',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/carousel.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/assets/carousel.styles.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* CarouselService */], __WEBPACK_IMPORTED_MODULE_2__services__["c" /* WindowWidthService */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/carousel.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-wrapper\" appCarouselHandler (handleAutoplay)=\"onHandleAutoplay($event)\">\r\n  <carousel-slide\r\n       *ngFor=\"let img of loadedImages; let i = index\"\r\n       [src]=\"img\"\r\n       [slideNo]=\"i\"\r\n       (swiperight)=\"onChangeSlide('next')\"\r\n       (swipeleft)=\"onChangeSlide('prev')\"\r\n       [isHidden]=\"i !== 0\">\r\n  </carousel-slide>\r\n\r\n  <carousel-pins\r\n    *ngIf=\"galleryLength > 1\"\r\n    [images]=\"loadedImages\"\r\n    [currentSlide]=\"currentSlide\"\r\n    (changeSlide)=\"onChangeSlideIndex($event);\">\r\n  </carousel-pins>\r\n\r\n  <carousel-arrows\r\n    *ngIf=\"galleryLength > 1 && screenWidth > 480\"\r\n    (changeSlide)=\"onChangeSlide($event);\"></carousel-arrows>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrows__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pins__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/slide/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__slide__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__carousel_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__arrows__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__pins__["a"]; });







/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/pins/assets/pins.styles.scss":
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 0; }\n\n.carousel-nav-list {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 5%;\n  margin: 0;\n  padding: 0;\n  text-align: center; }\n\n.carousel-nav-list__item {\n    display: inline-block;\n    margin: 0 6px;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background-color: #ffffff;\n    cursor: pointer;\n    opacity: 0.6; }\n\n.carousel-nav-list__item:hover {\n      opacity: 0.9; }\n\n.carousel-nav-list__item--active {\n      opacity: 0.9; }\n\n.carousel-nav-list__item--current {\n    background-color: #e55342;\n    opacity: 1; }\n\n.carousel-nav-list__item--disabled {\n    pointer-events: none; }\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/pins/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pins_component__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/pins.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pins_component__["a"]; });




/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/pins/pins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PinsComponent = /** @class */ (function () {
    function PinsComponent() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    PinsComponent.prototype.onChangeSlide = function (slideIndex) {
        this.changeSlide.emit(slideIndex);
    };
    PinsComponent.prototype.disableNavButtons = function () {
        var _this = this;
        this.disableElement = true;
        setTimeout(function () { return _this.disableElement = false; }, this.DISABLE_ELEMENT_TIME);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], PinsComponent.prototype, "images", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], PinsComponent.prototype, "currentSlide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PinsComponent.prototype, "changeSlide", void 0);
    PinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carousel-pins',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/pins.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/assets/pins.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PinsComponent);
    return PinsComponent;
}());



/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/pins/pins.template.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"carousel-nav-list\">\r\n  <li class=\"carousel-nav-list__item\"\r\n      *ngFor=\"let counter of images; let i = index\"\r\n      (click)=\"onChangeSlide(i)\"\r\n      [class.carousel-nav-list__item--current]=\"currentSlide === i\"\r\n      [class.carousel-nav-list__item--disabled]=\"disableElement\">\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/slide/assets/slide.styles.scss":
/***/ (function(module, exports) {

module.exports = ".slide {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  min-height: 400px;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1); }\n  .slide--hidden-initial {\n    display: none; }\n  .slide--hidden-1-next {\n    left: -100%;\n    -webkit-transition: left 0.7s linear;\n    transition: left 0.7s linear; }\n  .slide--hidden-1-prev {\n    left: 100%;\n    -webkit-transition: left 0.7s linear;\n    transition: left 0.7s linear; }\n  @-webkit-keyframes next {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n  @keyframes next {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n  @-webkit-keyframes prev {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n  @keyframes prev {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n  .slide--show-1-next {\n    -webkit-animation: next 0.7s 1 ease-out;\n            animation: next 0.7s 1 ease-out; }\n  .slide--show-1-prev {\n    -webkit-animation: prev 0.7s 1 ease-out;\n            animation: prev 0.7s 1 ease-out; }\n  .slide--hidden-2-next {\n    left: -100%;\n    -webkit-transition: left 0.7s ease-out;\n    transition: left 0.7s ease-out; }\n  .slide--hidden-2-prev {\n    left: 100%;\n    -webkit-transition: left 0.7s ease-out;\n    transition: left 0.7s ease-out; }\n  @-webkit-keyframes next-overlap {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n  @keyframes next-overlap {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n  @-webkit-keyframes prev-overlap {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n  @keyframes prev-overlap {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n  .slide--show-2-next {\n    -webkit-animation: next-overlap 0.7s 1 ease-out;\n            animation: next-overlap 0.7s 1 ease-out; }\n  .slide--show-2-prev {\n    -webkit-animation: prev-overlap 0.7s 1 ease-out;\n            animation: prev-overlap 0.7s 1 ease-out; }\n  .slide--hidden-0-next {\n    -webkit-transition: opacity 0.7s ease-in;\n    transition: opacity 0.7s ease-in;\n    opacity: 0; }\n  .slide--hidden-0-prev {\n    -webkit-transition: opacity 0.7s ease-in;\n    transition: opacity 0.7s ease-in;\n    opacity: 0; }\n  @-webkit-keyframes next-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes next-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @-webkit-keyframes prev-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes prev-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  .slide--show-0-next {\n    -webkit-animation: next-appear 0.7s 1 ease-out;\n            animation: next-appear 0.7s 1 ease-out; }\n  .slide--show-0-prev {\n    -webkit-animation: prev-appear 0.7s 1 ease-out;\n            animation: prev-appear 0.7s 1 ease-out; }\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/slide/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_component__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/slide/slide.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__slide_component__["a"]; });




/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/slide/slide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideComponent = /** @class */ (function () {
    function SlideComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SlideComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], SlideComponent.prototype, "slideNo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "isHidden", void 0);
    SlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'carousel-slide',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/slide/slide.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/slide/assets/slide.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/slide/slide.template.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"slide\" [src]=\"src\"\r\n     [class.slide--hidden-initial]=\"isHidden\"\r\n     [attr.data-slide]=\"slideNo\">\r\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__carousel__["c"]; });





/***/ }),

/***/ "./src/app/angular4-carousel/src/app/directives/carouselHandler.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselHandlerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselHandlerDirective = /** @class */ (function () {
    function CarouselHandlerDirective(el, carouselService) {
        this.el = el;
        this.carouselService = carouselService;
        this.handleAutoplay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.currentSlide = 0;
    }
    CarouselHandlerDirective.prototype.setNewSlide = function (newSlide, direction) {
        var currentSlide = this.el.nativeElement.querySelector("[data-slide=\"" + this.currentSlide + "\"]");
        var nextSlide = this.el.nativeElement.querySelector("[data-slide=\"" + newSlide + "\"]");
        this.animate(currentSlide, nextSlide, direction);
        this.currentSlide = newSlide;
    };
    CarouselHandlerDirective.prototype.animate = function (currentSlide, nextSlide, direction) {
        if (!this.config.animation) {
            this.toggleClass('slide--hidden-initial', currentSlide, nextSlide);
            return;
        }
        var animationType = this.config.animationType;
        currentSlide.className = nextSlide.className = 'slide';
        this.toggleClass("slide--hidden-" + animationType + "-" + direction, currentSlide);
        this.toggleClass("slide--show-" + animationType + "-" + direction, nextSlide);
    };
    CarouselHandlerDirective.prototype.toggleClass = function (className) {
        var elements = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            elements[_i - 1] = arguments[_i];
        }
        elements.forEach(function (element) {
            element.classList.toggle(className);
        });
    };
    CarouselHandlerDirective.prototype.ngOnInit = function () {
        this.config = this.carouselService.getConfig();
        if (this.config.autoplay) {
            this.autoplayHandler();
        }
    };
    CarouselHandlerDirective.prototype.autoplayHandler = function () {
        var _this = this;
        this.el.nativeElement.addEventListener('mouseenter', function () {
            _this.handleAutoplay.emit(true);
        });
        this.el.nativeElement.addEventListener('mouseleave', function () {
            _this.handleAutoplay.emit(false);
        });
        document.addEventListener('visibilitychange', function () {
            _this.handleAutoplay.emit(document.hidden);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], CarouselHandlerDirective.prototype, "handleAutoplay", void 0);
    CarouselHandlerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appCarouselHandler]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__services__["b" /* CarouselService */]])
    ], CarouselHandlerDirective);
    return CarouselHandlerDirective;
}());



/***/ }),

/***/ "./src/app/angular4-carousel/src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carouselHandler_directive__ = __webpack_require__("./src/app/angular4-carousel/src/app/directives/carouselHandler.directive.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carouselHandler_directive__["a"]; });




/***/ }),

/***/ "./src/app/angular4-carousel/src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("./src/app/angular4-carousel/src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives__ = __webpack_require__("./src/app/angular4-carousel/src/app/directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components__["c" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components__["e" /* SlideComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components__["b" /* CarouselArrowsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components__["d" /* PinsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__directives__["a" /* CarouselHandlerDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__components__["c" /* CarouselComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* CarouselService */], __WEBPACK_IMPORTED_MODULE_2__services__["c" /* WindowWidthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components__["a" /* AppComponent */]]
        })
    ], CarouselModule);
    return CarouselModule;
}());



/***/ }),

/***/ "./src/app/angular4-carousel/src/app/services/carousel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselService = /** @class */ (function () {
    function CarouselService() {
        this.imageLoadedCount = 0;
    }
    CarouselService.prototype.init = function (imageSources, config) {
        this.imageLoadedCount = 0;
        this.imageLoad = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        config.autoplayDelay = config.autoplayDelay < 1000 ? 1000 : config.autoplayDelay;
        this.config = config;
        if (!this.config.verifyBeforeLoad) {
            return;
        }
        this.loadImages(imageSources);
    };
    CarouselService.prototype.onImageLoad = function () {
        return this.imageLoad.asObservable();
    };
    CarouselService.prototype.getConfig = function () {
        return Object.assign({}, this.config);
    };
    CarouselService.prototype.loadImages = function (imageSources) {
        var _this = this;
        var createImageElement = function (image) {
            var imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.onload = _this.onImageElementLoad.bind(_this, imageSources, image);
            imgElement.onerror = _this.onImageElementLoadError.bind(_this, imageSources, image);
        };
        imageSources.forEach(createImageElement);
    };
    CarouselService.prototype.onImageElementLoad = function (imageSources, image) {
        this.imageLoadedCount++;
        this.imageLoad.next(image);
        this.carouselTinyLogger(image, true);
        this.emitIfAllImagesLoaded(imageSources);
    };
    CarouselService.prototype.onImageElementLoadError = function (imageSources, image) {
        imageSources.splice(imageSources.indexOf(image), 1);
        this.carouselTinyLogger(image, false);
        this.emitIfAllImagesLoaded(imageSources);
    };
    CarouselService.prototype.emitIfAllImagesLoaded = function (imageSources) {
        if (this.imageLoadedCount === imageSources.length) {
            this.imageLoad.complete();
        }
    };
    CarouselService.prototype.carouselTinyLogger = function (image, isLoaded) {
        if (!this.config.log) {
            return;
        }
        if (isLoaded) {
            console.log("Carousel module: image loaded: " + image);
            return;
        }
        console.error("Carousel module: image load error: " + image);
    };
    CarouselService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CarouselService);
    return CarouselService;
}());



/***/ }),

/***/ "./src/app/angular4-carousel/src/app/services/declarations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationConfig; });
var AnimationConfig;
(function (AnimationConfig) {
    AnimationConfig[AnimationConfig["APPEAR"] = 0] = "APPEAR";
    AnimationConfig[AnimationConfig["SLIDE_OVERLAP"] = 1] = "SLIDE_OVERLAP";
    AnimationConfig[AnimationConfig["SLIDE"] = 2] = "SLIDE";
})(AnimationConfig || (AnimationConfig = {}));


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_service__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/carousel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_width_service__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/window-width.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declarations__ = __webpack_require__("./src/app/angular4-carousel/src/app/services/declarations/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__carousel_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__declarations__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__window_width_service__["a"]; });






/***/ }),

/***/ "./src/app/angular4-carousel/src/app/services/window-width.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowWidthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WindowWidthService = /** @class */ (function () {
    function WindowWidthService() {
    }
    WindowWidthService.prototype.onResize = function (minWidthBreakpoint, scrollBar) {
        var _this = this;
        this.minWidthBreakpoint = minWidthBreakpoint;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'resize')
            .map(function () { return _this.assertSize(scrollBar); })
            .startWith(this.assertSize(scrollBar))
            .distinctUntilChanged();
    };
    ;
    WindowWidthService.prototype.assertSize = function (scrollBar) {
        var area = scrollBar ? window.innerWidth : document.documentElement.clientWidth;
        return this.minWidthBreakpoint <= area;
    };
    WindowWidthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], WindowWidthService);
    return WindowWidthService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<main-page dir=\"rtl\"></main-page>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles_articles_service__ = __webpack_require__("./src/app/articles/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__articles_articles_component__ = __webpack_require__("./src/app/articles/articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_page_main_page_component__ = __webpack_require__("./src/app/main_page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular4_carousel__ = __webpack_require__("./src/app/angular4-carousel/index.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__articles_articles_component__["a" /* ArticlesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular4_carousel__["b" /* CarouselModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__articles_articles_service__["a" /* ArticlesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articles/articles.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li *ngFor=\"let user of users\">\r\n    {{ user.firstName + '-' + user.lastName + '!' }}\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_service__ = __webpack_require__("./src/app/articles/articles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesComponent = /** @class */ (function () {
    // Create an instance of the DataService through dependency injection
    function ArticlesComponent(_articlesService) {
        var _this = this;
        this._articlesService = _articlesService;
        // Access the Data Service's getUsers() method we defined
        this._articlesService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    }
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'articles',
            template: __webpack_require__("./src/app/articles/articles.component.html"),
            styles: [__webpack_require__("./src/app/articles/articles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/articles/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlesService = /** @class */ (function () {
    function ArticlesService(_http) {
        this._http = _http;
    }
    ArticlesService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get("/users")
            .map(function (result) { return _this.result = result.json().data; });
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/main_page/main-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main_page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid grid-pad\">\r\n  <div class=\"col-1-1\">\r\n    <!-- Add logo and menu -->\r\n  </div>\r\n</div>\r\n<div class=\"grid grid-pad\">\r\n    <div style=\"width: 100%; height: 50vh\">\r\n      <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main_page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular4_carousel__ = __webpack_require__("./src/app/angular4-carousel/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
        this.imageSources = [
            'https://www.chabadthailand.co.il/wp-content/uploads/2017/04/slider7-high.jpg',
            'https://images.haarets.co.il/image/upload/w_679,h_384,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/v1514363195/1.5264942.4101423884.jpg'
        ];
        this.config = {
            verifyBeforeLoad: true,
            log: false,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_1__angular4_carousel__["a" /* AnimationConfig */].SLIDE,
            autoplay: true,
            autoplayDelay: 4000,
            stopAutoplayMinWidth: 768
        };
    }
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'main-page',
            template: __webpack_require__("./src/app/main_page/main-page.component.html"),
            styles: [__webpack_require__("./src/app/main_page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
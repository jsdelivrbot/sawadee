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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__("./src/app/angular4-carousel/src/app/index.ts");
exports.CarouselModule = index_1.CarouselModule;
var services_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
exports.CarouselService = services_1.CarouselService;
exports.WindowWidthService = services_1.WindowWidthService;
var declarations_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/declarations/index.ts");
exports.AnimationConfig = declarations_1.AnimationConfig;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var services_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
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
            animationType: services_1.AnimationConfig.SLIDE,
            autoplay: true,
            autoplayDelay: 2000,
            stopAutoplayMinWidth: 768
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/app.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/assets/app.styles.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CarouselArrowsComponent = /** @class */ (function () {
    function CarouselArrowsComponent() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new core_1.EventEmitter();
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
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CarouselArrowsComponent.prototype, "changeSlide", void 0);
    CarouselArrowsComponent = __decorate([
        core_1.Component({
            selector: 'carousel-arrows',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/arrows.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/assets/arrows.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselArrowsComponent);
    return CarouselArrowsComponent;
}());
exports.CarouselArrowsComponent = CarouselArrowsComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var arrows_component_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/arrows.component.ts");
exports.CarouselArrowsComponent = arrows_component_1.CarouselArrowsComponent;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/assets/carousel.styles.scss":
/***/ (function(module, exports) {

module.exports = ".carousel-wrapper {\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/carousel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
var services_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
var pins_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/index.ts");
var arrows_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/index.ts");
var directives_1 = __webpack_require__("./src/app/angular4-carousel/src/app/directives/index.ts");
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
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var cslide = document.querySelector("#cslide");
        var hammertime = new Hammer(cslide);
        hammertime.on('swipeleft', function (a, b, c) {
            // this.onChangeSlide('prev')
            alert('prev');
        });
        hammertime.on('swiperight', function (a, b, c) {
            // this.onChangeSlide('next')
            alert('next');
        });
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
    CarouselComponent.prototype.swipe = function (direction) {
        alert(direction);
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
        core_1.Input(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "sources", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "config", void 0);
    __decorate([
        core_1.ViewChild(core_1.forwardRef(function () { return directives_1.CarouselHandlerDirective; })),
        __metadata("design:type", directives_1.CarouselHandlerDirective)
    ], CarouselComponent.prototype, "carouselHandlerDirective", void 0);
    __decorate([
        core_1.ViewChild(arrows_1.CarouselArrowsComponent),
        __metadata("design:type", arrows_1.CarouselArrowsComponent)
    ], CarouselComponent.prototype, "carouselArrowsComponent", void 0);
    __decorate([
        core_1.ViewChild(pins_1.PinsComponent),
        __metadata("design:type", pins_1.PinsComponent)
    ], CarouselComponent.prototype, "pinsComponent", void 0);
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'carousel',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/carousel.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/assets/carousel.styles.scss")]
        }),
        __metadata("design:paramtypes", [services_1.CarouselService, services_1.WindowWidthService])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/carousel.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-wrapper\" appCarouselHandler (handleAutoplay)=\"onHandleAutoplay($event)\">\r\n  <carousel-slide\r\n    id=\"cslide\"\r\n       *ngFor=\"let img of loadedImages; let i = index\"\r\n       [src]=\"img\"\r\n       [slideNo]=\"i\"\r\n\r\n       [isHidden]=\"i !== 0\">\r\n  </carousel-slide>\r\n\r\n  <carousel-pins\r\n    *ngIf=\"galleryLength > 1\"\r\n    [images]=\"loadedImages\"\r\n    [currentSlide]=\"currentSlide\"\r\n    (changeSlide)=\"onChangeSlideIndex($event);\">\r\n  </carousel-pins>\r\n\r\n  <carousel-arrows\r\n    *ngIf=\"galleryLength > 1 && screenWidth > 480\"\r\n    (changeSlide)=\"onChangeSlide($event);\"></carousel-arrows>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var carousel_component_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/carousel.component.ts");
exports.CarouselComponent = carousel_component_1.CarouselComponent;
var arrows_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/arrows/index.ts");
exports.CarouselArrowsComponent = arrows_1.CarouselArrowsComponent;
var pins_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/index.ts");
exports.PinsComponent = pins_1.PinsComponent;
var slide_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/slide/index.ts");
exports.SlideComponent = slide_1.SlideComponent;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/pins/assets/pins.styles.scss":
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 0; }\n\n.carousel-nav-list {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 5%;\n  margin: 0;\n  padding: 0;\n  text-align: center; }\n\n.carousel-nav-list__item {\n    display: inline-block;\n    margin: 0 6px;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background-color: #ffffff;\n    cursor: pointer;\n    opacity: 0.6; }\n\n.carousel-nav-list__item:hover {\n      opacity: 0.9; }\n\n.carousel-nav-list__item--active {\n      opacity: 0.9; }\n\n.carousel-nav-list__item--current {\n    background-color: #e55342;\n    opacity: 1; }\n\n.carousel-nav-list__item--disabled {\n    pointer-events: none; }\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/pins/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pins_component_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/pins.component.ts");
exports.PinsComponent = pins_component_1.PinsComponent;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/pins/pins.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PinsComponent = /** @class */ (function () {
    function PinsComponent() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new core_1.EventEmitter();
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
        core_1.Input(),
        __metadata("design:type", Array)
    ], PinsComponent.prototype, "images", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PinsComponent.prototype, "currentSlide", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PinsComponent.prototype, "changeSlide", void 0);
    PinsComponent = __decorate([
        core_1.Component({
            selector: 'carousel-pins',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/pins.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/pins/assets/pins.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PinsComponent);
    return PinsComponent;
}());
exports.PinsComponent = PinsComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var slide_component_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/slide/slide.component.ts");
exports.SlideComponent = slide_component_1.SlideComponent;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/slide/slide.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SlideComponent = /** @class */ (function () {
    function SlideComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SlideComponent.prototype, "src", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SlideComponent.prototype, "slideNo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "isHidden", void 0);
    SlideComponent = __decorate([
        core_1.Component({
            selector: 'carousel-slide',
            template: __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/slide/slide.template.html"),
            styles: [__webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/slide/assets/slide.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideComponent);
    return SlideComponent;
}());
exports.SlideComponent = SlideComponent;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/carousel/slide/slide.template.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"slide\" [src]=\"src\"\r\n     [class.slide--hidden-initial]=\"isHidden\"\r\n     [attr.data-slide]=\"slideNo\">\r\n"

/***/ }),

/***/ "./src/app/angular4-carousel/src/app/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/app.component.ts");
exports.AppComponent = app_component_1.AppComponent;
var carousel_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/carousel/index.ts");
exports.CarouselComponent = carousel_1.CarouselComponent;
exports.SlideComponent = carousel_1.SlideComponent;
exports.CarouselArrowsComponent = carousel_1.CarouselArrowsComponent;
exports.PinsComponent = carousel_1.PinsComponent;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/directives/carouselHandler.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var services_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
var CarouselHandlerDirective = /** @class */ (function () {
    function CarouselHandlerDirective(el, carouselService) {
        this.el = el;
        this.carouselService = carouselService;
        this.handleAutoplay = new core_1.EventEmitter();
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
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CarouselHandlerDirective.prototype, "handleAutoplay", void 0);
    CarouselHandlerDirective = __decorate([
        core_1.Directive({
            selector: '[appCarouselHandler]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, services_1.CarouselService])
    ], CarouselHandlerDirective);
    return CarouselHandlerDirective;
}());
exports.CarouselHandlerDirective = CarouselHandlerDirective;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/directives/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var carouselHandler_directive_1 = __webpack_require__("./src/app/angular4-carousel/src/app/directives/carouselHandler.directive.ts");
exports.CarouselHandlerDirective = carouselHandler_directive_1.CarouselHandlerDirective;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var services_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/index.ts");
var components_1 = __webpack_require__("./src/app/angular4-carousel/src/app/components/index.ts");
var directives_1 = __webpack_require__("./src/app/angular4-carousel/src/app/directives/index.ts");
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        core_1.NgModule({
            declarations: [
                components_1.AppComponent,
                components_1.CarouselComponent,
                components_1.SlideComponent,
                components_1.CarouselArrowsComponent,
                components_1.PinsComponent,
                directives_1.CarouselHandlerDirective
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [components_1.CarouselComponent],
            providers: [services_1.CarouselService, services_1.WindowWidthService],
            bootstrap: [components_1.AppComponent]
        })
    ], CarouselModule);
    return CarouselModule;
}());
exports.CarouselModule = CarouselModule;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/services/carousel.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var CarouselService = /** @class */ (function () {
    function CarouselService() {
        this.imageLoadedCount = 0;
    }
    CarouselService.prototype.init = function (imageSources, config) {
        this.imageLoadedCount = 0;
        this.imageLoad = new Subject_1.Subject();
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CarouselService);
    return CarouselService;
}());
exports.CarouselService = CarouselService;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/services/declarations/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationConfig;
(function (AnimationConfig) {
    AnimationConfig[AnimationConfig["APPEAR"] = 0] = "APPEAR";
    AnimationConfig[AnimationConfig["SLIDE_OVERLAP"] = 1] = "SLIDE_OVERLAP";
    AnimationConfig[AnimationConfig["SLIDE"] = 2] = "SLIDE";
})(AnimationConfig = exports.AnimationConfig || (exports.AnimationConfig = {}));


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var carousel_service_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/carousel.service.ts");
exports.CarouselService = carousel_service_1.CarouselService;
var window_width_service_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/window-width.service.ts");
exports.WindowWidthService = window_width_service_1.WindowWidthService;
var declarations_1 = __webpack_require__("./src/app/angular4-carousel/src/app/services/declarations/index.ts");
exports.AnimationConfig = declarations_1.AnimationConfig;


/***/ }),

/***/ "./src/app/angular4-carousel/src/app/services/window-width.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
var WindowWidthService = /** @class */ (function () {
    function WindowWidthService() {
    }
    WindowWidthService.prototype.onResize = function (minWidthBreakpoint, scrollBar) {
        var _this = this;
        this.minWidthBreakpoint = minWidthBreakpoint;
        return Observable_1.Observable.fromEvent(window, 'resize')
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
        core_1.Injectable()
    ], WindowWidthService);
    return WindowWidthService;
}());
exports.WindowWidthService = WindowWidthService;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var articles_service_1 = __webpack_require__("./src/app/articles/articles.service.ts");
var articles_component_1 = __webpack_require__("./src/app/articles/articles.component.ts");
var main_page_component_1 = __webpack_require__("./src/app/main_page/main-page.component.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var angular4_carousel_1 = __webpack_require__("./src/app/angular4-carousel/index.ts");
__webpack_require__("./node_modules/hammerjs/hammer.js");
__webpack_require__("./node_modules/hammer-timejs/hammer-time.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_page_component_1.MainPageComponent,
                articles_component_1.ArticlesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpModule,
                angular4_carousel_1.CarouselModule
            ],
            providers: [articles_service_1.ArticlesService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var articles_service_1 = __webpack_require__("./src/app/articles/articles.service.ts");
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
        core_1.Component({
            selector: 'articles',
            template: __webpack_require__("./src/app/articles/articles.component.html"),
            styles: [__webpack_require__("./src/app/articles/articles.component.css")]
        }),
        __metadata("design:paramtypes", [articles_service_1.ArticlesService])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;


/***/ }),

/***/ "./src/app/articles/articles.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ArticlesService);
    return ArticlesService;
}());
exports.ArticlesService = ArticlesService;


/***/ }),

/***/ "./src/app/main_page/main-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main_page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid grid-pad\">\r\n  <div class=\"col-1-1\">\r\n    <!-- Add logo and menu -->\r\n  </div>\r\n</div>\r\n<div class=\"grid grid-pad\">\r\n    <div style=\"width: 100%; height: 50vh\">\r\n      <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\r\n    </div>\r\n  Screen Width: {{screenWidth}}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main_page/main-page.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var angular4_carousel_1 = __webpack_require__("./src/app/angular4-carousel/index.ts");
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
            animationType: angular4_carousel_1.AnimationConfig.SLIDE,
            autoplay: true,
            autoplayDelay: 4000,
            stopAutoplayMinWidth: 768
        };
        this.screenWidth = window.screen.width;
    }
    MainPageComponent = __decorate([
        core_1.Component({
            selector: 'main-page',
            template: __webpack_require__("./src/app/main_page/main-page.component.html"),
            styles: [__webpack_require__("./src/app/main_page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
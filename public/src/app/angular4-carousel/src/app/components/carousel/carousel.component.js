"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
require("rxjs/add/operator/takeWhile");
const pins_1 = require("./pins");
const arrows_1 = require("./arrows");
const directives_1 = require("../../directives");
let CarouselComponent = class CarouselComponent {
    constructor(carouselService, windowWidthService) {
        this.carouselService = carouselService;
        this.windowWidthService = windowWidthService;
        this.currentSlide = 0;
    }
    ngOnInit() {
        this.initData();
    }
    initData() {
        this.galleryLength = this.sources.length;
        const [showImmediate, ...showWhenLoad] = this.sources;
        this.loadedImages = this.config.verifyBeforeLoad ? [showImmediate] : this.sources;
        if (this.galleryLength < 2) {
            return;
        }
        this.carouselService.init(showWhenLoad, this.config);
        this.carouselService.onImageLoad()
            .takeWhile(() => !!this.galleryLength)
            .subscribe((image) => this.loadedImages.push(image));
        if (this.config.autoplay) {
            this.config.autoplayDelay = this.config.autoplayDelay < 1000 ? 1000 : this.config.autoplayDelay;
            const minWidth = this.config.stopAutoplayMinWidth;
            this.windowWidthService.onResize(minWidth, true)
                .takeWhile(() => !!this.galleryLength)
                .subscribe((isMinWidth) => {
                this.preventAutoplay = !isMinWidth;
                this.onHandleAutoplay(!this.config.autoplay);
            });
        }
    }
    onChangeSlide(direction) {
        if (direction === 'prev') {
            this.currentSlide = this.currentSlide === 0 ? this.loadedImages.length - 1 : --this.currentSlide;
        }
        else {
            this.currentSlide = this.currentSlide === this.loadedImages.length - 1 ? 0 : ++this.currentSlide;
        }
        this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
        this.disableCarouselNavBtns();
    }
    onChangeSlideIndex(index) {
        if (index === this.currentSlide) {
            return;
        }
        const direction = index > this.currentSlide ? 'next' : 'prev';
        this.currentSlide = index;
        this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
        this.disableCarouselNavBtns();
    }
    onHandleAutoplay(stopAutoplay) {
        if (stopAutoplay || this.preventAutoplay) {
            clearInterval(this.autoplayIntervalId);
            return;
        }
        this.startAutoplay(this.config.autoplayDelay);
    }
    startAutoplay(delay) {
        this.autoplayIntervalId = setInterval(() => {
            this.onChangeSlide('next');
            this.pinsComponent.disableNavButtons();
            this.carouselArrowsComponent.disableNavButtons();
        }, delay);
    }
    disableCarouselNavBtns() {
        if (!this.config.animation) {
            return;
        }
        this.carouselArrowsComponent.disableNavButtons();
        this.pinsComponent.disableNavButtons();
    }
    ngOnDestroy() {
        if (this.autoplayIntervalId) {
            clearInterval(this.autoplayIntervalId);
        }
    }
};
__decorate([
    core_1.Input()
], CarouselComponent.prototype, "sources", void 0);
__decorate([
    core_1.Input()
], CarouselComponent.prototype, "config", void 0);
__decorate([
    core_1.ViewChild(core_1.forwardRef(() => directives_1.CarouselHandlerDirective))
], CarouselComponent.prototype, "carouselHandlerDirective", void 0);
__decorate([
    core_1.ViewChild(arrows_1.CarouselArrowsComponent)
], CarouselComponent.prototype, "carouselArrowsComponent", void 0);
__decorate([
    core_1.ViewChild(pins_1.PinsComponent)
], CarouselComponent.prototype, "pinsComponent", void 0);
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'carousel',
        templateUrl: 'carousel.template.html',
        styleUrls: ['assets/carousel.styles.scss']
    })
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map
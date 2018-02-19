"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let CarouselHandlerDirective = class CarouselHandlerDirective {
    constructor(el, carouselService) {
        this.el = el;
        this.carouselService = carouselService;
        this.handleAutoplay = new core_1.EventEmitter();
        this.currentSlide = 0;
    }
    setNewSlide(newSlide, direction) {
        const currentSlide = this.el.nativeElement.querySelector(`[data-slide="${this.currentSlide}"]`);
        const nextSlide = this.el.nativeElement.querySelector(`[data-slide="${newSlide}"]`);
        this.animate(currentSlide, nextSlide, direction);
        this.currentSlide = newSlide;
    }
    animate(currentSlide, nextSlide, direction) {
        if (!this.config.animation) {
            this.toggleClass('slide--hidden-initial', currentSlide, nextSlide);
            return;
        }
        const animationType = this.config.animationType;
        currentSlide.className = nextSlide.className = 'slide';
        this.toggleClass(`slide--hidden-${animationType}-${direction}`, currentSlide);
        this.toggleClass(`slide--show-${animationType}-${direction}`, nextSlide);
    }
    toggleClass(className, ...elements) {
        elements.forEach((element) => {
            element.classList.toggle(className);
        });
    }
    ngOnInit() {
        this.config = this.carouselService.getConfig();
        if (this.config.autoplay) {
            this.autoplayHandler();
        }
    }
    autoplayHandler() {
        this.el.nativeElement.addEventListener('mouseenter', () => {
            this.handleAutoplay.emit(true);
        });
        this.el.nativeElement.addEventListener('mouseleave', () => {
            this.handleAutoplay.emit(false);
        });
        document.addEventListener('visibilitychange', () => {
            this.handleAutoplay.emit(document.hidden);
        });
    }
};
__decorate([
    core_1.Output()
], CarouselHandlerDirective.prototype, "handleAutoplay", void 0);
CarouselHandlerDirective = __decorate([
    core_1.Directive({
        selector: '[appCarouselHandler]'
    })
], CarouselHandlerDirective);
exports.CarouselHandlerDirective = CarouselHandlerDirective;
//# sourceMappingURL=carouselHandler.directive.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Subject_1 = require("rxjs/Subject");
let CarouselService = class CarouselService {
    constructor() {
        this.imageLoadedCount = 0;
    }
    init(imageSources, config) {
        this.imageLoadedCount = 0;
        this.imageLoad = new Subject_1.Subject();
        config.autoplayDelay = config.autoplayDelay < 1000 ? 1000 : config.autoplayDelay;
        this.config = config;
        if (!this.config.verifyBeforeLoad) {
            return;
        }
        this.loadImages(imageSources);
    }
    onImageLoad() {
        return this.imageLoad.asObservable();
    }
    getConfig() {
        return Object.assign({}, this.config);
    }
    loadImages(imageSources) {
        const createImageElement = (image) => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.onload = this.onImageElementLoad.bind(this, imageSources, image);
            imgElement.onerror = this.onImageElementLoadError.bind(this, imageSources, image);
        };
        imageSources.forEach(createImageElement);
    }
    onImageElementLoad(imageSources, image) {
        this.imageLoadedCount++;
        this.imageLoad.next(image);
        this.carouselTinyLogger(image, true);
        this.emitIfAllImagesLoaded(imageSources);
    }
    onImageElementLoadError(imageSources, image) {
        imageSources.splice(imageSources.indexOf(image), 1);
        this.carouselTinyLogger(image, false);
        this.emitIfAllImagesLoaded(imageSources);
    }
    emitIfAllImagesLoaded(imageSources) {
        if (this.imageLoadedCount === imageSources.length) {
            this.imageLoad.complete();
        }
    }
    carouselTinyLogger(image, isLoaded) {
        if (!this.config.log) {
            return;
        }
        if (isLoaded) {
            console.log(`Carousel module: image loaded: ${image}`);
            return;
        }
        console.error(`Carousel module: image load error: ${image}`);
    }
};
CarouselService = __decorate([
    core_1.Injectable()
], CarouselService);
exports.CarouselService = CarouselService;
//# sourceMappingURL=carousel.service.js.map
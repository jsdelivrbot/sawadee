"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const carousel_service_1 = require("../carousel.service");
const declarations_1 = require("../declarations");
describe('CarouselService', () => {
    const imageSources = [
        'http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg',
        '2',
        '3'
    ];
    const config = {
        verifyBeforeLoad: false,
        log: false,
        animation: true,
        animationType: declarations_1.AnimationConfig.APPEAR,
        autoplay: true,
        autoplayDelay: 500,
        stopAutoplayMinWidth: 768
    };
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [carousel_service_1.CarouselService]
        });
    });
    it('should return copy of carousel config', testing_1.inject([carousel_service_1.CarouselService], (service) => {
        service.init(imageSources, config);
        expect((service.getConfig())).not.toBe(config);
    }));
    describe('imageLoad', () => {
        it('should load images via document.createElement', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            service.init(imageSources, config);
            const spy = spyOn(document, 'createElement').and.callThrough();
            service.loadImages(imageSources);
            expect(spy).toHaveBeenCalled();
        }));
    });
    describe('defines image success load handler and', () => {
        it('should increase counter of loaded images', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            service.init(imageSources, config);
            service.onImageElementLoad(['imgSrc'], 'loadedImgSrc');
            expect(service.imageLoadedCount).toEqual(1);
        }));
        it('should emit image load event', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            service.init(imageSources, config);
            const onImageLoad = service.onImageLoad();
            service.onImageElementLoad(['imgSrc'], 'loadedImgSrc');
            onImageLoad.subscribe((src) => {
                expect(src).toBe('http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg');
            });
        }));
        it('should invoke logger', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            const spy = spyOn(service, 'carouselTinyLogger');
            service.init(imageSources, config);
            service.onImageElementLoad(['imgSrc'], 'loadedImgSrc');
            expect(spy).toHaveBeenCalled();
        }));
        it('should invoke function checks if all images is load', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            const spy = spyOn(service, 'emitIfAllImagesLoaded');
            service.init(imageSources, config);
            service.onImageElementLoad(['imgSrc'], 'loadedImgSrc');
            expect(spy).toHaveBeenCalled();
        }));
    });
    describe('defines image error handler and', () => {
        it('should delete images that not loaded', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            service.init(imageSources, config);
            service.onImageElementLoadError(imageSources, '2');
            expect(imageSources.length).toEqual(2);
        }));
        it('should invoke logger', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            const spy = spyOn(service, 'carouselTinyLogger');
            service.init(imageSources, config);
            service.onImageElementLoadError(['imgSrc'], 'loadedImgSrc');
            expect(spy).toHaveBeenCalled();
        }));
        it('should invoke function checks if all images is load', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            const spy = spyOn(service, 'emitIfAllImagesLoaded');
            service.init(imageSources, config);
            service.onImageElementLoadError(['imgSrc'], 'loadedImgSrc');
            expect(spy).toHaveBeenCalled();
        }));
    });
    describe('provides init() API', () => {
        it('should set autoplayDelay to 1000 if autoplayDelay < 1000', testing_1.inject([carousel_service_1.CarouselService], (service) => {
            service.init(imageSources, config);
            expect(service.config.autoplayDelay).toBe(1000);
        }));
    });
});
//# sourceMappingURL=carousel.service.spec.js.map
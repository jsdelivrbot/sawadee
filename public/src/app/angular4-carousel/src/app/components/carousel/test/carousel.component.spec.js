"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const core_1 = require("@angular/core");
const _1 = require("../");
const carousel_service_1 = require("../../../services/carousel.service");
const window_width_service_1 = require("../../../services/window-width.service");
const _2 = require("../../../services/");
describe('CarouselComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [_1.CarouselComponent],
            providers: [carousel_service_1.CarouselService, window_width_service_1.WindowWidthService],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(_1.CarouselComponent);
        component = fixture.componentInstance;
        component.sources = [
            'http://www.violinshoptampa.com/Violin%20Shop%20Tampa-15.jpg',
            'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
            'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
            'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg',
        ];
        component.config = {
            verifyBeforeLoad: false,
            log: false,
            animation: false,
            animationType: _2.AnimationConfig.APPEAR,
            autoplay: true,
            autoplayDelay: 500
        };
        component.carouselHandlerDirective = {
            setNewSlide: () => { }
        };
        fixture.detectChanges();
    });
    it('should subscribe on image loading when start', testing_1.inject([carousel_service_1.CarouselService], (carouselService) => {
        carouselService.imageLoad.next('!');
        expect(component.loadedImages.pop()).toBe('!');
    }));
    describe('on init', () => {
        it('should add all imgs as loaded imgs', () => {
            expect(component.loadedImages.length).toEqual(4);
        });
        it('should init service', testing_1.inject([carousel_service_1.CarouselService], (carouselService) => {
            const spy = spyOn(carouselService, 'init');
            component.ngOnInit();
            expect(spy).toHaveBeenCalled();
        }));
    });
    describe('slide handler', () => {
        it('should set next slide if direction is "next"', () => {
            component.loadedImages = ['1', '2', '3'];
            const currentSlide = component.currentSlide;
            component.onChangeSlide('next');
            expect(component.currentSlide).toEqual(currentSlide + 1);
        });
        it('should set slide by index', () => {
            const currentSlide = component.currentSlide;
            component.onChangeSlideIndex(2);
            expect(component.currentSlide).toEqual(2);
        });
        it('should set slide by index and do nothing if current slide === new slide index', () => {
            const currentSlide = component.currentSlide;
            component.onChangeSlideIndex(0);
            expect(component.currentSlide).toEqual(currentSlide);
        });
    });
    it('should have ref to carouselHandlerDirective', () => {
        expect(component.carouselHandlerDirective).toBeDefined();
    });
    it('should store config', () => {
        expect(component.config).toBeDefined();
    });
    it('confgi should implement interface ICarouselConfig', () => {
        expect(component.config.animation).toBeDefined();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=carousel.component.spec.js.map
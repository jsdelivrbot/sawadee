"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const core_1 = require("@angular/core");
const _1 = require("../");
describe('PinsComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [_1.PinsComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(_1.PinsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    describe('disable time constant', () => {
        it('should be defined', () => {
            expect(component.DISABLE_ELEMENT_TIME).toBeDefined();
        });
        it('should be equal 700 ms', () => {
            expect(component.DISABLE_ELEMENT_TIME).toEqual(750);
        });
    });
    describe('change slide handler', () => {
        it('should emit event that slide is changing', () => {
            let isChanging = false;
            const chSlide = component.changeSlide.subscribe((event) => isChanging = !isChanging);
            component.onChangeSlide('next');
            expect(isChanging).toBeTruthy();
        });
        it('should emit event with new slide', () => {
            let isChanging;
            const chSlide = component.changeSlide.subscribe((event) => isChanging = event);
            component.onChangeSlide(3);
            expect(isChanging).toEqual(3);
        });
        it('should be equal 700 ms', () => {
            expect(component.DISABLE_ELEMENT_TIME).toEqual(750);
        });
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pins.component.spec.js.map
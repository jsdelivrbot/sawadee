"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const core_1 = require("@angular/core");
const _1 = require("../");
describe('SlideComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [_1.SlideComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(_1.SlideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.src = '';
        component.slideNo = 1;
        component.isHidden = false;
    });
    it('should have img sources', () => {
        expect(component.src).toBe('');
    });
    it('should have slide number', () => {
        expect(component.slideNo).toBe(1);
    });
    it('should have slide number', () => {
        expect(component.isHidden).toBeFalsy();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=slide.component.spec.js.map
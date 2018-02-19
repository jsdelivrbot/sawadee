"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const core_1 = require("@angular/core");
const _1 = require("../");
const services_1 = require("../../services");
describe('AppComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [_1.AppComponent, _1.CarouselComponent],
            providers: [services_1.CarouselService, services_1.WindowWidthService],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(_1.AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should contains image sources', () => {
        expect(component.imageSources).toBeDefined();
    });
    it('should contains config', () => {
        expect(component.config).toBeDefined();
    });
});
//# sourceMappingURL=app.component.spec.js.map
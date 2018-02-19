"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const carouselHandler_directive_1 = require("../carouselHandler.directive");
const services_1 = require("../../services");
const _1 = require("../../services/");
const testDivElement = window.document.createElement('div');
testDivElement.classList.add('_test');
testDivElement.innerHTML = `
  <img data-slide="0">
  <img data-slide="1" class="slide--hidden-initial">
  <img data-slide="2" class="slide--hidden-initial">
`;
const el = new core_1.ElementRef(testDivElement);
const service = new services_1.CarouselService();
const config = {
    verifyBeforeLoad: false,
    log: false,
    animation: false,
    animationType: _1.AnimationConfig.APPEAR,
    autoplay: true,
    autoplayDelay: 500,
    stopAutoplayMinWidth: 768
};
service.init(['1', '2', '3'], config);
const directive = new carouselHandler_directive_1.CarouselHandlerDirective(el, service);
directive.ngOnInit();
describe('CarouselHandlerDirective', () => {
    it('should get config', () => {
        expect(directive.config).toEqual(config);
    });
    it('should set new slide', () => {
        directive.setNewSlide(1, 'next');
        expect(directive
            .el.nativeElement
            .querySelectorAll('img')[0]
            .classList
            .contains('slide--hidden-initial'))
            .toBeTruthy();
    });
});
//# sourceMappingURL=carouselHandler.spec.js.map
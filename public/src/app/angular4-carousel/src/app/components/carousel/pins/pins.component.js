"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PinsComponent = class PinsComponent {
    constructor() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new core_1.EventEmitter();
    }
    onChangeSlide(slideIndex) {
        this.changeSlide.emit(slideIndex);
    }
    disableNavButtons() {
        this.disableElement = true;
        setTimeout(() => this.disableElement = false, this.DISABLE_ELEMENT_TIME);
    }
};
__decorate([
    core_1.Input()
], PinsComponent.prototype, "images", void 0);
__decorate([
    core_1.Input()
], PinsComponent.prototype, "currentSlide", void 0);
__decorate([
    core_1.Output()
], PinsComponent.prototype, "changeSlide", void 0);
PinsComponent = __decorate([
    core_1.Component({
        selector: 'carousel-pins',
        templateUrl: 'pins.template.html',
        styleUrls: ['assets/pins.styles.scss']
    })
], PinsComponent);
exports.PinsComponent = PinsComponent;
//# sourceMappingURL=pins.component.js.map
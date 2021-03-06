"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const angular4_carousel_1 = require("../angular4-carousel");
let MainPageComponent = class MainPageComponent {
    constructor() {
        this.imageSources = [
            'https://www.chabadthailand.co.il/wp-content/uploads/2017/04/slider7-high.jpg',
            'https://images.haarets.co.il/image/upload/w_679,h_384,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/v1514363195/1.5264942.4101423884.jpg'
        ];
        this.config = {
            verifyBeforeLoad: true,
            log: false,
            animation: true,
            animationType: angular4_carousel_1.AnimationConfig.SLIDE,
            autoplay: true,
            autoplayDelay: 4000,
            stopAutoplayMinWidth: 768
        };
    }
};
MainPageComponent = __decorate([
    core_1.Component({
        selector: 'main-page',
        templateUrl: './main-page.component.html',
        styleUrls: ['./main-page.component.css']
    })
], MainPageComponent);
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=main-page.component.js.map
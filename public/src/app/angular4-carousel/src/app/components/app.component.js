"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const services_1 = require("../services");
let AppComponent = class AppComponent {
    constructor() {
        this.imageSources = [
            'http://www.violinshoptampa.com/assets/images/Panorama2a.jpg',
            'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
            'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
            'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
        ];
        // example config
        this.config = {
            verifyBeforeLoad: true,
            log: true,
            animation: true,
            animationType: services_1.AnimationConfig.SLIDE,
            autoplay: true,
            autoplayDelay: 2000,
            stopAutoplayMinWidth: 768
        };
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'app.template.html',
        styleUrls: ['assets/app.styles.scss']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
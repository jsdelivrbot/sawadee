"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const services_1 = require("./services");
const components_1 = require("./components");
const directives_1 = require("./directives");
let CarouselModule = class CarouselModule {
};
CarouselModule = __decorate([
    core_1.NgModule({
        declarations: [
            components_1.AppComponent,
            components_1.CarouselComponent,
            components_1.SlideComponent,
            components_1.CarouselArrowsComponent,
            components_1.PinsComponent,
            directives_1.CarouselHandlerDirective
        ],
        imports: [
            common_1.CommonModule
        ],
        exports: [components_1.CarouselComponent],
        providers: [services_1.CarouselService, services_1.WindowWidthService],
        bootstrap: [components_1.AppComponent]
    })
], CarouselModule);
exports.CarouselModule = CarouselModule;
//# sourceMappingURL=index.js.map
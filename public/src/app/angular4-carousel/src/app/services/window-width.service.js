"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/map");
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/distinctUntilChanged");
let WindowWidthService = class WindowWidthService {
    onResize(minWidthBreakpoint, scrollBar) {
        this.minWidthBreakpoint = minWidthBreakpoint;
        return Observable_1.Observable.fromEvent(window, 'resize')
            .map(() => this.assertSize(scrollBar))
            .startWith(this.assertSize(scrollBar))
            .distinctUntilChanged();
    }
    ;
    assertSize(scrollBar) {
        const area = scrollBar ? window.innerWidth : document.documentElement.clientWidth;
        return this.minWidthBreakpoint <= area;
    }
};
WindowWidthService = __decorate([
    core_1.Injectable()
], WindowWidthService);
exports.WindowWidthService = WindowWidthService;
//# sourceMappingURL=window-width.service.js.map
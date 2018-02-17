"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ArticlesComponent = class ArticlesComponent {
    // Create an instance of the DataService through dependency injection
    constructor(_articlesService) {
        this._articlesService = _articlesService;
        // Access the Data Service's getUsers() method we defined
        this._articlesService.getUsers()
            .subscribe(res => this.users = res);
    }
};
ArticlesComponent = __decorate([
    core_1.Component({
        selector: 'articles',
        templateUrl: './articles.component.html',
        styleUrls: ['./articles.component.css']
    })
], ArticlesComponent);
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map
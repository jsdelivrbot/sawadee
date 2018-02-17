"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const articles_service_1 = require("./articles.service");
describe('ArticlesService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [articles_service_1.ArticlesService]
        });
    });
    it('should be created', testing_1.inject([articles_service_1.ArticlesService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=articles.service.spec.js.map
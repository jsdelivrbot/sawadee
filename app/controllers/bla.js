"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require("express");
class Bla {
    constructor() {
        this.router = express.Router();
        this.router.get('/bla', (req, res) => {
            res.send('sdadsdasd');
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.Bla = Bla;
//# sourceMappingURL=bla.js.map
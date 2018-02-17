"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bla_1 = require("./bla");
let express = require("express");
const users_controller_1 = require("./users.controller");
class ApiController {
    constructor() {
        this.router = express.Router();
        this.router.use("/bla", new bla_1.Bla().getRouter());
        this.router.use("/users", new users_controller_1.UsersController().getRouter());
    }
    getRouter() {
        return this.router;
    }
}
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map
import {Bla} from "./bla";

let express = require("express");
import {UsersController} from "./users.controller";

export class ApiController {

    private router = express.Router();
    
    constructor() {

        this.router.use("/bla", new Bla().getRouter());
        this.router.use("/users", new UsersController().getRouter());
    }

    public getRouter() {
        return this.router;
    }
}

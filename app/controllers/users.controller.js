"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_dal_1 = require("../models/mongo.dal");
let express = require("express");
class UsersController {
    constructor() {
        this.router = express.Router();
        let response = {
            status: 200,
            data: [],
            message: null
        };
        const sendError = (err, res) => {
            response.status = 501;
            response.message = typeof err == 'object' ? err.message : err;
            res.status(501).json(response);
        };
        this.router.get('/users', (req, res) => {
            mongo_dal_1.MongoDal.getCollection('users').then((collection) => {
                collection
                    .find()
                    .toArray()
                    .then((users) => {
                    response.data = users;
                    res.json(response);
                })
                    .catch((err) => {
                    sendError(err, res);
                });
            });
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
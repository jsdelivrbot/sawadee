import {MongoDal} from "../models/mongo.dal";
let express = require("express");

export class UsersController {

    public router = express.Router();

    constructor() {

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
            MongoDal.getCollection('users').then((collection) => {
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
            })

        });
    }

    public getRouter() {
        return this.router;
    }
}
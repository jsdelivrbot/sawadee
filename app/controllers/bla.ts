let express = require("express");

export class Bla {

    public router = express.Router();

    constructor() {
        this.router.get('/bla', (req, res) => {
            res.send('sdadsdasd')
        })
    }

    public getRouter() {
        return this.router;
    }
}
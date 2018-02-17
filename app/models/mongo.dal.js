"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MongoDal {
    static getDb() {
        const Db = MongoDal.mongodb.Db;
        const Server = MongoDal.mongodb.Server;
        const MongoClient = MongoDal.mongodb.MongoClient;
        const dbName = "sw";
        const dbHost = "ds239368.mlab.com";
        const dbPort = 39368;
        const username = "sawadee";
        const pass = "sawadee%40liran1";
        const connectionString = "mongodb://" + username + ":" + pass + "@" + dbHost + ":" + dbPort + "/" + dbName;
        return new Promise(resolve => {
            if (!MongoDal.DB) {
                MongoClient.connect(connectionString, { uri_decode_auth: true }, (err, database) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("dbInit: " + dbName);
                        MongoDal.DB = database.db('sw');
                        resolve(MongoDal.DB);
                    }
                });
            }
            else {
                resolve(MongoDal.DB);
            }
        });
    }
    static getCollection(collectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.getDb();
            return new Promise(resolve => resolve(db.collection(collectionName)));
        });
    }
}
MongoDal.mongodb = require("mongodb");
exports.MongoDal = MongoDal;
//# sourceMappingURL=mongo.dal.js.map
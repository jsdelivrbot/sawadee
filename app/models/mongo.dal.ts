import {Collection, Db, MongoCallback, MongoClient} from "mongodb";
export class MongoDal {

    private static mongodb = require("mongodb");
    private static DB : Db;

    private static getDb() {

        const Db = MongoDal.mongodb.Db;
        const Server = MongoDal.mongodb.Server;
        const MongoClient: MongoClient = MongoDal.mongodb.MongoClient;
        const dbName = "sw";
        const dbHost = "ds239368.mlab.com";
        const dbPort = 39368;
        const username = "sawadee";
        const pass = "sawadee%40liran1";
        const connectionString: string = "mongodb://" + username + ":" + pass + "@" + dbHost + ":" + dbPort + "/" + dbName;

        return new Promise<Db>(resolve => {

            if (!MongoDal.DB) {
                (MongoClient.connect as any)(connectionString,{uri_decode_auth: true}, (err, database) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("dbInit: " + dbName);
                        MongoDal.DB = database.db('sw');
                        resolve(MongoDal.DB)
                    }
                })
            } else {
                resolve(MongoDal.DB)
            }
        });
    }

    public static async getCollection(collectionName: string): Promise<Collection> {

        const db: Db = await this.getDb();
        return new Promise<Collection>(resolve => resolve(db.collection(collectionName)))
    }
}

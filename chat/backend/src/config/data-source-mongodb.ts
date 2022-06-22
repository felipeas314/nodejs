import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"

export default class DataSourceMongoDb {

    private static dataSource: DataSource

    static createDataSource(): DataSource {
        return this.dataSource = new DataSource({
            type: "mongodb",
            host: "localhost",
            port: 27017,
            database: "chat",
            synchronize: true,
            logging: true,
            entities: [User],
            migrations: [],
            subscribers: [],
        })
    }

    static getConnection(): DataSource {
        return this.dataSource
    }
}
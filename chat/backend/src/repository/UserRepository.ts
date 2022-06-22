import { Repository } from "typeorm";
import { User } from "entity/User";
import  DataSourceMongoDb  from '../config/data-source-mongodb'

export default class UserRepository {

    private repository: Repository<User>

    constructor(){
        this.repository = DataSourceMongoDb.getConnection().getRepository(User)
    }

    async create(user: User): Promise<User> {
        return await this.repository.create(user)    
    }
}
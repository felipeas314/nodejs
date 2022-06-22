import { Repository } from "typeorm";
import { User } from "entity/User";
import  DataSourceMongoDb  from '../../infra/data-source-mongodb'
import UserRepository from "repository/UserRepository";

export default class UserRepositoryImpl implements UserRepository {

    private repository: Repository<User>

    constructor(){
        this.repository = DataSourceMongoDb.getConnection().getRepository(User)
    }

    async create(user: User): Promise<User> {
        return await this.repository.create(user)    
    }
}
import { User } from "entity/User";
import UserRepository from "repository/UserRepository";

export default class CreateUserService {

    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(user: User): Promise<User> {
        
        return this.userRepository.create(user)
    }

    private validUser() {
        
    }
}
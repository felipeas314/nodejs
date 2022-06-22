import UserRepository from "repository/UserRepository"
import CreateUserService from "usecases/user/create-user-service"

export const makeCreateUserService = () => {
    const userRepository = new UserRepository()
    const createUserService = new CreateUserService(userRepository)

    return createUserService
}
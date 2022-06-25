import UserRepositoryImpl from 'repository/typeorm/UserRepositoryImpl';
import CreateUserService from 'usecases/user/create-user-service';

export const makeCreateUserService = () => {
  const userRepository = new UserRepositoryImpl();
  const createUserService = new CreateUserService(userRepository);

  return createUserService;
};

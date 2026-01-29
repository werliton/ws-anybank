import { IUser } from "../entities/IUser";
import { IUserRepository } from "../repositories/IUserRepository";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: Omit<IUser, "id">): Promise<IUser> {
    // Logic to create a user would go here
    return this.userRepository.create(user);
  }
}

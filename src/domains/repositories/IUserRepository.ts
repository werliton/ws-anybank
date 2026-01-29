import { IUser } from "../entities/IUser";

export interface IUserRepository {
  create(user: Omit<IUser, "id">): Promise<IUser>;
}

import { IUserRepository } from "@domain/repositories/IUserRepository";
import { User } from "@domain/entities/User";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(name: string, email: string): Promise<User> {
        // TODO: Validar o e-mail
        const user = new User(name, email);

        return await this.userRepository.save(user);
    }
}
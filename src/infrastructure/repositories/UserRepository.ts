import { IUserRepository } from "@domain/repositories/IUserRepository";
import { User } from "@domain/entities/User";
import { Database } from "@infrastructure/config/Database";

export class UserRepository implements IUserRepository {
    private pool = Database.getConnection();
    
    async save (user: User): Promise<User> {
        const result = await this.pool.execute(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [user.name, user.email]
        );
        console.log('!# save result: ', result);
        const insertId = (result as any).insertId;
        user.id = insertId; 
        return user;
    }
    findByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
}
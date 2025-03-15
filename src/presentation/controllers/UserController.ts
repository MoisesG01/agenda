import { Request, Response } from 'express';
import { CreateUserUseCase } from '@application';
import { UserRepository } from '@infrastructure';

export class UserController {
    private createUserUseCase: CreateUserUseCase;
    
    constructor() {
        this.createUserUseCase = new CreateUserUseCase(new UserRepository());
    }
}

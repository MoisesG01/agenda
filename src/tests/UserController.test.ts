import { Database } from "@infrastructure/config/Database";
import { UserRepository } from "@infrastructure/repositories/UserRepository";
import { UserController } from "@presentation/controllers/UserController";
import { Request, Response } from "express";


describe('UserController (Save, getAll, getById)', () => {
    let userController: UserController;
    let userRepository: UserRepository;

    beforeAll(async () => {
        await Database.init();
        userRepository = new UserRepository();
        userController = new UserController();
    });

    //TODO: implementar o afterAll para fechar a conexão com o banco de dados

    it('deve criar um usuário e persistir no banco de dados', async () => {
        const req = {
            body: {
                name: 'Teste da Silva',
                email: 'teste@email.com',
            }
        } as Request;

        const jsonMock = jest.fn();
        const statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        const res = {
            status: statusMock,
        } as unknown as Response;

        await userController.createUser(req, res);

        expect(statusMock).toHaveBeenCalledWith(201);
        expect(jsonMock).toHaveBeenCalledWith({
            id: expect.any(Number),
            name: 'Teste da Silva',
            email: 'teste@email.com'});
    });

    it('deve retornar todos os usuários', async () => {
        const req = {} as Request;

        const jsonMock = jest.fn();
        const statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        const res = {
            status: statusMock,
        } as unknown as Response;

        await userController.getAllUsers(req, res);

        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(expect.arrayContaining([
            expect.objectContaining({
                name: 'Teste da Silva',
                email: 'teste@email.com',
            }),
        ]));
    });
});
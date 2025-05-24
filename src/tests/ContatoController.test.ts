import { Database } from "@infrastructure/config/Database";
import { UserController } from "@presentation/controllers/UserController";
import { Request, Response } from "express";

describe('UserController (Save, getAll, getById)', () => {
    let userController: UserController;

    beforeAll(async () => {
        await Database.init();
        userController = new UserController();
    });

    afterAll(async () => {
        await Database.close();
    });

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
});
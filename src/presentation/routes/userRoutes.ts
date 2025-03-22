import { Router } from 'express';
import { UserController } from '@presentation/controllers/UserController';
import { validateDTO } from '@presentation/middlewares/validateDTO';
import { UserDTO } from '@presentation/dtos/UserDTO';

const router = Router();
const userController = new UserController();

// router.get('/users', (req, res) => {
//     res.send('User routes');
// });

router.post("/users", validateDTO(UserDTO), async(req, res, next) => {
    try {
        await userController.createUser(req, res);
    } catch (error) {
        next(error);
    }
});

export default router;

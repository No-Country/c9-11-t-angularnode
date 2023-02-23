import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validator from '../middlewares/validations/users.validator';

const authRouter = Router();

authRouter.post('/register', validator.registerUserValidator, usersController.register);
authRouter.post('/login', validator.loginUserValidator, usersController.login);

export default authRouter;


import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validator from '../middlewares/validations/users.validator';
import auth from '../middlewares/security/auth.middleware';

const authRouter = Router();

authRouter.post('/register', validator.registerUserValidator, usersController.register);
authRouter.post('/login', validator.loginUserValidator, usersController.login);
authRouter.get('/me',auth, usersController.getMe);
authRouter.post('/me',validator.updateMeValidator,auth, usersController.updateMe);

export default authRouter;


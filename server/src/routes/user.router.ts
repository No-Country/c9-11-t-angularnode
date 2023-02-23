import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validator from '../middlewares/validations/users.validator';
import authMiddleware from '../middlewares/security/auth.middleware';
import isAdmin from '../middlewares/security/isAdmin.middleware';

const usersRouter = Router();
usersRouter.use(authMiddleware,isAdmin);
//GET all users
usersRouter.get('/',validator.getAllUsersValidator, usersController.getAll);
//GET user by id
usersRouter.get('/:id',validator.getUserByIdValidator, usersController.getById);
//POST create user from admin panel
usersRouter.post('/', validator.createUserValidator, usersController.create);
//PUT update user from admin panel
usersRouter.put('/:id', validator.updateUserValidator, usersController.update);
//DELETE user from admin panel
usersRouter.delete('/:id', validator.deleteUserValidator, usersController.remove);

export default usersRouter;
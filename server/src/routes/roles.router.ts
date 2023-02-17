import { Router } from 'express';
import roleController from '../controllers/role.controller';
import validator from '../middlewares/validations/roles.validator';
import authMiddleware from '../middlewares/security/auth.middleware';
import isAdmin from '../middlewares/security/isAdmin.middleware';

const rolesRouter = Router();

rolesRouter.use(authMiddleware,isAdmin)
//GET ALL ROLES
rolesRouter.get('/', roleController.getRoles);
//GET ROLE BY ID
rolesRouter.get('/:id',validator.getRoleByIdValidator, roleController.getRole);
//POST CREATE ROLE
rolesRouter.post('/',validator.createRoleValidator, roleController.createRole);
//PUT UPDATE ROLE
rolesRouter.put('/:id',validator.updateRoleValidator, roleController.updateRole);
//DELETE ROLE
rolesRouter.delete('/:id',validator.deleteRoleValidator, roleController.deleteRole);


export default rolesRouter;
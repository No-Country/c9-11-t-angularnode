"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = __importDefault(require("../controllers/role.controller"));
const roles_validator_1 = __importDefault(require("../middlewares/validations/roles.validator"));
const auth_middleware_1 = __importDefault(require("../middlewares/security/auth.middleware"));
const isAdmin_middleware_1 = __importDefault(require("../middlewares/security/isAdmin.middleware"));
const rolesRouter = (0, express_1.Router)();
rolesRouter.use(auth_middleware_1.default, isAdmin_middleware_1.default);
//GET ALL ROLES
rolesRouter.get('/', role_controller_1.default.getRoles);
//GET ROLE BY ID
rolesRouter.get('/:id', roles_validator_1.default.getRoleByIdValidator, role_controller_1.default.getRole);
//POST CREATE ROLE
rolesRouter.post('/', roles_validator_1.default.createRoleValidator, role_controller_1.default.createRole);
//PUT UPDATE ROLE
rolesRouter.put('/:id', roles_validator_1.default.updateRoleValidator, role_controller_1.default.updateRole);
//DELETE ROLE
rolesRouter.delete('/:id', roles_validator_1.default.deleteRoleValidator, role_controller_1.default.deleteRole);
exports.default = rolesRouter;
//# sourceMappingURL=roles.router.js.map
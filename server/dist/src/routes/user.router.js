"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const users_validator_1 = __importDefault(require("../middlewares/validations/users.validator"));
const auth_middleware_1 = __importDefault(require("../middlewares/security/auth.middleware"));
const isAdmin_middleware_1 = __importDefault(require("../middlewares/security/isAdmin.middleware"));
const usersRouter = (0, express_1.Router)();
usersRouter.use(auth_middleware_1.default, isAdmin_middleware_1.default);
//GET all users
usersRouter.get('/', users_validator_1.default.getAllUsersValidator, users_controller_1.default.getAll);
//GET user by id
usersRouter.get('/:id', users_validator_1.default.getUserByIdValidator, users_controller_1.default.getById);
//POST create user from admin panel
usersRouter.post('/', users_validator_1.default.createUserValidator, users_controller_1.default.create);
//PUT update user from admin panel
usersRouter.put('/:id', users_validator_1.default.updateUserValidator, users_controller_1.default.update);
//DELETE user from admin panel
usersRouter.delete('/:id', users_validator_1.default.deleteUserValidator, users_controller_1.default.remove);
exports.default = usersRouter;
//# sourceMappingURL=user.router.js.map
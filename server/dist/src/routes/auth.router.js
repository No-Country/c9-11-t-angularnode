"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const users_validator_1 = __importDefault(require("../middlewares/validations/users.validator"));
const auth_middleware_1 = __importDefault(require("../middlewares/security/auth.middleware"));
const authRouter = (0, express_1.Router)();
authRouter.post('/register', users_validator_1.default.registerUserValidator, users_controller_1.default.register);
authRouter.post('/login', users_validator_1.default.loginUserValidator, users_controller_1.default.login);
authRouter.get('/me', auth_middleware_1.default, users_controller_1.default.getMe);
authRouter.post('/me', users_validator_1.default.updateMeValidator, auth_middleware_1.default, users_controller_1.default.updateMe);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map
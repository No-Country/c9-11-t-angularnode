"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = __importDefault(require("./baseRepository"));
const prisma_repo_1 = require("./prisma-repo");
/*  eslint-enable @typescript-eslint/no-unused-vars */
class Users extends (0, baseRepository_1.default)(prisma_repo_1.MODELS_NAME.USERS) {
}
exports.default = Users;
//# sourceMappingURL=users.js.map
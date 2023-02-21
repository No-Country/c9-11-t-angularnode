"use strict";
//File to create prisma seeds for user and role
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../../src/services/user.service"));
const role_service_1 = __importDefault(require("../../src/services/role.service"));
const userService = new user_service_1.default();
const roleService = new role_service_1.default();
const adminRole = {
    name: 'Admin',
};
const userRole = {
    name: 'User',
};
const user = {
    name: 'Admin',
    email: 'admin@nctest.com',
    password: 'admin',
    isActive: true,
    phone: '123456789',
    address: '1234 Main St',
    roleId: 1,
};
const user2 = {
    name: 'User',
    isActive: true,
    email: 'user@nctest.com',
    password: 'user',
    phone: '123456789',
    address: '1234 Main St',
    roleId: 2,
};
function basicSeeds() {
    return __awaiter(this, void 0, void 0, function* () {
        const adminRoleCreated = yield roleService.createRole(adminRole);
        const userRoleCreated = yield roleService.createRole(userRole);
        console.log('Roles created: \n');
        console.log(adminRoleCreated, userRoleCreated);
        const userCreated = yield userService.create(user);
        const user2Created = yield userService.create(user2);
        console.log('Users created');
        console.log(userCreated, user2Created);
        return;
    });
}
basicSeeds();
//# sourceMappingURL=basicSeeds.js.map
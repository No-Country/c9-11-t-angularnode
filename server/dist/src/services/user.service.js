"use strict";
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
const users_1 = __importDefault(require("../repository/users"));
const role_1 = __importDefault(require("../repository/role"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_service_1 = __importDefault(require("./jwt.service"));
const response_parser_1 = __importDefault(require("../utils/response.parser"));
const error_service_1 = __importDefault(require("./error.service"));
class UsersService {
    constructor() {
        this.jwtService = new jwt_service_1.default();
    }
    getAll(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, response_parser_1.default)(200, yield users_1.default.findAll({ isActive: true }, {}, { limit: limit, page: page }));
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield users_1.default.findOne({ id: id, isActive: true });
                if (repoResponse == null) {
                    return (0, response_parser_1.default)(404, "User not found");
                }
                return (0, response_parser_1.default)(200, repoResponse);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    /**
     * Function to check if an user has admin role
     * @param id
     * @returns boolean
     */
    isAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usr = yield users_1.default.findOne({ id: id, isActive: true });
                if (usr != null && usr.roleId == 1) {
                    return true;
                }
                return false;
            }
            catch (err) {
                return new error_service_1.default(err);
            }
        });
    }
    updateMe(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //prevent user from changing role
                if (user.roleId) {
                    delete user.roleId;
                }
                //prevent user from changing isActive
                if (user.isActive) {
                    delete user.isActive;
                }
                // if password is not null, hash it
                if (user.password) {
                    user.password = yield this.hashPassword(user.password);
                }
                const usr = yield users_1.default.update(id, user);
                const Role = yield role_1.default.findOne({ id: usr.roleId });
                const usrMe = {
                    id: usr.id,
                    name: usr.name,
                    email: usr.email,
                    phone: usr.phone,
                    address: usr.address,
                    //@ts-ignore
                    roleName: Role.name.toUpperCase(),
                    profileIcon: usr.profileIcon
                };
                return (0, response_parser_1.default)(200, usrMe);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err)); //{statusCode:500, message: err.message};
            }
        });
    }
    /**
     * Admin function to create a new user
     * @param user
     * @returns User
     */
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Hash password
                user.password = yield this.hashPassword(user.password);
                const repoResponse = yield users_1.default.create(user);
                return (0, response_parser_1.default)(200, repoResponse);
            }
            catch (err) {
                if (err.code == 'P2002' && err.meta.target.includes('email')) {
                    return (0, response_parser_1.default)(409, "Email already exists");
                }
                return (0, response_parser_1.default)(500, new error_service_1.default(err)); //{statusCode:500, message: err.message};
            }
        });
    }
    /**
     * Admin function to update a user
     */
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (user.password != null) {
                    //Hash password
                    user.password = yield this.hashPassword(user.password);
                }
                const repoResponse = yield users_1.default.update(id, user);
                return (0, response_parser_1.default)(200, repoResponse);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err)); //{statusCode:500, message: err.message};
            }
        });
    }
    /**
     * Admin function to delete a user
     * @param id
     * @returns
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield users_1.default.delete(id);
                if (repoResponse.count == 0) {
                    return (0, response_parser_1.default)(404, "User not found"); //{statusCode: 404, message: "User not found"};
                }
                return (0, response_parser_1.default)(200, "User deleted"); //{statusCode: 200, message: "User deleted"};
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err)); // {statusCode:500, message: err.message};
            }
        });
    }
    /**
     *
     */
    getMe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usr = yield users_1.default.findOne({ id: id, isActive: true });
                if (usr == null) {
                    return (0, response_parser_1.default)(404, "User not found");
                }
                else {
                    const Role = yield role_1.default.findOne({ id: usr.roleId });
                    if (Role != null) {
                        const usrMe = {
                            id: usr.id,
                            name: usr.name,
                            email: usr.email,
                            phone: usr.phone,
                            address: usr.address,
                            roleName: Role.name.toUpperCase(),
                            profileIcon: usr.profileIcon
                        };
                        return (0, response_parser_1.default)(200, usrMe);
                    }
                    else {
                        return (0, response_parser_1.default)(404, "Role not found");
                    }
                }
            }
            catch (err) {
                console.log(err);
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    /**
     * Register a new user from the website
     * @param user
     * @returns user | error
     */
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Cast userInput to User type
                const userCreate = user;
                //Set isActive to true
                userCreate.isActive = true;
                //Set default role to 2 (user)
                userCreate.roleId = 2;
                //Hash password
                userCreate.password = yield this.hashPassword(user.password);
                const repoResponse = yield users_1.default.create(userCreate);
                const token = this.jwtService.sign({ id: repoResponse.id, email: repoResponse.email, name: repoResponse.name });
                return (0, response_parser_1.default)(200, { token: token, user: repoResponse });
            }
            catch (err) {
                if (err.code == 'P2002' && err.meta.target.includes('email')) {
                    return (0, response_parser_1.default)(409, "Email already exists");
                }
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    /**
     * Login a user
     * @param email
     * @param password
     * @return token | error
     */
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield users_1.default.findOne({ email: email });
                if (user == null) {
                    return (0, response_parser_1.default)(404, "User not found");
                }
                const isPasswordCorrect = yield bcrypt_1.default.compare(password, user.password);
                if (!isPasswordCorrect) {
                    return (0, response_parser_1.default)(401, "Invalid Password");
                }
                //Generate token
                const token = this.jwtService.sign({ id: user.id, email: user.email, name: user.name });
                const response = {
                    message: "Login successful",
                    token: token
                };
                //Return token
                return (0, response_parser_1.default)(200, response);
            }
            catch (err) {
                console.log(err);
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    /**
     * Hash password
     * @param password
     * @returns hashed password
     */
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.hash(password, 10);
        });
    }
}
exports.default = UsersService;
//# sourceMappingURL=user.service.js.map
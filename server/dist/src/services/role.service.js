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
const role_1 = __importDefault(require("../repository/role"));
const response_parser_1 = __importDefault(require("../utils/response.parser"));
const error_service_1 = __importDefault(require("./error.service"));
class RoleService {
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield role_1.default.findAll({}, {}, {});
                return (0, response_parser_1.default)(200, repoResponse);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err)); //{statusCode:500, message: err.message};
            }
        });
    }
    getRoleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield role_1.default.findOne(id);
                if (repoResponse == null) {
                    return (0, response_parser_1.default)(404, "Role not found");
                }
                return (0, response_parser_1.default)(200, repoResponse);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err)); //{statusCode:500, message: err.message};
            }
        });
    }
    createRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield role_1.default.create(role);
                return (0, response_parser_1.default)(201, repoResponse);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    updateRole(id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield role_1.default.update(id, role);
                return (0, response_parser_1.default)(200, repoResponse);
            }
            catch (err) {
                if (err.code == "P2025") {
                    return (0, response_parser_1.default)(404, "Role not found");
                }
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    deleteRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield role_1.default.delete(id);
                if (repoResponse.count == 0) {
                    return (0, response_parser_1.default)(404, "Role not found");
                }
                return (0, response_parser_1.default)(200, "Role deleted");
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
}
exports.default = RoleService;
//# sourceMappingURL=role.service.js.map
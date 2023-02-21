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
const role_service_1 = __importDefault(require("../services/role.service"));
const roleService = new role_service_1.default();
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, response } = yield roleService.getRoles();
    res.status(statusCode).json(response);
});
const getRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { statusCode, response } = yield roleService.getRoleById(id);
    res.status(statusCode).json(response);
});
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const role = req.body;
    const { statusCode, response } = yield roleService.createRole(role);
    res.status(statusCode).json(response);
});
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const role = req.body;
    const { statusCode, response } = yield roleService.updateRole(id, role);
    res.status(statusCode).json(response);
});
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { statusCode, response } = yield roleService.deleteRole(id);
    res.status(statusCode).json(response);
});
exports.default = { getRoles, getRole, createRole, updateRole, deleteRole };
//# sourceMappingURL=role.controller.js.map
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
const user_service_1 = __importDefault(require("../services/user.service"));
const service = new user_service_1.default();
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Cast query params to getAllQuery type 
    const query = req.query;
    let page = query.page;
    if (page == null)
        page = 1;
    let limit = query.limit;
    if (limit == null)
        limit = 10;
    const { statusCode, response } = yield service.getAll(limit, page);
    res.status(statusCode).json(response);
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { statusCode, response } = yield service.getById(id);
    res.status(statusCode).json(response);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, response } = yield service.create(req.body);
    res.status(statusCode).json(response);
});
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.userId;
    const { statusCode, response } = yield service.getMe(id);
    res.status(statusCode).json(response);
});
const updateMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.userId;
    delete req.body.userId;
    const { statusCode, response } = yield service.updateMe(id, req.body);
    return res.status(statusCode).json(response);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { statusCode, response } = yield service.update(id, req.body);
    res.status(statusCode).json(response);
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { statusCode, response } = yield service.delete(id);
    res.status(statusCode).json(response);
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { statusCode, response } = yield service.login(email, password);
    res.status(statusCode).json(response);
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, response } = yield service.signUp(req.body);
    res.status(statusCode).json(response);
});
exports.default = { getAll, getById, create, getMe, updateMe, update, remove, login, register };
//# sourceMappingURL=users.controller.js.map
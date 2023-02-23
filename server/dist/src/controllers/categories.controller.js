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
const categories_service_1 = __importDefault(require("../services/categories.service"));
const service = new categories_service_1.default();
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
    const { statusCode, response } = yield service.getById(parseInt(req.params.id));
    res.status(statusCode).json(response);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, response } = yield service.create(req.body);
    res.status(statusCode).json(response);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, response } = yield service.update(parseInt(req.params.id), req.body);
    res.status(statusCode).json(response);
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, response } = yield service.delete(parseInt(req.params.id));
    res.status(statusCode).json(response);
});
exports.default = { getAll, getById, create, update, remove };
//# sourceMappingURL=categories.controller.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_router_1 = __importDefault(require("./categories.router"));
const products_router_1 = __importDefault(require("./products.router"));
const user_router_1 = __importDefault(require("./user.router"));
const auth_router_1 = __importDefault(require("./auth.router"));
const roles_router_1 = __importDefault(require("./roles.router"));
const router = (0, express_1.Router)();
router.use(auth_router_1.default);
router.use('/categories', categories_router_1.default);
router.use('/products', products_router_1.default);
router.use('/users', user_router_1.default);
router.use('/roles', roles_router_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
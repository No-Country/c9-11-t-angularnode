"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = __importDefault(require("../controllers/products.controller"));
const products_validator_1 = __importDefault(require("../middlewares/validations/products.validator"));
const auth_middleware_1 = __importDefault(require("../middlewares/security/auth.middleware"));
const isAdmin_middleware_1 = __importDefault(require("../middlewares/security/isAdmin.middleware"));
const optional_auth_middleware_1 = __importDefault(require("../middlewares/security/optional.auth.middleware"));
const productsRouter = (0, express_1.Router)();
productsRouter.get('/', products_validator_1.default.getAllProductsValidator, optional_auth_middleware_1.default, products_controller_1.default.getProducts);
productsRouter.get('/:id', products_validator_1.default.getProductByIdValidator, products_controller_1.default.getProduct);
productsRouter.use(auth_middleware_1.default, isAdmin_middleware_1.default);
productsRouter.post('/', products_validator_1.default.createProductValidator, products_controller_1.default.createProduct);
productsRouter.put('/:id', products_validator_1.default.updateProductValidator, products_controller_1.default.updateProduct);
productsRouter.delete('/:id', products_validator_1.default.deleteProductValidator, products_controller_1.default.deleteProduct);
exports.default = productsRouter;
//# sourceMappingURL=products.router.js.map
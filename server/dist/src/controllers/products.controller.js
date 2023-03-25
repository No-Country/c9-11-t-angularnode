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
const product_service_1 = __importDefault(require("../services/product.service"));
const user_service_1 = __importDefault(require("../services/user.service"));
const productService = new product_service_1.default();
const userService = new user_service_1.default();
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    let page = query.page;
    if (page == null)
        page = 1;
    let limit = query.limit;
    if (limit == null)
        limit = 10;
    let categoryId = query.categoryId;
    let showAll = query.showAll;
    if (showAll == null)
        showAll = false;
    let isAdmin = false;
    if (showAll) {
        if (req.body.userId != null) {
            isAdmin = yield userService.isAdmin(req.body.userId);
        }
    }
    const showAllProducts = showAll && isAdmin;
    let products;
    if (categoryId == null) {
        products = yield productService.getProducts(limit, page, !showAllProducts);
    }
    else {
        products = yield productService.getProductsByCategory(parseInt(categoryId), limit, page, !isAdmin);
    }
    res.status(products.statusCode).json(products.response);
});
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    let product = yield productService.getProductById(id);
    res.status(product.statusCode).json(product.response);
});
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files)
        return;
    let { statusCode, response } = yield productService.createProduct(Object.assign(Object.assign({}, req.body), { image: req.files.image }));
    res.status(statusCode).json(response);
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.files)
        req.body.image = req.files.image;
    let { statusCode, response } = yield productService.updateProduct(parseInt(req.params.id), req.body);
    res.status(statusCode).json(response);
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { statusCode, response } = yield productService.deleteProduct(parseInt(req.params.id));
    res.status(statusCode).json(response);
});
exports.default = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
//# sourceMappingURL=products.controller.js.map
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
const productService = new product_service_1.default();
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    let page = query.page;
    if (page == null)
        page = 1;
    let limit = query.limit;
    if (limit == null)
        limit = 10;
    const products = yield productService.getProducts(limit, page);
    res.json(products);
});
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    let product = yield productService.getProductById(id);
    res.json(product);
});
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    let newProduct = yield productService.createProduct(product);
    res.json(newProduct);
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let updatedProduct = yield productService.updateProduct(parseInt(req.params.id), req.body);
    res.json(updatedProduct);
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield productService.deleteProduct(parseInt(req.params.id));
    if (resp.statusCode) {
        res.status(resp.statusCode).json({ message: resp.message });
    }
    else {
        res.json(resp);
    }
});
exports.default = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
//# sourceMappingURL=products.controller.js.map
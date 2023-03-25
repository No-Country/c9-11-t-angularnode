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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("../repository/products"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const response_parser_1 = __importDefault(require("../utils/response.parser"));
class ProductsService {
    /**
      * Find all products
      * and return an array of products
      * @param { number } limit
      * @param { number } page
      * @returns { Promise<ProductRead[]> }
    **/
    getProducts(limit, page, isActive) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (isActive) {
                    const products = yield products_1.default.findAll({ isActive: true }, {}, { limit: limit, page: page }, { include: { category: { select: { name: true, section: true } } } });
                    return (0, response_parser_1.default)(200, products);
                }
                else {
                    const products = yield products_1.default.findAll({}, {}, { limit: limit, page: page }, { include: { category: { select: { name: true, section: true } } } });
                    return (0, response_parser_1.default)(200, products);
                }
            }
            catch (error) {
                return (0, response_parser_1.default)(500, `Error in product service: ${error.message}`);
            }
        });
    }
    /**
      * Find a product by Id
      * @param { number } id
      * @returns { Promise<ProductRead> }
      *
    **/
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield products_1.default.findOne({ id: id });
                if (!product) {
                    return (0, response_parser_1.default)(404, `Product with id ${id} not found`);
                }
                return (0, response_parser_1.default)(200, product);
            }
            catch (error) {
                return (0, response_parser_1.default)(500, `Error in product service: ${error.message}`);
            }
        });
    }
    /**
     * Get products by category
     * @param categoryId
     * @param limit
     * @param page
     * @returns
     */
    getProductsByCategory(categoryId, limit, page, isActive) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (isActive) {
                    const repoResponse = yield products_1.default.findAll({ categoryId: categoryId, isActive: true }, {}, { limit: limit, page: page }, { include: { category: { select: { name: true, section: true } } } });
                    return (0, response_parser_1.default)(200, repoResponse);
                }
                else {
                    const repoResponse = yield products_1.default.findAll({ categoryId: categoryId }, {}, { limit: limit, page: page }, { include: { category: { select: { name: true, section: true } } } });
                    return (0, response_parser_1.default)(200, repoResponse);
                }
            }
            catch (error) {
                return (0, response_parser_1.default)(500, `Error in get products by category service: ${error.message}`);
            }
        });
    }
    /**
      * Create a new product
      * @param { ProductWrite} product
      * @returns { Promise<ProductRead> }
      *
    **/
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { image } = product, productData = __rest(product, ["image"]);
                const uploadedResult = yield cloudinary_1.default.uploader.upload(image.tempFilePath, {
                    upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
                });
                productData.categoryId = parseInt(productData.categoryId);
                productData.price = parseFloat(productData.price);
                productData.discount = parseFloat(productData.discount);
                productData.isActive = productData.isActive == 'true' ? true : false;
                const newProduct = yield products_1.default.create(Object.assign(Object.assign({}, productData), { imageUrl: uploadedResult.secure_url }));
                return (0, response_parser_1.default)(201, newProduct);
            }
            catch (error) {
                return (0, response_parser_1.default)(500, `Error in create product service: ${error.message}`);
            }
        });
    }
    /**
      * Update a product
      * @param { number } id
      * @param { ProductWrite } product
      * @returns { Promise<ProductRead> }
      *
    **/
    updateProduct(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { image } = product, productData = __rest(product, ["image"]);
                if (image) {
                    const uploadedResult = yield cloudinary_1.default.uploader.upload(image.tempFilePath, {
                        upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
                    });
                    productData.imageUrl = uploadedResult.secure_url;
                }
                productData.categoryId = parseInt(productData.categoryId);
                productData.price = parseFloat(productData.price);
                productData.discount = parseFloat(productData.discount);
                productData.isActive = productData.isActive == 'true' ? true : false;
                const updatedProduct = yield products_1.default.update(id, productData);
                return (0, response_parser_1.default)(200, updatedProduct);
            }
            catch (error) {
                return (0, response_parser_1.default)(500, `Error in update product service: ${error.message}`);
            }
        });
    }
    /**
      * Delete a product
      * @param { number } id
      * @returns { void }
      *
    **/
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield products_1.default.delete(id);
                if (repoResponse.count == 0) {
                    return (0, response_parser_1.default)(404, `Product with id ${id} not found`);
                }
                return (0, response_parser_1.default)(200, `Product with id ${id} deleted`);
            }
            catch (error) {
                return (0, response_parser_1.default)(500, `Error in delete product service: ${error.message}`);
            }
        });
    }
}
exports.default = ProductsService;
//# sourceMappingURL=product.service.js.map
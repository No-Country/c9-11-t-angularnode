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
const products_1 = __importDefault(require("../repository/products"));
class ProductsService {
    /**
      * Find all products
      * and return an array of products
      * @param { number } limit
      * @param { number } page
      * @returns { Promise<ProductRead[]> }
    **/
    getProducts(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield products_1.default.findAll({}, {}, { limit: limit, page: page });
            }
            catch (error) {
                return {
                    statusCode: 500,
                    message: error.message
                };
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
                    return { statusCode: 404, message: 'Product could not be found' };
                }
                return product;
            }
            catch (error) {
                return {
                    statusCode: 500,
                    message: error.message
                };
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
    getProductsByCategory(categoryId, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield products_1.default.findAll({ categoryId: categoryId }, {}, { limit: limit, page: page });
                return repoResponse;
            }
            catch (error) {
                return {
                    statusCode: 500,
                    message: error.message
                };
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
                const newProduct = yield products_1.default.create(product);
                return newProduct;
            }
            catch (error) {
                return {
                    statusCode: 500,
                    message: error.message
                };
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
                const updatedProduct = yield products_1.default.update(id, product);
                return updatedProduct;
            }
            catch (error) {
                return {
                    statusCode: 500,
                    message: error.message
                };
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
                    return {
                        statusCode: 404,
                        message: 'Product could not be found'
                    };
                }
                return { message: 'Product was successfully deleted' };
            }
            catch (error) {
                return {
                    statusCode: 500,
                    message: error.message
                };
            }
        });
    }
}
exports.default = ProductsService;
//# sourceMappingURL=product.service.js.map
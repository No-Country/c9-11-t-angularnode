"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const errorHandler_validator_1 = require("../errorHandler.validator");
const createProductValidator = [
    (0, express_validator_1.body)('title').notEmpty().isString().withMessage('Title is required')
        .isLength({ min: 3, max: 80 }).withMessage('Title must be between 3 and 80 characters'),
    (0, express_validator_1.body)('description').notEmpty().isString().withMessage('Description is required')
        .isLength({ min: 3, max: 255 }).withMessage('Description must be between 3 and 255 characters'),
    (0, express_validator_1.body)('price').notEmpty().withMessage('Price is required'),
    (0, express_validator_1.body)('isActive').isBoolean(),
    (0, express_validator_1.body)('discount').isInt(),
    (0, express_validator_1.body)('categoryId').notEmpty().isInt().withMessage('Category Id is required'),
    errorHandler_validator_1.errorHandler
];
const getAllProductsValidator = [
    (0, express_validator_1.query)('page').isInt().optional(),
    (0, express_validator_1.query)('limit').isInt().optional(),
    errorHandler_validator_1.errorHandler
];
const updateProductValidator = [
    (0, express_validator_1.param)('id').isInt().notEmpty(),
    (0, express_validator_1.body)('title').notEmpty().isString().withMessage('Title is required')
        .isLength({ min: 3, max: 80 }).withMessage('Title must be between 3 and 80 characters'),
    (0, express_validator_1.body)('description').notEmpty().isString().withMessage('Description is required')
        .isLength({ min: 3, max: 255 }).withMessage('Description must be between 3 and 255 characters'),
    (0, express_validator_1.body)('price').notEmpty().isInt().withMessage('Price is required'),
    (0, express_validator_1.body)('isActive').isBoolean(),
    (0, express_validator_1.body)('discount').isInt(),
    (0, express_validator_1.body)('categoryId').notEmpty().isInt().withMessage('Category Id is required'),
    errorHandler_validator_1.errorHandler
];
const getProductByIdValidator = [
    (0, express_validator_1.param)('id').isInt(),
    errorHandler_validator_1.errorHandler
];
const deleteProductValidator = [
    (0, express_validator_1.param)('id').isInt(),
    errorHandler_validator_1.errorHandler
];
exports.default = {
    getAllProductsValidator,
    createProductValidator,
    updateProductValidator,
    getProductByIdValidator,
    deleteProductValidator,
};
//# sourceMappingURL=products.validator.js.map
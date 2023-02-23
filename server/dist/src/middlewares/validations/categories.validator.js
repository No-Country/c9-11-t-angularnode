"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const errorHandler_validator_1 = require("../errorHandler.validator");
const createCategoryValidator = [
    (0, express_validator_1.body)('name')
        .notEmpty()
        .isString()
        .withMessage('Name is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('Name must be between 3 and 50 characters'),
    (0, express_validator_1.body)('description')
        .isString()
        .withMessage('Description is required')
        .isLength({ min: 3, max: 255 })
        .withMessage('Description must be between 3 and 255 characters'),
    errorHandler_validator_1.errorHandler
];
const updateCategoryValidator = [
    (0, express_validator_1.param)('id').isInt().notEmpty(),
    (0, express_validator_1.body)('name').isString().withMessage("Name can't be null")
        .isLength({ min: 3, max: 50 }).withMessage("Name must be between 3 and 50 characters"),
    (0, express_validator_1.body)('description').isString()
        .withMessage("Description can't be null")
        .isLength({ min: 3, max: 255 })
        .withMessage("Description must be between 3 and 255 characters"),
    errorHandler_validator_1.errorHandler
];
const getAllCategoriesValidator = [
    (0, express_validator_1.query)('page').isInt().optional(),
    (0, express_validator_1.query)('limit').isInt().optional(),
    errorHandler_validator_1.errorHandler
];
const getByIdCategoryValidator = [
    (0, express_validator_1.param)('id').isInt(),
    errorHandler_validator_1.errorHandler
];
const deleteCategoryValidator = [
    (0, express_validator_1.param)('id').isInt(),
    errorHandler_validator_1.errorHandler
];
exports.default = { createCategoryValidator, updateCategoryValidator, deleteCategoryValidator, getAllCategoriesValidator, getByIdCategoryValidator };
//# sourceMappingURL=categories.validator.js.map
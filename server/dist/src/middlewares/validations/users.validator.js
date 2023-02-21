"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const errorHandler_validator_1 = require("../errorHandler.validator");
const strongPasswordOptions = {
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
};
/**
 * Validation for user registration from the client
 */
const registerUserValidator = [
    (0, express_validator_1.body)('email').notEmpty().isEmail().withMessage('Email is required'),
    (0, express_validator_1.body)('password').notEmpty().isString().withMessage('Password is required'),
    (0, express_validator_1.body)('password').isStrongPassword(strongPasswordOptions).withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 5 characters long'),
    (0, express_validator_1.body)('name').notEmpty().isString().withMessage('Name is required'),
    (0, express_validator_1.body)('phone').optional().isString(),
    (0, express_validator_1.body)('address').optional().isString(),
    errorHandler_validator_1.errorHandler
];
/**
 * Validation for user creation from the admin panel
 */
const createUserValidator = [
    (0, express_validator_1.body)('email').notEmpty().isEmail().withMessage('Email is required'),
    (0, express_validator_1.body)('password').notEmpty().isString().withMessage('Password is required'),
    (0, express_validator_1.body)('password').isStrongPassword(strongPasswordOptions).withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 5 characters long'),
    (0, express_validator_1.body)('name').notEmpty().isString().withMessage('Name is required'),
    (0, express_validator_1.body)('phone').optional().isString(),
    (0, express_validator_1.body)('address').optional().isString(),
    (0, express_validator_1.body)('roleId').isInt().withMessage('Role id is required'),
    (0, express_validator_1.body)('isActive').isBoolean().withMessage('Active status is required'),
    errorHandler_validator_1.errorHandler
];
const loginUserValidator = [
    (0, express_validator_1.body)('email').notEmpty().isEmail().withMessage('Email is required'),
    (0, express_validator_1.body)('password').notEmpty().isString().withMessage('Password is required'),
    errorHandler_validator_1.errorHandler
];
const getAllUsersValidator = [
    (0, express_validator_1.query)('page').optional().isInt().withMessage('Page must be an integer'),
    (0, express_validator_1.query)('limit').optional().isInt().withMessage('Limit must be an integer'),
    errorHandler_validator_1.errorHandler
];
const getUserByIdValidator = [
    (0, express_validator_1.param)('id').notEmpty().isInt().withMessage('Id must be an integer'),
    errorHandler_validator_1.errorHandler
];
const updateUserValidator = [
    (0, express_validator_1.param)('id').notEmpty().isInt().withMessage('Id must be an integer'),
    (0, express_validator_1.body)('email').optional().isEmail().withMessage('Invalid email'),
    (0, express_validator_1.body)('password').optional().isString().withMessage('Password must be a string'),
    (0, express_validator_1.body)('password').optional().isStrongPassword(strongPasswordOptions).withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 5 characters long'),
    (0, express_validator_1.body)('name').optional().isString(),
    (0, express_validator_1.body)('phone').optional().isString(),
    (0, express_validator_1.body)('address').optional().isString(),
    errorHandler_validator_1.errorHandler
];
const deleteUserValidator = [
    (0, express_validator_1.param)('id').notEmpty().isInt().withMessage('Id must be an integer'),
    errorHandler_validator_1.errorHandler
];
exports.default = {
    registerUserValidator,
    loginUserValidator,
    createUserValidator,
    getAllUsersValidator,
    getUserByIdValidator,
    updateUserValidator,
    deleteUserValidator
};
//# sourceMappingURL=users.validator.js.map
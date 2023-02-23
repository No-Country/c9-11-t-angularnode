"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Roles validator
const express_validator_1 = require("express-validator");
const errorHandler_validator_1 = require("../errorHandler.validator");
const createRoleValidator = [
    (0, express_validator_1.body)('name').notEmpty().isString().withMessage('Name is required'),
    errorHandler_validator_1.errorHandler
];
const getRoleByIdValidator = [
    (0, express_validator_1.param)('id').notEmpty().isInt().withMessage('Id must be an integer'),
    errorHandler_validator_1.errorHandler
];
const updateRoleValidator = [
    (0, express_validator_1.param)('id').notEmpty().isInt().withMessage('Id must be an integer'),
    (0, express_validator_1.body)('name').optional().isString(),
    errorHandler_validator_1.errorHandler
];
const deleteRoleValidator = [
    (0, express_validator_1.param)('id').notEmpty().isInt().withMessage('Id must be an integer'),
    errorHandler_validator_1.errorHandler
];
exports.default = {
    createRoleValidator,
    getRoleByIdValidator,
    updateRoleValidator,
    deleteRoleValidator
};
//# sourceMappingURL=roles.validator.js.map
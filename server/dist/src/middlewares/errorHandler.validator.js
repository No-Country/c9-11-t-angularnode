"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const express_validator_1 = require("express-validator");
const errorHandler = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        next();
    }
    else
        res.status(400).json({ errors: errors.array() });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.validator.js.map
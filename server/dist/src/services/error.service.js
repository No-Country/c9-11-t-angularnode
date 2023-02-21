"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorService extends Error {
    constructor(error) {
        super(error.message);
        this.error = error;
    }
    handleRequestError() {
        if (this.error.statusCode) {
            return this.error;
        }
        return { statusCode: 500, message: this.error.message };
    }
}
exports.default = ErrorService;
//# sourceMappingURL=error.service.js.map
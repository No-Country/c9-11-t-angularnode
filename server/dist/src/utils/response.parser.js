"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseParse = (statusCode, response) => {
    //Error handling
    if (statusCode >= 400 && statusCode <= 500) {
        if (typeof response === 'string') {
            return { statusCode: statusCode, response: { error: response } };
        }
        return { statusCode: statusCode, response: response };
    }
    //Success handling
    if (typeof response === 'string') {
        return { statusCode: statusCode, response: { message: response } };
    }
    return { statusCode: statusCode, response: response };
};
exports.default = ResponseParse;
//# sourceMappingURL=response.parser.js.map
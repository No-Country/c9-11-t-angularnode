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
const jwt_service_1 = __importDefault(require("../../services/jwt.service"));
const jwtService = new jwt_service_1.default();
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }
        try {
            const normalizedToken = token.replace("Bearer ", "");
            const decoded = yield jwtService.verify(normalizedToken);
            // set the user id to the request
            req.body.userId = decoded.id;
            next();
            return;
        }
        catch (err) {
            return res.status(401).json({ error: err.message });
        }
    });
}
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map
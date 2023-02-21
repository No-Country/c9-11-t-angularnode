"use strict";
//isAdmin middleware
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
const user_service_1 = __importDefault(require("../../services/user.service"));
const userService = new user_service_1.default();
function isAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.body.userId;
        const isAdmin = yield userService.isAdmin(userId);
        if (isAdmin) {
            // delete userId from request body
            delete req.body.userId;
            next();
            return;
        }
        res.status(403).json({ message: 'Insufficient Permissions' });
        return;
    });
}
exports.default = isAdmin;
//# sourceMappingURL=isAdmin.middleware.js.map
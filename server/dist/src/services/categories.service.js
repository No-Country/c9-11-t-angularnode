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
const categories_1 = __importDefault(require("../repository/categories"));
const response_parser_1 = __importDefault(require("../utils/response.parser"));
const error_service_1 = __importDefault(require("./error.service"));
class CategoriesService {
    /**
     * Find all categories
     * and return an array of categories
     * @param {number} limit
     * @param {number} page
     * @returns {Promise<Categories[]>}
     */
    getAll(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield categories_1.default.findAll({}, {}, { limit: limit, page: page });
                return (0, response_parser_1.default)(200, res);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err)); //{statusCode:500, message: err.message};
            }
        });
    }
    /**
     * Find a category by id
     * @param {number} id
     * @returns {Promise<Categories>}
     *
     **/
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield categories_1.default.findOne({ id: id });
                if (res == null) {
                    return (0, response_parser_1.default)(404, `Category ${id} not found`);
                }
                return (0, response_parser_1.default)(200, res);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err)); //
            }
        });
    }
    /**
     * Find categories by section
     */
    getBySection(section) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield categories_1.default.findAll({ section: section }, {}, {}, { select: { id: true, name: true, description: true, section: true } });
                if (res == null) {
                    return (0, response_parser_1.default)(404, `${section} doesn't have categories`);
                }
                return (0, response_parser_1.default)(200, res);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    /**
     * Create a new category
     * @param {CategoriesCreateInput} category
     * @returns {Promise<Categories>}
     *
     * */
    create(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield categories_1.default.create(category);
                return (0, response_parser_1.default)(201, res);
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    /**
     * Update a category
     * @param {number} id
     * @param {CategoriesCreateInput} category
     * @returns {Promise<Categories>}
     *
     * */
    update(id, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield categories_1.default.update(id, category);
                return (0, response_parser_1.default)(200, res);
            }
            catch (err) {
                if (err.code == "P2025") {
                    return (0, response_parser_1.default)(404, `Category ${id} not found`);
                }
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
    /**
     * Delete a category
     * @param {number} id
     * @returns {Promise<Categories>}
     *
     * */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repoResponse = yield categories_1.default.delete(id);
                if (repoResponse.count == 0) {
                    return (0, response_parser_1.default)(404, `Category ${id} not found`);
                }
                return (0, response_parser_1.default)(200, "Category deleted");
            }
            catch (err) {
                return (0, response_parser_1.default)(500, new error_service_1.default(err));
            }
        });
    }
}
exports.default = CategoriesService;
//# sourceMappingURL=categories.service.js.map
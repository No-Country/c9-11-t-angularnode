"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controller_1 = __importDefault(require("../controllers/categories.controller"));
const categories_validator_1 = __importDefault(require("../middlewares/validations/categories.validator"));
const auth_middleware_1 = __importDefault(require("../middlewares/security/auth.middleware"));
const isAdmin_middleware_1 = __importDefault(require("../middlewares/security/isAdmin.middleware"));
//Create categories router.
const categoriesRouter = (0, express_1.Router)();
//GET all categories
categoriesRouter.get('/', categories_validator_1.default.getAllCategoriesValidator, categories_controller_1.default.getAll);
//GET a category by id
categoriesRouter.get('/:id', categories_validator_1.default.getByIdCategoryValidator, categories_controller_1.default.getById);
categoriesRouter.get('/section/:section', categories_validator_1.default.getCategoriesBySectionValidator, categories_controller_1.default.getBySection);
//Protect all routes after this middleware
categoriesRouter.use(auth_middleware_1.default, isAdmin_middleware_1.default);
//POST a new category
categoriesRouter.post('/', categories_validator_1.default.createCategoryValidator, categories_controller_1.default.create);
//PUT update a category
categoriesRouter.put('/:id', categories_validator_1.default.updateCategoryValidator, categories_controller_1.default.update);
//DELETE a category
categoriesRouter.delete('/:id', categories_validator_1.default.deleteCategoryValidator, categories_controller_1.default.remove);
exports.default = categoriesRouter;
//# sourceMappingURL=categories.router.js.map
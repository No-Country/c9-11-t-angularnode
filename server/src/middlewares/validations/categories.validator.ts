import { body, param, query } from 'express-validator';
import { errorHandler } from '../errorHandler.validator';

const createCategoryValidator = [
    body('name')
    .notEmpty()
    .isString()
    .withMessage('Name is required')
    .isLength({ min: 3, max: 50 })
    .withMessage('Name must be between 3 and 50 characters'),
    body('description')
    .isString()
    .withMessage('Description is required')
    .isLength({ min: 3, max: 255 })
    .withMessage('Description must be between 3 and 255 characters'),
    body('section')
    .optional()
    .notEmpty()
    .isString()
    .isIn(['FOODS', 'DRINKS', 'EXTRAS','DESSERTS'])
    .withMessage('Section must be FOODS, DRINKS, EXTRAS or DESSERTS'),
    errorHandler
];


const updateCategoryValidator = [
    param('id').isInt().notEmpty(),
    body('name').isString().withMessage("Name can't be null")
    .isLength({ min: 3, max: 50 }).withMessage("Name must be between 3 and 50 characters"),
    body('description').isString()
    .withMessage("Description can't be null")
    .isLength({ min: 3, max: 255 })
    .withMessage("Description must be between 3 and 255 characters"),
    body('section')
    .optional()
    .notEmpty()
    .isString()
    .isIn(['FOODS', 'DRINKS', 'EXTRAS','DESSERTS'])
    .withMessage('Section must be FOODS, DRINKS, EXTRAS or DESSERTS'),
    errorHandler
];

const getAllCategoriesValidator = [
    query('page').isInt().optional(),
    query('limit').isInt().optional(),
    errorHandler
];


const getCategoriesBySectionValidator = [
    param('section').isString().notEmpty()
    .isIn(['FOODS', 'DRINKS', 'EXTRAS','DESSERTS'])
    .withMessage('Section must be FOODS, DRINKS, EXTRAS or DESSERTS'),
    errorHandler
]

const getByIdCategoryValidator = [
    param('id').isInt(),
    errorHandler
];

const deleteCategoryValidator = [
    param('id').isInt(),
    errorHandler
];



export default { createCategoryValidator,updateCategoryValidator,deleteCategoryValidator, getCategoriesBySectionValidator ,getAllCategoriesValidator,getByIdCategoryValidator };


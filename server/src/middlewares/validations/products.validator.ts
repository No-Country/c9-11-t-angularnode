import { body, param, query } from 'express-validator';
import { errorHandler } from '../errorHandler.validator';

const createProductValidator = [
  body('title').notEmpty().isString().withMessage('Title is required')
  .isLength({ min: 3, max: 80 }).withMessage('Title must be between 3 and 80 characters'),
  body('description').isString().withMessage('Description is required')
  .isLength({ min: 3, max: 255 }).withMessage('Description must be between 3 and 255 characters'),
  body('price').notEmpty().isInt().withMessage('Price is required'),
  body('isActive').notEmpty().isBoolean().withMessage('Visibility is required'),
  body('discount').notEmpty().isInt(),
  body('categoryId').notEmpty().isInt().withMessage('Category Id is required'),
  errorHandler
];

const getAllProductsValidator = [
  query('page').isInt().optional(),
  query('limit').isInt().optional(),
  errorHandler
];

const updateProductValidator = [
  param('id').isInt().notEmpty(),
  body('title').notEmpty().isString().withMessage('Title is required')
  .isLength({ min: 3, max: 80 }).withMessage('Title must be between 3 and 80 characters'),
  body('description').isString().withMessage('Description is required')
  .isLength({ min: 3, max: 255 }).withMessage('Description must be between 3 and 255 characters'),
  body('price').notEmpty().isInt().withMessage('Price is required'),
  body('isActive').notEmpty().isBoolean().withMessage('Visibility is required'),
  body('discount').notEmpty().isInt(),
  body('categoryId').notEmpty().isInt().withMessage('Category Id is required'),
  errorHandler
];

const getProductByIdValidator = [
  param('id').isInt(),
  errorHandler
];

const deleteProductValidator = [
  param('id').isInt(),
  errorHandler
];

export default {
  getAllProductsValidator,
  createProductValidator,
  updateProductValidator,
  getProductByIdValidator,
  deleteProductValidator,
}
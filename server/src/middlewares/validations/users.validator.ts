import { body, param, query, sanitizeBody } from 'express-validator';
import { errorHandler } from '../errorHandler.validator';

const strongPasswordOptions ={
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    
}

/**
 * Validation for user registration from the client
 */
const registerUserValidator = [
    body('email').notEmpty().isEmail().withMessage('Email is required'),
    body('password').notEmpty().isString().withMessage('Password is required'),
    body('password').isStrongPassword(strongPasswordOptions).withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 5 characters long'),
    body('name').notEmpty().isString().withMessage('Name is required'),
    body('phone').optional().isString(),
    body('address').optional().isString(),
    errorHandler
];



/**
 * Validation for user creation from the admin panel
 */
const createUserValidator = [
    body('email').notEmpty().isEmail().withMessage('Email is required'),
    body('password').notEmpty().isString().withMessage('Password is required'),
    body('password').isStrongPassword(strongPasswordOptions).withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 5 characters long'),
    body('name').notEmpty().isString().withMessage('Name is required'),
    body('phone').optional().isString(),
    body('address').optional().isString(),
    body('roleId').isInt().withMessage('Role id is required'),
    body('isActive').isBoolean().withMessage('Active status is required'),
    errorHandler
];



const loginUserValidator = [
    body('email').notEmpty().isEmail().withMessage('Email is required'),
    body('password').notEmpty().isString().withMessage('Password is required'),
    errorHandler
];

const getAllUsersValidator = [
    query('page').optional().isInt().withMessage('Page must be an integer'),
    query('limit').optional().isInt().withMessage('Limit must be an integer'),
    errorHandler
];

const getUserByIdValidator = [
    param('id').notEmpty().isInt().withMessage('Id must be an integer'),
    errorHandler
];

const updateUserValidator = [
    param('id').notEmpty().isInt().withMessage('Id must be an integer'),
    body('email').optional().isEmail().withMessage('Invalid email'),
    body('password').optional().isString().withMessage('Password must be a string'),
    body('password').optional().isStrongPassword(strongPasswordOptions).withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 5 characters long'),
    body('profileIcon').optional().isIn(['ICON_1','ICON_2','ICON_3','ICON_4','ICON_5','ICON_6','ICON_7','ICON_8','ICON_9']),
    body('name').optional().isString(),
    body('phone').optional().isString(),
    body('address').optional().isString(),
    errorHandler
];

const updateMeValidator =[
    body('email').isEmail().optional().withMessage('Invalid email'),
    body('password').optional().isString().withMessage('Password must be a string'),
    body('password').optional().isStrongPassword(strongPasswordOptions).withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and be at least 5 characters long'),
    body('profileIcon').optional().isIn(['ICON_1','ICON_2','ICON_3','ICON_4','ICON_5','ICON_6','ICON_7','ICON_8','ICON_9'])
    .withMessage('Invalid profile icon, must be one of ICON_1 to ICON_9'),
    body('name').optional().isString(),
    body('phone').optional().isString(),
    body('address').optional().isString(),
    errorHandler   
]

const deleteUserValidator = [
    param('id').notEmpty().isInt().withMessage('Id must be an integer'),
    errorHandler
];

export default {
    registerUserValidator,
    loginUserValidator,
    createUserValidator,
    getAllUsersValidator,
    updateMeValidator,
    getUserByIdValidator,
    updateUserValidator,
    deleteUserValidator
};



    
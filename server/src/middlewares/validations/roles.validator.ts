//Roles validator
import { body, param } from 'express-validator';
import { errorHandler } from '../errorHandler.validator';


const createRoleValidator = [
    body('name').notEmpty().isString().withMessage('Name is required'),
    errorHandler
];

const getRoleByIdValidator = [
    param('id').notEmpty().isInt().withMessage('Id must be an integer'),
    errorHandler
]

const updateRoleValidator = [
    param('id').notEmpty().isInt().withMessage('Id must be an integer'),
    body('name').optional().isString(),
    errorHandler
]

const deleteRoleValidator = [
    param('id').notEmpty().isInt().withMessage('Id must be an integer'),
    errorHandler
]

export default {
    createRoleValidator,
    getRoleByIdValidator,
    updateRoleValidator,
    deleteRoleValidator
}

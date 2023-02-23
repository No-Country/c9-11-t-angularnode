import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validator from '../middlewares/validations/products.validator';
import authMiddleware from '../middlewares/security/auth.middleware';
import isAdmin from '../middlewares/security/isAdmin.middleware';

const productsRouter = Router();

productsRouter.get('/', validator.getAllProductsValidator, productsController.getProducts);
productsRouter.get('/:id', validator.getProductByIdValidator, productsController.getProduct);
productsRouter.use(authMiddleware, isAdmin);
productsRouter.post('/', validator.createProductValidator, productsController.createProduct);
productsRouter.put('/:id', validator.updateProductValidator, productsController.updateProduct);
productsRouter.delete('/:id', validator.deleteProductValidator, productsController.deleteProduct);

export default productsRouter;
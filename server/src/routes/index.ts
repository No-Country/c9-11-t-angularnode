import { Router } from 'express';

import categoriesRouter from './categories.router';
import productsRouter from './products.router';
import usersRouter from './user.router';
import authRouter from './auth.router';
import rolesRouter from './roles.router';

const router = Router();

router.use(authRouter);
router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/roles', rolesRouter);


export default router;



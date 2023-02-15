import { Router } from 'express';
//Import routers
import categoriesRouter from './categories.router';


const router = Router();

router.use('/categories', categoriesRouter);

export default router;



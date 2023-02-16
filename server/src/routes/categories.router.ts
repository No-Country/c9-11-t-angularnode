import { Router } from 'express';
import categoryController from '../controllers/categories.controller';
import validator from '../middlewares/validations/categories.validator';

//Create categories router.
const categoriesRouter = Router();

//GET all categories
categoriesRouter.get('/',validator.getAllCategoriesValidator,categoryController.getAll);     

//GET a category by id
categoriesRouter.get('/:id',validator.getByIdCategoryValidator,categoryController.getById);

//POST a new category
categoriesRouter.post('/',validator.createCategoryValidator, categoryController.create);

//PUT update a category
categoriesRouter.put('/:id',validator.updateCategoryValidator, categoryController.update);

//DELETE a category
categoriesRouter.delete('/:id',validator.deleteCategoryValidator, categoryController.remove);


export default categoriesRouter;



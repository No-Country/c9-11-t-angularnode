import { Request, Response } from 'express';
import ProductsService from '../services/product.service';
const productService = new ProductsService();

type getAllQuery = {
  page?: number,
  limit?: number,
  categoryId?: any,
}

const getProducts = async (req: Request, res: Response) => {

  const query = req.query as getAllQuery;

  let page = query.page
  if (page == null) page = 1;

  let limit = query.limit;
  if (limit == null) limit = 10;

  let categoryId = query.categoryId;

  let products;
  if (categoryId == null) {
     products = await productService.getProducts(limit, page);
  }else{
      products = await productService.getProductsByCategory(parseInt(categoryId), limit, page);
  }

 
  res.status(products.statusCode).json(products.response);
}

const getProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  let product = await productService.getProductById(id);
  res.status(product.statusCode).json(product.response);
}

const createProduct = async (req: Request, res: Response) => {
  if(!req.files) return;

  let {statusCode,response} = await productService.createProduct({
    ...req.body,
    image: req.files.image,
  });
  res.status(statusCode).json(response);
}


const updateProduct = async (req: Request, res: Response) => {
  let {statusCode,response} = await productService.updateProduct(parseInt(req.params.id), req.body);
  res.status(statusCode).json(response)
}

const deleteProduct = async (req: Request, res: Response) => {
  const {statusCode,response}= await productService.deleteProduct(parseInt(req.params.id));
  res.status(statusCode).json(response)

}

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
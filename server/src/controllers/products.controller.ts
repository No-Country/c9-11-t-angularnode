import { Request, Response } from 'express';
import ProductsService from '../services/product.service';
const productService = new ProductsService();

type getAllQuery = {
  page?: number,
  limit?: number
}

const getProducts = async (req: Request, res: Response) => {

  const query = req.query as getAllQuery;

  let page = query.page
  if (page == null) page = 1;

  let limit = query.limit;
  if (limit == null) limit = 10;

  const products = await productService.getProducts(limit, page);
  res.json(products);
}

const getProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  let product = await productService.getProductById(id);
  res.json(product);
}

const createProduct = async (req: Request, res: Response) => {
  if(!req.files) return;

  let newProduct = await productService.createProduct({
    ...req.body,
    image: req.files.image,
  });
  res.json(newProduct);
}


const updateProduct = async (req: Request, res: Response) => {
  let updatedProduct = await productService.updateProduct(parseInt(req.params.id), req.body);
  res.json(updatedProduct);
}

const deleteProduct = async (req: Request, res: Response) => {
  const resp = await productService.deleteProduct(parseInt(req.params.id));
  if (resp.statusCode) {
    res.status(resp.statusCode).json({ message: resp.message }); }
  else {
    res.json(resp);
  }

}

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
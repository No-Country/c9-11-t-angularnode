import productsRepository from "../repository/products";
import cloudinary from "../utils/cloudinary";
import ResponseParse from "../utils/response.parser";

type Category = {
  id: number;
  name: string;
  description: string;
}

type ProductRead = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  isActive?: boolean;
  discount: number;
  categoryId: number;
  //category: Category;
};

type ProductWrite = {
  title: string;
  description: string;
  price: number;
  image: File;
  isActive: boolean;
  discount: number;
  categoryId: number;
}

export default class ProductsService {

  /**
    * Find all products
    * and return an array of products
    * @param { number } limit
    * @param { number } page
    * @returns { Promise<ProductRead[]> }
  **/
  public async getProducts(limit: number, page: number) {
    try {
      const products = await productsRepository.findAll({}, {}, { limit: limit, page: page });

      return ResponseParse(200, products);
    } catch (error: any) {
      return ResponseParse(500, `Error in product service: ${error.message}`);
    }
  }

  /**
    * Find a product by Id
    * @param { number } id
    * @returns { Promise<ProductRead> }
    *
  **/
  public async getProductById(id: number) {
    try {
      const product = await productsRepository.findOne({ id: id });

      if (!product) {
        return ResponseParse(404, `Product with id ${id} not found`);
      }
      return ResponseParse(200, product);

    } catch (error: any) {
      return ResponseParse(500, `Error in product service: ${error.message}`);
    }
  }

  /**
   * Get products by category
   * @param categoryId
   * @param limit
   * @param page
   * @returns
   */
  public async getProductsByCategory(categoryId: number, limit: number, page: number) {
    try {
      const repoResponse = await productsRepository.findAll({ categoryId: categoryId }, {}, { limit: limit, page: page });
      return ResponseParse(200, repoResponse);
    } catch (error: any) {
      
      return ResponseParse(500, `Error in get products by category service: ${error.message}`);
    }
  }


  /**
    * Create a new product
    * @param { ProductWrite} product
    * @returns { Promise<ProductRead> }
    *
  **/
  public async createProduct(product: any) {
    try {
      const { image, ...productData } = product;


      const uploadedResult = await cloudinary.uploader.upload(image.tempFilePath, {
        upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,

      });

      productData.categoryId = parseInt(productData.categoryId);
      productData.price = parseFloat(productData.price);
      productData.discount = parseFloat(productData.discount);
      productData.isActive = productData.isActive == 'true' ? true : false;


      const newProduct = await productsRepository.create({
        ...productData,
        imageUrl: uploadedResult.secure_url,
      });

      return ResponseParse(201, newProduct);
    } catch (error: any) {
      return ResponseParse(500, `Error in create product service: ${error.message}`);
    }
  }

  /**
    * Update a product
    * @param { number } id
    * @param { ProductWrite } product
    * @returns { Promise<ProductRead> }
    *
  **/
  public async updateProduct(id: number, product: ProductWrite) {
    try {
      const updatedProduct = await productsRepository.update(id, product);
      return ResponseParse(200, updatedProduct);
    } catch (error: any) {
      return ResponseParse(500, `Error in update product service: ${error.message}`);
    }
  }

  /**
    * Delete a product
    * @param { number } id
    * @returns { void }
    *
  **/
  public async deleteProduct(id: number) {
    try {
      const repoResponse = await productsRepository.delete(id);
      if (repoResponse.count == 0) {
        return ResponseParse(404, `Product with id ${id} not found`);
      }
      return ResponseParse(200, `Product with id ${id} deleted`);
    } catch (error: any) {
      return ResponseParse(500, `Error in delete product service: ${error.message}`);
    }
  }
}
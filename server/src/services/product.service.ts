import productsRepository from "../repository/products";

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
  isActive: boolean;
  discount: number;
  categoryId: number;
  //category: Category;
};

type ProductWrite = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
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
      return await productsRepository.findAll({}, {}, { limit: limit, page: page });

    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message
      };
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
        return { statusCode: 404, message: 'Product could not be found' };
      }
      return product;

    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message
      };
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
      return repoResponse;
    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message
      };
    }
  }


  /**
    * Create a new product
    * @param { ProductWrite} product
    * @returns { Promise<ProductRead> }
    *
  **/
  public async createProduct(product: ProductWrite) {
    try {
      const newProduct = await productsRepository.create(product);
      return newProduct;
    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message
      };
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
      return updatedProduct;
    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message
      };
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
        return {
          statusCode: 404,
          message: 'Product could not be found'
        };
      }
      return { message: 'Product was successfully deleted' }
    } catch (error: any) {
      return {
        statusCode: 500,
        message: error.message
      };
    }
  }
}
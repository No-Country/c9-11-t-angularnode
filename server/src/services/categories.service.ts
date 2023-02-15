import Categories from "../repository/categories";

type CategoriesCreateInput = {
    name: string,
    description: string };

export default class CategoriesService {

    /**
     * Find all categories
     * and return an array of categories
     * @param {number} limit
     * @param {number} page
     * @returns {Promise<Categories[]>}
     */
    public async getAll(limit: number, page: number) {   
        try{
            const res = await Categories.findAll({}, {}, { limit: limit, page: page });
            return res;
        }catch(err:any){
            return {statusCode:500, message: err.message};
        }
    }


    /**
     * Find a category by id    
     * @param {number} id
     * @returns {Promise<Categories>}
     * 
     **/
    public async getById(id: number) {     
        try {
            const res =  await Categories.findOne({ id: id });
            if (res == null) {
                return {statusCode:404, message: `Category ${id} not found` };
            }
            return res;
        }catch(err:any){
            return {statusCode:500, message: err.message};
        }
      
    }

    /**
     * Create a new category
     * @param {CategoriesCreateInput} category
     * @returns {Promise<Categories>}
     *  
     * */
    public async create(category: CategoriesCreateInput) {
        try{
            const res = await Categories.create(category);
            return res;
        }catch(err:any){
            return {statusCode:500, message: err.message};
        }
    }


    /**
     * Update a category
     * @param {number} id
     * @param {CategoriesCreateInput} category
     * @returns {Promise<Categories>}
     * 
     * */
    public async update(id: number, category: CategoriesCreateInput) {
        try{
           const res =  await Categories.update(id, category);
           return res;
        }catch(err:any){
            return {statusCode:500, message: err.message};
        }
        
    }

    /**
     * Delete a category
     * @param {number} id
     * @returns {Promise<Categories>}
     *  
     * */
    public async delete(id: number) {
        try{
            const repoResponse = await Categories.delete(id);
            if (repoResponse.count == 0) {
                return {statusCode:404, message: `Category ${id} not found` };
            }
            return { message: `Category ${id} deleted`}
            
        }catch(err: any){
            return {statusCode:500, message: err.message};
        }
        
    }
    
}


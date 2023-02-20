import Categories from "../repository/categories";
import ResponseParse from "../utils/response.parser";
import ErrorService from "./error.service";

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
            return ResponseParse(200, res);
        }catch(err:any){
            return ResponseParse(500,new ErrorService(err)) //{statusCode:500, message: err.message};
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
                return ResponseParse(404,`Category ${id} not found`);
            }
            return ResponseParse(200,res);
        }catch(err:any){
            return ResponseParse(500,new ErrorService(err)) //
            
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
            return ResponseParse(201,res);
        }catch(err:any){
            return ResponseParse(500,new ErrorService(err)) 
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
        return ResponseParse(200,res);
        }catch(err:any){
            if(err.code == "P2025"){
                return ResponseParse(404,`Category ${id} not found`);
            }
           return ResponseParse(500,new ErrorService(err))
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
                return ResponseParse(404,`Category ${id} not found`);
            }
            return ResponseParse(200, "Category deleted");
            
        }catch(err: any){
            return ResponseParse(500,new ErrorService(err))
        }
        
    }
    
}


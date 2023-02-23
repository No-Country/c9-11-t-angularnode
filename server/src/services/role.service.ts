import Role from '../repository/role';
import ResponseParse from '../utils/response.parser';
import ErrorService from './error.service';

type RoleCreateInput = {
    name: string,
}


export default class RoleService {

    public async getRoles(){
        try{
            const repoResponse = await Role.findAll({},{},{});         
            return ResponseParse(200, repoResponse);
        }catch(err: any){
            return  ResponseParse(500,new ErrorService(err));//{statusCode:500, message: err.message};
        }
    }

    public async getRoleById(id: number){
        try{
            const repoResponse = await Role.findOne(id);
            if(repoResponse == null){
                return ResponseParse(404, "Role not found");    
            }   
            return ResponseParse(200, repoResponse);
        }catch(err:any){
            return ResponseParse(500,new ErrorService(err));//{statusCode:500, message: err.message};
        }
    }

    public async createRole(role: RoleCreateInput){
        try{
            const repoResponse = await Role.create(role);
            return ResponseParse(201, repoResponse);
        }catch(err:any){
            return ResponseParse(500,new ErrorService(err));
        }
    }

    public async updateRole(id: number, role: RoleCreateInput){
        try{
            const repoResponse = await Role.update(id, role);
            return ResponseParse(200, repoResponse);
        }catch(err:any){
            if(err.code == "P2025"){
                return ResponseParse(404, "Role not found");
            }
            return ResponseParse(500,new ErrorService(err));
        }
    }

    public async deleteRole(id: number){
        try{
            const repoResponse = await Role.delete(id);
            if(repoResponse.count == 0){
                return ResponseParse(404, "Role not found");
            }
            return ResponseParse(200, "Role deleted");
        }catch(err:any){
            return ResponseParse(500,new ErrorService(err));
        }
    }


}

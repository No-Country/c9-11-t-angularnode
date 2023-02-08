import Users from "../repository/users";

class UsersService {

    public async getAll(){
        return await Users.findAll({isActive: true});
    }
    


}

export default UsersService;
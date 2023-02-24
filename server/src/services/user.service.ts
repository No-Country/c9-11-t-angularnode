import Users from "../repository/users";
import Roles from "../repository/role";
import bcrypt from "bcrypt";
import JWTService from "./jwt.service";
import ResponseParse from "../utils/response.parser";
import ErrorService from "./error.service";


type User = {
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    phone?: string;
    address?: string;
    roleId: number;
}

type UserMe = {
    id: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    roleName: string;
}

type UserInput = {
    name: string;
    email: string;
    password: string;
    phone?: string;
    adress?: string;
}


class UsersService {

    private jwtService: JWTService;

    constructor() {
        this.jwtService = new JWTService();
    }

    public async getAll(limit: number, page: number) {
        try {
            return ResponseParse(200, await Users.findAll({ isActive: true }, {}, { limit: limit, page: page }));
        } catch (err: any) {
            return ResponseParse(500, new ErrorService(err));
        }

    }

    public async getById(id: number) {

        try {
            const repoResponse = await Users.findOne({ id: id, isActive: true });
            if (repoResponse == null) {
                return ResponseParse(404, "User not found");
            }
            return ResponseParse(200, repoResponse);
        } catch (err: any) {
            return ResponseParse(500, new ErrorService(err))
        }

    }



    /**
     * Function to check if an user has admin role
     * @param id 
     * @returns boolean
     */
    public async isAdmin(id: number) {
        try {
            const usr = await Users.findOne({ id: id, isActive: true });
            if (usr != null && usr.roleId == 1) {
                return true;
            }
            return false;

        } catch (err: any) {
            return new ErrorService(err)
        }
    }

    public async updateMe(id: number, user: any) {
        try {
            //prevent user from changing role
            if(user.roleId){
                delete user.roleId;
            }
            //prevent user from changing isActive
            if(user.isActive){
                delete user.isActive;
            }
            // if password is not null, hash it
            if (user.password){
                user.password = await this.hashPassword(user.password);
            }

            const usr = await Users.update(id, user);
            const Role = await Roles.findOne({ id: usr.roleId })

           
            const usrMe = {
                id: usr.id,
                name: usr.name,
                email: usr.email,
                phone: usr.phone,
                address: usr.address,
                //@ts-ignore
                roleName:Role.name.toUpperCase(),
                profileIcon: usr.profileIcon
            }


            return ResponseParse(200, usrMe);
        } catch (err: any) {
            return ResponseParse(500, new ErrorService(err))//{statusCode:500, message: err.message};
        }
    }



    /**
     * Admin function to create a new user
     * @param user 
     * @returns User
     */
    public async create(user: User) {
        try {

            //Hash password
            user.password = await this.hashPassword(user.password);
            const repoResponse = await Users.create(user)
            return ResponseParse(200, repoResponse);
        } catch (err: any) {

            if (err.code == 'P2002' && err.meta.target.includes('email')) {
                return ResponseParse(409, "Email already exists")
            }
            return ResponseParse(500, new ErrorService(err)) //{statusCode:500, message: err.message};
        }

    }

    /**
     * Admin function to update a user
     */
    public async update(id: number, user: User) {
        try {
            if (user.password != null) {
                //Hash password
                user.password = await this.hashPassword(user.password);
            }
            const repoResponse = await Users.update(id, user);
            return ResponseParse(200, repoResponse);
        } catch (err: any) {
            return ResponseParse(500, new ErrorService(err))//{statusCode:500, message: err.message};
        }
    }


    /**
     * Admin function to delete a user
     * @param id
     * @returns
     */
    public async delete(id: number) {
        try {
            const repoResponse = await Users.delete(id);
            if (repoResponse.count == 0) {
                return ResponseParse(404, "User not found")//{statusCode: 404, message: "User not found"};
            }
            return ResponseParse(200, "User deleted")  //{statusCode: 200, message: "User deleted"};
        } catch (err: any) {
            return ResponseParse(500, new ErrorService(err))  // {statusCode:500, message: err.message};
        }
    }

    /**
     * 
     */



    public async getMe(id: number) {

        
        try {
            const usr = await Users.findOne({ id: id, isActive: true });

            if (usr == null) {
                return ResponseParse(404, "User not found");
            } else {
                const Role = await Roles.findOne({ id: usr.roleId })
                if (Role != null) {
                    const usrMe = {
                        id: usr.id,
                        name: usr.name,
                        email: usr.email,
                        phone: usr.phone,
                        address: usr.address,
                        roleName:Role.name.toUpperCase(),
                        profileIcon: usr.profileIcon
                    }
                    
                    return ResponseParse(200, usrMe);
                } else {
                    return ResponseParse(404, "Role not found");
                }
            }

        } catch (err: any) {
            return ResponseParse(500, new ErrorService(err));
        }
    }




    /**
     * Register a new user from the website
     * @param user
     * @returns user | error
     */
    public async signUp(user: UserInput) {
        try {
            //Cast userInput to User type
            const userCreate = user as User;
            //Set isActive to true
            userCreate.isActive = true;
            //Set default role to 2 (user)
            userCreate.roleId = 2;
            //Hash password
            userCreate.password = await this.hashPassword(user.password);
            const repoResponse = await Users.create(userCreate);
            const token = this.jwtService.sign({ id: repoResponse.id, email: repoResponse.email, name: repoResponse.name });

            return ResponseParse(200, { token: token, user: repoResponse })
        } catch (err: any) {

            if (err.code == 'P2002' && err.meta.target.includes('email')) {
                return ResponseParse(409, "Email already exists");
            }
            return ResponseParse(500, new ErrorService(err));
        }
    }




    /**
     * Login a user
     * @param email
     * @param password
     * @return token | error
     */
    public async login(email: string, password: string) {
        try {
            const user = await Users.findOne({ email: email });

            if (user == null) {
                return ResponseParse(404, "User not found");
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if (!isPasswordCorrect) {
                return ResponseParse(401, "Invalid Password");
            }

            //Generate token
            const token = this.jwtService.sign({ id: user.id, email: user.email, name: user.name });

            const response = {
                message: "Login successful",
                token: token
            }
            //Return token
            return ResponseParse(200, response);

        } catch (err: any) {
            return ResponseParse(500, new ErrorService(err));
        }
    }

    /**
     * Hash password
     * @param password 
     * @returns hashed password
     */
    public async hashPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }


}

export default UsersService;
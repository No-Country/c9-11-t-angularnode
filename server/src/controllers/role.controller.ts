import { Request, Response } from 'express';
import RoleService from '../services/role.service';
const roleService = new RoleService();

const getRoles = async (req: Request, res: Response) => {
    const {statusCode,response} = await roleService.getRoles();
    res.status(statusCode).json(response); 
    }

const getRole = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {statusCode,response} = await roleService.getRoleById(id);
    res.status(statusCode).json(response); 
}

const createRole = async (req: Request, res: Response) => {
    const role = req.body;
    const {statusCode,response} = await roleService.createRole(role);
    res.status(statusCode).json(response); 
}   

const updateRole = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const role = req.body;
    const {statusCode,response} = await roleService.updateRole(id, role);
    res.status(statusCode).json(response); 
}

const deleteRole = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {statusCode,response} = await roleService.deleteRole(id);
     res.status(statusCode).json(response); 

}

    


export default { getRoles, getRole, createRole, updateRole, deleteRole };

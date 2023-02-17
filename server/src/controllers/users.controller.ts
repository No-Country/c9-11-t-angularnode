import { Request, Response } from 'express';
import UserService from '../services/user.service';
const service = new UserService();


type getAllQuery = {
    page?: number,
    limit?: number
}

const getAll = async (req: Request, res: Response) => {
    
        //Cast query params to getAllQuery type 
        const query = req.query as getAllQuery;
        let page = query.page
        if (page == null) page = 1;
        let limit = query.limit;
        if (limit == null) limit = 10;
        const {statusCode,response} = await service.getAll(limit, page);
        res.status(statusCode).json(response); 
    }

const getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {statusCode,response} = await service.getById(id);
    res.status(statusCode).json(response); 
}

const create = async (req: Request, res: Response) => {
    const {statusCode,response} = await service.create(req.body);
    res.status(statusCode).json(response); 
}


const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {statusCode,response} = await service.update(id, req.body);
    res.status(statusCode).json(response); 
}

const remove = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {statusCode,response} = await service.delete(id);
    res.status(statusCode).json(response); 

}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const {statusCode, response}  = await service.login(email,password);
    res.status(statusCode).json(response);
}
    
const register = async (req: Request, res: Response) => {
    const {statusCode, response} = await service.signUp(req.body)
    res.status(statusCode).json(response);
}

export default { getAll, getById, create, update, remove, login, register };
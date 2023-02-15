//Category controller
import { Request, Response } from 'express';
import CategoriesService from '../services/categories.service';
const service = new CategoriesService();


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
    const categories = await service.getAll(limit, page);
    res.json(categories);
}

const getById = async (req: Request, res: Response) => {
    let category = await service.getById(parseInt(req.params.id));
    res.json(category);
}

const create = async (req: Request, res: Response) => {
    let category = await service.create(req.body);
    res.json(category);
}


const update = async (req: Request, res: Response) => {
    let category = await service.update(parseInt(req.params.id), req.body);
    res.json(category);
}

const remove = async (req: Request, res: Response) => {
    const category = await service.delete(parseInt(req.params.id));
    if (category.statusCode) { 
        res.status(category.statusCode).json({ message: category.message }); }
    else {
        res.json(category);
    }

}


export default { getAll, getById, create, update, remove };



//Category controller
import { Section } from '@prisma/client';
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
    const {statusCode,response} =  await service.getAll(limit, page);
    res.status(statusCode).json(response);
}

const getById = async (req: Request, res: Response) => {
    const {statusCode,response} = await service.getById(parseInt(req.params.id));
    res.status(statusCode).json(response);
}

const getBySection = async (req: Request, res: Response) => {
    const param = req.params.section as Section
    const {statusCode,response} = await service.getBySection(param);
    res.status(statusCode).json(response);
}

const create = async (req: Request, res: Response) => {
    const {statusCode,response} = await service.create(req.body);
    res.status(statusCode).json(response);
}


const update = async (req: Request, res: Response) => {
    const {statusCode,response} = await service.update(parseInt(req.params.id), req.body);
    res.status(statusCode).json(response);
}

const remove = async (req: Request, res: Response) => {
    const {statusCode,response} = await service.delete(parseInt(req.params.id));
    res.status(statusCode).json(response);

}


export default { getAll, getById,getBySection, create, update, remove };



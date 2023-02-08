import { Router,Request,Response } from 'express';
import UsersService from '../services/user.service';


//Crear router de express
const router = Router();
const service = new UsersService();

//Ruta de prueba
router.get('/', (req:Request, res:Response) => {
    console.log(req.baseUrl)
    service.getAll().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
    

});     

export default router;



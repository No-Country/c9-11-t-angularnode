//isAdmin middleware

import { Request, Response, NextFunction } from 'express';
import UserService from '../../services/user.service';

const userService = new UserService();

export default async function isAdmin(req: Request, res: Response, next: NextFunction) {
    const userId = req.body.userId;
    const isAdmin = await userService.isAdmin(userId);
    if(isAdmin) {
        // delete userId from request body
        delete req.body.userId;
        next();
        return;
    }
    res.status(403).json({ message: 'Insufficient Permissions' });
    return;
}
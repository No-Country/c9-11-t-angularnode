import JWTService from "../../services/jwt.service";
import { Request, Response } from "express";
const jwtService = new JWTService();



export default async function optionalAuthMiddleware(req: Request, res: Response, next: any) {
    const token = req.header("Authorization");
    if (!token) {
        next();
        return;
    }
    try {
        const normalizedToken = token.replace("Bearer ", "");
        const decoded = await jwtService.verify(normalizedToken);
        // set the user id to the request
        req.body.userId = decoded.id;
        
        next();
        return;
    } catch (err:any) {
        return res.status(500).json({ error: err.message});
    }
}
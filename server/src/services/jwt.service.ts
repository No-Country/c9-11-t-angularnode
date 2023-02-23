import jwt from 'jsonwebtoken';


export default class JWTService {
    private readonly secret: any;
    private readonly expiresIn: any;

    constructor() {
        this.secret = process.env.JWT_SECRET;
        this.expiresIn = process.env.JWT_EXPIRES_IN;
    }

    public sign(payload: any): string {
        return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
    }

    public verify(token: string): any {
        return jwt.verify(token, this.secret);
    }


}
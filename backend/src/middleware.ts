
import { JWT_SECRET } from "./config.js";
import jwt, { JwtPayload } from "jsonwebtoken";
const {verify} = jwt;
export const authMiddleware = (req: any, res: any, next:any) => {     
    const authHeader = req.headers.authorization;    

    if (!authHeader || !authHeader.startsWith('Bearer ')) {  
        return res.status(403).json({});  
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = verify(token, JWT_SECRET) as JwtPayload;

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

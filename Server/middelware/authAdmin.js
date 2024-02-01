// authMiddleware.js
import jwt from 'jsonwebtoken';
import { keys } from '../utils/keys.js';


const authMiddleware = (req, res, next) => {
    const token = req.header('authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized Request' });
    }

    try {
        const decoded = jwt.verify(token, keys.jwtKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized Request' });
    }
};

export default authMiddleware;

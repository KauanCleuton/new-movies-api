import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const Verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader, 888);

    if (!authHeader) {
        return res.status(401).json({ auth: false, message: 'No token provided' });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userData = decoded;
        next();
    });
};

export default {
    Verify
};

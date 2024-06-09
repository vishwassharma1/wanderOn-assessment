const jwt = require('jsonwebtoken');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const config = require('../config/config');


const jwtAuth = () => (req, res, next) => {
    const token = req.cookies.token; // Get token from HTTP-only cookies

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token,config.secret_key);
        req.user = decoded.user;
        next(); // Proceed to the next middleware/route handler
    } catch (err) {
        console.error('JWTAuthError:', err);
        next(new ApiError(httpStatus.UNAUTHORIZED, 'Token is not valid'));
    }
};

module.exports = { jwtAuth };

const createError = require('http-errors');

const authorizeAdmin = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') throw new createError.Unauthorized();
        next();
    } catch(err) {
        next(err);
    }
}

module.exports = authorizeAdmin;
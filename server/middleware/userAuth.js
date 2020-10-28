const createError = require('http-errors');

const authorizeUser = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin' && String(req.user._id) !== String(req.params.id)) throw new createError.Unauthorized();
        next();
    } catch(err) {
        next(err);
    }
}

module.exports = authorizeUser;
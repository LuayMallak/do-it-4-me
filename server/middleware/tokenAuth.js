const createError = require("http-errors");

const User = require("../models/User");

const authorizeToken = async (req, res, next) => {
  const token = req.cookies["X-Auth-Token"];
  try {
    const user = await User.findByToken(token);
    if (!user) throw new createError.Unauthorized();
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorizeToken;

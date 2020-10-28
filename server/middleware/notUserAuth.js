const authorizeUser = async (req, res, next) => {
  try {
    if (
      req.user.role === "admin" ||
      String(req.user._id) === String(req.params.id)
    )
      req.canSeeFullUser = true;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorizeUser;

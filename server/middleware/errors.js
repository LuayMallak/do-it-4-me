const createError = require("http-errors");

exports.throw400 = (req, res, next) => {
  const error = new createError.BadRequest();
  next(error);
};

exports.handleErrors = (err, req, res, next) => {
  if (err.code === 11000) {
    err.status = 400;
    err.message = "Email is already registered";
    err.validator = [
      {
        field: "email",
        message: err.message,
      },
    ];
  } else if (err.code === 15000) {
    err.status = 400;
    err.message = "Please add availability dates";
    err.validator = [
      {
        field: "availability",
        message: err.message,
      },
    ];
  }
  res.status(err.status || 500).send({
    error: {
      code: err.code,
      message: err.message,
      details: err.validator || null,
    },
  });
};

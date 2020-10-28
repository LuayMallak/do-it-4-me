const { body } = require("express-validator");

module.exports = [
  body("firstName")
    .optional()
    .trim()
    .escape()
    .isLength({ min: 2, max: 128 })
    .withMessage("First name must be 2 to 128 characters"),
  body("lastName")
    .optional()
    .trim()
    .escape()
    .isLength({ min: 2, max: 128 })
    .withMessage("Last name must be 2 to 128 characters"),
  body("email")
    .optional()
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Please enter a valid E-mail address")
    .isLength({ max: 256 })
    .withMessage("E-mail address must be no more than 256 characters"),
  body("password")
    .optional()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
    .withMessage(
      "Minimum eight characters, must include one upper case letter, one lower case letter, one number and one special character"
    ),
  body("street").optional().trim().escape(),
  body("zip").optional().trim().escape(),
  body("city").optional().trim().escape(),
];

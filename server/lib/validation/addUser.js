const { body } = require("express-validator");

module.exports = [
  body("firstName")
    .trim()
    .escape()
    .isLength({ min: 2, max: 128 })
    .withMessage("First name must be 2 to 128 characters"),
  body("lastName")
    .trim()
    .escape()
    .isLength({ min: 2, max: 128 })
    .withMessage("Last name must be 2 to 128 characters"),
  body("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid e-mail format")
    .isLength({ max: 256 })
    .withMessage("E-mail address must be no more than 256 characters"),
  body("password")
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
    .withMessage(
      "Minimum eight characters, must include one upper case letter, one lower case letter, one number and one special character"
    ),
  body("street")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Street and House must be filled"),
  body("zip")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Zip-code must be filled"),
  body("city")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("City must be filled"),
];

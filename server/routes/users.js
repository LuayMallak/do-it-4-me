const express = require("express");
const router = express.Router();
const multer = require("multer");
/* const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  }),
}); */

/* const upload = multer({
  storage: multerS3({
    s3: s3,
    destination: "uploads/",
    bucket: 'some-bucket',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  })
}) */

const {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  userImage,
  rateProvider,
} = require("../controllers/usersController");
const validator = require("../middleware/validator");
const authorizeToken = require("../middleware/tokenAuth");
const authorizeUser = require("../middleware/userAuth");
const addUserRules = require("../lib/validation/addUser");
const putUserRules = require("../lib/validation/putUser");
const notUserAuth = require("../middleware/notUserAuth");

router.route("/").get(getUsers);

router.route("/signup").post(validator(addUserRules), addUser);

router.post("/login", loginUser);
/* router.post("/:id/userImage", upload.single("userImage"), userImage); */

router
  .route("/:id")
  .get(authorizeToken, notUserAuth, getUser)
  .put(authorizeToken, authorizeUser, validator(putUserRules), updateUser)
  .delete(authorizeToken, authorizeUser, deleteUser);

router.route("/:id/rate").put(authorizeToken, rateProvider);
module.exports = router;

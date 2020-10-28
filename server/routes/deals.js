const express = require("express");
const router = express.Router();
const {
  getDeals,
  addDeal,
  confirmDeal,
  cancelDeal,
} = require("../controllers/dealsController");


const authorizeToken = require("../middleware/tokenAuth");


router.route("/").get(authorizeToken, getDeals);
router.route("/").post(authorizeToken, addDeal);

router.route("/:id/confirm").put(authorizeToken, confirmDeal);

router.route("/:id/cancel").put(authorizeToken, cancelDeal);

module.exports = router;

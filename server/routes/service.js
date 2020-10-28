const express = require("express");
const router = express.Router();

const {
  getServices,
  addService,
  getService,
  updateService,
  deleteService,
} = require("../controllers/ServicesController");


router.route("/").get(getServices).post(addService);


router
  .route("/:id")
  .get(getService)
  .put(updateService)
  .delete(deleteService);

module.exports = router;

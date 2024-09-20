const express = require("express");
const router = express.Router();
const restaurantserviceController = require("../controllers/restaurantserviceController");

router.get("/", restaurantserviceController.getAll);
router.post("/", restaurantserviceController.create);

module.exports = router;

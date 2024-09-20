const express = require("express");
const router = express.Router();
const pricingserviceController = require("../controllers/pricingserviceController");

router.get("/", pricingserviceController.getAll);
router.post("/", pricingserviceController.create);

module.exports = router;

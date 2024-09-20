const express = require("express");
const router = express.Router();
const loyaltyserviceController = require("../controllers/loyaltyserviceController");

router.get("/", loyaltyserviceController.getAll);
router.post("/", loyaltyserviceController.create);

module.exports = router;

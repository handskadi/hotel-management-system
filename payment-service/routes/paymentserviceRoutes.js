const express = require("express");
const router = express.Router();
const paymentserviceController = require("../controllers/paymentserviceController");

router.get("/", paymentserviceController.getAll);
router.post("/", paymentserviceController.create);

module.exports = router;

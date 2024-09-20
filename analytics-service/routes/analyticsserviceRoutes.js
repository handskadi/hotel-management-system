const express = require("express");
const router = express.Router();
const analyticsserviceController = require("../controllers/analyticsserviceController");

router.get("/", analyticsserviceController.getAll);
router.post("/", analyticsserviceController.create);

module.exports = router;

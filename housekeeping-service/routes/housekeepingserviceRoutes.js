const express = require("express");
const router = express.Router();
const housekeepingserviceController = require("../controllers/housekeepingserviceController");

router.get("/", housekeepingserviceController.getAll);
router.post("/", housekeepingserviceController.create);

module.exports = router;

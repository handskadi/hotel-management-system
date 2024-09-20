const express = require("express");
const router = express.Router();
const roomautomationserviceController = require("../controllers/roomautomationserviceController");

router.get("/", roomautomationserviceController.getAll);
router.post("/", roomautomationserviceController.create);

module.exports = router;

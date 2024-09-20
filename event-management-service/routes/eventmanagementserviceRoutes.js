const express = require("express");
const router = express.Router();
const eventmanagementserviceController = require("../controllers/eventmanagementserviceController");

router.get("/", eventmanagementserviceController.getAll);
router.post("/", eventmanagementserviceController.create);

module.exports = router;

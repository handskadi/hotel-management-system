const express = require("express");
const router = express.Router();
const staffmanagementserviceController = require("../controllers/staffmanagementserviceController");

router.get("/", staffmanagementserviceController.getAll);
router.post("/", staffmanagementserviceController.create);

module.exports = router;

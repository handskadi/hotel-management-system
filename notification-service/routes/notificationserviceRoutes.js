const express = require("express");
const router = express.Router();
const notificationserviceController = require("../controllers/notificationserviceController");

router.get("/", notificationserviceController.getAll);
router.post("/", notificationserviceController.create);

module.exports = router;

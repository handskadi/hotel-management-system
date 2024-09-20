const express = require("express");
const router = express.Router();
const guestserviceController = require("../controllers/guestserviceController");

router.get("/", guestserviceController.getAll);
router.post("/", guestserviceController.create);

module.exports = router;

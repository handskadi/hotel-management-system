const express = require("express");
const router = express.Router();
const authenticationserviceController = require("../controllers/authenticationserviceController");

router.get("/", authenticationserviceController.getAll);
router.post("/", authenticationserviceController.create);

module.exports = router;

const express = require("express");
const router = express.Router();
const feedbackserviceController = require("../controllers/feedbackserviceController");

router.get("/", feedbackserviceController.getAll);
router.post("/", feedbackserviceController.create);

module.exports = router;

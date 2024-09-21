const express = require("express");
const router = express.Router();
const feedbackserviceController = require("../controllers/feedbackserviceController");

router.get("/feedback", feedbackserviceController.getAll);
router.post("/feedback", feedbackserviceController.create);

module.exports = router;

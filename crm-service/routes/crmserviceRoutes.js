const express = require("express");
const router = express.Router();
const crmserviceController = require("../controllers/crmserviceController");

router.get("/", crmserviceController.getAll);
router.post("/", crmserviceController.create);

module.exports = router;

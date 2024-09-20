const express = require("express");
const router = express.Router();
const inventoryserviceController = require("../controllers/inventoryserviceController");

router.get("/", inventoryserviceController.getAll);
router.post("/", inventoryserviceController.create);

module.exports = router;

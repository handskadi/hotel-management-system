const mongoose = require("mongoose");

const roomautomationserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Room-automation-service", roomautomationserviceSchema);

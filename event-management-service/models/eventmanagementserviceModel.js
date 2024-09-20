const mongoose = require("mongoose");

const eventmanagementserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Event-management-service", eventmanagementserviceSchema);

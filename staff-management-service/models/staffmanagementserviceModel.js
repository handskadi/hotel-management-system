const mongoose = require("mongoose");

const staffmanagementserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Staff-management-service", staffmanagementserviceSchema);

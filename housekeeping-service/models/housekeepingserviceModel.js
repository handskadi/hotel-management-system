const mongoose = require("mongoose");

const housekeepingserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Housekeeping-service", housekeepingserviceSchema);

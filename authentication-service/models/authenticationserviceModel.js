const mongoose = require("mongoose");

const authenticationserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Authentication-service", authenticationserviceSchema);

const mongoose = require("mongoose");

const guestserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Guest-service", guestserviceSchema);

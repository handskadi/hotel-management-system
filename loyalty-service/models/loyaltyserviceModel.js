const mongoose = require("mongoose");

const loyaltyserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Loyalty-service", loyaltyserviceSchema);

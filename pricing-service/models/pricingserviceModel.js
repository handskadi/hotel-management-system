const mongoose = require("mongoose");

const pricingserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Pricing-service", pricingserviceSchema);

const mongoose = require("mongoose");

const paymentserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Payment-service", paymentserviceSchema);

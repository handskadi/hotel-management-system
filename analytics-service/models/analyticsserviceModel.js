const mongoose = require("mongoose");

const analyticsserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Analytics-service", analyticsserviceSchema);

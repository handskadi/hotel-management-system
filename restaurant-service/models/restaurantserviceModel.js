const mongoose = require("mongoose");

const restaurantserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Restaurant-service", restaurantserviceSchema);

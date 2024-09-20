const mongoose = require("mongoose");

const notificationserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Notification-service", notificationserviceSchema);

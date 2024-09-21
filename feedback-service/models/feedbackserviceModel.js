const mongoose = require("mongoose");

const feedbackserviceSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Feedback", feedbackserviceSchema);

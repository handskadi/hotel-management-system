const mongoose = require("mongoose");

const feedbackServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Feedback", feedbackServiceSchema);

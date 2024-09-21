const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create Express app
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/feedback-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Feedback model
const Feedback = mongoose.model(
  "Feedback",
  new mongoose.Schema({
    name: String,
    description: String,
  })
);

// POST route to create feedback
app.post("/feedback", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET route to retrieve all feedback
app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(3011, () => {
  console.log("Feedback service listening on port 3011");
});

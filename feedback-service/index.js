const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const feedbackserviceRoutes = require("./routes/feedbackserviceRoutes");

// Use Routes
app.use("/api", feedbackserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/feedback-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3011, () => {
  console.log("feedback-service is listening on port 3000");
});

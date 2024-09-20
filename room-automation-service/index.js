const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const roomautomationserviceRoutes = require("./routes/roomautomationserviceRoutes");

// Use Routes
app.use("/api", roomautomationserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/room-automation-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("room-automation-service is listening on port 3000");
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const eventmanagementserviceRoutes = require("./routes/eventmanagementserviceRoutes");

// Use Routes
app.use("/api", eventmanagementserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/event-management-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("event-management-service is listening on port 3000");
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const notificationserviceRoutes = require("./routes/notificationserviceRoutes");

// Use Routes
app.use("/api", notificationserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/notification-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("notification-service is listening on port 3000");
});

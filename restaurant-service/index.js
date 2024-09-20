const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const restaurantserviceRoutes = require("./routes/restaurantserviceRoutes");

// Use Routes
app.use("/api", restaurantserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/restaurant-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("restaurant-service is listening on port 3000");
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const analyticsserviceRoutes = require("./routes/analyticsserviceRoutes");

// Use Routes
app.use("/api", analyticsserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/analytics-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("analytics-service is listening on port 3000");
});

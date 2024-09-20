const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const housekeepingserviceRoutes = require("./routes/housekeepingserviceRoutes");

// Use Routes
app.use("/api", housekeepingserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/housekeeping-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("housekeeping-service is listening on port 3000");
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const pricingserviceRoutes = require("./routes/pricingserviceRoutes");

// Use Routes
app.use("/api", pricingserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/pricing-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("pricing-service is listening on port 3000");
});

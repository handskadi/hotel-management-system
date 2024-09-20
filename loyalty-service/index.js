const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const loyaltyserviceRoutes = require("./routes/loyaltyserviceRoutes");

// Use Routes
app.use("/api", loyaltyserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/loyalty-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("loyalty-service is listening on port 3000");
});

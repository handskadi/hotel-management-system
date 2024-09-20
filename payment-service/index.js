const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const paymentserviceRoutes = require("./routes/paymentserviceRoutes");

// Use Routes
app.use("/api", paymentserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/payment-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("payment-service is listening on port 3000");
});

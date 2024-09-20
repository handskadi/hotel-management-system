const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const inventoryserviceRoutes = require("./routes/inventoryserviceRoutes");

// Use Routes
app.use("/api", inventoryserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/inventory-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("inventory-service is listening on port 3000");
});

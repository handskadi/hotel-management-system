const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const guestserviceRoutes = require("./routes/guestserviceRoutes");

// Use Routes
app.use("/api", guestserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/guest-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("guest-service is listening on port 3000");
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const authenticationserviceRoutes = require("./routes/authenticationserviceRoutes");

// Use Routes
app.use("/api", authenticationserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/authentication-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("authentication-service is listening on port 3000");
});

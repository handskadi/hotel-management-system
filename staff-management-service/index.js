const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const staffmanagementserviceRoutes = require("./routes/staffmanagementserviceRoutes");

// Use Routes
app.use("/api", staffmanagementserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/staff-management-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("staff-management-service is listening on port 3000");
});

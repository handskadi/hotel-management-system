const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import Routes
const crmserviceRoutes = require("./routes/crmserviceRoutes");

// Use Routes
app.use("/api", crmserviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://mongo:27017/crm-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("crm-service is listening on port 3000");
});

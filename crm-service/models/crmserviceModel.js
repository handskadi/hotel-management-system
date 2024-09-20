const mongoose = require("mongoose");

const crmserviceSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Crm-service", crmserviceSchema);

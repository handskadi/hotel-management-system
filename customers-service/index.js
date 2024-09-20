const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://mongo:27017/customers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
  })
);

app.post("/customers", async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).send(customer);
});

app.get("/customers", async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});

app.listen(3003, () => {
  console.log("Customers service listening on port 3003");
});

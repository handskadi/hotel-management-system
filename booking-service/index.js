const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://mongo:27017/bookings", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Booking = mongoose.model(
  "Booking",
  new mongoose.Schema({
    roomNumber: String,
    customerName: String,
    checkInDate: Date,
    checkOutDate: Date,
  })
);

app.post("/bookings", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).send(booking);
});

app.get("/bookings", async (req, res) => {
  const bookings = await Booking.find();
  res.send(bookings);
});

app.listen(3002, () => {
  console.log("Booking service listening on port 3002");
});

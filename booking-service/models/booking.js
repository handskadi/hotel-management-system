const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  roomNumber: String,
  customerName: String,
  checkInDate: Date,
  checkOutDate: Date,
});

module.exports = mongoose.model("Booking", bookingSchema);

const mongoose = require("mongoose");
const Booking = require("./models/booking");

mongoose.connect("mongodb://mongo:27017/bookings", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

const seedData = [
  { roomNumber: "101", customerName: "John Doe", checkInDate: new Date(), checkOutDate: new Date() },
  { roomNumber: "102", customerName: "Jane Doe", checkInDate: new Date(), checkOutDate: new Date() },
];

const seedDatabase = async () => {
  try {
    await Booking.deleteMany();
    await Booking.insertMany(seedData);
    console.log("Demo data added successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
  }
};

seedDatabase();

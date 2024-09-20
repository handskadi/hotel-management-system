const mongoose = require("mongoose");
const Room = require("./models/rooms"); // Correct the path to match your directory structure

mongoose
  .connect("mongodb://mongo:27017/rooms", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const seedData = [
  { number: "101", type: "Single", price: 100, available: true },
  { number: "102", type: "Double", price: 150, available: true },
  { number: "103", type: "Suite", price: 300, available: false },
];

const seedDatabase = async () => {
  try {
    await Room.deleteMany(); // Remove existing data
    await Room.insertMany(seedData);
    console.log("Demo data added successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
  }
};

seedDatabase();

const mongoose = require("mongoose");
const Customer = require("./models/customer");

mongoose.connect("mongodb://mongo:27017/customers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

const seedData = [
  { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { name: "Jane Doe", email: "jane@example.com", phone: "098-765-4321" },
];

const seedDatabase = async () => {
  try {
    await Customer.deleteMany();
    await Customer.insertMany(seedData);
    console.log("Demo data added successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
  }
};

seedDatabase();

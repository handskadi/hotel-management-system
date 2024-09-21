const mongoose = require("mongoose");
const Feedback = require("./models/feedbackserviceModel");

const seedData = [
  { name: "Customer 1", description: "Excellent service!" },
  { name: "Customer 2", description: "Very comfortable stay." },
  { name: "Customer 3", description: "Average experience." },
  { name: "Customer 4", description: "Not satisfied with cleanliness." },
  { name: "Customer 5", description: "Will definitely come back!" },
];

mongoose
  .connect("mongodb://mongo:27017/feedback-service", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    await Feedback.deleteMany(); // Clear existing data
    await Feedback.insertMany(seedData); // Seed data
    console.log("Database seeded!");
    mongoose.connection.close(); // Close connection
  })
  .catch((err) => {
    console.error(err);
  });

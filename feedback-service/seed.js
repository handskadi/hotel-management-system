const mongoose = require('mongoose');
const Feedback = require('./models/Feedback');

mongoose.connect('mongodb://mongo:27017/feedback-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for feedback-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for feedback-service
  { name: 'Feedback 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Feedback 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Feedback 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Feedback.deleteMany(); // Clear existing data
    await Feedback.insertMany(seedData);
    console.log('Demo data added to feedback-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


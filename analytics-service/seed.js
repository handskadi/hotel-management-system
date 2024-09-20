const mongoose = require('mongoose');
const Analytics = require('./models/Analytics');

mongoose.connect('mongodb://mongo:27017/analytics-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for analytics-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for analytics-service
  { name: 'Analytics 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Analytics 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Analytics 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Analytics.deleteMany(); // Clear existing data
    await Analytics.insertMany(seedData);
    console.log('Demo data added to analytics-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


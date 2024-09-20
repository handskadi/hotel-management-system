const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');

mongoose.connect('mongodb://mongo:27017/restaurant-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for restaurant-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for restaurant-service
  { name: 'Restaurant 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Restaurant 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Restaurant 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Restaurant.deleteMany(); // Clear existing data
    await Restaurant.insertMany(seedData);
    console.log('Demo data added to restaurant-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


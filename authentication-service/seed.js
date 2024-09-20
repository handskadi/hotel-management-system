const mongoose = require('mongoose');
const Authentication = require('./models/Authentication');

mongoose.connect('mongodb://mongo:27017/authentication-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for authentication-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for authentication-service
  { name: 'Authentication 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Authentication 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Authentication 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Authentication.deleteMany(); // Clear existing data
    await Authentication.insertMany(seedData);
    console.log('Demo data added to authentication-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


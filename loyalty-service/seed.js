const mongoose = require('mongoose');
const Loyalty = require('./models/Loyalty');

mongoose.connect('mongodb://mongo:27017/loyalty-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for loyalty-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for loyalty-service
  { name: 'Loyalty 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Loyalty 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Loyalty 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Loyalty.deleteMany(); // Clear existing data
    await Loyalty.insertMany(seedData);
    console.log('Demo data added to loyalty-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


const mongoose = require('mongoose');
const Pricing = require('./models/Pricing');

mongoose.connect('mongodb://mongo:27017/pricing-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for pricing-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for pricing-service
  { name: 'Pricing 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Pricing 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Pricing 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Pricing.deleteMany(); // Clear existing data
    await Pricing.insertMany(seedData);
    console.log('Demo data added to pricing-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


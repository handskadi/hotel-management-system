const mongoose = require('mongoose');
const Housekeeping = require('./models/Housekeeping');

mongoose.connect('mongodb://mongo:27017/housekeeping-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for housekeeping-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for housekeeping-service
  { name: 'Housekeeping 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Housekeeping 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Housekeeping 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Housekeeping.deleteMany(); // Clear existing data
    await Housekeeping.insertMany(seedData);
    console.log('Demo data added to housekeeping-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


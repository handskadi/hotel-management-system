const mongoose = require('mongoose');
const Crm = require('./models/Crm');

mongoose.connect('mongodb://mongo:27017/crm-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for crm-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for crm-service
  { name: 'Crm 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Crm 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Crm 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Crm.deleteMany(); // Clear existing data
    await Crm.insertMany(seedData);
    console.log('Demo data added to crm-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


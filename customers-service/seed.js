const mongoose = require('mongoose');
const Customers = require('./models/Customers');

mongoose.connect('mongodb://mongo:27017/customers-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for customers-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for customers-service
  { name: 'Customers 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Customers 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Customers 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Customers.deleteMany(); // Clear existing data
    await Customers.insertMany(seedData);
    console.log('Demo data added to customers-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


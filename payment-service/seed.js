const mongoose = require('mongoose');
const Payment = require('./models/Payment');

mongoose.connect('mongodb://mongo:27017/payment-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for payment-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for payment-service
  { name: 'Payment 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Payment 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Payment 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Payment.deleteMany(); // Clear existing data
    await Payment.insertMany(seedData);
    console.log('Demo data added to payment-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


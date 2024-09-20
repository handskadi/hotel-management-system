const mongoose = require('mongoose');
const Guest = require('./models/Guest');

mongoose.connect('mongodb://mongo:27017/guest-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for guest-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for guest-service
  { name: 'Guest 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Guest 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Guest 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Guest.deleteMany(); // Clear existing data
    await Guest.insertMany(seedData);
    console.log('Demo data added to guest-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


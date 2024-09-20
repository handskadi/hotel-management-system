const mongoose = require('mongoose');
const Booking = require('./models/Booking');

mongoose.connect('mongodb://mongo:27017/booking-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for booking-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for booking-service
  { name: 'Booking 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Booking 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Booking 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Booking.deleteMany(); // Clear existing data
    await Booking.insertMany(seedData);
    console.log('Demo data added to booking-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


const mongoose = require('mongoose');
const EventManagement = require('./models/EventManagement');

mongoose.connect('mongodb://mongo:27017/event-management-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for event-management-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for event-management-service
  { name: 'EventManagement 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'EventManagement 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'EventManagement 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await EventManagement.deleteMany(); // Clear existing data
    await EventManagement.insertMany(seedData);
    console.log('Demo data added to event-management-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


const mongoose = require('mongoose');
const RoomAutomation = require('./models/RoomAutomation');

mongoose.connect('mongodb://mongo:27017/room-automation-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for room-automation-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for room-automation-service
  { name: 'RoomAutomation 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'RoomAutomation 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'RoomAutomation 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await RoomAutomation.deleteMany(); // Clear existing data
    await RoomAutomation.insertMany(seedData);
    console.log('Demo data added to room-automation-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


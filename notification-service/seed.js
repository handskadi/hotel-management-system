const mongoose = require('mongoose');
const Notification = require('./models/Notification');

mongoose.connect('mongodb://mongo:27017/notification-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for notification-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for notification-service
  { name: 'Notification 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Notification 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Notification 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Notification.deleteMany(); // Clear existing data
    await Notification.insertMany(seedData);
    console.log('Demo data added to notification-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


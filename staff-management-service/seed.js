const mongoose = require('mongoose');
const StaffManagement = require('./models/StaffManagement');

mongoose.connect('mongodb://mongo:27017/staff-management-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for staff-management-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for staff-management-service
  { name: 'StaffManagement 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'StaffManagement 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'StaffManagement 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await StaffManagement.deleteMany(); // Clear existing data
    await StaffManagement.insertMany(seedData);
    console.log('Demo data added to staff-management-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


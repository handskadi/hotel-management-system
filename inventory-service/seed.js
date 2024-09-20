const mongoose = require('mongoose');
const Inventory = require('./models/Inventory');

mongoose.connect('mongodb://mongo:27017/inventory-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for inventory-service'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for inventory-service
  { name: 'Inventory 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: 'Inventory 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: 'Inventory 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await Inventory.deleteMany(); // Clear existing data
    await Inventory.insertMany(seedData);
    console.log('Demo data added to inventory-service successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();


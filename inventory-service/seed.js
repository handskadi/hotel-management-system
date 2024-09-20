const Inventory = require('./models/Inventory');

const seedData = [
  { item: 'Towels', quantity: 50, lastRestocked: new Date('2024-09-15') },
  { item: 'Soap', quantity: 100, lastRestocked: new Date('2024-09-10') },
  { item: 'Shampoo', quantity: 30, lastRestocked: new Date('2024-09-18') },
  { item: 'Toilet Paper', quantity: 200, lastRestocked: new Date('2024-09-05') },
  { item: 'Bed Linens', quantity: 20, lastRestocked: new Date('2024-09-12') }
];

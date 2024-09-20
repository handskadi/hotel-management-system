const Event = require('./models/Event');

const seedData = [
  { name: 'Wedding', date: new Date('2024-10-10'), attendees: 100, status: 'confirmed' },
  { name: 'Corporate Meeting', date: new Date('2024-10-12'), attendees: 50, status: 'pending' },
  { name: 'Birthday Party', date: new Date('2024-11-01'), attendees: 30, status: 'confirmed' },
  { name: 'Conference', date: new Date('2024-10-20'), attendees: 200, status: 'pending' },
  { name: 'Workshop', date: new Date('2024-11-15'), attendees: 25, status: 'confirmed' }
];

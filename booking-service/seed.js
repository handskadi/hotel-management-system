const Booking = require('./models/Booking');

const seedData = [
  { customerId: 1, roomNumber: '101', checkInDate: new Date('2024-09-25'), checkOutDate: new Date('2024-09-30'), status: 'confirmed' },
  { customerId: 2, roomNumber: '102', checkInDate: new Date('2024-10-01'), checkOutDate: new Date('2024-10-05'), status: 'pending' },
  { customerId: 3, roomNumber: '103', checkInDate: new Date('2024-09-20'), checkOutDate: new Date('2024-09-22'), status: 'canceled' },
  { customerId: 4, roomNumber: '104', checkInDate: new Date('2024-09-15'), checkOutDate: new Date('2024-09-17'), status: 'completed' },
  { customerId: 5, roomNumber: '105', checkInDate: new Date('2024-11-10'), checkOutDate: new Date('2024-11-15'), status: 'confirmed' }
];

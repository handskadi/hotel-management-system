const Payment = require('./models/Payment');

const seedData = [
  { bookingId: 1, amount: 500, date: new Date('2024-09-20'), method: 'credit card', status: 'completed' },
  { bookingId: 2, amount: 750, date: new Date('2024-09-22'), method: 'paypal', status: 'pending' },
  { bookingId: 3, amount: 200, date: new Date('2024-09-25'), method: 'bank transfer', status: 'failed' },
  { bookingId: 4, amount: 900, date: new Date('2024-09-15'), method: 'credit card', status: 'completed' },
  { bookingId: 5, amount: 1200, date: new Date('2024-09-18'), method: 'paypal', status: 'completed' }
];

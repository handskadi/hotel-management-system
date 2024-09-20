const Notification = require('./models/Notification');

const seedData = [
  { userId: 1, message: 'Your booking is confirmed!', date: new Date('2024-09-20') },
  { userId: 2, message: 'Your check-in date is approaching.', date: new Date('2024-09-21') },
  { userId: 3, message: 'You have feedback to review.', date: new Date('2024-09-22') },
  { userId: 4, message: 'New promotional offers are available.', date: new Date('2024-09-23') },
  { userId: 5, message: 'Thank you for staying with us!', date: new Date('2024-09-24') }
];

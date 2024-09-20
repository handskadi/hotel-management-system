const Guest = require('./models/Guest');

const seedData = [
  { name: 'John Doe', roomNumber: '101', checkInDate: new Date('2024-09-25'), stayDuration: 5, totalBill: 1000 },
  { name: 'Jane Smith', roomNumber: '102', checkInDate: new Date('2024-09-26'), stayDuration: 3, totalBill: 600 },
  { name: 'Emily Johnson', roomNumber: '103', checkInDate: new Date('2024-09-27'), stayDuration: 2, totalBill: 400 },
  { name: 'Michael Brown', roomNumber: '104', checkInDate: new Date('2024-09-28'), stayDuration: 7, totalBill: 1400 },
  { name: 'Chris Davis', roomNumber: '105', checkInDate: new Date('2024-09-29'), stayDuration: 4, totalBill: 800 }
];

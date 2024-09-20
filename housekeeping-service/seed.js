const Housekeeping = require('./models/Housekeeping');

const seedData = [
  { roomNumber: '101', status: 'clean', lastCleaned: new Date('2024-09-20') },
  { roomNumber: '102', status: 'dirty', lastCleaned: new Date('2024-09-21') },
  { roomNumber: '103', status: 'clean', lastCleaned: new Date('2024-09-19') },
  { roomNumber: '104', status: 'needs service', lastCleaned: new Date('2024-09-18') },
  { roomNumber: '105', status: 'clean', lastCleaned: new Date('2024-09-20') }
];

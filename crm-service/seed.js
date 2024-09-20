const CRM = require('./models/CRM');

const seedData = [
  { customerId: 1, interaction: 'Phone call', date: new Date('2024-09-20'), notes: 'Discussed upcoming stay.' },
  { customerId: 2, interaction: 'Email', date: new Date('2024-09-21'), notes: 'Inquired about amenities.' },
  { customerId: 3, interaction: 'In-person', date: new Date('2024-09-22'), notes: 'Checked in.' },
  { customerId: 4, interaction: 'Feedback', date: new Date('2024-09-23'), notes: 'Provided review.' },
  { customerId: 5, interaction: 'Phone call', date: new Date('2024-09-24'), notes: 'Follow-up on satisfaction.' }
];

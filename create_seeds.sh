#!/bin/bash

# List of services that require seeding
services=("booking-service" "customers-service" "authentication-service" "inventory-service" "payment-service" "notification-service" "housekeeping-service" "loyalty-service" "pricing-service" "feedback-service" "restaurant-service" "event-management-service" "analytics-service" "room-automation-service" "guest-service" "staff-management-service" "crm-service")

# Base seed content template with demo data
seed_template() {
  service_name=$1
  model_name=$2
  plural_model_name=$3

  echo "const mongoose = require('mongoose');
const $model_name = require('./models/$model_name');

mongoose.connect('mongodb://mongo:27017/$service_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB for $service_name'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = [
  // Demo data for $service_name
  { name: '$model_name 1', date: new Date(), status: 'active', details: 'Sample details 1' },
  { name: '$model_name 2', date: new Date(), status: 'inactive', details: 'Sample details 2' },
  { name: '$model_name 3', date: new Date(), status: 'pending', details: 'Sample details 3' },
];

const seedDatabase = async () => {
  try {
    await $model_name.deleteMany(); // Clear existing data
    await $model_name.insertMany(seedData);
    console.log('Demo data added to $service_name successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();
"
}

# Loop through each service and create a seed.js file
for service in "${services[@]}"; do
  # Generate model name from service name (capitalize and remove "-service")
  model_name="$(echo ${service/-service/} | sed -E 's/(^|-)(\w)/\U\2/g')"
  
  # Create service directory structure if not exists
  mkdir -p "$service/models"
  
  # Create the seed.js file in each service directory
  seed_file="$service/seed.js"
  seed_template "$service" "$model_name" > "$seed_file"
  echo "Created $seed_file for $service with demo data"
done

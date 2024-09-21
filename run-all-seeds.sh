#!/bin/bash

# List of services that need to run the seed script
services=(
  "rooms-service"
  "booking-service"
  "customers-service"
  "feedback-service"
  "inventory-service"
  "payment-service"
  "room-automation-service"
  "analytics-service"
  "guest-service"
  "loyalty-service"
  "pricing-service"
  "authentication-service"
  "crm-service"
  "event-management-service"
  "housekeeping-service"
  "notification-service"
  "restaurant-service"
  "staff-management-service"
)

# Loop through each service and run the seed script
for service in "${services[@]}"
do
  echo "Running seed script for $service..."
  docker-compose exec "$service" npm run seed
done

echo "All seeds have been run successfully!"

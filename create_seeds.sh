#!/bin/bash

# List of services that require seeding
services=(
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
  "rooms-service"
  "authentication-service"
  "crm-service"
  "event-management-service"
  "housekeeping-service"
  "notification-service"
  "restaurant-service"
  "staff-management-service"
)

# Function to generate realistic seed data based on service
seed_template() {
  service_name=$1

  case $service_name in
    "booking-service")
      echo "const Booking = require('./models/Booking');

const seedData = [
  { customerId: 1, roomNumber: '101', checkInDate: new Date('2024-09-25'), checkOutDate: new Date('2024-09-30'), status: 'confirmed' },
  { customerId: 2, roomNumber: '102', checkInDate: new Date('2024-10-01'), checkOutDate: new Date('2024-10-05'), status: 'pending' },
  { customerId: 3, roomNumber: '103', checkInDate: new Date('2024-09-20'), checkOutDate: new Date('2024-09-22'), status: 'canceled' },
  { customerId: 4, roomNumber: '104', checkInDate: new Date('2024-09-15'), checkOutDate: new Date('2024-09-17'), status: 'completed' },
  { customerId: 5, roomNumber: '105', checkInDate: new Date('2024-11-10'), checkOutDate: new Date('2024-11-15'), status: 'confirmed' }
];" ;;

    "customers-service")
      echo "const Customer = require('./models/Customer');

const seedData = [
  { name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890', address: '123 Main St', loyaltyPoints: 150 },
  { name: 'Jane Smith', email: 'janesmith@example.com', phone: '0987654321', address: '456 Elm St', loyaltyPoints: 200 },
  { name: 'Emily Johnson', email: 'emilyjohnson@example.com', phone: '5555555555', address: '789 Pine St', loyaltyPoints: 50 },
  { name: 'Michael Brown', email: 'michaelbrown@example.com', phone: '3333333333', address: '101 Maple Ave', loyaltyPoints: 300 },
  { name: 'Chris Davis', email: 'chrisdavis@example.com', phone: '7777777777', address: '202 Oak Dr', loyaltyPoints: 400 }
];" ;;

    "feedback-service")
      echo "const Feedback = require('./models/Feedback');

const seedData = [
  { customerId: 1, rating: 5, comment: 'Excellent service!', date: new Date('2024-09-20') },
  { customerId: 2, rating: 4, comment: 'Very comfortable stay.', date: new Date('2024-09-21') },
  { customerId: 3, rating: 3, comment: 'Average experience.', date: new Date('2024-09-22') },
  { customerId: 4, rating: 2, comment: 'Not satisfied with cleanliness.', date: new Date('2024-09-23') },
  { customerId: 5, rating: 5, comment: 'Will definitely come back!', date: new Date('2024-09-24') }
];" ;;

    "inventory-service")
      echo "const Inventory = require('./models/Inventory');

const seedData = [
  { item: 'Towels', quantity: 50, lastRestocked: new Date('2024-09-15') },
  { item: 'Soap', quantity: 100, lastRestocked: new Date('2024-09-10') },
  { item: 'Shampoo', quantity: 30, lastRestocked: new Date('2024-09-18') },
  { item: 'Toilet Paper', quantity: 200, lastRestocked: new Date('2024-09-05') },
  { item: 'Bed Linens', quantity: 20, lastRestocked: new Date('2024-09-12') }
];" ;;

    "payment-service")
      echo "const Payment = require('./models/Payment');

const seedData = [
  { bookingId: 1, amount: 500, date: new Date('2024-09-20'), method: 'credit card', status: 'completed' },
  { bookingId: 2, amount: 750, date: new Date('2024-09-22'), method: 'paypal', status: 'pending' },
  { bookingId: 3, amount: 200, date: new Date('2024-09-25'), method: 'bank transfer', status: 'failed' },
  { bookingId: 4, amount: 900, date: new Date('2024-09-15'), method: 'credit card', status: 'completed' },
  { bookingId: 5, amount: 1200, date: new Date('2024-09-18'), method: 'paypal', status: 'completed' }
];" ;;

    "room-automation-service")
      echo "const RoomAutomation = require('./models/RoomAutomation');

const seedData = [
  { roomNumber: '101', lights: 'on', temperature: 22, acStatus: 'off', doorLocked: true },
  { roomNumber: '102', lights: 'off', temperature: 24, acStatus: 'on', doorLocked: false },
  { roomNumber: '103', lights: 'on', temperature: 19, acStatus: 'off', doorLocked: true },
  { roomNumber: '104', lights: 'off', temperature: 21, acStatus: 'on', doorLocked: false },
  { roomNumber: '105', lights: 'on', temperature: 18, acStatus: 'off', doorLocked: true }
];" ;;

    "analytics-service")
      echo "const Analytics = require('./models/Analytics');

const seedData = [
  { metric: 'Room Occupancy', value: 85, date: new Date('2024-09-20') },
  { metric: 'Customer Satisfaction', value: 92, date: new Date('2024-09-21') },
  { metric: 'Revenue', value: 15000, date: new Date('2024-09-22') },
  { metric: 'Booking Rate', value: 78, date: new Date('2024-09-23') },
  { metric: 'Cancellation Rate', value: 12, date: new Date('2024-09-24') }
];" ;;

    "guest-service")
      echo "const Guest = require('./models/Guest');

const seedData = [
  { name: 'John Doe', roomNumber: '101', checkInDate: new Date('2024-09-25'), stayDuration: 5, totalBill: 1000 },
  { name: 'Jane Smith', roomNumber: '102', checkInDate: new Date('2024-09-26'), stayDuration: 3, totalBill: 600 },
  { name: 'Emily Johnson', roomNumber: '103', checkInDate: new Date('2024-09-27'), stayDuration: 2, totalBill: 400 },
  { name: 'Michael Brown', roomNumber: '104', checkInDate: new Date('2024-09-28'), stayDuration: 7, totalBill: 1400 },
  { name: 'Chris Davis', roomNumber: '105', checkInDate: new Date('2024-09-29'), stayDuration: 4, totalBill: 800 }
];" ;;

    "loyalty-service")
      echo "const Loyalty = require('./models/Loyalty');

const seedData = [
  { customerId: 1, tier: 'Gold', points: 300, benefits: 'Free breakfast, late check-out' },
  { customerId: 2, tier: 'Silver', points: 150, benefits: '10% off on bookings' },
  { customerId: 3, tier: 'Bronze', points: 50, benefits: 'Welcome drink' },
  { customerId: 4, tier: 'Gold', points: 400, benefits: 'Free spa access' },
  { customerId: 5, tier: 'Silver', points: 200, benefits: 'Room upgrade' }
];" ;;

    "pricing-service")
      echo "const Pricing = require('./models/Pricing');

const seedData = [
  { roomType: 'Single', price: 100, season: 'Peak' },
  { roomType: 'Double', price: 150, season: 'Peak' },
  { roomType: 'Suite', price: 300, season: 'Peak' },
  { roomType: 'Single', price: 80, season: 'Off-Peak' },
  { roomType: 'Double', price: 120, season: 'Off-Peak' }
];" ;;

    "rooms-service")
      echo "const Room = require('./models/Room');

const seedData = [
  { number: '101', type: 'Single', status: 'available' },
  { number: '102', type: 'Double', status: 'occupied' },
  { number: '103', type: 'Suite', status: 'available' },
  { number: '104', type: 'Single', status: 'under maintenance' },
  { number: '105', type: 'Double', status: 'available' }
];" ;;

    "authentication-service")
      echo "const User = require('./models/User');

const seedData = [
  { username: 'johndoe', password: 'hashedpassword1', role: 'customer' },
  { username: 'janesmith', password: 'hashedpassword2', role: 'admin' },
  { username: 'emilyj', password: 'hashedpassword3', role: 'staff' },
  { username: 'michaelb', password: 'hashedpassword4', role: 'customer' },
  { username: 'chrisd', password: 'hashedpassword5', role: 'staff' }
];" ;;

    "crm-service")
      echo "const CRM = require('./models/CRM');

const seedData = [
  { customerId: 1, interaction: 'Phone call', date: new Date('2024-09-20'), notes: 'Discussed upcoming stay.' },
  { customerId: 2, interaction: 'Email', date: new Date('2024-09-21'), notes: 'Inquired about amenities.' },
  { customerId: 3, interaction: 'In-person', date: new Date('2024-09-22'), notes: 'Checked in.' },
  { customerId: 4, interaction: 'Feedback', date: new Date('2024-09-23'), notes: 'Provided review.' },
  { customerId: 5, interaction: 'Phone call', date: new Date('2024-09-24'), notes: 'Follow-up on satisfaction.' }
];" ;;

    "event-management-service")
      echo "const Event = require('./models/Event');

const seedData = [
  { name: 'Wedding', date: new Date('2024-10-10'), attendees: 100, status: 'confirmed' },
  { name: 'Corporate Meeting', date: new Date('2024-10-12'), attendees: 50, status: 'pending' },
  { name: 'Birthday Party', date: new Date('2024-11-01'), attendees: 30, status: 'confirmed' },
  { name: 'Conference', date: new Date('2024-10-20'), attendees: 200, status: 'pending' },
  { name: 'Workshop', date: new Date('2024-11-15'), attendees: 25, status: 'confirmed' }
];" ;;

    "housekeeping-service")
      echo "const Housekeeping = require('./models/Housekeeping');

const seedData = [
  { roomNumber: '101', status: 'clean', lastCleaned: new Date('2024-09-20') },
  { roomNumber: '102', status: 'dirty', lastCleaned: new Date('2024-09-21') },
  { roomNumber: '103', status: 'clean', lastCleaned: new Date('2024-09-19') },
  { roomNumber: '104', status: 'needs service', lastCleaned: new Date('2024-09-18') },
  { roomNumber: '105', status: 'clean', lastCleaned: new Date('2024-09-20') }
];" ;;

    "notification-service")
      echo "const Notification = require('./models/Notification');

const seedData = [
  { userId: 1, message: 'Your booking is confirmed!', date: new Date('2024-09-20') },
  { userId: 2, message: 'Your check-in date is approaching.', date: new Date('2024-09-21') },
  { userId: 3, message: 'You have feedback to review.', date: new Date('2024-09-22') },
  { userId: 4, message: 'New promotional offers are available.', date: new Date('2024-09-23') },
  { userId: 5, message: 'Thank you for staying with us!', date: new Date('2024-09-24') }
];" ;;

    "restaurant-service")
      echo "const Restaurant = require('./models/Restaurant');

const seedData = [
  { name: 'The Grand Buffet', cuisine: 'International', rating: 4.5 },
  { name: 'Italian Bistro', cuisine: 'Italian', rating: 4.8 },
  { name: 'Sushi Bar', cuisine: 'Japanese', rating: 4.2 },
  { name: 'Vegan Delights', cuisine: 'Vegan', rating: 4.6 },
  { name: 'Steakhouse', cuisine: 'American', rating: 4.7 }
];" ;;

    "staff-management-service")
      echo "const Staff = require('./models/Staff');

const seedData = [
  { name: 'Alice', role: 'Manager', department: 'Administration' },
  { name: 'Bob', role: 'Receptionist', department: 'Front Desk' },
  { name: 'Charlie', role: 'Housekeeper', department: 'Housekeeping' },
  { name: 'David', role: 'Chef', department: 'Kitchen' },
  { name: 'Eve', role: 'Waitstaff', department: 'Restaurant' }
];" ;;

    *)
      echo "No seed data for $service_name"
      ;;
  esac
}

# Create seed data for each service
for service in "${services[@]}"; do
  echo "Seeding data for $service..."
  seed_file_path="./$service/seed.js"  # Change this to the appropriate path for your services
  mkdir -p "$service"  # Ensure the service directory exists
  seed_template "$service" > "$seed_file_path"
done

echo "Seeding completed!"

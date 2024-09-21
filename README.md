# Hotel System Microservices

## Overview

This project is a hotel management system built using a microservices architecture. It consists of multiple services that handle various aspects of hotel operations, including bookings, room management, customer management, feedback, pricing, and more.

## Services

The system is composed of the following microservices:

- **Authentication Service**: Manages user authentication and authorization.
- **Booking Service**: Handles room bookings and reservations.
- **CRM Service**: Manages customer relationships and data.
- **Feedback Service**: Collects and manages customer feedback.
- **Guest Service**: Handles guest information and check-in/check-out processes.
- **Housekeeping Service**: Manages housekeeping tasks and schedules.
- **Loyalty Service**: Handles customer loyalty programs and rewards.
- **Notification Service**: Sends notifications to customers and staff.
- **Pricing Service**: Manages room pricing and promotions.
- **Restaurant Service**: Manages restaurant bookings and orders.
- **Room Automation Service**: Controls smart room features and automation.
- **Inventory Service**: Manages inventory for supplies and amenities.
- **Staff Management Service**: Manages staff details and scheduling.
- **Event Management Service**: Handles events and conference room bookings.
- **Analytics Service**: Provides analytics and insights from various services.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/handskadi/hotel-microservices.git
   cd hotel-microservices

   ```

2. Build and start the services:

   ```bash
   docker-compose up -d --build

   ```

3. Run all seed scripts (if necessary):
   ```bash
   ./run-all-seeds.sh
   ```

### Accessing the Services

Each service runs on a different port. Here’s how you can access them:

- Authentication Service: http://localhost:3000
- Booking Service: http://localhost:3001
- CRM Service: http://localhost:3002
- Feedback Service: http://localhost:3011
- Guest Service: http://localhost:3012
- Housekeeping Service: http://localhost:3013
- Loyalty Service: http://localhost:3014
- Notification Service: http://localhost:3015
- Pricing Service: http://localhost:3016
- Restaurant Service: http://localhost:3017
- Room Automation Service: http://localhost:3018
- Inventory Service: http://localhost:3019
- Staff Management Service: http://localhost:3020
- Event Management Service: http://localhost:3021
- Analytics Service: http://localhost:3022

### Usage

You can send requests to the respective service endpoints using tools like Postman or curl. Each service has its own API endpoints for creating, reading, updating, and deleting data.

#### Example Requests

##### Booking Service:

- Create a booking:

  ```bash
  curl -X POST http://localhost:3002/bookings -d '{"roomNumber": "101", "customerName": "John Doe", "checkInDate": "2024-09-25", "checkOutDate": "2024-09-30"}' -H "Content-Type: application/json"
  ```

- Get all bookings:

  ```bash
  curl http://localhost:3002/bookings
  ```

### Contributing

Contributions are welcome! If you want to contribute to this project, please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

- This project is open-source, and thanks to the open-source community for providing tools and resources that make development easier and more collaborative.

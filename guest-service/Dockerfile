# Use Node.js official image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all app files
COPY . .

# Expose port
EXPOSE 3016

# Start the service
CMD ["npm", "start"]

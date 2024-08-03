# Use the official Node.js image.
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Build the Next.js application
RUN npm run build

# Run the Next.js application
CMD [ "npm", "start" ]

# Expose port 3000 to the outside world
EXPOSE 3000

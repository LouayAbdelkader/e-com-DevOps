# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Expose port 5000 to the outside world
EXPOSE 5000

# Define the command to run your app
CMD ["npm", "start"]

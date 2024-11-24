# Step 1: Use an official Nginx image to serve the frontend
FROM nginx:alpine

# Step 2: Copy the frontend files into the Nginx container
# Assuming your frontend files are in the "build" or "dist" folder
# Adjust the source path if necessary
COPY /frontend/WebPages /usr/share/nginx/html

# Step 3: Expose the port that Nginx will listen on
EXPOSE 80

# Step 4: Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]

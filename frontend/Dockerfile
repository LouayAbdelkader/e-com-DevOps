# Step 1: Use an official Apache image
FROM httpd:alpine

# Step 2: Copy the frontend files into the Apache container
# The default Apache directory is /usr/local/apache2/htdocs/
COPY . /usr/local/apache2/htdocs/

# Step 3: Expose the port that Apache will listen on
EXPOSE 80

# Apache already starts with the default command from the base image, so no need for CMD.

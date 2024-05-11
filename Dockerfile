# Use Node.js image as base
FROM node:alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build your application
RUN npm run build

# Stage 2 - Use Nginx for serving your built application
FROM nginx:alpine

# Remove default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy NGINX configuration file
COPY conf/nginx.conf /etc/nginx/conf.d/

# Copy built app from previous stage
COPY --from=build /app/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

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

# Copy built app from previous stage
COPY --from=build /app/dist/ /usr/share/nginx/html
# COPY --from=build /app/out /usr/share/nginx/html
COPY --from=build /app/public /usr/share/nginx/html

# Copy NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

##############################################################
# FROM node:alpine

# WORKDIR /app

# COPY package.json ./

# RUN npm i --legacy-peer-deps

# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD ["npm","start"]
##############################################################

##############################################################
# Stage 1: Build stage
FROM node:alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application and build
COPY . .
RUN npm run build

# Stage 2: Production stage
FROM node:alpine

# Set working directory for production
WORKDIR /app

# Copy only the built files and necessary dependencies from the build stage
COPY --from=build /app/package.json /app/package-lock.json ./
# COPY --from=build /app/dist /app/dist

# Install only production dependencies
RUN npm i --omit=dev --legacy-peer-deps

# Expose the application port
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
##############################################################
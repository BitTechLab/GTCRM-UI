FROM node:latest

WORKDIR /var/www

# Copy `package.json` and `package-lock.json`
COPY package*.json ./

RUN npm install

COPY . .

# Expose the port Vite runs on
EXPOSE 3030

# Start the Vite server
CMD ["npm", "run", "dev"]
FROM node:20

WORKDIR /usr/src/app

# Copy only the package.json file to the working directory 
COPY package*.json ./

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# Keeping it last to avoid npm install being run every time a file changes
COPY . .

# # npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev"]
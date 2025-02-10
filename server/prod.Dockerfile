FROM node:20

WORKDIR /app

# As production: Lower privileges
COPY --chown=node:node . .

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# As production: Switch to a non-root
USER node

CMD ["node", "dist/index.js"]
# Local starter - React, Vite, Nginx, Node.js compose with Docker

## Running the Application

#### 1. Production Build

```shell
docker compose -f compose.yaml up --build
```

#### 2. Development Build

```shell
docker compose -f compose.dev.yaml up --build
```

### Environment Variables:

- `PORT`: Port for the backend server.
- `NODE_ENV`: Node environment.

### Stack:

#### Frontend:

![Vite](https://img.shields.io/badge/vite-^6.0.11-blue)
![React](https://img.shields.io/badge/react-^18.0.0-blue)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-^3.4.1-blue)
![Shadcn](https://img.shields.io/badge/shadcn-^1.0.0-blue)

#### Backend:

![Node.js](https://img.shields.io/badge/node.js-^20.0.0-blue)
![Express.js](https://img.shields.io/badge/express-^4.21.2-blue)
![Helmet](https://img.shields.io/badge/helmet-^8.0.0-blue)
![HTTP Status](https://img.shields.io/badge/http--status-^2.1.0-blue)

![Morgan](https://img.shields.io/badge/morgan-^1.10.0-blue)
![TS Node](https://img.shields.io/badge/ts--node-^10.9.2-blue)
![Winston](https://img.shields.io/badge/winston-^3.17.0-blue)

#### General:

![Docker](https://img.shields.io/badge/docker-^20.10.0-blue)
![TypeScript](https://img.shields.io/badge/typescript-^5.7.3-blue)
![ESLint](https://img.shields.io/badge/eslint-^8.0.0-blue)
![ReactScan](https://img.shields.io/badge/react-scan-blue)

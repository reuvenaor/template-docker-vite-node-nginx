# Full-stack Docker compose on Nginx with Vite, Node.js

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

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)

#### Backend:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)

#### General:

- [Docker Compose](https://docs.docker.com/compose/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

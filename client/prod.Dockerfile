FROM node:20 as production

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:latest

EXPOSE 3000

COPY ./nginx/production.conf /etc/nginx/conf.d/default.conf
COPY --from=production usr/src/app/dist /usr/share/nginx/html
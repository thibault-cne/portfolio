FROM node:latest AS build

WORKDIR /app
COPY package.json .

RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
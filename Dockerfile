FROM node:latest AS build

WORKDIR /app
COPY package.json .

# --legacy-peer-deps needed for svelte-motion
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
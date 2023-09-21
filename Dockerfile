FROM node:latest AS build

ARG SERVICE_ID
ARG TEMPLATE_ID
ARG PUBLIC_KEY

ENV VITE_SERVICE_ID=$SERVICE_ID
ENV VITE_TEMPLATE_ID=$TEMPLATE_ID
ENV VITE_PUBLIC_KEY=$PUBLIC_KEY

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
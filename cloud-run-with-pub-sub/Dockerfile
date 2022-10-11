FROM node:18-alpine3.15

WORKDIR /usr/app

COPY ./package-lock.json ./
COPY ./package.json ./
RUN npm ci

COPY ./server.js ./

CMD [ "node", "server.js" ]

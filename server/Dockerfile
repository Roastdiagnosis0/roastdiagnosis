FROM node:14.18-slim as builder

WORKDIR /app

COPY ./package.json ./

RUN npm install --save --legacy-peer-deps

COPY ./ ./

ENV NODE_ENV production

CMD [ "npm", "run", "start" ] 
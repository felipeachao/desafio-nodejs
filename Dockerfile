FROM node:21-alpine as base

WORKDIR /usr/src/app

COPY . ./

RUN npm i
RUN npm install -g typescript
RUN tsc

EXPOSE 3000

CMD ["node","dist/src/index.js"]

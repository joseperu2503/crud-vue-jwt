FROM node:lts-alpine

RUN npm install -g http-server
RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "http-server", "dist" ]


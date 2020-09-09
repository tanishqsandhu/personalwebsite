FROM node:14.9.0

WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000
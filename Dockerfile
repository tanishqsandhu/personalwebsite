FROM node:11.0.0

WORKDIR /app

COPY . /app

RUN npm install

RUN npm rebuild node-sass

CMD npm start

EXPOSE 3000
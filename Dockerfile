FROM node:11.0.0

WORKDIR /app

COPY . /app

RUN npm install


CMD npm run build

RUN npm install -g serve

CMD serve -s build

EXPOSE 3000
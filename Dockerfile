FROM node:11.0.0

WORKDIR /app

COPY . /app

RUN npm install 



RUN npm install -g serve
CMD serve -s build
EXPOSE 3000


RUN npm run build --production
FROM node:11.0.0

WORKDIR /app

RUN npm install

RUN npm install react-scripts@1.9.0 -g

COPY . /app

EXPOSE 3000
# build the folder
RUN npm start



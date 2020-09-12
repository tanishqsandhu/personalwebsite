FROM node:11.0.0

WORKDIR /app


RUN npm install node-sass
RUN npm install react-scripts@3.3.0 -g
RUN npm install
RUN cd node_modules/react-scripts && npm install node-sass
RUN npm rebuild node-sass

COPY . /app

EXPOSE 3000
# build the folder
CMD npm start


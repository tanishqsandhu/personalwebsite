FROM node:11.0.0

WORKDIR /app
COPY . /app


RUN npm install
RUN cd node_modules/react-scripts && npm install node-sass
RUN npm rebuild node-sass


EXPOSE 3000
CMD [ "npm", "start" ]


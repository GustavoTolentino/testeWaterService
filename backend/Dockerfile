FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
COPY ./package.json . 

RUN npm i 

COPY . . 

CMD ["npm", "start"]
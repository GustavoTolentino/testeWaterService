FROM node:alpine

WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY ./package.json . 

RUN npm i 

COPY . . 

CMD ["npm", "start"]
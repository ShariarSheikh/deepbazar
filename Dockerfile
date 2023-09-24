FROM node:18-alpine

# set working directory
RUN mkdir /app
COPY . /app
WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

RUN yarn build

COPY . .

CMD ["yarn","dev"]
FROM node:18-alpine

RUN apk add --no-cache libc6-compat

RUN mkdir /app
COPY . /app
WORKDIR /app


COPY package.json ./
COPY yarn.lock ./

RUN yarn install --ignore-engines
RUN yarn build

COPY . .

EXPOSE 3000

CMD ["yarn","dev"]
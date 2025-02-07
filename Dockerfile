FROM node:23

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

RUN yarn build
CMD ["yarn","start"]
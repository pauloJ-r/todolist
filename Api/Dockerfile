FROM node:18.20-alpine

WORKDIR /app

COPY package*.json ./

RUN ["npm", "install"]

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
FROM node:16-alpine

COPY package.json ./

RUN npm i --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]

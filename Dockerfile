FROM node:20

RUN mkdir -p app/code

WORKDIR /app/code

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . /app/code

RUN npm run build

EXPOSE 3000

CMD ["npm","run", "start"]

FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install
RUN npm install react-scripts@5.0.0 -g

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
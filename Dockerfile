# build environment
FROM arm32v7/node:19.0-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./
RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000
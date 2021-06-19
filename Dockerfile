# SOURCE: https://blog.logrocket.com/containerized-development-nestjs-docker/
# https://mherman.org/blog/dockerizing-a-react-app/

# build environment
FROM node:14-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
# RUN npm ci --silent
RUN apk update && apk upgrade && apk add --no-cache bash git
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
# RUN npm run build

CMD ["npm", "start"]
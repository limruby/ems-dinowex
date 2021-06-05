# SOURCE: https://blog.logrocket.com/containerized-development-nestjs-docker/
FROM node:14-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade && apk add --no-cache bash git

# RUN npm install
RUN npm install -g serve

CMD ["serve", "-s", "build"]
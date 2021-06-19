# SOURCE: https://blog.logrocket.com/containerized-development-nestjs-docker/
# https://mherman.org/blog/dockerizing-a-react-app/

# build environment
FROM node:14-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
# RUN npm ci --silent
RUN apk update && apk upgrade && apk add --no-cache bash git
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 
# CMD ["nginx", "-g", "daemon off;"]

# production environment
FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=build /app/build /usr/src/app/build
RUN apk update && apk upgrade && apk add --no-cache bash git
RUN npm install -g serve
CMD ["serve", "-s", "build"]
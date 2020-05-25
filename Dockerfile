FROM node:10.13.0-alpine

# Create Directory for the Container
WORKDIR /usr/src/app

# Install all Packages
COPY package.json .
COPY package-lock.json .
RUN npm ci

# TypeScript
ADD . /usr/src/app

# Start
#RUN npm startA
CMD [ "npm", "start" ]
EXPOSE 7001

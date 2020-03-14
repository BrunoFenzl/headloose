FROM node:12-alpine
WORKDIR /server
COPY package*.json /server/
RUN npm install
COPY . /server/
CMD ["npm", "build"]
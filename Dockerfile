FROM node:16.3.0-alpine
RUN mkdir -p /home/node/node_modules && \
    chown -R node:node /home/node

WORKDIR /home/node/
COPY package*.json ./ 
RUN find . && chown -R node:node /home/node
USER node
RUN npm install 
COPY . .
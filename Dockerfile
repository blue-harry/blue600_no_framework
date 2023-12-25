# the base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
# adminPkg ： 包括后端 server 和 前端构建后的bundle包
COPY ./ .

# Install app dependencies
# RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

EXPOSE 5000
CMD [ "node", "index.js" ]

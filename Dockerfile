# base image
FROM node:9.6.1

# set working directory
RUN mkdir -p /usr/src/app
COPY ./ /usr/src/app/
WORKDIR /usr/src/app

# add node_modules/.bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
# COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g

# start app
CMD ["npm", "run", "serve", "--production"]

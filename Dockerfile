FROM node:12-stretch
ENV CHOKIDAR_USEPOLLING=true
USER node

# need to create directory so `node` user can read/write
RUN mkdir /home/node/src

# set work directory for everything to be written to and ran from (will create when root user) 
WORKDIR /home/node/src

# copy package lock and package to install before copying over
COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

# set owner to node user and copy entire directory
COPY --chown=node:node . .

RUN npm ci

# if you need to expose a port not from command line
EXPOSE 6006

CMD ["npm", "run", "storybook"]
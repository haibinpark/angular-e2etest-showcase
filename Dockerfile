FROM cloudcube/nodejs-with-protractor
MAINTAINER "zhaohaibin@6starhome.com"

ADD . /usr/nodeapp

WORKDIR /usr/nodeapp

RUN \
    npm install -g bower && \
    bower i && \
    npm i && \
    npm start > /dev/null

RUN \
 export DISPLAY=:99.0 && \
 sh -e /etc/init.d/xvfb start &&
 sleep 1 \

RUN \
    npm run test-single-run && \
    npm run protractor





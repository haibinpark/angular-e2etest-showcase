FROM cloudcube/nodejs-with-protractor
MAINTAINER "zhaohaibin@6starhome.com"

ADD . /usr/nodeapp

WORKDIR /usr/nodeapp

RUN nrm use taobao

RUN \
    npm install -g bower
RUN \
    bower i --allow-root

RUN \
    npm i

RUN \
    npm start > /dev/null

ENV DISPLAY :99.0

RUN \
 /etc/init.d/xvfb start > /dev/null

RUN \
 sleep 1

RUN \
    npm run test-single-run && \
    npm run protractor





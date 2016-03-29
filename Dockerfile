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

ENV DISPLAY :99.0

# Install Xvfb init script
ADD ./build/xvfb_init.sh /etc/init.d/xvfb
RUN chmod a+x /etc/init.d/xvfb
ADD ./build/xvfb-daemon-run.sh /usr/bin/xvfb-daemon-run
RUN chmod a+x /usr/bin/xvfb-daemon-run

# Install startup script
ADD ./build/wrapper_startup.sh /opt/wrapper_startup.sh
RUN chmod a+x /opt/wrapper_startup.sh

ENTRYPOINT ["sh", "/opt/wrapper_startup.sh"]




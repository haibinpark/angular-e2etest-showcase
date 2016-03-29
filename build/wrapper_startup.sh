#!/usr/bin/env bash
# /usr/bin/xvfb-daemon-run
npm start
sleep 1
ps aux | grep "xvfb"
echo "run test single run"
npm run test-single-run
echo "run protractor"
npm run protractor
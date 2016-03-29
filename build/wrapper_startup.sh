#!/usr/bin/env bash
/usr/bin/xvfb-daemon-run > /dev/null
npm start > /dev/null
npm run test-single-run > /dev/null
npm run protractor > /dev/null
#!/usr/bin/env bash
/usr/bin/xvfb-daemon-run
npm start
npm run test-single-run
npm run protractor
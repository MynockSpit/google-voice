#!/usr/bin/env bash

npm i

# Linux
npx nativefier --name "Google Voice" -p linux --inject ./resources/light.js https://voice.google.com --user-agent "Mozilla/5.0 (Windows NT 10.0; rv:74.0) Gecko/20100101 Firefox/74.0" ./dist/light
npx nativefier --name "Google Voice" -p linux --inject ./resources/dark.js https://voice.google.com --user-agent "Mozilla/5.0 (Windows NT 10.0; rv:74.0) Gecko/20100101 Firefox/74.0" ./dist/dark

# Windows
# if you want to use npm to make windows apps on mac, you'll need to install wine.
npx nativefier --name "Google Voice" -p windows --inject ./resources/light.js https://voice.google.com --user-agent "Mozilla/5.0 (Windows NT 10.0; rv:74.0) Gecko/20100101 Firefox/74.0" ./dist/light
npx nativefier --name "Google Voice" -p windows --inject ./resources/dark.js https://voice.google.com --user-agent "Mozilla/5.0 (Windows NT 10.0; rv:74.0) Gecko/20100101 Firefox/74.0" ./dist/dark

# OSX
npx nativefier --name "Google Voice" -p osx --inject ./resources/light.js https://voice.google.com --user-agent "Mozilla/5.0 (Windows NT 10.0; rv:74.0) Gecko/20100101 Firefox/74.0" ./dist/light
npx nativefier --name "Google Voice" -p osx --inject ./resources/dark.js https://voice.google.com --user-agent "Mozilla/5.0 (Windows NT 10.0; rv:74.0) Gecko/20100101 Firefox/74.0" ./dist/dark

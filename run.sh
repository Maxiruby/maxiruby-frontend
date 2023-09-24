#!/bin/bash

/usr/bin/git fetch

/usr/bin/git pull origin master 

/usr/bin/yarn

/usr/bin/yarn build

/usr/bin/pm2 kill

/usr/bin/pm2 start --name maxitest yarn -- start



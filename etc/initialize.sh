#!/bin/bash

apt-get update && \
apt-get upgrade -y && \
apt-get install -y git


cd /var

rm -rf ./www

mkdir www

cd www

git clone https://gitlab+deploy-token-41115:xPhsrNKo9zBUvhyDhmBT@gitlab.com/gaiaenergy/fitme/portal.git

cd portal

git checkout develop

cp -r ./app ../static

rm -rf ./app
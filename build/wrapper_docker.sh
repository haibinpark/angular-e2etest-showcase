#!/usr/bin/env bash
if [ -z $(docker ps -a | grep 'angular-e2etest-showcase' | awk {'print $1'}) ] ;then
echo "has no docker with angular-e2etest-showcase"
sudo docker run --name angular-e2etest-showcase -v /etc/localtime:/etc/localtime:ro angular-e2etest-showcase
else
echo "has docker with angular-e2etest-showcase"
sudo docker rm -f angular-e2etest-showcase
sudo docker run --name angular-e2etest-showcase -v /etc/localtime:/etc/localtime:ro angular-e2etest-showcase
fi


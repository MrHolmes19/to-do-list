#!/bin/sh
echo “I am going to use docker to run this application”
docker-compose build && docker-compose up & firefox http://localhost:3000/
echo “I finished ! Enjoy yourself”

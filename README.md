# Dev.f instagram front-end [![Build Status](https://travis-ci.org/desarrollonetcardenas/dev-f-instagram-frontend.svg?branch=master)](https://travis-ci.org/desarrollonetcardenas/dev-f-instagram-frontend)

This is the front-end for the dev.f batch one of Culiacan, its backend can be found [here][Backend link] 
### Table of Contents
1. [Preparing the environment](#Pre-requisites)
    1. [Requirements for running locally](#Dev-mode)
2. [Docker](#Docker)
    1. [Requirements for running the containers](#Pre-requisites)
    1. [Running the production ready containers](#Running-the-production-ready-containers)

## Pre requisites
### Dev mode
To install the dependencies
```bash
yarn install
```

When developing it's recommended to use to built in sever that comes bundled with the app which can be launched with
```bash
yarn start
```

If you however prefer to work with the compiled static files they can be created with
```bash
yarn build
```

Its output will be at **build/** and can now be placed into a web server such as nginx or apache

## Docker
### Pre requisites
To install docker in ubuntu 16.04
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update

apt-cache policy docker-ce

sudo apt-get install -y docker-ce
```

In case of ubuntu 18.04
```bash
sudo apt-get install -y docker.io
```

Next docker compose will be requiered
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

### Running the production ready containers
Docker will perform all the necesary steps here, gathering the dependencies, building them into new statics and placing them into a container with a nginx server in the front to serve them

To buld the new containers use the following command, the **--build** flag will force the containers to be rebuilt instead of using the previous ones
```bash
docker-compose up --build -d
```

To tear down the currently running containers
```bash
docker-compose down -v
```

Alternatively both commands may be chained should a problem arise with them
```bash
docker-compose down -v && docker-compose up --build -d
```

[Backend link]: <https://github.com/PootisPenserHere/devf-instagram-api>
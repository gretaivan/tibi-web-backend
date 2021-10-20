# tibi-web-backend
Launch teaser website to collect people interest

## Pre-requisites
- [Node.js v+14.15.5](https://nodejs.org/en/).  You can check you version ```node -v```
- Postgress DB or Docker 


### First time use 
1. fork and clone this repo
2. navigate to an ```api``` directory in a terminal
3. ```npm install``` to install dependencies
4. Use instructions [usage locally](#usage-locally) if you have postgress DB on your machine, or [or run in docker](#usage-with-docker)

### Usage locally
+ ```npm start``` to run in production mode
+ ```npm run dev``` to run in development mode
+ ```npm run test``` to start test

### Usage with docker
###### Docker is used if you do not have a database installed locally, docker is a contenerised application environment and will give you a required environment without installing it locally
+ from root folder (if you were in api folder got folder back)
+ start api & db services ```bash _scripts/startDev.sh```
+ triggers a test run of unit tests only `npm run unitTests`
+ starts api & db services testing ```bash _scripts/startTest.sh```
+ stop all running services with removal of data```bash _scripts/teardown.sh```



## Changelog
- [x] remote repo setup 
- [x] initiate the node.js project and setup running scripts
- [x] install required packages, see [technologies](#technologies)
- [x] set up express server, see ```server.js```
- [x] general route ('/') added with welcome message
- [ ] docker setup files for DB + update manual
    - [x] yamls setup to enable docker to run on prefered images and setup bash scripts
    - [x] created db/migrations folder for DB schemas
    - [ ] create user schema
    - [x] in api create db config files 
    - [ ] dev_seeds.sql file to script data seed into the database for development purposes 
    - [x] seedDev.js - created the seed parser from js to sql
    - [x] init.js - the database initiator functions




## Test TODO 
- [ ] test server
- [ ] test get requests
- [ ] test external api calls
- [ ] test helper functions

## Technologies
### Production Dependencies:
| package | version |
|---------|---------|
| Node.js | +14.15.5 |
| Express.js | 4.17.1 |
| cors | 2.8.5 |
| pg | 8.7.1 |


### Development dependencies: 
| package | version |
|---------|---------|
| nodemon | 2.0.14 |
| Jest | 4.17.1 |
| supertest | 2.8.5 |
 
  
  
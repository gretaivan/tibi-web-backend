# tibi-web-backend
Launch teaser website to collect people interest

## Pre-requisites
- [Node.js v+14.15.5](https://nodejs.org/en/).  You can check you version ```node -v```


### First time use 
1. fork and clone this repo
2. navigat to a root directory in a terminal
3. ```npm install``` to install dependencies

### Usage 
+ ```npm start``` to run in production mode
+ ```npm run dev``` to run in development mode
+ ```npm run test``` to start test



## Changelog
- [x] remote repo setup 
- [x] initiate the node.js project and setup running scripts
- [x] install required packages, see [technologies](#technologies)
- [x] set up express server, see ```server.js```
- [ ] general route ('/') added with welcome message
- [ ] added routes for /search/:query & /search/random/:query
- [ ] added cors, body-parser, axios packages



## Test TODO 
- [ ] test server
- [ ] test get requests
- [ ] test external api calls
- [ ] test helper functions

## Technologies
### Production Dependencies:
| package | version |
---------------------
| Node.js | +14.15.5 |
| Express.js | v4.17.1 |
| cors | v2.8.5 |


### Development dependencies: 
nodemon v2.0.14
Jest  
Supertest  
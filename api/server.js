/**
 * Server file that defines the server connection
 * cors is used to authorise a certain IP range i.e. all connection or limit
 * also in this case it defines api routes too, if functionality would require more routes
 * we would use another file/module to abstract them according to existing data models and then controller file to define route for each abstracted route 
 */
const express = require('express')
const cors = require('cors')

const server = express()
//no config for cors at the moment because it is not a deployed app, before deploying it would specify who we allow to use this api or allow everybody
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).send('Welcome to Tibi users api')
})

module.exports = server;
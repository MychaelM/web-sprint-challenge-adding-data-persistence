const express = require('express')
// const helmet = require('helmet')

const welcome = require('./welcome/welcome-router.js');


const server = express();

// server.use('helmet')
server.use(express.json());
server.use("/api", welcome);

module.exports = server;
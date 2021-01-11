const express = require('express')
// const helmet = require('helmet')

const welcome = require('./welcome/welcome-router.js');
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')


const server = express();

// server.use('helmet')
server.use(express.json());
server.use("/api", welcome);
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
const express = require('express')
const Projects = require('./model.js')

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.find()
    console.log(projects)
    res.json(projects)
  } catch(err) {
    next()
  }
})

router.post("/", async (req, res, next) => {
  try {
    const newProject = await Projects.add(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router
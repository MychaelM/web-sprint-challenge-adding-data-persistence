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

module.exports = router
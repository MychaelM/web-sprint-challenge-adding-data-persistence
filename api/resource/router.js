const express = require("express");
const Resources = require("./model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.find();
    console.log(resources);
    res.json(resources);
  } catch (err) {
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
   const newResource = await Resources.add(req.body)
    res.status(201).json(newResource)
  } catch(err) {
    next(err)
  }
})

module.exports = router;

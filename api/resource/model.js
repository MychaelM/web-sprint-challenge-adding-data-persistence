const db = require("../../data/dbConfig");

function find() {
  return db("resources");
}

function findByID(id) {
  return db("resources")
    .where("id", id)
    .first()
}

async function add(resource) {
  const newResource = await db("resources").insert(resource)

  return findByID(newResource[0])
}

module.exports = {
  find,
  findByID,
  add,
};

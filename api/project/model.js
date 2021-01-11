const db = require('../../data/dbConfig')

async function find() {
  const projects = await db("projects")

  console.log(projects)

  // if (projects[0].project_completed === 1) {
  //   return {
  //     ...projects[0],
  //     project_completed: true,
  //   };
  // } else {
  //     return {
  //       ...projects[0],
  //       project_completed: false,
  //     };
  //   }
  return projects
}

function findByID(id) {
  return db("projects").where("id", id).first();
}

async function add(project) {
  const newProject = await db("projects").insert(project)

  return findByID(newProject[0])
}

module.exports = {
  find,
  findByID,
  add,
}
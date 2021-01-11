const db = require('../../data/dbConfig')

async function find() {
  const projects = await db("projects")
  
    // console.log(projects)
  const updatedProjects = projects.map((project) => {
    if (project.project_completed === 1) {
      return {
        ...project,
        project_completed: true,
      };
    } else {
      return {
        ...project,
        project_completed: false,
      };
    }
  });

  return updatedProjects
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
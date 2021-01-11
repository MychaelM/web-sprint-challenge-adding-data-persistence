const db = require('../../data/dbConfig')

async function find() {
  const projects = await db("projects")

  console.log(projects)

  if (projects[0].project_completed === 1) {
    return {
      ...projects[0],
      project_completed: true,
    };
  } else {
      return {
        ...projects[0],
        project_completed: false,
      };
    }
}

module.exports = {
  find,
}
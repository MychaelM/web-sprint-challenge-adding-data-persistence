
exports.seed = async function(knex) {
  await knex("projects").insert([
    {
      project_name: "Test Project",
      project_description: "This is the project description",
      project_completed: true, 
    }
  ])
};

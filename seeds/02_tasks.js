
exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      tasks_description: "This is the tasks description",
      task_notes: null,
      is_completed: false,
      project_id: 1
    },
    {
      tasks_description: "This is the tasks description part two",
      task_notes: "this is not empty",
      is_completed: true,
      project_id: 1
    },
  ]);
};

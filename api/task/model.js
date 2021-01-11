const db = require("../../data/dbConfig");

async function find() {
  const tasks = await 
    db("tasks as t")
    .innerJoin("projects as p", "t.project_id", "p.id")
    .select(
      "t.id",
      "t.tasks_description",
      "t.task_notes",
      "t.is_completed",
      "p.project_name",
      "p.project_description"
    )


  // console.log(tasks);

  // if (tasks[0].project_completed === 1) {
  //   return {
  //     ...tasks[0],
  //     project_completed: true,
  //   };
  // } else {
  //     return {
  //       ...tasks[0],
  //       project_completed: false,
  //     };
  //   }
  return tasks;
}

function findByID(id) {
  return db("tasks").where("id", id).first();
}

async function add(task) {
  const newTask = await db("tasks").insert(task);

  return findByID(newTask[0]);
}

module.exports = {
  find,
  findByID,
  add,
};

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


  const updatedTasks = tasks.map((task) => {
    if (task.is_completed === 1) {
      return {
        ...task,
        is_completed: true,
      };
    } else {
      return {
        ...task,
        is_completed: false,
      };
    }
  });
  return updatedTasks;
}

 async function findByID(id) {
  const task = await db("tasks").where("id", id).first();

  if (task.is_completed === 1) {
    return {
      ...task,
      is_completed: true
    }
  } else {
    return {
      ...task,
      is_completed: false
    }
  }
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

exports.seed = async function (knex) {
  await knex("project_resources").insert([
    {
      project_id: 1,
      resources_id: 1
    },
  ]);
};

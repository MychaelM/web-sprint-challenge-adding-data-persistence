
exports.seed = async function (knex) {
  await knex("resources").insert([
    {
      name: "Money",
      description: "need a flippin budget"
    },
  ]);
};

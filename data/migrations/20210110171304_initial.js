
exports.up = async function(knex) {
  await knex.schema.createTable("project", table => {
    table.increments("id")
    table.text("project_name").notNull()
    table.text("project_description")
    table.boolean("project_completed").notNull().defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project")
};

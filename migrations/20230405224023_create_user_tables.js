/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.uuid("id").primary();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("first_name");
      table.string("last_name");
      table.string("age");
      table.string("gender");
      table.string("profession");
      table.string("budget");
      table.string("area");
      table.string("pet");
      table.string("movein_date");
      table.string("img_url");
      table.string("about");
      table.timestamps(true, true);
    })
    .createTable("lovestory", (table) => {
      table.uuid("id").primary();
      table
        .uuid("user_id")
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("like");
      table.string("match");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user").dropTable("lovestory");
};

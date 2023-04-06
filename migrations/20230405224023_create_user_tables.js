/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.uuid("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("age").notNullable();
    table.string("gender").notNullable();
    table.string("profession").notNullable();
    table.string("budget").notNullable();
    table.string("area").notNullable();
    table.string("pet").notNullable();
    table.string("movein_date").notNullable();
    table.string("img_url").notNullable();
    table.string("about").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};

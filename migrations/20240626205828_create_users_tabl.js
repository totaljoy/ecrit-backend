/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
    return knex.schema
    .createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string("name").notNullable();
        table.string("username").notNullable();
        table.string("password").notNullable();
        table.string("phone").notNullable();
        table.string("avatar").notNullable();
        table.string("fave_artist");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
            .timestamp("updated_at")
            .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
}

export function down(knex) {
    return knex.schema.dropTable('users');
  };
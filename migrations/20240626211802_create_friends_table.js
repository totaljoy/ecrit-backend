export function up(knex) {
    return knex.schema
    .createTable('friends', (table) => {
        table.increments('friend_id').primary();
        table.string("friend_1").notNullable();
        table.string("friend_2").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
            .timestamp("updated_at")
            .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('friends');
  };
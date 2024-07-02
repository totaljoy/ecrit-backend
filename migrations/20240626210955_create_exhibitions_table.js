export function up(knex) {
    return knex.schema
    .createTable('exhibitions', (table) => {
        table.increments('show_id').primary();
        table.string("location").notNullable();
        table.string("address").notNullable();
        table.string("title").notNullable();
        table.string("artist").notNullable();
        table.string("opening_date").notNullable();
        table.string("closing_date").notNullable();
        table.binary('show_image').notNullable();
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
    return knex.schema.dropTable('exhibitions');
  };

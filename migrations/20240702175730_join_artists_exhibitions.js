/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex)  {
    return knex.schema
    .createTable('artists_exhibitions', (table) => {
        table.increments('id').primary();
        table.integer('artist_id')
            .unsigned()
            .references('artists.id')
            .notNullable()
        table.integer('show_id')
            .unsigned()
            .references('exhibitions.show_id')
            .notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
            .timestamp("updated_at")
            .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex){
    return knex.schema.dropTable('artists_exhibitions');
};

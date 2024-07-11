/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex)  {
    return knex.schema
    .createTable('reviews', (table) => {
        table.increments('id').primary();
        table.integer('user_id')
            .unsigned()
            .references('users.user_id')
            .notNullable()
        table.integer('show_id')
            .unsigned()
            .references('exhibitions.show_id')
            .notNullable()
        table.boolean('seen').notNullable()
        table.text('review')
        table.boolean('starred')
        table.timestamp('date')
        table.unique(['show_id', 'user_id'], 'unique_review_id')
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
    return knex.schema.dropTable('reviews');
};

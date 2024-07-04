/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
    await knex('friends').del();
    await knex('friends').insert([
        {
            friend_id: 1,
            friend_1: `1`,
            friend_2: `2`

        },
        {
            friend_id: 2,
            friend_1: `1`,
            friend_2: `3`

        },
        {
            friend_id: 3,
            friend_1: `1`,
            friend_2: `4`

        },
        {
            friend_id: 4,
            friend_1: `2`,
            friend_2: `3`

        },
        {
            friend_id: 5,
            friend_1: `2`,
            friend_2: `4`

        },
        {
            friend_id: 6,
            friend_1: `3`,
            friend_2: `4`

        },
    ])
}
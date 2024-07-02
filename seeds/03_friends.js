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
            friend_2: `83d29347-0b43-4971-b77b-627c03af8310`

        },
        {
            friend_id: 2,
            friend_1: `ab1b9689-3888-43b8-b069-4e062d4d406f`,
            friend_2: `7be1c75e-32df-4260-a47d-13923435e17e`

        },
        {
            friend_id: 3,
            friend_1: `ab1b9689-3888-43b8-b069-4e062d4d406f`,
            friend_2: `004390bf-6557-4888-b7e3-8d7fecd0193a`

        },
        {
            friend_id: 4,
            friend_1: `83d29347-0b43-4971-b77b-627c03af8310`,
            friend_2: `7be1c75e-32df-4260-a47d-13923435e17e`

        },
        {
            friend_id: 5,
            friend_1: `83d29347-0b43-4971-b77b-627c03af8310`,
            friend_2: `004390bf-6557-4888-b7e3-8d7fecd0193a`

        },
        {
            friend_id: 6,
            friend_1: `7be1c75e-32df-4260-a47d-13923435e17e`,
            friend_2: `004390bf-6557-4888-b7e3-8d7fecd0193a`

        },
    ])
}
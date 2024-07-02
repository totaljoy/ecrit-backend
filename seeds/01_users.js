/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
    await knex('users').del();
    await knex('users').insert([
        {
            user_id: 1,
            username: `totaljoy`,
            password: `elmosworld`,
            name: `adair`,
            phone: `+1(305)7106467`
        },
        {
            user_id: 2,
            username: `internalgarden`,
            password: `jjb`,
            name: `jimmy`,
            phone: `+1(201)9614870`

        },
        {
            user_id: 3,
            username: `bunnyfarm`,
            password: `bbgirl`,
            name: `bella`,
            phone: `+1(415)4908291`
        },
        {
            user_id: 4,
            username: `a1exajo`,
            password: `root`,
            name: `jo`,
            phone: `+1(513)6803002`
        },
    ])
}
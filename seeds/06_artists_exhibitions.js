/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
    await knex('artists_exhibitions').del();
    await knex('artists_exhibitions').insert([
        {
            id: 1,
            artist_id: 1,
            show_id: 1
        },
        {
            id: 2,
            artist_id: 2,
            show_id: 1
        },
        {
            id: 3,
            artist_id: 3,
            show_id: 1
        },
        {
            id: 4,
            artist_id: 4,
            show_id: 1
        },
        {
            id: 5,
            artist_id: 5,
            show_id: 1
        },
        {
            id: 6,
            artist_id: 6,
            show_id: 1
        },
        {
            id: 7,
            artist_id: 7,
            show_id: 1
        },
        {
            id: 8,
            artist_id: 8,
            show_id: 1
        },
        {
            id: 9,
            artist_id: 9,
            show_id: 1
        },
        {
            id: 10,
            artist_id: 10,
            show_id: 1
        },
        {
            id: 11,
            artist_id: 11,
            show_id: 1
        },
        {
            id: 12,
            artist_id: 12,
            show_id: 1
        },
        {
            id: 13,
            artist_id: 13,
            show_id: 1
        },
        {
            id: 14,
            artist_id: 14,
            show_id: 1
        },
        {
            id: 15,
            artist_id: 15,
            show_id: 1
        },
        {
            id: 16,
            artist_id: 16,
            show_id: 1
        },
        {
            id: 17,
            artist_id: 17,
            show_id: 1
        },
        {
            id: 18,
            artist_id: 18,
            show_id: 1
        },
        {
            id: 19,
            artist_id: 19,
            show_id: 2
        },
        {
            id: 20,
            artist_id: 20,
            show_id: 3
        },
        {
            id: 21,
            artist_id: 21,
            show_id: 4
        },
        {
            id: 22,
            artist_id: 22,
            show_id: 4
        },       
        {
            id: 23,
            artist_id: 23,
            show_id: 4
        },
        {
            id: 24,
            artist_id: 24,
            show_id: 4
        },
        {
            id: 25,
            artist_id: 25,
            show_id: 4
        },       
        {
            id: 26,
            artist_id: 26,
            show_id: 4
        },
        {
            id: 27,
            artist_id: 27,
            show_id: 4
        },
        {
            id: 28,
            artist_id: 28,
            show_id: 4
        },
        {
            id: 29,
            artist_id: 29,
            show_id: 4
        },       
        {
            id: 30,
            artist_id: 30,
            show_id: 4
        },
        {
            id: 31,
            artist_id: 31,
            show_id: 4
        },
        {
            id: 32,
            artist_id: 32,
            show_id: 4
        },
        {
            id: 33,
            artist_id: 33,
            show_id: 4
        },       
        {
            id: 34,
            artist_id: 34,
            show_id: 4
        },
        {
            id: 35,
            artist_id: 35,
            show_id: 4
        },
        {
            id: 36,
            artist_id: 36,
            show_id: 4
        },
        {
            id: 37,
            artist_id: 37,
            show_id: 4
        },       
        {
            id: 38,
            artist_id: 38,
            show_id: 5
        },
        {
            id: 39,
            artist_id: 39,
            show_id: 6
        },
        {
            id: 40,
            artist_id: 40,
            show_id: 7
        },
        {
            id: 41,
            artist_id: 41,
            show_id: 8
        },       
        {
            id: 42,
            artist_id: 42,
            show_id: 9
        },
        {
            id: 43,
            artist_id: 43,
            show_id: 9
        },
        {
            id: 44,
            artist_id: 44,
            show_id: 9
        },
        {
            id: 45,
            artist_id: 22,
            show_id: 9
        },
        {
            id: 46,
            artist_id: 45,
            show_id: 10
        },
        {
            id: 47,
            artist_id: 46,
            show_id: 11
        }
    ]) 
}
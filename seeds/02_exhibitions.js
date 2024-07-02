/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
    await knex('exhibitions').del();
    await knex('exhibitions').insert([
        {
            show_id: 1,
            location:  `Andrew Kreps Gallery`,
            address: `22 Cortlandt Alley, New York, NY 10013`,
            title: `Eighteen Painters`,
            artist: "Michael Alvarez",
            opening_date: `June 21`,
            closing_date: `August 31`,
            show_image: 'AKG.jpeg'
        },
        {
            show_id: 2,
            location: `Solomon R. Guggenheim Museum`,
            address: `1071 5th Ave, New York, NY 10128`,
            title: `Light Line`,
            artist: `Jenny Holzer`,
            opening_date: `May 17`,
            closing_date: `September 29`,
            show_image: 'Guggenheim.jpg'
        },
        {
            show_id: 3,
            location: `Swiss Institute`,
            address: `38 St Marks Pl, New York, NY 10003`,
            title: `I'm Not`,
            artist: `Shuang Li`,
            opening_date: `May 1`,
            closing_date: `August 25`,
            show_image: 'SI.jpeg'
        },
        {
            show_id: 4,
            location: `Whitney Museum of American Art`,
            address: `99 Gansevoort St, New York, NY 10014`,
            title: `Whitney Biennial 2024: Even Better Than the Real Thing`,
            artist: "Jes Fan",
            opening_date: `March 20`,
            closing_date: `August 11`,
            show_image: 'Whitney.jpg'
        },
        {
            show_id: 5, 
            location: `Entrance Gallery`,
            address: `48 Ludlow St, New York, NY`,
            title: `Never No Treasure`,
            artist: 'Erica Newton',
            opening_date: `May 31`,
            closing_date: `June 29`,
            show_image: 'Entrance.jpg'
        },
        {
            show_id: 6,
            location: `Silke Lindner`,
            address: `48 Ludlow St, New York, NY`,
            title: `Passages`,
            artist: 'Gozié Ojini',
            opening_date: `May 3`,
            closing_date: `June 8`,
            show_image: 'Silke.jpg'
        },
        {
            show_id: 7,
            location: `No Gallery`,
            address: `105 Henry St. #4 NYC NY 10002`,
            title: `When you can no longer speak, sing me a song.`,
            artist: 'Ben Werther',
            opening_date: `May 30`,
            closing_date: `June 29`,
            show_image: 'Ben.jpg'
        },
        {
            show_id: 8,
            location: `MoMA, Floor 6`,
            address: `11 W 53rd St, New York, NY 10019`,
            title: `Good Night Good Morning`,
            artist: 'Joan Jonas',
            opening_date: `April 30`,
            closing_date: `July 6`,
            show_image: 'Moma.jpg'
        },
        {
            show_id: 9, 
            location: `Artists Space`,
            address: `11 Cortlandt Alley, New York, NY 10013`,
            title: `Doris Guo, Matthew Langan-Peck, Isabelle Frances McGuire, Ruben Ulises Rodriguez Montoya`,
            artist: 'Ruben Ulises Rodriguez Montoya',
            opening_date: `May 23`,
            closing_date: `August 10`,
            show_image: `ArtistsSpace.jpg`
        },
        {
            show_id: 10,
            location: `Chapter NY`,
            address: `60 Walker Street, New York, NY 10013`,
            title: `Jesse Darling`,
            artist: "Jesse Darling",
            opening_date: `July 11`,
            closing_date: `August 23`,
            show_image: `Chapter.jpg`
        },
        {
            show_id: 11,
            location: `Farschou New York`,
            address: `148 Green Street, Brooklyn, NY 11222`,
            title: `Exorcism of the Last Painting I Ever Made`,
            artist: "Tracey Emin",
            opening_date: `October 21`,
            closing_date: `July 14`,
            show_image: `Farschou.jpeg`
        }
    ])
}
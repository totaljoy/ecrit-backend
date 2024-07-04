import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getExhibitions = async (req, res) => {
    try {

        const exhibitions = await knex('exhibitions')
            .join('artists_exhibitions', 'artists_exhibitions.show_id', '=', 'exhibitions.show_id')
            .join('artists', 'artists.id', '=', 'artists_exhibitions.artist_id')
            .select(
                'exhibitions.show_id as show_id',
                'exhibitions.location as location',
                'exhibitions.title as title',
                'exhibitions.show_image as show_image',
                'artists.artist as artist'
            )

        const output = {};

        exhibitions.forEach((exhibition) => {
            if (exhibition.show_id in output)  {
                output[exhibition.show_id].artists.push(exhibition.artist)
            } else {
                output[exhibition.show_id] = {...exhibition, artists: [exhibition.artist]}
            }
        })

        res.status(200).json(output);
    } catch {
        res.status(400).json({
            message: 'Error getting exhibitions'
        });
    }
}

export default getExhibitions
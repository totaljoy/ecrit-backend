import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getSingleExhibition = async (req, res) => {

    const { exhibitionId } = req.params;

    try {
        if (!exhibitionId) {
            return res.status(400).json({ error: "Exhibition ID is required" });
        }

        const singleExhibitionData = await knex('exhibitions')
            .join('artists_exhibitions', 'artists_exhibitions.show_id', '=', 'exhibitions.show_id')
            .join('artists', 'artists.id', '=', 'artists_exhibitions.artist_id')
            .select(
                'exhibitions.show_id as show_id',
                'exhibitions.location as location',
                'exhibitions.title as title',
                'exhibitions.address as address',
                'exhibitions.opening_date as opening_date',
                'exhibitions.closing_date as closing_date',
                'exhibitions.show_image as show_image',
                'exhibitions.description as description',
                'artists.artist as artist'
            )
            .where({ 'exhibitions.show_id': exhibitionId });
            

        const cleanSingleExhibitionData = (data) => {
            const exhibition = {
                show_id: data[0].show_id,
                location: data[0].location,
                title: data[0].title,
                address: data[0].address,
                opening_date: data[0].opening_date,
                closing_date: data[0].closing_date,
                show_image: data[0].show_image,
                description: data[0].description,
                artists: []
            };

            data.forEach((item) => {
                exhibition.artists.push(item.artist);
            });

            return exhibition;
        }

        let cleanData = cleanSingleExhibitionData(singleExhibitionData)

        res.status(200).json(cleanData);
    } catch {
        res.status(400).json({
            message: 'Error getting exhibitions'
        });
    }
}

export default getSingleExhibition
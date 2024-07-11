import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getSearch = async (req, res) => {
    const { search } = req.query
    try {
        const exhibitions = await knex('exhibitions').distinct('exhibitions.*')
        .join('artists_exhibitions', 'artists_exhibitions.show_id', '=', 'exhibitions.show_id')
        .join('artists', 'artists.id', '=', 'artists_exhibitions.artist_id')
            .whereILike('exhibitions.location',  `%${search}%`)
            .orWhereILike('exhibitions.title', `%${search}%`)
            .orWhereILike('artists.artist', `%${search}%`)

        const users = await knex('users')
            .whereILike('users.name', `%${search}%`)
            .orWhereILike('users.username', `%${search}%`)

        res.status(200).json({exhibitions, users});
    } catch (e){
        console.log(e)
        res.status(400).json({
            message: e
        });
    }
}

export default getSearch
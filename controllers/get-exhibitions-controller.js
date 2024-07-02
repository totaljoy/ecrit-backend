import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getExhibitions = async (req, res) => {
    try{
        const exhibitions = await knex('exhibitions');
        res.status(200).json(exhibitions);
    }catch {
        res.status(400).json({
            message: 'Error getting exhibitions'
        });
    }
}

export default getExhibitions
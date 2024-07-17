import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const updateStarred = async (req, res) => {
    const { reviewId } = req.params

    try {
        const review = await knex('reviews').where({ id: reviewId }).update({...req.body})
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json({
            message: `Unable to edit starred status: ${error}`,
            });
    }
}

export default updateStarred
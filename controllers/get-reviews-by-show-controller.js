import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getReviewsByExhibition = async (req, res) => {

    const { exhibitionId } = req.params;

    try {
        if (!exhibitionId) {
            return res.status(400).json({ error: "Exhibition ID is required" });
        }

        const reviewsByExhibition = await knex('reviews')
            .join('users', 'users.user_id', '=', 'reviews.user_id')
            .select(
                'reviews.id as id',
                'reviews.show_id as show_id',
                'users.user_id as user_id',
                'users.name as name',
                'users.username as username',
                'reviews.review as review',
                'reviews.seen as seen',
                'reviews.created_at as created_at'
            )
            .where({ 'reviews.show_id': exhibitionId });

        res.status(200).json(reviewsByExhibition);
    } catch {
        res.status(400).json({
            message: 'Error getting reviews'
        });
    }
}

export default getReviewsByExhibition
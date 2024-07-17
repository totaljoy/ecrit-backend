import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getReviewsByUser = async (req, res) => {

    const { userId } = req.params;

    try {
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const reviewsByUser = await knex('reviews')
            .join('users', 'users.user_id', '=', 'reviews.user_id')
            .join('exhibitions', 'exhibitions.show_id', '=', 'reviews.show_id')
            .select(
                'reviews.id as id',
                'reviews.show_id as show_id',
                'exhibitions.title as title',
                'users.user_id as user_id',
                'users.name as name',
                'users.avatar as avatar',
                'users.username as username',
                'reviews.review as review',
                'reviews.seen as seen',
                'reviews.created_at as created_at',
                'reviews.date as date',
                'reviews.starred as starred'
            )
            .where({ 'reviews.user_id': userId });

        res.status(200).json(reviewsByUser);
    } catch {
        res.status(400).json({
            message: 'Error getting reviews'
        });
    }
}

export default getReviewsByUser
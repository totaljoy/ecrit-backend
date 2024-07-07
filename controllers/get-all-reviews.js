import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getReviews = async (req, res) => {

    try {

        const reviews = await knex('reviews')
            .join('users', 'users.user_id', '=', 'reviews.user_id')
            .join('exhibitions', 'exhibitions.show_id', '=', 'reviews.show_id')
            .select(
                'reviews.id as id',
                'reviews.show_id as show_id',
                'users.user_id as user_id',
                'users.name as name',
                'users.avatar as avatar',
                'users.username as username',
                'reviews.review as review',
                'reviews.seen as seen',
                'reviews.created_at as created_at',
                'exhibitions.show_image as show_image',
                'exhibitions.title as title',
                'exhibitions.location as location',
            )

        res.status(200).json(reviews);
    } catch {
        res.status(400).json({
            message: 'Error getting reviews'
        });
    }
}

export default getReviews
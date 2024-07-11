import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const postNewReview = async (req, res) => {

    if (!req.body.user_id || !req.body.show_id) {
        return res.status(400).json({
            message: "Please provide all fields for the review in the request",
            });
    }

    try {
        const result = await knex('reviews').insert(req.body)

        const newReviewId = result[0]
        const createdReview = await knex("reviews").where({ id: newReviewId});
        res.status(201).json(createdReview);

    } catch (error) {
        res.status(500).json({
            message: `Error creating review: ${error}`
        });
    }
}

export default postNewReview
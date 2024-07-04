import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getUser = async (req, res) => {
    const { userId } = req.params
    try {
        const users = await knex('users')
            .where({'users.user_id': userId})

        res.status(200).json(users);
    } catch {
        res.status(400).json({
            message: 'Error getting user'
        });
    }
}

export default getUser
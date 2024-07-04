import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getFriendList = async (req, res) => {
    const { userId } = req.params
    try {
        const friendList = await knex('friends')
            .leftJoin('users as u1', 'friends.friend_1', 'u1.user_id')
            .leftJoin('users as u2', 'friends.friend_2', 'u2.user_id')
            .where({'friends.friend_1': userId})
            .orWhere({'friends.friend_2': userId})
            .select(knex.raw(`
                    CASE
                        WHEN friends.friend_1 = ? THEN u2.user_id
                        WHEN friends.friend_2 = ? THEN u1.user_id
                    END as friend_id,

                    CASE
                        WHEN friends.friend_1 = ? THEN u2.username
                        WHEN friends.friend_2 = ? THEN u1.username
                    END as friend_username,

                    CASE
                        WHEN friends.friend_1 = ? THEN u2.name
                        WHEN friends.friend_2 = ? THEN u1.name
                    END as friend_name
                `, [userId, userId, userId, userId, userId, userId]))
                
                
        res.status(200).json(friendList);
    } catch (error) {
        res.status(400).json({
            message: 'Error getting friend list',
            error
        });
    }
}

export default getFriendList
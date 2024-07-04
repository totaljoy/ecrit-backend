import express from 'express';
import getUser from '../controllers/get-user-controller.js';
import getFriendList from '../controllers/get-friend-list.js';
const router = express.Router();

router
    .route('/:userId')
    .get(getUser)

router
    .route('/friends/:userId')
    .get(getFriendList)


export default router;
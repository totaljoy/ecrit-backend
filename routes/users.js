import express from 'express';
import getUser from '../controllers/get-user-controller.js';
import getFriendList from '../controllers/get-friend-list.js';
import getReviewsByUser from '../controllers/get-reviews-by-user.js';

const router = express.Router();

router
    .route('/:userId')
    .get(getUser)

router
    .route('/friends/:userId')
    .get(getFriendList)

router
    .route('/reviews/:userId')
    .get(getReviewsByUser)


export default router;
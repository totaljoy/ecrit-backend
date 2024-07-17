import express from 'express';
import getReviewsByExhibition from '../controllers/get-reviews-by-show-controller.js';
import getReviews from '../controllers/get-all-reviews.js';
import postNewReview from '../controllers/post-new-review.js';
import updateStarred from '../controllers/update-starred-controller.js';

const router = express.Router();

router
    .route('/')
    .get(getReviews)
    .post(postNewReview)

router
    .route('/:exhibitionId')
    .get(getReviewsByExhibition)

router
    .route('/:reviewId')
    .put(updateStarred)

export default router;
import express from 'express';
import getReviewsByExhibition from '../controllers/get-reviews-by-show-controller.js';
const router = express.Router();

router
    .route('/:exhibitionId')
    .get(getReviewsByExhibition)

export default router;
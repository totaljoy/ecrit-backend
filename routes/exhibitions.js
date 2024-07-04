import express from 'express';
import getExhibitions from '../controllers/get-exhibitions-controller.js'
import getSingleExhibition from '../controllers/get-single-exhibition-controller.js';
const router = express.Router();

router
    .route('/')
    .get(getExhibitions)

router
    .route('/:exhibitionId')
    .get(getSingleExhibition)

export default router;
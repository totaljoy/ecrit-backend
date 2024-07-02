import express from 'express';
import getExhibitions from '../controllers/get-exhibitions-controller.js'
const router = express.Router();

router
    .route('/')
    .get(getExhibitions)

export default router;
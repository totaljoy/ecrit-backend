import express from 'express';
import getSearch from '../controllers/get-search-controller.js';

const router = express.Router();

router
    .route('/')
    .get(getSearch)

export default router;
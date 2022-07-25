import express from 'express';
import stations from './stations/stations';
import journeys from './journeys/journeys';

const router = express.Router();

router.use('/stations', stations);
router.use('/journeys', journeys);

export = router;
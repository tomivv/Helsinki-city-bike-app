import express from 'express';
import stations from './stations/stations';

const router = express.Router();

router.use('/stations', stations);

export = router;
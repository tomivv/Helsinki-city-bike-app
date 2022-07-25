import express, { Request, Response } from 'express';
import pool from '../../../db/dbconfig';
import { QueryResult } from 'pg';

const router = express.Router();

router.get('/:limit/:offset', async (req: Request, res: Response) => {
  const client = await pool.connect();

  const sql = `SELECT j.id, s.name as departure_station, s2.name as return_station, departure_station_id, return_station_id, duration, distance
  FROM journeys AS j
  INNER JOIN stations AS s ON j.departure_station_id = s.id
  INNER JOIN stations AS s2 ON j.return_station_id = s2.id
  ORDER BY j.id DESC
  LIMIT ${req.params.limit} OFFSET ${req.params.offset}`;

  client.query(sql)
  .then((result: QueryResult) => {
    res.send(result.rows);
    client.release();
  })
  .catch(error => {
    console.error(error);
    client.release();
  });
});

export default router;

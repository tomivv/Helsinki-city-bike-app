import express, { Request, Response } from 'express';
import pool from '../../../db/dbconfig';
import { QueryResult } from 'pg';

const router = express.Router();

interface IStation {
  FID: string,
  ID: string,
  Nimi: string,
  Namn: string,
  Name: string,
  Osoite: string,
  Adress: string,
  Kaupunki: string,
  Stad: string,
  Operaattor: string,
  Kapasiteet: string,
  x: string,
  y: string
}

router.get('/', async (req: Request, res: Response) => {

  const client = await pool.connect();

  const sql = `SELECT s.id, s.name, s.address, s.city
  FROM stations AS s`;

  client.query(sql)
  .then((result: QueryResult) => {
    res.json(result.rows);
  })
  .catch(error => {
    res.status(500).json({
      msg: 'Server error'
    });
    client.release();
  });
});

router.get('/station/:id', async (req: Request, res: Response) => {

  const { id } = req.params;

  const client = await pool.connect();

  const sql = `SELECT s.name, s.address, s.city
  FROM stations AS s
  WHERE s.id = ${id}`;

  client.query(sql)
  .then((result: QueryResult) => {
    const countSql = `SELECT COUNT(*) FILTER (WHERE j.departure_station_id = ${id}) as departures, COUNT(*) FILTER (WHERE j.return_station_id = ${id}) as returned
    FROM journeys AS j`;
    client.query(countSql)
    .then((counts: QueryResult) => {
      res.json({
        stationDetails: result.rows[0],
        stationCounts: counts.rows[0]
      });
      client.release();
    }).catch(error => {
      res.status(500).json({
        msg: 'Server error'
      });
      client.release();
    });
  })
  .catch(error => {
    res.status(500).json({
      msg: 'Server error'
    });
    client.release();
  });
});

router.get('/:limit/:offset', async (req: Request, res: Response) => {
  const client = await pool.connect();

  const sql = `SELECT s.id, s.name, address
  FROM stations s
  ORDER BY s.name ASC
  LIMIT ${req.params.limit} OFFSET ${req.params.offset}`;

  client.query(sql)
  .then((result: QueryResult) => {
    res.send(result.rows);
    client.release();
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({
      msg: 'Server error'
    });
    client.release();
  });
});

export default router;

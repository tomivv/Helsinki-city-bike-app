import express, { Request, Response } from 'express';
import csv from 'csv-parser';
import multer from 'multer';
import fs from 'fs';
import pool from '../../../db/dbconfig';
import { QueryResult } from 'pg';

const upload = multer({ dest: './temp' });

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

  const sql = `SELECT s.name, address
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


router.post('/add/csv', upload.single('stations'), (req: Request, res: Response) => {

  if (!req.file) {
    res.json({
      msg: 'invalid request',
      status: 400
    });

    return;
  }

  const filePath = req.file.path;
  console.log(filePath);

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (data: IStation) => {
      const client = await pool.connect();

      const values = [
        parseInt(data.ID),
        data.Name,
        data.Osoite,
        data.Kaupunki,
        data.Operaattor,
        data.Kapasiteet,
        data.x,
        data.y
      ];
      console.log('asasdfasdfasdf');
      

      const sql = 'INSERT INTO stations (id, name, address, city, operator, capacity, x, y) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id';

      client.query(sql, values)
      .then((res: QueryResult) => {
        console.log(res.rows);
      })
      .catch(error => {
        console.error(error);
      });
      client.release();
    })
    .on('error', (e) => {
      console.log('error');
    })
    .on('end', () => {
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error(error);
        }
      });
      res.json({
        msg: 'stations added',
        status: 200
      });
    });
});

export default router;

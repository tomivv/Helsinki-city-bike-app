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

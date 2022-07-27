import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoute from './src/routes/apiRoute';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send("Hello bike world!")
});

app.use('/api/v1', apiRoute);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
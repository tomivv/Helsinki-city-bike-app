import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
let port: number|undefined = undefined;
// if port is assigned change the default value
if(typeof process.env.DB_PORT !== 'undefined') {
  port = parseInt(process.env.DB_PORT);
}

export default new Pool({
  max: 20,
  user: user,
  password: password,
  host: host,
  port: port,
  database: database,
  idleTimeoutMillis: 30000
});
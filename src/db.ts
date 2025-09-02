import pkg from 'pg';
import dotenv from 'dotenv';
import { PORT, USER, DATABASE, HOST } from './config.js';
const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
   user: USER,
   database: DATABASE,
   host: HOST,
   port: Number(PORT),
});

export default pool;

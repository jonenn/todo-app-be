import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
   user: process.env.PGUSER,
   database: process.env.PGDATABASE,
   host: process.env.PGHOST,
   port: Number(process.env.PGPORT),
});

export default pool;

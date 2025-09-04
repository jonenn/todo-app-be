import {
   PGPORT,
   PGHOST,
   PGUSERNAME,
   PGDATABASE,
   PGPASSWORD,
} from './config.js';
import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
   user: PGUSERNAME,
   database: PGDATABASE,
   host: PGHOST,
   port: Number(PGPORT),
   password: PGPASSWORD,
});

export default pool;

import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
const app = express();
const port = 3001;
const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
   user: process.env.PGUSER,
   host: process.env.PGHOST,
   port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : undefined,
   database: process.env.PGDATABASE,
});

app.get('/', async (req, res) => {
   try {
      const result = await pool.query('SELECT * FROM todos');
      res.json(result.rows);
   } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los todos');
   }
});

app.listen(port, () => {
   console.log('This is working!');
});

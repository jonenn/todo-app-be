import express from 'express';
import pool from './db.js';
const app = express();
const port = 3001;

app.get('/api/v1/todos', async (req, res) => {
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

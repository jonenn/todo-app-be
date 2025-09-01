import { Router } from 'express';
import pool from '../db.js';
const router = Router();

router.get('/api/v1/todos', async (req, res) => {
   try {
      const result = await pool.query('SELECT * FROM todos');
      res.json(result.rows);
   } catch (err) {
      console.error(err);
      res.status(500).send('There was an error fetching the data.');
   }
});

router.post('/api/v1/todos', async (req, res) => {
   try {
      const { content, checked } = req.body;
      console.log(content);

      const result = await pool.query(
         'INSERT INTO todos (content, checked) VALUES ($1, $2) RETURNING *',
         [content, checked ?? false]
      );
      res.status(201).json(result.rows[0]);
   } catch (err) {
      console.error(err);
      res.status(500).send('Error inserting todo');
   }
});

export default router;

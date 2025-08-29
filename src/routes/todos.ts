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

export default router;

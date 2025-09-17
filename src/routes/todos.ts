import { Router } from 'express';
import pool from '../db.js';
const router = Router();

router.get('/', async (req, res) => {
   try {
      const result = await pool.query('SELECT * FROM todos');
      res.json(result.rows);
   } catch (err) {
      console.error(err);
      res.status(500).send('There was an error fetching the data.');
   }
});

router.post('/', async (req, res) => {
   try {
      const { content, checked, category } = req.body;
      console.log(content);

      const result = await pool.query(
         'INSERT INTO todos (content, checked, category) VALUES ($1, $2, $3) RETURNING *',
         [content, checked ?? false, category || 'general']
      );
      res.status(201).json(result.rows[0]);
   } catch (err) {
      console.error(err);
      res.status(500).send('Error inserting to-do');
   }
});

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   try {
      const result = await pool.query('SELECT * FROM todos WHERE id = $1', [
         id,
      ]);
      if (result.rows.length === 0) {
         return res.status(404).json({ error: 'To-do does not exist' });
      }
      return res.status(200).json(result.rows[0]);
   } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Couldn't get the to-do" });
   }
});

router.patch('/:id', async (req, res) => {
   const { id } = req.params;
   const { content, checked, category } = req.body;
   try {
      const result = await pool.query(
         'UPDATE content = COALESCE($1, content) checked = COALESCE($2, checked) category = COALESCE($3, category) FROM todos WHERE id = $4',
         [content, checked, category]
      );
   } catch (err) {}
});

export default router;

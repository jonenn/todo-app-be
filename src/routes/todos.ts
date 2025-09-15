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
      res.status(500).send('Error inserting todo');
   }
});

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   try {
      const response = await pool.query('SELECT * FROM todos WHERE id = $1', [
         id,
      ]);
      return res.status(200).json(response.rows[0]);
   } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Couldn't get the user" });
   }
});

router.patch('/:id', async (req, res) => {
   const { id } = req.params;
   const { content, checked, category } = req.body;
   try {
      const response = await pool.query(
         'UPDATE content = COALESCE($1, content) checked = COALESCE($2, checked) category = COALESCE($3, category) FROM todos WHERE id = $4',
         [content, checked, category]
      );
   } catch (err) {}
});

export default router;

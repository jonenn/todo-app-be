import { Router } from 'express';
import { pool } from '@/db';

const router = Router();

router.get('/', async (req, res) => {
   try {
      const terms = req.query.term || 'Search term missing';
      const category = req.query.cat || 'general';
      const result = await pool.query(
         'SELECT * FROM todos WHERE content LIKE $1',
         [`%${terms}%`]
      );
      res.json({
         search: {
            terms,
            category,
         },
         results: result.rows,
      });

      // res.send(`
      //    <h2>Search results:</h2>
      //    <p>Term: ${terms}</p>
      //    <p>Category: ${category}</p>
      //    `);
   } catch (err) {
      console.error(err);
      res.status(500).send('Internal error');
   }
});

export default router;

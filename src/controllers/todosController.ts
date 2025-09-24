import { pool } from '@/db';
import { Request, Response } from 'express';

const getTodos = async (req: Request, res: Response) => {
   try {
      const result = await pool.query('SELECT * FROM todos');
      res.json(result.rows);
   } catch (err) {
      console.error(err);
      res.status(500).send('There was an error fetching the data.');
   }
};

export { getTodos };

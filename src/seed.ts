import { pool } from '@/db';

const defaultTodos = [
   { content: 'Research the Company' },
   { content: 'Review the Job Description' },
   { content: 'Prepare Your Elevator Pitch' },
   { content: 'Highlight Key Achievements' },
   { content: 'Develop Your Interview Strategy' },
   { content: 'Practice Technical Skills' },
   { content: 'Prepare Questions for the HR Interviewer' },
   { content: 'Prepare Your Documents' },
   { content: 'Dress Appropriately' },
   { content: 'Plan Your Arrival' },
   { content: 'Review Feedback' },
];

const initTable = async () =>
   await pool.query(
      `CREATE TABLE IF NOT EXISTS todos (id SERIAL PRIMARY KEY, content TEXT NOT NULL, category VARCHAR(150) DEFAULT 'general', checked boolean DEFAULT false, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`
   );

const setSeed = async (content: string) => {
   try {
      await pool.query('INSERT INTO todos (content) VALUES ($1)', [content]);
   } catch (err) {
      console.error(err);
   }
};

const seeding = async () => {
   try {
      await initTable();
      for (const todo of defaultTodos) {
         await setSeed(todo.content);
      }
      console.log('Seeding worked!');
   } catch (err) {
      console.error(err);
   }
};

seeding();

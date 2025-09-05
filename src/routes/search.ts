import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
   const terms = req.query.term || 'Search term was not specified';
   const category = req.query.cat || 'Any';

   res.send(`
         <h2>Search results:</h2>
         <p>Term: ${terms}</p>
         <p>Category: ${category}</p>
      `);
});

export default router;

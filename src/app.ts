import express from 'express';
import todosRouter from './routes/todos.js';
import searchRouter from './routes/search.js';
import loggerMW from './middlewares/logger.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(loggerMW);
app.use('/api/v1/todos', todosRouter);
app.use('/api/v1/search', searchRouter);

app.listen(port, () => {
   console.log('This is working!');
});

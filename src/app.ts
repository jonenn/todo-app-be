import express from 'express';
import todosRouter from './routes/todos.js';
const app = express();
const port = 3001;

app.use('/', todosRouter);

app.listen(port, () => {
   console.log('This is working!');
});

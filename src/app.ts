import express from 'express';
import todosRouter from './routes/todos.js';
import searchRouter from './routes/search.js';
import loggerMW from './middlewares/logger.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(loggerMW);
app.use(errorHandler);
app.use('/api/v1/todos', todosRouter);
app.use('/api/v1/search', searchRouter);
// app.use('/api/v1/error', (req, res, next) => {
//    next(new Error('Intensional error'));
// });

app.listen(port, () => {
   console.log('This is working!');
});

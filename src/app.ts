import express from 'express';
import todosRoute from './routes/todos';
import searchRoute from './routes/search';
import loggerMW from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';

const app = express();
const port = 3000;

app.use(express.json());
app.use(loggerMW);
app.use(errorHandler);
app.use('/api/v1/todos', todosRoute);
app.use('/api/v1/search', searchRoute);
// app.use('/api/v1/error', (req, res, next) => {
//    next(new Error('Intensional error'));
// });

app.listen(port, () => {
   console.log('This is working!');
});

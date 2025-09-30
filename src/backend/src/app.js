import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users.js';
import walkersRouter from './routes/walkers.js';
import walksRouter from './routes/walks.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/walkers', walkersRouter);
app.use('/walks', walksRouter);

app.get('/', (req, res) => res.json({ message: 'API DogWalk funcionando 🚀' }));

export default app;

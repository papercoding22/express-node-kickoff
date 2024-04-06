// Create simple express server
import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';

import { NotFoundError } from '@/errors';
import { errorHandler } from '@/middlewares';
import userRoutes from '@/features/users';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(compression());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/v1/users', userRoutes);

// Handle 404
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError());
});

app.use(errorHandler);

export default app;

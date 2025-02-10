import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import error from '../api/middlewares/error';
import { Application } from 'express';
import api from '../routes/api';

const app: Application = express();

// request logging. dev: console | production: file
app.use(morgan(process.env.NODE_ENV === 'production' ? 'production' : 'dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// gzip compression
app.use(compress());

// mount api v1 routes
app.use('/api', api());

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

export default app;

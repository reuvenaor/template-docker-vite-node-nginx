Promise = require('bluebird');
import dotenv from 'dotenv';
dotenv.config();
import app from './config/express';
import logger from './config/logger';

const port = process.env.PORT;

app.listen(port, () =>
  logger.info(`server started on port ${port} (${process.env.NODE_ENV})`),
);

/**
 * Exports express
 * @public
 */
export default app;
